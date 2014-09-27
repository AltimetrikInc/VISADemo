//
//  VisionComponentViewControllerBase.h
//  Altimetrik Vision
//
//  Created by Pablo Igounet on 2/12/14.
//  Copyright (c) 2014 Altimetrik Corp. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ATKWidget.h"

//Supported action definition
static NSString *const ATKActionSelect              = @"ATKActionSelect";
static NSString *const ATKActionCancel              = @"ATKActionCancel";
static NSString *const ATKActionSubmit              = @"ATKActionSubmit";
static NSString *const ATKActionDropItem            = @"ATKActionDropItem";
static NSString *const ATKActionMoreData            = @"ATKActionMoreData";

static NSString *const ATKExecuteActionNotification = @"ATKExecuteActionNotification";


@interface ATKComponentViewControllerBase : UIViewController<ATKWidget>

@property (nonatomic, assign) CGFloat                   width;
@property (nonatomic, assign) CGFloat                   height;
@property (nonatomic, assign) CGFloat                   x;
@property (nonatomic, assign) CGFloat                   y;
@property (nonatomic, strong) NSString                  *componentId;
@property (nonatomic, strong) NSString                  *componentName;
@property (nonatomic, strong) NSString                  *notificationId;
@property (nonatomic, strong) NSString                  *bgColor;
@property (nonatomic, assign) CGFloat                   bgColorOpacity;
@property (nonatomic, strong) NSMutableArray            *components;
@property (nonatomic, strong) NSMutableArray            *actions;
@property (nonatomic, strong) NSMutableArray            *visionComponents;
@property (nonatomic, strong) NSDictionary              *dictionaryOfProperties;
@property (nonatomic, strong) NSDictionary              *data;
@property (nonatomic, strong) NSDictionary              *properties;
@property (nonatomic, strong) NSDictionary              *style;
@property (nonatomic, weak) id                          notifyObject;
@property (nonatomic, readonly) NSArray                 *requiredFields;
@property (nonatomic, assign) BOOL                      wasLoadedFromWeb;
@property (nonatomic, assign) BOOL                      hasDefaultFrame;
@property (nonatomic, strong) NSMutableDictionary       *portraitFrame;
@property (nonatomic, strong) NSMutableDictionary       *landscapeFrame;

- (BOOL)loadConfigurationData:(NSDictionary *) dictionary;
- (BOOL)validateConfiguration:(NSDictionary *) dictionary;
- (BOOL)validateConfiguration:(NSDictionary *) dictionary withRequirements:(NSArray *)requirements;
- (BOOL)validateConfigurationWithoutWarning:(NSDictionary *) dictionary withRequirements:(NSArray *)requirements;
- (void)loadComponents: (NSArray *)componentsInfo;
- (id<ATKWidget>) retrieveComponent: (NSDictionary *) componentInfo;
- (NSMutableArray *)retrieveComponents: (NSArray *)componentsInfo;

-(void)redrawView;

@end

@interface ATKComponentViewControllerBase (ATKNotificationEvent)

- (void)notify;
- (BOOL)notifyWithEvent:(NSString *) actionEvent andWithNotificationData:(NSDictionary *) notificationData;
- (BOOL)notifyWithEvent:(NSString *) actionEvent;

@end

