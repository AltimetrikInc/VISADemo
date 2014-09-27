//
//  ShelfManager.h
//  Vision
//
//  Created by Ignacio Segovia on 3/11/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ATKControlPackage.h"
#import "ATKControlBundle.h"
#import "ATKWidget.h"

@interface ATKShelfManager : NSObject
{
    NSArray *_localEntitledVisionPackages;
    NSMutableArray *_localVisionPackages;
}

@property (nonatomic, strong) NSMutableArray        *packageHistory;
@property (nonatomic, strong) NSMutableDictionary   *loadComponents;

+ (id) sharedManager;

- (NSMutableArray *) recentlyViewedBundles;
- (void) addBundleToHistory:(ATKControlBundle *)bundle;
- (void) removeBundleFromHistory:(ATKControlBundle *)bundle;
- (void) removeAllBundlesFromHistory;

+ (id<ATKWidget>) presentComponentInView: (UIView*) view withDictionary: (NSDictionary*) componentDescriptor;
+ (id<ATKWidget>) loadComponentWithDictionary: (NSDictionary*) componentDescriptor;
+ (void) removeComponent: (NSString*) componentId;
@end
