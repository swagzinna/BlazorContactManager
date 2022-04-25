/*!@license
* Infragistics.Web.ClientUI Layout Manager 21.2.13
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*	jquery.js
*	jquery.ui.core.js
*	jquery.ui.widget.js
*	infragistics.util.js
*   infragistics.util.jquery.js
*/
"use strict";(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.util.jquery"],factory)}else{return factory(jQuery)}})(function($){$.widget("ui.igLayoutManager",{css:{item:"ig-layout-item",container:"ig-layout",flowItem:"ig-layout-flow-item",flow:"ig-layout-flow",vertical:"ig-layout-vertical",verticalItem:"ig-layout-vertical-item",border:"ig-layout-border",borderItem:"ig-layout-border-item",borderItemHidden:"ig-layout-border-item-hidden",borderHeader:"ig-layout-border-header",borderFooter:"ig-layout-border-footer",borderLeft:"ig-layout-border-left",borderCenter:"ig-layout-border-center",borderRight:"ig-layout-border-right",borderContainer:"ig-layout-border-container",gridItemAbs:"ig-layout-griditem-abs",gridItemRel:"ig-layout-griditem-rel"},options:{borderLayout:{leftWidth:"20%",rightWidth:"10%",showFooter:true,showHeader:true,showLeft:true,showRight:true},gridLayout:{animationDuration:500,cols:null,columnHeight:null,columnWidth:null,marginLeft:0,marginTop:0,overrideConfigOnSetOption:true,rearrangeItems:true,rows:null},height:null,itemCount:null,items:[{colIndex:0,colSpan:1,height:null,rowIndex:0,rowSpan:1,width:null}],layoutMode:"column",width:null},events:{internalResized:"internalResized",internalResizing:"internalResizing",itemRendered:"itemRendered",itemRendering:"itemRendering",rendered:"rendered"},_opt:null,_createWidget:function(options){this.options.items=[];this.options.gridLayout.useOffset=true;if(options&&options.items){options.items=$.extend(true,[],options.items)}$.Widget.prototype._createWidget.apply(this,arguments)},_create:function(){var self=this;this._opt={eventHandlers:{},gridLayout:null,borderLayout:null,scrollBarWidth:$.ig.util.getScrollWidth(),scrollBarHeight:$.ig.util.getScrollHeight(),resizeLayout:this.options.layoutMode==="grid"||this.options.layoutMode==="border"};this.element.addClass(this.css.container);if(this.options.width!==null){this.element.css("width",this.options.width)}if(this.options.height!==null){this.element.css("height",this.options.height)}if(this._opt.resizeLayout){this._opt.eventHandlers.windowResizeHandler=function(e){var noCancel=self._triggerInternalResizing(e);if(noCancel){self.reflow(false,null,e)}};$(window).on("resize",this._opt.eventHandlers.windowResizeHandler)}switch(this.options.layoutMode){case"grid":this._initGridLayout();break;case"border":this._initBorderLayout();break;case"flow":this._initFlowLayout();break;case"vertical":this._initVerticalLayout();break;default:break}},_setOption:function(option,value){if(this.options[option]===value){return}var opt=this.options,borderLayout=$.extend(true,{},this.options.borderLayout),initGridLayout,gridLayout;switch(option){case"gridLayout":if(opt.gridLayout.overrideConfigOnSetOption){gridLayout=$.extend(true,{overrideConfigOnSetOption:opt.gridLayout.overrideConfigOnSetOption,useOffset:opt.gridLayout.useOffset},{cols:null,rows:null,columnWidth:null,columnHeight:null,marginLeft:0,marginTop:0,rearrangeItems:true,animationDuration:500});initGridLayout=true}else{gridLayout=$.extend(true,{},this.options.gridLayout);initGridLayout=value.cols||value.rows||value.columnWidth||value.columnHeight||typeof value.marginLeft==="number"||typeof value.marginTop==="number"||value.useOffset}break;default:break}$.Widget.prototype._setOption.apply(this,arguments);switch(option){case"width":this.element.width(this.options.width);if(opt.layoutMode==="grid"){this.reflow(true)}break;case"height":this.element.height(this.options.height);if(opt.layoutMode==="grid"){this.reflow(true)}break;case"gridLayout":this.options.gridLayout=$.extend(true,{},gridLayout,this.options.gridLayout);if(initGridLayout){this._destroyGridLayout();this._initGlFromItemsConfig(false)}else{if(value.hasOwnProperty("rearrangeItems")){this._opt.gridLayout.rearrangeItems=value.rearrangeItems}if(value.hasOwnProperty("animationDuration")){this._opt.gridLayout.animationDuration=value.animationDuration}}break;case"borderLayout":this._destroyBorderLayout();this.options.borderLayout=$.extend(true,{},borderLayout,this.options.borderLayout);this._initBorderLayout();break;case"items":switch(opt.layoutMode){case"vertical":this._destroyVerticalLayout();this._initVerticalLayout();break;case"grid":this._initGlFromItemsConfig(false);break;case"flow":this._destroyFlowLayout();this._initFlowLayout();break}break;case"itemCount":switch(opt.layoutMode){case"vertical":this._destroyVerticalLayout();this._initVerticalLayout();break;case"flow":this._destroyFlowLayout();this._initFlowLayout();break}break;default:break}},reflow:function(forceReflow,animationDuration,event){var parsedDur;if(this.options.layoutMode==="grid"){parsedDur=parseInt(animationDuration,10);animationDuration=parsedDur>=0?parsedDur:this.options.gridLayout.animationDuration;this._reflowGlConfiguration(forceReflow,animationDuration,event)}if(this.options.layoutMode==="border"){this._setBorderLayoutPaddings()}},_initVerticalLayout:function(){var i,length=this.options.itemCount,items=this.options.items,item;this.element.addClass(this.css.vertical);if(length>0){for(i=0;i<length;i++){this._trigger(this.events.itemRendering,null,{index:i});item=$("<div></div>").appendTo(this.element).addClass(this.css.verticalItem);this.options.destroyItems=true;this._trigger(this.events.itemRendered,null,{item:item,index:i})}this._trigger(this.events.rendered,null,{owner:this})}else if(items&&items.length>0){this.element.empty();for(i=0;i<items.length;i++){this._trigger(this.events.itemRendering,null,{itemData:items[i],index:i});item=$("<div></div>").appendTo(this.element).addClass(this.css.verticalItem);if(items[i].width){item.css("width",items[i].width)}if(items[i].height){item.css("height",items[i].height)}this._trigger(this.events.itemRendered,null,{item:item,index:i})}this.options.destroyItems=true;this._trigger(this.events.rendered,null,{owner:this})}else{this.element.children().addClass(this.css.verticalItem)}},_analyzeGlWidth:function(){var gl=this._opt.gridLayout,columnWidth=gl.columnWidth,ml=gl.marginLeft,elWidth=this.element.width(),analyzedColumnWidth,i;if(columnWidth){if(typeof columnWidth==="string"){analyzedColumnWidth=this._analyzeGlColumnWidth(columnWidth,elWidth,ml);gl.columnWidth=analyzedColumnWidth.columnWidth;gl.columnWidthRatio=analyzedColumnWidth.columnWidthRatio;gl.columnWidthHasAsterisk=analyzedColumnWidth.columnWidthHasAsterisk}else if($.isArray(columnWidth)){gl.columnWidthRatio=[];gl.columnWidthHasAsterisk=[];for(i=0;i<columnWidth.length;i++){analyzedColumnWidth=this._analyzeGlColumnWidth(columnWidth[i],elWidth,ml);gl.columnWidth[i]=analyzedColumnWidth.columnWidth;gl.columnWidthRatio.push(analyzedColumnWidth.columnWidthRatio);gl.columnWidthHasAsterisk.push(analyzedColumnWidth.columnWidthHasAsterisk)}}}},_analyzeGlColumnWidth:function(columnWidth,elWidth,marginLeft){var units,analyzedColumnWidth=columnWidth,analyzedColumnWidthRatio=null,hasAsterisk=false;if(columnWidth.indexOf("%")!==-1){units=columnWidth.substring(0,columnWidth.length-1);units=parseInt(units,10)/100;if(!isNaN(units)&&units>0){analyzedColumnWidthRatio=units;analyzedColumnWidth=Math.floor(elWidth*units-marginLeft)}}else if(columnWidth==="*"){hasAsterisk=true}else{units=parseInt(columnWidth,10);if(!isNaN(units)&&units>0){analyzedColumnWidth=units}}return{columnWidth:analyzedColumnWidth,columnWidthRatio:analyzedColumnWidthRatio,columnWidthHasAsterisk:hasAsterisk}},_analyzeGlHeight:function(){var i,gl=this._opt.gridLayout,columnHeight=gl.columnHeight,mt=gl.marginTop,elHeight=this.element.height(),analyzedColumnHeight;if(columnHeight){if(typeof columnHeight==="string"){analyzedColumnHeight=this._analyzeGlColumnHeight(columnHeight,elHeight,mt);gl.columnHeight=analyzedColumnHeight.columnHeight;gl.columnHeightRatio=analyzedColumnHeight.columnHeightRatio;gl.columnHeightHasAsterisk=analyzedColumnHeight.columnHeightHasAsterisk}else if($.isArray(columnHeight)){gl.columnHeightRatio=[];gl.columnHeightHasAsterisk=[];for(i=0;i<columnHeight.length;i++){analyzedColumnHeight=this._analyzeGlColumnHeight(columnHeight[i],elHeight,mt);gl.columnHeight[i]=analyzedColumnHeight.columnHeight;gl.columnHeightRatio.push(analyzedColumnHeight.columnHeightRatio);gl.columnHeightHasAsterisk.push(analyzedColumnHeight.columnHeightHasAsterisk)}}}},_analyzeGlColumnHeight:function(columnHeight,elHeight,marginTop){var units,analyzedColumnHeight=columnHeight,analyzedColumnHeightRatio=null,hasAsterisk=false;if(columnHeight.indexOf("%")!==-1){units=columnHeight.substring(0,columnHeight.length-1);units=parseInt(units,10)/100;if(!isNaN(units)&&units>0){analyzedColumnHeightRatio=units;analyzedColumnHeight=Math.floor(elHeight*units-marginTop)}}else if(columnHeight==="*"){hasAsterisk=true}else{units=parseInt(columnHeight,10);if(!isNaN(units)&&units>0){analyzedColumnHeight=units}}return{columnHeight:analyzedColumnHeight,columnHeightRatio:analyzedColumnHeightRatio,columnHeightHasAsterisk:hasAsterisk}},_analyzeGlItems:function(){var gl=this._opt.gridLayout,items=this.options.items,cols=0,rows=0,item,itemCols,itemRows,i;for(i=0;items.length>i;i++){item=items[i];itemCols=item.colIndex+item.colSpan;itemRows=item.rowIndex+item.rowSpan;if(itemCols>cols){cols=itemCols}if(itemRows>rows){rows=itemRows}}if(cols>0){gl.cols=cols}if(rows>0){gl.rows=rows}},_analyzeGlColsRows:function(){var gl=this._opt.gridLayout,elWidth=this.element.width(),elHeight=this.element.height(),itemsLength=this.options.items.length,isColumnWidthNumber=gl.columnWidth&&typeof gl.columnWidth==="number"&&gl.columnWidth>0,isColumnWidthArray=gl.columnWidth&&$.isArray(gl.columnWidth),isColumnHeightNumber=gl.columnHeight&&typeof gl.columnHeight==="number"&&gl.columnHeight>0,isColumnHeightArray=gl.columnHeight&&$.isArray(gl.columnHeight),colsOption=false,rowsOption=false;if(isColumnWidthArray){gl.cols=gl.columnWidth.length}if(isColumnHeightArray){gl.rows=gl.columnHeight.length}colsOption=typeof gl.cols==="number"&&gl.cols>0;rowsOption=typeof gl.rows==="number"&&gl.rows>0;if(!colsOption){if(rowsOption){gl.cols=Math.ceil(itemsLength/gl.rows)}else{if(isColumnWidthNumber){gl.cols=Math.floor(elWidth/(gl.columnWidth+gl.marginLeft));gl.rows=Math.ceil(itemsLength/gl.cols)}else if(isColumnHeightNumber){gl.rows=Math.floor(elHeight/(gl.columnHeight+gl.marginTop));gl.cols=Math.ceil(itemsLength/gl.rows)}else{gl.cols=Math.ceil(Math.sqrt(itemsLength));gl.rows=Math.ceil(itemsLength/gl.cols)}}}else if(!rowsOption){gl.rows=Math.ceil(itemsLength/gl.cols)}return{hasColsInitially:colsOption,hasRowsInitially:rowsOption}},_analyzeGlNotSetWidthHeight:function(){var gl=this._opt.gridLayout,elWidth=this.element.width(),elHeight=this.element.height(),hasColumnWidth=typeof gl.columnWidth==="number"&&gl.columnWidth>0||gl.columnWidth==="*"||gl.columnWidth&&$.isArray(gl.columnWidth)&&this._isColumnsWidthOrHeightValid(gl.columnWidth),hasColumnHeight=typeof gl.columnHeight==="number"&&gl.columnHeight>0||gl.columnHeight==="*"||gl.columnHeight&&$.isArray(gl.columnHeight)&&this._isColumnsWidthOrHeightValid(gl.columnHeight);if(!hasColumnWidth){gl.columnWidth=Math.floor(elWidth*(1/gl.cols)-gl.marginLeft);gl.columnWidthRatio=1/gl.cols}if(!hasColumnHeight){gl.columnHeight=Math.floor(elHeight*(1/gl.rows)-gl.marginTop);gl.columnHeightRatio=1/gl.rows}},_isColumnsWidthOrHeightValid:function(arr){var i,isValid=arr&&arr.length>0;for(i=0;i<arr.length;i++){isValid=typeof arr[i]==="number"&&arr[i]>0||arr[i]==="*";if(!isValid){break}}return isValid},_analyzeGlWidthAsterisks:function(){var gl=this._opt.gridLayout,elWidth=this._getContainerWidthNoScroll(),ml=gl.marginLeft,asterisksCount=0,i=0,occupiedWidth=0,widthForAsterisks,widthPerAsterisk,updated=false;if($.isArray(gl.columnWidthHasAsterisk)){for(i=0;i<gl.columnWidth.length;i++){if(gl.columnWidthHasAsterisk[i]){asterisksCount++}else{occupiedWidth+=gl.columnWidth[i]+ml}}if(asterisksCount>0){widthForAsterisks=elWidth-occupiedWidth;widthPerAsterisk=Math.floor(widthForAsterisks/asterisksCount)-ml;for(i=0;i<gl.columnWidth.length;i++){if(gl.columnWidthHasAsterisk[i]){gl.columnWidth[i]=widthPerAsterisk;updated=true}}}}else if(gl.columnHeightHasAsterisk){gl.columnWidth=Math.floor(elWidth/gl.cols)-ml;updated=true}return updated},_analyzeGlHeightAsterisks:function(){var gl=this._opt.gridLayout,elHeight=this._getContainerHeightNoScroll(),mt=gl.marginTop,asterisksCount=0,i=0,occupiedHeight=0,heightForAsterisks,heightPerAsterisk,updated=false;if($.isArray(gl.columnHeightHasAsterisk)){for(i=0;i<gl.columnHeight.length;i++){if(gl.columnHeightHasAsterisk[i]){asterisksCount++}else{occupiedHeight+=gl.columnHeight[i]+mt}}if(asterisksCount>0){heightForAsterisks=elHeight-occupiedHeight;heightPerAsterisk=Math.floor(heightForAsterisks/asterisksCount)-mt;for(i=0;i<gl.columnHeight.length;i++){if(gl.columnHeightHasAsterisk[i]){gl.columnHeight[i]=heightPerAsterisk;updated=true}}}}else if(gl.columnHeightHasAsterisk){gl.columnHeight=Math.floor(elHeight/gl.rows)-mt;updated=true}return updated},_analyzeGlAutoAdjust:function(hasColsOptionInitially,hasRowsOptionInitially){var gl=this._opt.gridLayout,hasColumnWidth=typeof gl.columnWidth==="number"&&gl.columnWidth>0||$.isArray(gl.columnWidth),hasColumnHeight=typeof gl.columnHeight==="number"&&gl.columnHeight>0||$.isArray(gl.columnHeight);if(!hasColumnHeight&&!hasColsOptionInitially&&!this._hasGlColumnWidthRatio()){gl.autoAdjustColumnHeight=true}if(!hasColumnWidth&&!hasRowsOptionInitially&&!this._hasGlColumnHeightRatio()){gl.autoAdjustColumnWidth=true}},_hasGlColumnWidthRatio:function(){var gl=this._opt.gridLayout,i;if($.isArray(gl.columnWidthRatio)){for(i=0;i<gl.columnWidthRatio.length;i++){if(gl.columnWidthRatio[i]){return true}}}else if(gl.columnWidthRatio){return true}return false},_hasGlColumnHeightRatio:function(){var gl=this._opt.gridLayout,i;if($.isArray(gl.columnHeightRatio)){for(i=0;i<gl.columnHeightRatio.length;i++){if(gl.columnHeightRatio[i]){return true}}}else if(gl.columnHeightRatio){return true}return false},_hasGlColumnWidthAsterisks:function(){var gl=this._opt.gridLayout,i;if($.isArray(gl.columnWidthHasAsterisk)){for(i=0;i<gl.columnWidthHasAsterisk.length;i++){if(gl.columnWidthHasAsterisk[i]){return true}}}else if(gl.columnWidthHasAsterisk){return true}return false},_hasGlColumnHeightAsterisks:function(){var gl=this._opt.gridLayout,i;if($.isArray(gl.columnHeightHasAsterisk)){for(i=0;i<gl.columnHeightHasAsterisk.length;i++){if(gl.columnHeightHasAsterisk[i]){return true}}}else if(gl.columnHeightHasAsterisk){return true}return false},_analyzeGlConfiguration:function(){var hasColsRowsOptionsInitially=null;this._analyzeGlWidth();this._analyzeGlHeight();this._analyzeGlItems();hasColsRowsOptionsInitially=this._analyzeGlColsRows();this._analyzeGlNotSetWidthHeight();this._analyzeGlWidthAsterisks();this._analyzeGlHeightAsterisks();this._analyzeGlAutoAdjust(hasColsRowsOptionsInitially.hasColsInitially,hasColsRowsOptionsInitially.hasRowsInitially)},_createGlConfig:function(){var gl,e=this.element;this._opt.gridLayout=gl=$.extend(true,{},this.options.gridLayout,{elements:$(),minColCount:1,columnWidthRatio:null,columnWidthHasAsterisk:null,columnHeightRatio:null,columnHeightHasAsterisk:null,containerWidthNoScroll:e.width(),containerHeightNoScroll:e.height(),resizeItems:false,animating:false,autoAdjustColumnWidth:false,autoAdjustColumnHeight:false,initialCols:0,initialRows:0,initialColWidth:0,initialColWidthRatio:null,initialColHeight:0,initialColHeightRatio:null,initialItems:[],initialReflow:true,useOffset:(e.css("position")==="static"||e.css("position")==="fixed")&&this.options.gridLayout.useOffset?true:false,destroyItemsFromIndex:e.children().length});if(typeof gl.cols==="string"){gl.cols=parseInt(gl.cols,10)}if(typeof gl.rows==="string"){gl.rows=parseInt(gl.rows,10)}this._analyzeGlConfiguration();gl.resizeItems=!!(this._hasGlColumnWidthRatio()||this._hasGlColumnHeightRatio())},_glSortItemsByPositionOrder:function(){var items=this.options.items,compareFunc=function(item1,item2){return item1.rowIndex!==item2.rowIndex?item1.rowIndex-item2.rowIndex:item1.colIndex-item2.colIndex};items=items.sort(compareFunc)},_renderGlItemsFromItemsConfig:function(initialRendering){var i,item,itemData,width,height,top,left,row,col,colSpan,rowSpan,$currChild,renderNewItem,e=this.element,items=this.options.items,gl=this._opt.gridLayout,ml=gl.marginLeft,mt=gl.marginTop,colWidth=$.isArray(gl.columnWidth)?null:gl.columnWidth,colsWidthMatrix=$.isArray(gl.columnWidth)?this._calculateColumnsWidthOrHeightMatrix(gl.columnWidth):null,colHeight=$.isArray(gl.columnHeight)?null:gl.columnHeight,colsHeightMatrix=$.isArray(gl.columnHeight)?this._calculateColumnsWidthOrHeightMatrix(gl.columnHeight):null,offset=e.igOffset(),$children=e.children();for(i=0;i<items.length;i++){itemData=items[i];$currChild=$children.eq(i);renderNewItem=$currChild.length===0;colSpan=itemData.colSpan=typeof itemData.colSpan==="number"?itemData.colSpan:1;rowSpan=itemData.rowSpan=typeof itemData.rowSpan==="number"?itemData.rowSpan:1;row=itemData.rowIndex=typeof itemData.rowIndex==="number"?itemData.rowIndex:Math.floor(i/gl.cols);col=itemData.colIndex=typeof itemData.colIndex==="number"?itemData.colIndex:i%gl.cols;if(renderNewItem||initialRendering){this._trigger(this.events.itemRendering,null,{itemData:itemData,index:i})}if(renderNewItem){item=$("<div>").appendTo(this.element)}else{item=$currChild}itemData.item=item;gl.elements=gl.elements.add(item);if(colSpan>gl.minColCount){gl.minColCount=colSpan}width=this._calculateGlItemWidth(col,colSpan,colWidth,colsWidthMatrix,ml);height=this._calculateGlItemHeight(row,rowSpan,colHeight,colsHeightMatrix,mt);left=this._calculateGlItemLeft(col,colWidth,colsWidthMatrix,ml);top=this._calculateGlItemTop(row,colHeight,colsHeightMatrix,mt);if(gl.useOffset){top+=offset.top;left+=offset.left}item.addClass(this.css.item).addClass(this.css.gridItemAbs).attr("data-index",i).css({top:top,left:left,width:width,height:height});if(renderNewItem||initialRendering){this._trigger(this.events.itemRendered,null,{item:item,itemData:itemData,index:i})}}this._glSortItemsByPositionOrder();$children.slice(items.length).remove();if(initialRendering){this._trigger(this.events.rendered,null,{items:this.options.items})}},_calculateColumnsWidthOrHeightMatrix:function(sizes){var sizesMatrix=[],i=0,j=0,size=sizes.length;sizesMatrix.push(sizes.slice());for(i=0;i<size-1;i++){sizesMatrix.push(new Array(size))}for(j=1;j<size;j++){for(i=1;i<size;i++){if(sizesMatrix[i-1][j-1]){sizesMatrix[i][j]=sizesMatrix[0][j]+sizesMatrix[i-1][j-1]}}}return sizesMatrix},_calculateGlItemWidth:function(col,colSpan,colWidth,colsWidthMatrix,marginLeft){var baseWidth,width;if(colWidth){baseWidth=colSpan*colWidth}else{baseWidth=colsWidthMatrix[colSpan-1][col+colSpan-1]}width=baseWidth+(colSpan-1)*marginLeft;return width},_calculateGlItemHeight:function(row,rowSpan,colHeight,colsHeightMatrix,marginTop){var baseHeight,height;if(colHeight){baseHeight=rowSpan*colHeight}else{baseHeight=colsHeightMatrix[rowSpan-1][row+rowSpan-1]}height=baseHeight+(rowSpan-1)*marginTop;return height},_calculateGlItemLeft:function(col,colWidth,colsWidthMatrix,marginLeft){var baseLeft=0,left;if(col>0){if(colWidth){baseLeft=col*colWidth}else{baseLeft=colsWidthMatrix[col-1][col-1]}}left=baseLeft+(col+1)*marginLeft;return left},_calculateGlItemTop:function(row,colHeight,colsHeightMatrix,marginTop){var baseTop=0,top;if(row>0){if(colHeight){baseTop=row*colHeight}else{baseTop=colsHeightMatrix[row-1][row-1]}}top=baseTop+(row+1)*marginTop;return top},_initGlFromItemsConfig:function(initialRendering){this._createGlConfig();this._renderGlItemsFromItemsConfig(initialRendering);this.reflow(false,0)},_renderGlItemsFromColsRows:function(initialRendering){var i,j,width,height,top,left,item,e=this.element,gl=this._opt.gridLayout,ml=gl.marginLeft,mt=gl.marginTop,rows=gl.rows,cols=gl.cols,colWidth=$.isArray(gl.columnWidth)?null:gl.columnWidth,colsWidthMatrix=$.isArray(gl.columnWidth)?this._calculateColumnsWidthOrHeightMatrix(gl.columnWidth):null,colHeight=$.isArray(gl.columnHeight)?null:gl.columnHeight,colsHeightMatrix=$.isArray(gl.columnHeight)?this._calculateColumnsWidthOrHeightMatrix(gl.columnHeight):null,offset=e.igOffset();for(i=0;i<rows;i++){for(j=0;j<cols;j++){width=this._calculateGlItemWidth(j,1,colWidth,colsWidthMatrix,ml);height=this._calculateGlItemHeight(i,1,colHeight,colsHeightMatrix,mt);top=this._calculateGlItemTop(i,colHeight,colsHeightMatrix,mt);left=this._calculateGlItemLeft(j,colWidth,colsWidthMatrix,ml);if(gl.useOffset){top+=offset.top;left+=offset.left}item=$("<div>").appendTo(this.element).addClass(this.css.item).addClass(this.css.gridItemAbs).attr("data-index",i*gl.cols+j).css({top:top,left:left,width:width,height:height});this._trigger(this.events.itemRendered,null,{item:item})}}if(initialRendering){this._trigger(this.events.rendered,null,{items:this.options.items})}},_initGlFromColsRows:function(initialRendering){this._createGlConfig();this._renderGlItemsFromColsRows(initialRendering)},_initGridLayout:function(){var i,items=this.options.items,e=this.element,$children=e.children(),lenDiff=$children.length-this.options.items.length;if(lenDiff>0){for(i=0;i<lenDiff;i++){this.options.items.push({})}}if(items&&items.length>0){this._initGlFromItemsConfig(true)}else if($children.length===0){this._initGlFromColsRows(true)}},_setGlInitialConfig:function(){var gl=this._opt.gridLayout;gl.initialCols=gl.cols;gl.initialRows=gl.rows;gl.initialColWidth=gl.columnWidth;gl.initialColWidthRatio=gl.columnWidthRatio;gl.initialColHeight=gl.columnHeight;gl.initialColHeightRatio=gl.columnHeightRatio;gl.initialItems=$.extend(true,[],this.options.items)},_getContainerWidthNoScroll:function(){var widthNoScroll;if($.ig.util.isWebKit&&window.getComputedStyle){widthNoScroll=parseInt(window.getComputedStyle(this.element[0]).width,10)}else{widthNoScroll=this.element.width()-($.ig.util.hasVerticalScroll(this.element)?this._opt.scrollBarWidth:0)}return widthNoScroll},_getContainerHeightNoScroll:function(){var heightNoScroll;if($.ig.util.isWebKit&&window.getComputedStyle){heightNoScroll=parseInt(window.getComputedStyle(this.element[0]).height,10)}else{heightNoScroll=this.element.height()-($.ig.util.hasHorizontalScroll(this.element)?this._opt.scrollBarHeight:0)}return heightNoScroll},_glReflowNeeded:function(){var gl=this._opt.gridLayout,newContainerWidthNoScroll=this._getContainerWidthNoScroll(),newContainerHeightNoScroll=this._getContainerHeightNoScroll(),reflowNeeded=false,colsCouldBeAdjusted=false;colsCouldBeAdjusted=gl.columnWidth&&!$.isArray(gl.columnWidth)&&gl.cols!==Math.floor(newContainerWidthNoScroll/(gl.columnWidth+gl.marginLeft));reflowNeeded=gl.containerWidthNoScroll!==newContainerWidthNoScroll&&(this._hasGlColumnWidthRatio()||this._hasGlColumnWidthAsterisks()||colsCouldBeAdjusted);reflowNeeded=reflowNeeded||gl.containerHeightNoScroll!==newContainerHeightNoScroll&&(this._hasGlColumnHeightRatio()||this._hasGlColumnHeightAsterisks());return reflowNeeded},_reflowGlConfiguration:function(forceReflow,animationDuration,event){var self=this,e=this.element,gl=this._opt.gridLayout,ml=gl.marginLeft,mt=gl.marginTop,items=this.options.items,newContainerWidthNoScroll=this._getContainerWidthNoScroll(),newContainerHeightNoScroll=this._getContainerHeightNoScroll(),leftOffset=gl.useOffset?e.igOffset().left:0,topOffset=gl.useOffset?e.igOffset().top:0,colWidth,colHeight,colsWidthMatrix,colsHeightMatrix,col,row,colSpan,rowSpan,newColCount,newDim,helperArray,itemData,colWidthChanged,colHeightChanged,positionsChanged,foundMatch,currentRow,item,i,j,k,r,n,rearrangeCallback=function(){if(!gl.elements.is(":animated")){gl.animating=false;if(self._glReflowNeeded()){self.reflow(false,animationDuration,event)}else{self._triggerInternalResized(event)}}};if(items){if(gl.containerWidthNoScroll!==newContainerWidthNoScroll){colWidthChanged=this._updateGlColumnWidthByRatio(newContainerWidthNoScroll)}else{colWidthChanged=false}if(gl.containerHeightNoScroll!==newContainerHeightNoScroll){colHeightChanged=this._updateGlColumnHeightByRatio(newContainerHeightNoScroll)}else{colHeightChanged=false}if(gl.autoAdjustColumnWidth&&(gl.containerHeightNoScroll!==newContainerHeightNoScroll&&gl.rearrangeItems||forceReflow)){gl.rows=Math.max(Math.floor(newContainerHeightNoScroll/(gl.columnHeight+mt)),1);gl.columnWidthRatio=1/Math.ceil(items.length/gl.rows);gl.columnWidth=Math.floor(newContainerWidthNoScroll*gl.columnWidthRatio-ml);colWidthChanged=true}gl.containerWidthNoScroll=newContainerWidthNoScroll;gl.containerHeightNoScroll=newContainerHeightNoScroll;if(gl.rearrangeItems||forceReflow){if(gl.rearrangeItems){if(gl.columnWidthRatio&&!$.isArray(gl.columnWidthRatio)){newColCount=Math.floor(1/gl.columnWidthRatio)}else if(gl.columnWidth&&!$.isArray(gl.columnWidth)){newColCount=Math.floor(newContainerWidthNoScroll/(gl.columnWidth+ml))}else{newColCount=gl.cols}if(newColCount!==gl.cols&&$.isArray(gl.columnHeight)){if(Math.ceil(items.length/newColCount)!==gl.columnHeight.length){newColCount=gl.cols}else{colWidthChanged=colHeightChanged=true}}}else{if(gl.autoAdjustColumnWidth){newColCount=Math.ceil(items.length/gl.rows)}else if(gl.autoAdjustColumnHeight){newColCount=Math.floor(newContainerWidthNoScroll/(gl.columnWidth+ml))}else{newColCount=gl.cols}}if(gl.minColCount>newColCount){newColCount=gl.minColCount}if(newColCount!==gl.cols||forceReflow){if(newColCount===gl.initialCols){items=this.options.items=$.extend(true,[],gl.initialItems);gl.rows=gl.initialRows;gl.cols=gl.initialCols}else{gl.cols=newColCount;helperArray=[[]];helperArray[0].length=gl.cols||0;for(i=0;i<items.length;i++){itemData=items[i];colSpan=itemData.colSpan;rowSpan=itemData.rowSpan;foundMatch=false;for(j=0;j<helperArray.length&&!foundMatch;j++){for(k=0;k<helperArray[j].length&&!foundMatch;k++){if(!helperArray[j][k]){foundMatch=true;for(r=0;foundMatch&&r<rowSpan*colSpan;r++){if(colSpan>helperArray[j].length-k){foundMatch=false}else{currentRow=j+Math.floor(r/colSpan);if(!helperArray[currentRow]){helperArray[currentRow]=[];helperArray[currentRow].length=gl.cols}if(helperArray[currentRow][k+r%colSpan]===1){foundMatch=false}}}}if(foundMatch){itemData.rowIndex=j;itemData.colIndex=k;for(n=0;n<rowSpan*colSpan;n++){helperArray[itemData.rowIndex+Math.floor(n/colSpan)][itemData.colIndex+n%colSpan]=1}}else if(j===helperArray.length-1&&k===helperArray[j].length-1){helperArray[j+1]=[];helperArray[j+1].length=gl.cols}}}}if(gl.autoAdjustColumnHeight&&gl.rows!==helperArray.length){gl.columnHeightRatio=1/helperArray.length;gl.columnHeight=Math.floor(newContainerHeightNoScroll*gl.columnHeightRatio-mt);colHeightChanged=true}gl.rows=helperArray.length}positionsChanged=true}}if(colWidthChanged||colHeightChanged||positionsChanged||forceReflow){colWidth=$.isArray(gl.columnWidth)?null:gl.columnWidth;colsWidthMatrix=$.isArray(gl.columnWidth)?this._calculateColumnsWidthOrHeightMatrix(gl.columnWidth):null;colHeight=$.isArray(gl.columnHeight)?null:gl.columnHeight;colsHeightMatrix=$.isArray(gl.columnHeight)?this._calculateColumnsWidthOrHeightMatrix(gl.columnHeight):null;gl.animating=positionsChanged&&animationDuration>0||gl.animating;for(i=0;i<items.length;i++){itemData=items[i];item=itemData.item;row=itemData.rowIndex;col=itemData.colIndex;colSpan=itemData.colSpan;rowSpan=itemData.rowSpan;newDim={};if(positionsChanged||gl.animating){newDim.left=this._calculateGlItemLeft(col,colWidth,colsWidthMatrix,ml)+leftOffset;newDim.top=this._calculateGlItemTop(row,colHeight,colsHeightMatrix,mt)+topOffset;if(colWidthChanged||forceReflow){newDim.width=this._calculateGlItemWidth(col,colSpan,colWidth,colsWidthMatrix,ml)}if(colHeightChanged||forceReflow){newDim.height=this._calculateGlItemHeight(row,rowSpan,colHeight,colsHeightMatrix,mt)}if(animationDuration>0){item.animate(newDim,{duration:animationDuration,queue:false,complete:rearrangeCallback})}else{item.css(newDim)}}else{if(colWidthChanged||forceReflow){newDim.left=this._calculateGlItemLeft(col,colWidth,colsWidthMatrix,ml)+leftOffset;newDim.width=this._calculateGlItemWidth(col,colSpan,colWidth,colsWidthMatrix,ml)}if(colHeightChanged||forceReflow){newDim.top=this._calculateGlItemTop(row,colHeight,colsHeightMatrix,mt)+topOffset;newDim.height=this._calculateGlItemHeight(row,rowSpan,colHeight,colsHeightMatrix,mt)}item.css(newDim)}}}if(!gl.animating){if(this._glReflowNeeded()){this.reflow(false,animationDuration,event)}else{if(gl.initialReflow){this._setGlInitialConfig();gl.initialReflow=false}this._triggerInternalResized(event)}}}},_updateGlColumnWidthByRatio:function(newContainerWidthNoScroll){var gl=this._opt.gridLayout,ml=gl.marginLeft,columnWidthUpdated=false,i;if($.isArray(gl.columnWidthRatio)){for(i=0;i<gl.columnWidthRatio.length;i++){if(gl.columnWidthRatio[i]){gl.columnWidth[i]=Math.floor(newContainerWidthNoScroll*gl.columnWidthRatio[i]-ml);columnWidthUpdated=true}}}else if(gl.columnWidthRatio){gl.columnWidth=Math.floor(newContainerWidthNoScroll*gl.columnWidthRatio-ml);columnWidthUpdated=true}columnWidthUpdated=this._analyzeGlWidthAsterisks()||columnWidthUpdated;return columnWidthUpdated},_updateGlColumnHeightByRatio:function(newContainerHeightNoScroll){var gl=this._opt.gridLayout,mt=gl.marginTop,columnHeightUpdated=false,i;if($.isArray(gl.columnHeightRatio)){for(i=0;i<gl.columnHeightRatio.length;i++){if(gl.columnHeightRatio[i]){gl.columnHeight[i]=Math.floor(newContainerHeightNoScroll*gl.columnHeightRatio[i]-mt);columnHeightUpdated=true}}}else if(gl.columnHeightRatio){gl.columnHeight=Math.floor(newContainerHeightNoScroll*gl.columnHeightRatio-mt);columnHeightUpdated=true}columnHeightUpdated=this._analyzeGlHeightAsterisks()||columnHeightUpdated;return columnHeightUpdated},_initBorderLayout:function(){var left,right,center,header,footer,rwidth,lwidth,container,sections,maxHeight,currHeight,i,bl=this.options.borderLayout;this.element.addClass(this.css.border);left=this.element.find(".left");header=this.element.find(".header");right=this.element.find(".right");center=this.element.find(".center");footer=this.element.find(".footer");if(left.length===0){this._trigger(this.events.itemRendering,null,{region:"left"});left=$("<div></div>").appendTo(this.element);this._removeLeft=true;this._trigger(this.events.itemRendered,null,{region:"left",element:left})}if(bl.showLeft){left.removeClass(this.css.borderItemHidden)}else{left.addClass(this.css.borderItemHidden)}left.addClass(this.css.borderItem).addClass(this.css.borderLeft);if(right.length===0){this._trigger(this.events.itemRendering,null,{region:"right"});right=$("<div></div>").appendTo(this.element);this._removeRight=true;this._trigger(this.events.itemRendered,null,{region:"right",element:right})}if(bl.showRight){right.removeClass(this.css.borderItemHidden)}else{right.addClass(this.css.borderItemHidden)}right.addClass(this.css.borderItem).addClass(this.css.borderRight);if(center.length===0){this._trigger(this.events.itemRendering,null,{region:"center"});center=$("<div></div>").appendTo(this.element);this._removeCenter=true;this._trigger(this.events.itemRendered,null,{region:"center",element:center})}center.addClass(this.css.borderItem).addClass(this.css.borderCenter);if(footer.length===0){this._trigger(this.events.itemRendering,null,{region:"footer"});footer=$("<div></div>").appendTo(this.element);this._removeFooter=true;this._trigger(this.events.itemRendered,null,{region:"footer",element:footer})}if(bl.showFooter){footer.removeClass(this.css.borderItemHidden)}else{footer.addClass(this.css.borderItemHidden)}footer.addClass(this.css.borderItem).addClass(this.css.borderFooter);if(header.length===0){this._trigger(this.events.itemRendering,null,{region:"header"});header=$("<div></div>").appendTo(this.element);this._removeHeader=true;this._trigger(this.events.itemRendered,null,{region:"header",element:header})}if(bl.showHeader){header.removeClass(this.css.borderItemHidden)}else{header.addClass(this.css.borderItemHidden)}header.addClass(this.css.borderItem).addClass(this.css.borderHeader);container=$("<div></div>").appendTo(this.element).addClass(this.css.borderContainer).append(left).append(right).append(center);
this.element.append(footer);if(bl.leftWidth!==null&&bl.showLeft){left.css("width",bl.leftWidth)}else if(bl.showLeft===false||left.length===0){container.css("padding-left",0)}if(bl.rightWidth!==null&&bl.showRight){right.css("width",bl.rightWidth)}else if(bl.showRight===false||right.length===0){container.css("padding-right",0)}lwidth=bl.leftWidth&&bl.leftWidth.indexOf&&bl.leftWidth.indexOf("%")!==-1?0:parseInt(bl.leftWidth,10);rwidth=bl.rightWidth&&bl.rightWidth.indexOf&&bl.rightWidth.indexOf("%")!==-1?0:parseInt(bl.rightWidth,10);this.element.css("min-width",lwidth+rwidth);this._opt.borderLayout={header:header,footer:footer,paddingTop:null,paddingBottom:null};this._setBorderLayoutPaddings();if(this.options.height===null){sections=left.add(right).add(center);for(i=0,maxHeight=0;i<sections.length;i++){currHeight=sections.eq(i).hasClass(this.css.borderItemHidden)?0:sections.eq(i).outerHeight(true);if(currHeight>maxHeight){maxHeight=currHeight}}this.element.height(maxHeight)}this._trigger(this.events.rendered,null,{owner:this})},_setBorderLayoutPaddings:function(){var headerHeight,footerHeight,isHeaderHidden,isFooterHidden,_bl=this._opt.borderLayout;if(_bl.header.length){isHeaderHidden=_bl.header.hasClass(this.css.borderItemHidden);headerHeight=isHeaderHidden?0:_bl.header.outerHeight(true);if(_bl.paddingTop!==headerHeight){_bl.paddingTop=headerHeight;this.element.css("paddingTop",_bl.paddingTop)}}if(_bl.footer.length){isFooterHidden=_bl.footer.hasClass(this.css.borderItemHidden);footerHeight=isFooterHidden?0:_bl.footer.outerHeight(true);if(_bl.paddingBottom!==footerHeight){_bl.paddingBottom=footerHeight;this.element.css("paddingBottom",_bl.paddingBottom)}}},_initFlowLayout:function(){var i,length=this.options.itemCount,items=this.options.items,item;this.element.addClass(this.css.flow);if(length>0){for(i=0;i<length;i++){this._trigger(this.events.itemRendering,null,{index:i});item=$("<li></li>").appendTo(this.element).addClass(this.css.flowItem);this.options.destroyItems=true;this._trigger(this.events.itemRendered,null,{item:item,index:i})}this._trigger(this.events.rendered,null,{owner:this})}else if(items&&items.length>0){this.element.empty();for(i=0;i<items.length;i++){this._trigger(this.events.itemRendering,null,{itemData:items[i],index:i});item=$("<li></li>").appendTo(this.element).addClass(this.css.flowItem);if(items[i].width){item.css("width",items[i].width)}if(items[i].height){item.css("height",items[i].height)}this._trigger(this.events.itemRendered,null,{item:item,index:i})}this.options.destroyItems=true;this._trigger(this.events.rendered,null,{owner:this})}else{this.element.children().addClass(this.css.flowItem)}},_triggerInternalResizing:function(event){var args={owner:this};return this._trigger(this.events.internalResizing,event,args)},_triggerInternalResized:function(event){var args={owner:this};return this._trigger(this.events.internalResized,event,args)},_destroyBorderLayout:function(){this.element.removeClass(this.css.border);if(this.element.find("."+this.css.borderLeft).length){this.element.find("."+this.css.borderLeft).unwrap()}else{this.element.find("."+this.css.borderRight).unwrap()}if(this._removeLeft){this.element.children("."+this.css.borderLeft).remove()}if(this._removeRight){this.element.children("."+this.css.borderRight).remove()}if(this._removeCenter){this.element.children("."+this.css.borderCenter).remove()}if(this._removeHeader){this.element.children("."+this.css.borderHeader).remove()}if(this._removeFooter){this.element.children("."+this.css.borderFooter).remove()}this.element.children().removeClass(this.css.borderItem).removeClass(this.css.borderLeft).removeClass(this.css.borderRight).removeClass(this.css.borderCenter).removeClass(this.css.borderFooter).removeClass(this.css.borderHeader);this.element.find("."+this.css.borderItemHidden).removeClass(this.css.borderItemHidden)},_destroyGridLayout:function(){var $children=this.element.children();$children.slice(this._opt.gridLayout.destroyItemsFromIndex).remove();$children.removeClass(this.css.item).removeClass(this.css.gridItemAbs).removeClass(this.css.gridItemRel).removeAttr("data-index")},_destroyFlowLayout:function(){this.element.removeClass(this.css.flow);if(this.options.destroyItems){this.element.empty()}else{this.element.children().removeClass(this.css.flowItem)}},_destroyVerticalLayout:function(){this.element.removeClass(this.css.vertical);if(this.options.destroyItems){this.element.empty()}else{this.element.children().removeClass(this.css.verticalItem)}},destroy:function(){this._superApply(arguments);this.element.removeClass(this.css.container);switch(this.options.layoutMode){case"grid":this._destroyGridLayout();break;case"border":this._destroyBorderLayout();break;case"flow":this._destroyFlowLayout();break;case"vertical":this._destroyVerticalLayout();break;default:break}if(this._opt.resizeLayout){$(window).off("resize",this._opt.eventHandlers.windowResizeHandler)}return this}});$.extend($.ui.igLayoutManager,{version:"21.2.13"});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});