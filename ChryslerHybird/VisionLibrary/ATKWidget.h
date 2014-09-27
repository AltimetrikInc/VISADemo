//
//  VisionWidget.h
//  Altimetrik Vision
//
//  Created by Pablo Igounet on 9/9/13.
//  Copyright (c) 2013 Altimetrik Corp. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol ATKWidget <NSObject>

-(id) initWithDictionary: (NSDictionary*) widgetConfiguration;
-(NSString*) getID;
-(NSString*) getName;
-(UIView*)   displayView;
-(NSArray*)  childComponents;
-(void) redrawView;

@optional
-(id<ATKWidget>) copy;
-(void) presentInView: (UIView*) view;
-(id) getValue;
-(void) setValue: (id) value;
-(void) clean;
-(void) loadData: (id) data;
-(void) showHide;
-(void) moreData: (id) data;

@end
