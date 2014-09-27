//
//  VisionBundle.h
//  Vision
//
//  Created by Ignacio Segovia on 3/22/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//

#import "Constants.h"
#import <Foundation/Foundation.h>

#ifdef VISION_NEWSSTAND
#import <NewsstandKit/NewsstandKit.h>
#endif

#import "ATKControlPackage.h"

@interface ATKControlBundle : NSObject

@property (copy, nonatomic) NSString *bundleId;
@property (copy, nonatomic) NSString *title;
@property (copy, nonatomic) NSString *subtitle;
@property (copy, nonatomic) NSString *info;
@property (copy, nonatomic) NSString *date;
@property (copy, nonatomic) NSURL *url;
@property (copy, nonatomic) NSString *path;

@property (copy, nonatomic) NSString *coverPath;
@property (copy, nonatomic) NSURL *coverURL;

@property (strong, nonatomic) ATKControlPackage *Package;

-(id)initWithVisionPackage:(ATKControlPackage *)Package;
-(void)getCover:(void(^)(UIImage *img))completionBlock;
-(NSString *)getStatus;

#ifdef VISION_NEWSSTAND
-(id)initWithBundleData:(NSDictionary *)bundleData;
-(void)downloadWithDelegate:(id < NSURLConnectionDownloadDelegate >)delegate;
#endif

@end
