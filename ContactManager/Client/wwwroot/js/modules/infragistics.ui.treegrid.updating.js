/*!@license
 * Infragistics.Web.ClientUI Tree Grid 21.2.13
 *
 * Copyright (c) 2011-2022 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.dataSource.js
 *	infragistics.ui.shared.js
 *	infragistics.ui.treegrid.js
 *	infragistics.util.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.grid.updating.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.treegrid","./infragistics.ui.grid.updating"],factory)}else{return factory(jQuery)}})(function($){"use strict";$.widget("ui.igTreeGridUpdating",$.ui.igGridUpdating,{options:{enableAddChild:true,addChildTooltip:null,addChildButtonLabel:null,locale:{addChildTooltip:undefined,addChildButtonLabel:undefined},inherit:false},css:{addChildIcon:"ui-iggrid-addrowicon ui-icon ui-icon-circle-plus"},changeLocale:function(){this._superApply(arguments);var gridId=this.grid.id();if(this._renderTouchUI&&this.options.enableAddChild){this._super($("#"+gridId+"_updating_add_child_touch"))}this._changeLocaleForElement($("#"+gridId+"_updating_add_child_hover"))},_startAddChildFor:function(rowId,raiseEvents){var self=this,row=this.grid.rowById(rowId);if(row.attr("aria-expanded")==="false"){this.grid.expandRow(row,function(){row=self.grid.rowById(rowId);self._addEditableChildRow(row,raiseEvents)});return true}return this._addEditableChildRow(row,raiseEvents)},_addEditableChildRow:function(row,raiseEvents){var newRow,fixedRow,attr,fixDir,cellToFocus,cfInst,hasFixedColumns=this.grid.hasFixedColumns(),fr={},parentLevel,rowId=this.grid._normalizedKey(row.attr("data-id"));attr={"data-new-row":true,"data-child-row":true};fr[this.grid.options.dataSourceSettings.dataLevelKey]=parseInt(row.attr("aria-level"),10)+1;fr[this.grid.options.dataSourceSettings.expandedKey]=false;fr.__fr=rowId;newRow=$(this.grid._renderRecord(fr,rowId));newRow.removeAttr("data-id");newRow=newRow.attr(attr).addClass(this.css.addRow).data("parent-id",rowId);if(hasFixedColumns){fixedRow=$(this.grid._renderRecord({},null,true)).removeAttr("data-id");fixedRow.attr(attr).addClass(this.css.addRow).data("parent-id",rowId);fixDir=this.grid.fixingDirection()}parentLevel=parseInt(row.attr("aria-level"),10);if(row.next("[aria-level='"+(parentLevel+1)+"']").length){newRow.insertAfter(row.nextUntil("[aria-level='"+parentLevel+"']").last())}else{newRow.insertAfter(row)}if(hasFixedColumns){this.grid.rowById(rowId,true).after(fixedRow);if(fixDir==="left"&&fixedRow.find("td").not('[data-skip="true"]').length>0){cellToFocus=fixedRow.find("td").not('[data-skip="true"]').eq(0)}cfInst=this.grid.element.data("igTreeGridColumnFixing");if(cfInst&&cfInst.options.syncRowHeights){cfInst.syncRowsHeights(fixedRow,newRow)}}cellToFocus=cellToFocus||newRow.find("td").not('[data-skip="true"]').eq(0);this._startEditForRow(null,!raiseEvents,null,null,cellToFocus);return true},_renderAddChildButton:function(){var addChildButton,addChildSelector="#"+this.grid.id()+"_updating_add_child_hover",addChildContainer,ubodySelector="#"+this.grid.id()+">tbody",fbodySelector="#"+this.grid.id()+"_fixed>tbody",pe=window.navigator.msPointerEnabled||window.navigator.pointerEnabled,addChildTitle=this._getLocaleValue("addChildTooltip");if($(addChildSelector).length){return}addChildButton=$("<span></span>").css("position","absolute").addClass(this.css.deleteButton);addChildButton.attr({id:addChildSelector.substring(1),unselectable:"on",title:addChildTitle,"data-localeid":"addChildTooltip","data-localeattr":"title"});addChildButton.hide();$("<span></span>").addClass(this.css.addChildIcon).attr("unselectable","on").appendTo(addChildButton);addChildContainer=this._addElementToScrollContainer(addChildButton);this.grid.container().on({"mouseenter.addchildbutton":this._buttonHandlers.mouseEnter,"mouseleave.addchildbutton":this._buttonHandlers.mouseLeave,"click.addchildbutton":this._buttonHandlers.addChildClick,"keyup.addchildbutton":this._buttonHandlers.addChildClick},addChildSelector);if(pe){this.grid.container().on({"pointerenter.deletebutton":this._handlers.pointerEnter,"mspointerenter.deletebutton":this._handlers.pointerEnter},ubodySelector+">tr,"+fbodySelector+">tr")}else{this.grid.container().on({"mouseenter.addchildbutton":this._handlers.mouseEnter},ubodySelector+">tr,"+fbodySelector+">tr")}if(this._renderTouchUI){this.grid.container().on({"touchstart.addchildbutton":this._handlers.touchStart,"touchend.addchildbutton":this._handlers.touchEnd},ubodySelector+">tr,"+fbodySelector+">tr")}if(addChildContainer[0]===this.grid.container()[0]){this.grid.container().bind("mouseleave.addchildbutton",this._handlers.mouseLeave)}else{this.grid.container().on({"mouseleave.addchildbutton":this._handlers.mouseLeave},"#"+addChildContainer.attr("id"))}},_removeAddChildButton:function(){var button=$("#"+this.grid.id()+"_updating_add_child_hover");if(button.length===1){button.remove();this.grid.container().off(".addchildbutton");this.grid.container().unbind(".addchildbutton")}},_toggleAddRow:function(){var isAddChild=this._isAddChild(),newRow;if(isAddChild){newRow=this.grid.element.find("tr[data-child-row]");if(this.grid.hasFixedColumns()){newRow=newRow.add(this.grid.fixedBodyContainer().find("tr[data-child-row]"))}if(newRow.length!==0){newRow.remove()}}else{this._super()}},_addChildButtonClick:function(evt){var rowId=$(evt.target).closest(".ui-iggrid-deletebutton").data("button-for");if(this.options.editMode==="dialog"){this._startEditDialog(evt,false,null,true,null,null,rowId)}else{if(this._startAddChildFor(rowId,true)){this.hideAddChildButton()}}},_touchAddChildClick:function(evt){var rowId=this._editingForRowId,target=$(evt.target).closest(".ui-iggrid-button");if(!target.length||target.hasClass(this.css.buttonDisabled)){return}if(this.isEditing()){this._endEdit(evt,false,false);this._startAddChildFor(rowId)}},_touchAddChildKeyUp:function(evt){var rowId=this._editingForRowId,target=$(evt.target).closest(".ui-iggrid-button");if(!target.length||target.hasClass(this.css.buttonDisabled)||evt.keyCode!==$.ui.keyCode.ENTER){return}if(this.isEditing()){this._endEdit(evt,false,false);this._startAddChildFor(rowId)}},_touchStart:function(evt){this._super(evt);this.hideAddChildButton()},_touchEnd:function(evt){var changedTouchX=evt.originalEvent.changedTouches&&evt.originalEvent.changedTouches[0]?evt.originalEvent.changedTouches[0].pageX:evt.originalEvent.clientX;this._storedScrollLeft-=this.grid.scrollContainer().scrollLeft()||0;this._storedScrollWidth-=this.grid.scrollContainer().width()||0;if(this.options.enableAddChild&&Math.abs(changedTouchX-this._firstTouchX)>parseInt(this.options.swipeDistance,10)&&this._firstTouchRow&&this._storedScrollLeft===0&&this._storedScrollWidth===0){this.showAddChildButtonFor(this._firstTouchRow);if(this.options.enableDeleteRow){this.showDeleteButtonFor(this._firstTouchRow)}}delete this._firstTouchX;delete this._firstTouchRow;delete this._storedScrollLeft;delete this._storedScrollWidth;delete this._firstTouchRow},_pointerUp:function(evt){var oe=evt.originalEvent,changedTouchX;if(oe.pointerType!=="touch"){return}changedTouchX=oe.pageX;this._storedScrollLeft-=this.grid.scrollContainer().scrollLeft()||0;this._storedScrollWidth-=this.grid.scrollContainer().width()||0;if(this.options.enableDeleteRow&&Math.abs(changedTouchX-this._firstTouchX)>parseInt(this.options.swipeDistance,10)&&this._firstTouchRow&&this._storedScrollLeft===0&&this._storedScrollWidth===0){this.showAddChildButtonFor(this._firstTouchRow);if(this.options.enableDeleteRow){this.showDeleteButtonFor(this._firstTouchRow)}}delete this._firstTouchX;delete this._firstTouchRow;delete this._storedScrollLeft;delete this._storedScrollWidth;delete this._firstTouchRow},_rowMouseEnter:function(evt){this._super(evt);var row=$(evt.target).closest("tr");if(!this.isEditing()&&this._isEditableRow(row)){if(!row.hasClass("ui-iggrid-modifiedrecord")&&this.grid.dataSource.findRecordByKey(this.grid._normalizedKey(row.attr("data-id")))){this.showAddChildButtonFor(row)}else{this.hideAddChildButton()}}else{this.hideAddChildButton()}},_containerMouseLeave:function(){this._super();this.hideAddChildButton()},_renderDoneCancelButtons:function(){var buttonContainer=this._super(),addChildButton,addChildSelector="#"+this.grid.id()+"_updating_add_child_touch";if(this._renderTouchUI&&this.options.enableAddChild){addChildButton=$("<span />").attr("id",this.grid.id()+"_updating_add_child_touch").addClass(this.css.button).addClass(this.css.doneButton).attr({unselectable:"on",tabIndex:this._getNextTabIndex()+1,title:this._getLocaleValue("addChildTooltip"),"data-localeid":"addChildTooltip","data-localeattr":"title"});addChildButton.prependTo(buttonContainer);addChildButton.css({"float":"left",position:"relative"});$("<span />").css({display:"inline-block",left:0}).addClass(this.css.addRowIcon).attr("unselectable","on").appendTo(addChildButton);$("<span />").css("display","inline-block").attr({unselectable:"on","data-localeid":"addChildButtonLabel"}).html(this._getLocaleValue("addChildButtonLabel")).appendTo(addChildButton);this.grid.container().on({"mouseenter.donecancel":this._buttonHandlers.mouseEnter,"mouseleave.donecancel":this._buttonHandlers.mouseLeave,"focus.donecancel":this._buttonHandlers.focus,"blur.donecancel":this._buttonHandlers.blur},addChildSelector);this.grid.container().on({"click.donecancel":this._buttonHandlers._touchAddChildClick,"keyup.donecancel":this._buttonHandlers._touchAddChildKeyUp},addChildSelector)}return buttonContainer},_updateTouchButtons:function(isAdding){var addChildButton,isInDS;this._super(isAdding);if(this.options.enableAddChild){isInDS=this.grid.findRecordByKey(this._editingForRowId)!==null;addChildButton=$("#"+this.grid.id()+"_updating_add_child_touch");if(isAdding||this._isAddChild()||!isInDS){addChildButton.addClass(this.css.buttonDisabled);if(addChildButton.hasClass("ui-iggrid-buttonhover")){addChildButton.removeClass(this.css.buttonHover)}}else{addChildButton.removeClass(this.css.buttonDisabled)}}},_isAddChild:function(){return this.grid.element.find("tr[data-child-row]").length!==0},_removeChildrenFromUI:function($row,dataLevel){if(!$row||!$row.length){return}var dl,$tmp,rowId,$fRow,$cntnr,fixedCols=this.grid.hasFixedColumns();if(isNaN(dataLevel)){return}$cntnr=this.grid.container();while($row.length===1){dl=parseInt($row.attr("aria-level"),10);if(isNaN(dl)){break}if(dl<=dataLevel){break}$tmp=$row;rowId=$row.attr("data-id");$row=$row.next("tr");if(fixedCols){$fRow=$cntnr.find('tr[data-id="'+rowId+'"]');$fRow.remove()}$tmp.remove()}},_updateParentRowAfterAddChild:function(parentId){var span,rowData,parentRow,expCol=this.grid.options.renderExpansionIndicatorColumn,fixed=this.grid.hasFixedColumns()&&this.grid.fixingDirection()==="left";parentRow=this.grid.rowById(parentId,fixed);if(parentRow.find("span.ui-igtreegrid-expansion-indicator").length>0){return}rowData={dataBoundDepth:parseInt(parentRow.attr("aria-level"),10),hasExpandCell:true,expand:true};span=this.grid._renderExpandCellContainerHelper(rowData);if(expCol){parentRow.find("td.ui-igtreegrid-non-data-column").attr("data-expand-cell",1).append(span)}else{parentRow.find("span[data-expandcell-indicator]").append($(span).find("span.ui-igtreegrid-expansion-indicator"))}parentRow.attr("aria-expanded",true)},_generatePrimaryKeyValue:function(e,col){var value,ds=this.grid.dataSource;if(col){value=Math.max(this._recCount||1,ds._totalRecordsCount||1,ds._data.length);if(this._getPKType()==="string"){value=String(value)}if(this.element.find("tr[data-id="+value+"]").length||this.grid.findRecordByKey(value)){value=parseInt(value)+1}this._recCount=value;col.value=value}},_scroll:function(){if(this.isEditing()&&this._isAddChild()){this._positionDoneCancelButtons(this.grid.element.find("tr[data-new-row][data-child-row]"))}else{this._super()}},_attachEvents:function(){this._generatePrimaryKeyValueHandler=$.proxy(this._generatePrimaryKeyValue,this);this.element.bind("igtreegridupdatinggenerateprimarykeyvalue",this._generatePrimaryKeyValueHandler)},_detachEvents:function(){if(this._generatePrimaryKeyValueHandler){this.element.unbind("igtreegridupdatinggenerateprimarykeyvalue",this._generatePrimaryKeyValueHandler);delete this._generatePrimaryKeyValueHandler}},addChild:function(values,parentId){var settings=this.options.columnSettings,i=settings?settings.length:0,defVals={},key,val,rec=this.grid.findRecordByKey(parentId);if(rec===null){throw new Error(this._getLocaleValue("recordNotFound").replace("{id}",parentId))}while(i-- >0){key=settings[i].columnKey;val=settings[i].defaultValue;if(val!==undefined&&key!==undefined&&key!==null){defVals[key]=val}}this._addRow(null,$.extend(defVals,values),defVals,true,parentId)},startAddChildFor:function(parentId,raiseEvents){var rec=this.grid.findRecordByKey(parentId);if(rec===null){throw new Error(this._getLocaleValue("recordNotFound").replace("{id}",parentId))}this._startAddChildFor(parentId,raiseEvents)},showAddChildButtonFor:function(row){var acb=$("#"+this.grid.id()+"_updating_add_child_hover"),go=this.grid.options,v,hasHeight=go.height!==null&&go.height!==undefined,sbw=this.grid.hasVerticalScrollbar()===true?this.grid._scrollbarWidth():0,left,top,sc,offset=0,scrContainer,dbw=0,rowId=this._getRowId(row);if(acb.length){if(this.options.enableDeleteRow){dbw+=$("#"+this.grid.id()+"_updating_deletehover").outerWidth()+5}acb.show();sc=acb.parent();if(!hasHeight){v=go.virtualization||go.rowVirtualization||go.columnVirtualization;scrContainer=v?this.grid._vdisplaycontainer():this.grid.scrollContainer();if(scrContainer.length){offset=scrContainer.igPosition().top}}left=sc.outerWidth()-acb.outerWidth()-sbw-dbw+sc.scrollLeft()-5;top=row.igPosition().top+row.outerHeight()/2-acb.outerHeight()/2+sc.scrollTop()+offset;acb.css({top:top,left:left});acb.data("button-for",rowId)}},hideAddChildButton:function(){var acb=$("#"+this.grid.id()+"_updating_add_child_hover");if(acb.length){acb.hide()}},_create:function(){this.element.data($.ui.igGridUpdating.prototype.widgetName,this.element.data($.ui.igTreeGridUpdating.prototype.widgetName));$.ui.igGridUpdating.prototype._create.apply(this,arguments)},_addRow:function(evt,addObj,defVals,suppress,parentId){var arg,key,t,row,index,dataLevelKey=this.grid.options.dataSourceSettings.dataLevelKey,expandedKey=this.grid.options.dataSourceSettings.expandedKey,parentRecord;addObj=$.extend({},defVals,addObj);if(dataLevelKey&&!addObj.hasOwnProperty(dataLevelKey)){addObj[dataLevelKey]=0}if(expandedKey&&!addObj.hasOwnProperty(expandedKey)){addObj[expandedKey]=true}if(parentId!==undefined&&parentId!==null){parentRecord=this.grid.dataSource.findRecordByKey(parentId);if(parentRecord===null){throw new Error($.ig.Grid.locale.recordNotFound.replace("{id}",parentId))}parentRecord[expandedKey]=true;addObj[dataLevelKey]=parentRecord[dataLevelKey]+1;arg={owner:this,values:addObj,oldValues:defVals,addChild:true,parentID:parentId};if(!suppress){if(!this._trigger(this.events.rowAdding,evt,arg)){return false}}key=addObj[this.grid.options.primaryKey];index=this.grid.dataSource.getChildrenByKey(parentId)?this.grid.dataSource.getChildrenByKey(parentId).length:0;index+=this._pendingChildrenCount(parentId);t=this.grid.dataSource.insertRow(key,addObj,index,this.grid.options.autoCommit,parentId);row=this._updateUIForTransaction(t);this._notifyRowAdded(row);if($.type(this._pkVal)==="number"){this._pkVal++}if(!suppress){this._trigger(this.events.rowAdded,evt,arg)}}else{this._super(evt,addObj,defVals,suppress,parentId)}},_pendingChildrenCount:function(parentId){var t=this.grid.pendingTransactions(),count=0;for(var i=0;i<t.length;i++){if(t[i].type==="insertnode"&&t[i].parentRowId===parentId){count++;for(var j=0;j<t.length;j++){if(t[j].rowId===t[i].rowId&&t[j].type==="deleterow"){count--}}}}return count},_startEditForCell:function(evt,suppress,rowId,columnKey,element,focus,isAdding,value){this.hideAddChildButton();return this._super(evt,suppress,rowId,columnKey,element,focus,isAdding,value)},_rebindEditTriggers:function(){this._super();if(this.options.enableAddChild){this._renderAddChildButton()}},_getLatestValues:function(id,columnKey){var record=this._super(id,columnKey);if(record&&record[this.grid.dataSource.settings.treeDS.childDataKey]){delete record[this.grid.dataSource.settings.treeDS.childDataKey]}return record},_createHandlers:function(){this._super();this._buttonHandlers.addChildClick=$.proxy(this._addChildButtonClick,this);this._buttonHandlers._touchAddChildClick=$.proxy(this._touchAddChildClick,this);this._buttonHandlers._touchAddChildKeyUp=$.proxy(this._touchAddChildKeyUp,this)},_deleteRow:function(evt,rowId,suppress){var res,$prevRow,$nextRow,$row=this.grid.rowById(rowId),dataLevel;if($row&&$row.length){$nextRow=$row.next("tr");$prevRow=$row.prev("tr");dataLevel=parseInt($row.attr("aria-level"),10)}res=this._super(evt,rowId,suppress);if(res&&!isNaN(dataLevel)){this._removeChildrenFromUI($nextRow,dataLevel);this.grid._updateParentRowAfterDelete($prevRow,dataLevel)}return res},_updateUIForTransaction:function(t,row){var go=this.grid.options,autoCommit=go.autoCommit,v=go.virtualization||go.rowVirtualization||go.columnVirtualization,newRow,index;if(t.type==="insertnode"){if(this.grid.rowById(t.rowId).length){return}this._updateUnboundValuesForRow(t.row);if(v&&!autoCommit){return}this.grid.renderNewChild(t.row,t.parentRowId);this._updateParentRowAfterAddChild(t.parentRowId);this.grid._rerenderDataSkipColumn(this.grid.dataSource.getDataBoundDepth());newRow=this.grid.rowById(t.rowId);if(!autoCommit&&newRow.length){this._combineRowElements(newRow).addClass(this.grid.css.modifiedRecord)}index=newRow?newRow.index()-1:0;this.grid._reapplyZebraStyle(index)}else{if(t.type==="deleterow"){this.grid._rerenderColgroups()}newRow=this._super(t,row);if(this.grid.options.width===null&&t.type==="deleterow"){this.grid._updateContainersWidthOnGridWidthNull()}}return newRow},_setOption:function(key,value){var button;this._super(key,value);switch(key){case"enableAddChild":if(value===true){this._renderAddChildButton()}else{this._removeAddChildButton()}break;case"addChildTooltip":button=$("#"+this.grid.id()+"_updating_add_child_hover");if(button.length===1){button.attr("title",value)}break;default:this._super(key,value);break}},destroy:function(){this._detachEvents();this._removeAddChildButton();this._superApply(arguments);this.element.removeData($.ui.igGridUpdating.prototype.widgetName)},_injectGrid:function(grid,isRebind){$.ui.igGridUpdating.prototype._injectGrid.apply(this,arguments);if(!isRebind){this._detachEvents();this._attachEvents()}}});$.extend($.ui.igTreeGridUpdating,{version:"21.2.13"});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});