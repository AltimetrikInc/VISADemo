//
//  ATKWebView.h
//  Altimetrik Vision
//
//  Created by Pablo Igounet on 12/5/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//


/*****************************************************************************
 COMPONENT JSON EXAMPLE
{
    "id": "webView1",
    "name": "Web View Widget",
    "class": "ATKWebView",
    "notificationId":"",
    "style": {
        "x":0,
        "y":0,
        "width":1024,
        "height":768,
        "backgroundColor":""
    },
    "properties": {
        "scrollable": "YES"
    },
    "data": {
        "callbackFunction": "onComplete",
        "source":"/bundles/5 - HomeWidget/components/ATK_Demo.html",
        "type":"local"
    }
}
 

JSBridge Call Format:
 iosbridge://jsonmessage
 
 jsonMessage: {
    command: <command>,
    operation: <operation>,
    params: { <parameter objects>
    } ,
    onSuccess:<onSuccess call back> (optional),
    onFailure: <onFailure call back> (optional)
 }
*****************************************************************************/

#import "ATKComponentViewControllerBase.h"

@protocol ATKWebViewDelegate<NSObject>
@optional
/*
 {
    "isSuccess": "true"|"false" ,
    "data": [anyObject]
 }
 */
- (void) completeBridgeOperation: (NSDictionary*) completeDictionary;

@end

@interface ATKWebView : ATKComponentViewControllerBase <UIWebViewDelegate>{

}

@property (nonatomic, weak)    id<UIWebViewDelegate> webDelegate;
@property (nonatomic, weak)    id<ATKWebViewDelegate> bridgeDelegate;

-(void) doCallBack: (NSString*) callbackFunction fromComponent: (NSString*)senderId withData: (NSDictionary*)data;
-(void) executeJS: (NSString*) javascriptString;

-(UIWebView*) getCustomWebView;
-(void) setCustomWebView: (UIWebView*) webView;

-(void) handleFlushedOutRequest :(NSDictionary*)jsonMessage onWebView:(UIWebView*)webView;




@end


