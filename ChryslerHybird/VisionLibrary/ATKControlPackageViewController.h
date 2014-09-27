//
//  VisionPackageViewController.h
//  Altimetrik Vision
//
//  Created by Ignacio Segovia on 5/17/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//

#import <UIKit/UIKit.h>
#include "ATKControlPackage.h"

@interface ATKControlPackageViewController : UIViewController

@property (nonatomic, strong) ATKControlPackage *visionPackage;
@property (nonatomic, strong) NSArray *visionBundles;
@property (nonatomic, strong) NSArray *visionComponents;

- (id)initWithVisionPackage:(ATKControlPackage *)package;
- (id)initWithComponents:(NSArray *)visionComponents;
- (id)initWithVisionPackage:(ATKControlPackage *) package andWithBundles:(NSArray *)bundles;
- (void)pop;

@end
