//
//  VisionPackage.h
//  Vision
//
//  Created by Ignacio Segovia on 4/1/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ATKControlPackage : NSObject

#pragma mark - VisionPackage Parameters Properties

@property (copy, nonatomic) NSString *packageId;
@property (copy, nonatomic) NSString *name;
@property (copy, nonatomic) NSNumber *isWidget;
@property (copy, nonatomic) NSNumber *isFeatured;
@property (copy, nonatomic) NSString *encryptionKey;
@property (copy, nonatomic) NSNumber *isHome;
@property (copy, nonatomic) NSNumber *visionPackage;
@property (copy, nonatomic) NSDictionary *data;
@property (copy, nonatomic) NSString *document;
@property (copy, nonatomic) NSString *documentType;
@property (copy, nonatomic) NSString *title;
@property (copy, nonatomic) NSString *subtitle;
@property (copy, nonatomic) NSString *date;

@property (copy, nonatomic) NSArray *author;
@property (copy, nonatomic) NSArray *creator;
@property (copy, nonatomic) NSString *publisher;

@property (copy, nonatomic) NSString *url;
@property (copy, nonatomic) NSString *cover;

@property (copy, nonatomic) NSString *orientation;
@property (copy, nonatomic) NSNumber *zoomable;

@property (strong, nonatomic) NSMutableArray *permissions;
@property (strong, nonatomic) NSMutableArray *contents;

@property (copy, nonatomic) NSNumber *height;
@property (copy, nonatomic) NSNumber *width;

#pragma mark - VisionPackage Extensions Properties

@property (copy, nonatomic) NSString *Background;
@property (copy, nonatomic) NSString *featuredHeroImage;
@property (copy, nonatomic) NSString *BackgroundImagePortrait;
@property (copy, nonatomic) NSString *BackgroundImageLandscape;
@property (copy, nonatomic) NSString *PageNumbersColor;
@property (copy, nonatomic) NSNumber *PageNumbersAlpha;
@property (copy, nonatomic) NSString *PageScreenshots;

@property (copy, nonatomic) NSString *Rendering;
@property (copy, nonatomic) NSNumber *VerticalBounce;
@property (copy, nonatomic) NSNumber *VerticalPagination;
@property (copy, nonatomic) NSNumber *PageTurnTap;
@property (copy, nonatomic) NSNumber *PageTurnSwipe;
@property (copy, nonatomic) NSNumber *MediaAutoplay;

@property (copy, nonatomic) NSNumber *IndexWidth;
@property (copy, nonatomic) NSNumber *IndexHeight;
@property (copy, nonatomic) NSNumber *IndexBounce;
@property (copy, nonatomic) NSNumber *StartAtPage;

@property (copy, nonatomic) NSNumber *useVisionReader;

#pragma mark - VisionPackage Widget Configuration

@property (copy, nonatomic) NSArray    *components;

#pragma mark - Package Status Properties

@property (copy, nonatomic) NSString *path;
@property (copy, nonatomic) NSNumber *isBundled;
@property (copy, nonatomic) NSString *screenshotsPath;
@property (copy, nonatomic) NSNumber *screenshotsWritable;
@property (copy, nonatomic) NSNumber *currentPage;
@property (copy, nonatomic) NSNumber *lastScrollIndex;
@property (copy, nonatomic) NSDate *lastOpenedDate;

#pragma mark - Init

- (id)initWithPackagePath:(NSString *)packagePath bundled:(BOOL)bundled;
- (id)initWithPackageJSONPath:(NSString *)packageJSONPath;
- (id)initWithPackageData:(NSDictionary *)packageData;
- (BOOL)loadPackageData:(NSDictionary *)packageData;

#pragma mark - VisionPackage validation

- (BOOL)validatePackageJSON:(NSDictionary *)packageData withRequirements:(NSArray *)requirements;
- (BOOL)validateArray:(NSArray *)array forParam:(NSString *)param;
- (BOOL)validateString:(NSString *)string forParam:(NSString *)param;
- (BOOL)validateNumber:(NSNumber *)number forParam:(NSString *)param;
- (BOOL)matchParam:(NSString *)param againstParamsArray:(NSArray *)paramsArray;

#pragma mark - Package status management

- (BOOL)updatePackagePath:(NSString *)packagePath bundled:(BOOL)bundled;
- (void)openPackage;
- (void)closePackage;

@end
