//
//  Altimetrik Vision.h
//  Altimetrik Vision
//
//  Created by Rodrigo Birriel on 7/25/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//

#import <Availability.h>

#ifndef __IPHONE_3_0
#warning "This project uses features only available in iOS SDK 3.0 and later."
#endif

#ifdef __OBJC__
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import "ATKAppDelegate.h"
#import "ATKWebView.h"
#import "ATKControlBundle.h"
#import "ATKControlPackage.h"
#import "ATKControlPackageStatus.h"
#import "ATKControlPackageViewController.h"
#import "Constants.h"
#import "ATKShelfManager.h"
#import "ATKConfigManager.h"

#define VISION_DELEGATE @"ATKAppDelegate"

// Device detection
#define IS_IPAD (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad)
#define IS_IPHONE5 ([[UIScreen mainScreen]bounds].size.height == 568)
#define IS_OS_5_OR_LATER    ([[[UIDevice currentDevice] systemVersion] floatValue] >= 5.0)
#define IS_OS_6_OR_LATER    ([[[UIDevice currentDevice] systemVersion] floatValue] >= 6.0)
#define IS_OS_7_OR_LATER    ([[[UIDevice currentDevice] systemVersion] floatValue] >= 7.0)

#endif
