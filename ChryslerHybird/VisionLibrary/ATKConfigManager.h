//
//  ConfigManager.h
//  Altimetrik Vision
//
//  Created by Ignacio Segovia on 3/7/14.
//  Copyright (c) 2014 Altimetrik Corp. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ATKConfigManager : NSObject

+ (id) sharedManager;
+ (void) initialize;

- (id) bundlesFolder;
- (NSString*) cachesFolder;
- (NSString *)contentFolderPath;
- (NSString *)pathForPackageInCachesFolder:(NSString *)path;
- (NSString *)pathInCacheFolder:(NSString *)path;
- (BOOL) configPathValidated;
- (void) loadLaunchData;

@property (nonatomic, strong) NSMutableDictionary *appConfig;

@end
