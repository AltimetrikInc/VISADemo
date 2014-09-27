
var widgetMap = {};
var autoLoadWidgets = [];

//Surce https://github.com/jfriend00/docReady
(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
 
    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }
 
    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }
 
    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
 
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
 })("docReady", window);

function _bridgeCall(jsonMessage) {
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "vfiosbridge:"+ encodeURIComponent(jsonMessage));
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

function _getClassText(className){
    var x, sheets,classes;
    for( sheets=document.styleSheets.length-1; sheets>=0; sheets-- ){
        classes = document.styleSheets[sheets].rules || document.styleSheets[sheets].cssRules;
        for(x=0;x<classes.length;x++) {
            if(classes[x].selectorText.toLowerCase()===className.toLowerCase()){
                classStyleTxt = (classes[x].cssText ? classes[x].cssText : classes[x].style.cssText).match(/\{\s*([^{}]+)\s*\}/)[1];
                return classStyleTxt;
            }
        }
    }
    return false;
};

function _getTopPos(el) {
    for (var topPos = 0;
         el != null;
         topPos += el.offsetTop, el = el.offsetParent);
    return topPos;
}

function _getLeftPos(el) {
    for (var leftPos = 0;
         el != null;
         leftPos += el.offsetLeft, el = el.offsetParent);
    return leftPos;
}

/**
 *  Get frame of DOM element.
 *  Returns an object with x,y,width,height as properties.
 */
function _getFrame(el) {
    var _x=0,_y=0,_width=0,_height=0;
    if(el != null || el != undefined){
        _width = el.offsetWidth;
        _height = el.offsetHeight;
        for (;el != null;el = el.offsetParent){
            _x += el.offsetLeft;
            _y += el.offsetTop;
        }
    }
    return {x:_x,y:_y,width:_width,height:_height};
}


/**
 *  Retrieve the frames from the auto loaded widgets.
 */
function retrieveFramesFromLoadedWidgets() {
    var frameArray = [];
    var currentElem;
    var frameIdObject;
    autoLoadWidgets.forEach(function(currentId) {
       currentElem = document.getElementById(currentId);
       frameIdObject = {id:currentId, frame: _getFrame(currentElem)};
       //If width or height is 0 then the new frame is invalid
       if(frameIdObject.frame.width == 0 || frameIdObject.frame.height == 0){
           alert('Invalid frame for component ' + currentId + ': ' + JSON.stringify(frameIdObject.frame)) ;
       }
       frameArray.push(frameIdObject);
    });
    return frameArray;
}
       
/**
 *  Load the widgets which are mapped with a elements in the DOM.
 */
function loadWidgets() {
    
    for(i in autoLoadWidgets){
        var id = autoLoadWidgets[i];
        loadWidgetById(id);
    }
}

function sendMessage(command, operation, params, onSuccess, onFailure) {
    var jsonMessage = {
        "command":command,
        "operation":operation,
        "params": params,
        "onSuccess":onSuccess,
        "onFailure":onFailure
    };

    _bridgeCall(JSON.stringify(jsonMessage));
}

function postNotification(id, data) {
    var params = {
        "notificationId": id,
        "data": data
    };
    
    sendMessage("notification", "postNotification", params, "", "");
}

/**
 *  Load a widget which it is not mapped with a element in the DOM
 *  @param id: component id
 */
function showWidget(id){
    
    var widgetJSON = widgetMap[id];
    
    var params = {
        "widgetName": "",
        "subWidgetName": "",
        "widgetJSON": widgetJSON,
        "cssText":""
    };
    
    sendMessage("widget", "createWidget", params, "", "");
}

function loadWidgetById(id){
    var widgetJSON = widgetMap[id];
    var widgetElement = document.getElementById(id);
    var widgetName = widgetElement.getAttribute('data-widget-name');
    if(widgetName == undefined) { widgetName= "";}
    var subWidgetName = widgetElement.getAttribute('data-sub-widget-name');
    if(subWidgetName == undefined) { subWidgetName= "";}

    var widgetJsonString = "";
    if(widgetElement){
        // overwrite these properties with the frame.
        var frame = _getFrame(widgetElement);
        widgetJSON.style.x = frame.x;
        widgetJSON.style.y = frame.y;
        widgetJSON.style.width = frame.width;
        widgetJSON.style.height = frame.height;
        //If width or height is 0 then the frame is invalid
        if(frame.width == 0 || frame.height == 0){
            alert('Invalid frame for component ' + id + ': ' + JSON.stringify(frame)) ;
        }
    }
    widgetJSON.loadedFromWeb = "YES";
    var cssText = "";//_getClassText("."+widgetElement.className);
    
    var params ={
        "widgetName": widgetName,
        "subWidgetName": subWidgetName,
        "widgetJSON": widgetJSON,
        "cssText":cssText
    };
    
    sendMessage("widget", "createWidget", params, "", "");
}

function removeComponent(id){
    var params ={
        "componentId": id
    };
    
    sendMessage("widget", "removeWidget", params, "", "");
}

function removeAllComponents(){
    for(i in autoLoadWidgets){
        var id = autoLoadWidgets[i];
        removeComponent(widgetMap[id].id);
    }
}

function excecuteAction(id, data, params, type) {
    var messageParams =  {
                "event": "select",
                "type" : type,
                "params": params,
                "data": data,
                "senderId": id
            };
    
    sendMessage("action", "excecuteAction", messageParams,"", "");
}

/**
 *  Generate new rotation action
 */
function rotationChangeAction() {
    var frameArray = retrieveFramesFromLoadedWidgets();
    if(frameArray.length > 0) {
        sendMessage("action", "rotate", frameArray,"", "");
    }
}

function orientationChange() {
    rotationChangeAction();
}

function doTransition(url, transitionId, duration, wait){
    var messageParams = {
        "url":url,
        "transitionId":transitionId,
        "duration":duration,
        "wait":wait,
        "componentsToRemove":autoLoadWidgets
    };
    sendMessage("action", "transition", messageParams,"", "");
}

window.addEventListener('orientationchange', orientationChange, false);

