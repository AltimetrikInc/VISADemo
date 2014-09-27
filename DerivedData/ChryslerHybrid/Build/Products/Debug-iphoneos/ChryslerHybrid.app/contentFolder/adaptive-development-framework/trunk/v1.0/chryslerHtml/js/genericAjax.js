var serverResponse;

var responseList = [];

function CallMethod(url, parameters, successCallback) {

    alert("CallMethod JS called with " + parameters);
    
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: parameters,
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    dataType: 'json',
                    success: successCallback,
                    error: function(XMLHttpRequest, textStatus,errorThrown) {
                       alert("Status: " + textStatus); alert("Error: " + errorThrown);
                }
            });
    }

function onSuccess(data,textStatus) {
    if(data == null) {
    	alert('no result');     
    } 
    else {
        
        //Have al the server response values in an Array, for testing purpose response value at index 0 is used. 
        
        serverResponse = data.HIERARCHYResponse[3];
        
        
//        for (var i=0; i<data.HIERARCHYResponse.length; i++) {
//            
//            responseList.push(  'STARTDATE : ' + data.HIERARCHYResponse[i].STARTDATE);
//            
//            responseList.push(  'ORDERTYPE : ' + data.HIERARCHYResponse[i].ORDERTYPE);
//           
//            responseList.push(  'ORDERNO : ' + data.HIERARCHYResponse[i].ORDERNO);
//            
//            responseList.push(  'EQUIPMENT : ' + data.HIERARCHYResponse[i].EQUIPMENT);
//            
//            responseList.push(  'EQUIPDESC : ' + data.HIERARCHYResponse[i].EQUIPDESC);
//            
//            //responseList.push(data.HIERARCHYResponse[i].STARTDATE);
//            //responseList.push(data.HIERARCHYResponse[i].ORDERTYPE);
//            //responseList.push(data.HIERARCHYResponse[i].ORDERNO);
//            //responseList.push(data.HIERARCHYResponse[i].EQUIPMENT);
//            //responseList.push(data.HIERARCHYResponse[i].EQUIPDESC);
//            
//        }
        
       // serverResponse = responseList;
        
        return;
    }
}
