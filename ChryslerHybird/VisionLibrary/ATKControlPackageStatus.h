//
//  VisionPackageStatus.h
//  Vision
//
//  Created by Ignacio Segovia on 4/2/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ATKControlPackageStatus : NSObject

@property (copy, nonatomic) NSNumber *page;
@property (copy, nonatomic) NSString *scrollIndex;
@property (copy, nonatomic) NSString *path;

- (id)initWithJSONPath:(NSString *)JSONPath;
- (void)save;
- (void)load;

@end
