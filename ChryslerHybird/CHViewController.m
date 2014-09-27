//
//  CHViewController.m
//  ChryslerHybird
//
//  Created by Shri Harsha on 8/25/14.
//  Copyright (c) 2014 Altimetrik India Pvt. Limited. All rights reserved.
//

#import "CHViewController.h"
#import "ATKVision.h"

@interface CHViewController ()

@end

@implementation CHViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    NSDictionary* mainViewDict = @{
                                   @"id": @"webView1",
                                   @"name": @"Web View Widget",
                                   @"class": @"ATKWebView",
                                   @"notificationId":@"",
                                   @"style":@{
                                           @"landscape": @{
                                                   @"x":@"0",
                                                   @"y":@"0",
                                                   @"width":@"100%",
                                                   @"height":@"100%"
                                                   },
                                           @"portrait": @{
                                                   @"x":@"0",
                                                   @"y":@"0",
                                                   @"width":@"100%",
                                                   @"height":@"100%"
                                                   },
                                           @"backgroundColor":@""
                                           },
                                   @"properties":@{
                                           @"scrollable": @"YES"
                                           },
                                   @"data":@{
                                           @"callbackFunction": @"onComplete",
                                           @"source":@"index.html",
                                           @"type":@"local"
                                           }
                                   };
    
    UIViewController * viewController = (UIViewController *)[ATKShelfManager presentComponentInView: self.view withDictionary:mainViewDict];
    
    [self addChildViewController:viewController];
}

- (void) viewDidAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController.navigationBar setTranslucent:NO];
    [self willRotateToInterfaceOrientation:self.interfaceOrientation duration:0];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Orientation support methods

- (NSUInteger)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskAll;
}

- (BOOL)shouldAutorotate
{
    return YES;
}

- (CGRect)getScreenFrameForCurrentOrientation {
    return [self getScreenFrameForOrientation:[UIApplication sharedApplication].statusBarOrientation];
}

- (CGRect)getScreenFrameForOrientation:(UIInterfaceOrientation)orientation {
    
    UIScreen *screen = [UIScreen mainScreen];
    CGRect fullScreenRect = screen.bounds;
    BOOL statusBarHidden = [UIApplication sharedApplication].statusBarHidden;
    
    //implicitly in Portrait orientation.
    if(orientation == UIInterfaceOrientationLandscapeRight || orientation == UIInterfaceOrientationLandscapeLeft){
        CGRect temp = CGRectZero;
        temp.size.width = fullScreenRect.size.height;
        temp.size.height = fullScreenRect.size.width;
        fullScreenRect = temp;
    }
    if(!statusBarHidden){
        CGFloat statusBarHeight = 20;
        fullScreenRect.size.height -= statusBarHeight;
    }
    return fullScreenRect;
}

@end
