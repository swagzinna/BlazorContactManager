/*!@license
* Infragistics.Web.ClientUI infragistics.dv_interactivity.js 21.2.20212.99
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$al=$$t;var $$0=$.ig.globalDefs.$$0;var $$4=$.ig.globalDefs.$$4;var $$1=$.ig.globalDefs.$$1;var $$w=$.ig.globalDefs.$$w;var $$6=$.ig.globalDefs.$$6;var $$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["BaseDOMEventProxy:b","DOMEventProxy:c","TouchGestureEventHandler:g","CancelableTouchGestureEventHandler:h","KeyEventHandler:m"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.tryParseNumber,$y=$.ig.util.tryParseNumber1,$z=$.ig.util.numberToString,$0=$.ig.util.numberToString1,$1=$.ig.util.parseNumber;$d("MouseButton:o",false,false,{Left:0,Middle:1,Right:2,Unkown:3});$d("TouchGestureState:e",false,false,{None:0,Pan:1,Zoom:2,Hold:3,PendingPan:4,Flinging:5});$c("BaseDOMEventProxy:b","EventProxy",{init:function(){this.bn=false;this.b0=0;this.b1=0;this.by=0;this.bz=0;this.b4=0;this.bm=false;this.b5=-1;this.bo=false;this.bl=false;$.ig.EventProxy.prototype.init.call(this)},_b3:null,d:function(){var a=new $$t.c(this._b3,this._b2,this._bw);a._ab=this._ab;a._ao=this._ao;return a},bx:function(){return $$t.$b.bs||$$t.$b.bt},_bu:false,_bw:false,bj:function(a){return $$t.$c.c3(a)},bq:function(e_){var pointerEvent_=e_.originalEvent;var a=false;if($$t.$b.bt){a=pointerEvent_.pointerType=="touch"}else{a=pointerEvent_.pointerType==pointerEvent_.MSPOINTER_TYPE_TOUCH}return a},_b2:null,ct:function(a){if(!this.ae()){if(this.bp(a)){if(this._aq==null||this._aq(a)){a.preventDefault()}}}},bp:function(e_){return e_.originalEvent.cancelable||e_.originalEvent.cancelable==undefined},bn:false,cp:function(){var source_=this._b3.getNativeElement();$$t.$b.cs(source_)},cs:function(source_){if($$t.$b.bt){source_.style.touchAction="none"}else{source_.style.msTouchAction="none"}source_.style.msUserSelect="none";source_.style.webkitTouchCallout="none";source_.style.webkitUserSelect="none";source_.style.khtmlUserSelect="none";source_.style.mozUserSelect="none";source_.style.userSelect="none"},cm:function(source_){if($$t.$b.bt){source_.style.touchAction="auto"}else{source_.style.msTouchAction="auto"}source_.style.msUserSelect="auto";source_.style.webkitTouchCallout="none";source_.style.webkitUserSelect="auto";source_.style.khtmlUserSelect="auto";source_.style.mozUserSelect="auto";source_.style.userSelect="auto"},cn:function(){var source_=this._b3.getNativeElement();$$t.$b.cm(source_)},av:function(){$.ig.EventProxy.prototype.av.call(this);if(!this.ae()){this.cp()}else{this.cn()}},ca:function(){var ver_=-1;var matchIE_=/Trident\/([\d.]+)/;if(matchIE_.exec(navigator.userAgent)!=null){ver_=parseFloat(RegExp.$1)}return ver_},b9:function(){var ver_=-1;var matchIE_=/Edge\/([\d.]+)/;if(matchIE_.exec(navigator.userAgent)!=null){ver_=parseFloat(RegExp.$1)}return ver_},cr:function(e_){var a=$$t.$b.cb>=6;var oe_=e_.originalEvent;if((typeof e_.pageX=="undefined"||a)&&oe_.clientX!=null){var od_;if(e_.target!==undefined){od_=e_.target.ownerDocument}else{od_=e_.originalEvent.target.ownerDocument}var ed_=od_?od_:document;var doc_=ed_.documentElement;var body_=ed_.body;var clientX_=oe_.clientX;var clientY_=oe_.clientY;var scrollLeft_=doc_&&doc_.scrollLeft||body_&&body_.scrollLeft||0;var scrollTop_=doc_&&doc_.scrollTop||body_&&body_.scrollTop||0;var clientLeft_=doc_&&doc_.clientLeft||body_&&body_.clientLeft||0;var clientTop_=doc_&&doc_.clientTop||body_&&body_.clientTop||0;e_.pageX=clientX_+(scrollLeft_-clientLeft_);e_.pageY=clientY_+(scrollTop_-clientTop_)}if(!e_.pageX){e_.pageX=e_.originalEvent.pageX}if(!e_.pageY){e_.pageY=e_.originalEvent.pageY}if(typeof e_.button=="undefined"&&typeof oe_.button!="undefined"){e_.button=oe_.button}},c3:function(a){var b=$$t.$b.cb>=6;var source_=a.getNativeElement();var d_=source_.ownerDocument;var doc_=d_?d_.documentElement:null;var z_=doc_?doc_.msContentZoomFactor:null;var body_=doc_.body;if(z_&&z_>1||b){var rect_=source_.getBoundingClientRect();var x_=rect_.left;var y_=rect_.top;var scrollLeft_=doc_&&doc_.scrollLeft||body_&&body_.scrollLeft||0;var scrollTop_=doc_&&doc_.scrollTop||body_&&body_.scrollTop||0;var clientLeft_=doc_&&doc_.clientLeft||body_&&body_.clientLeft||0;var clientTop_=doc_&&doc_.clientTop||body_&&body_.clientTop||0;var c=x_+scrollLeft_-clientLeft_;var d=y_+scrollTop_-clientTop_;return new $$a.ae(0,c,d,0,0)}else{var e=a.getOffset();return new $$a.ae(0,e.left,e.top,0,0)}},b0:0,b1:0,by:0,bz:0,b4:0,_c2:null,_c1:null,b7:function(a){if(arguments.length===1){this.b4=a;return a}else{return this.b4}},cw:function(a){this._ar=a;$$t.$b.cr(a);var b=$$t.$b.c3(this._b3);var c=0;var d=0;if($$a.$ae.l_op_Inequality(this._bk,null)){c=this._bk.left();d=this._bk.top()}this.b0=a.pageX-b.left();this.b1=a.pageY-b.top();this.by=this.b0-c;this.bz=this.b1-d;this._c2={__x:this.b0,__y:this.b1,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};this._c1={__x:this.by,__y:this.bz,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName}},cx:function(e_){this._ar=e_;$$t.$b.cr(e_);if($$t.$b.bx()){var a=e_.pageX;var b=e_.pageY;var c=$$t.$b.c3(this._b3);this.b0=a-c.left();this.b1=b-c.top()}else{this.b4=0;if(!e_.originalEvent.targetTouches||e_.originalEvent.targetTouches.length<1){return}this.b4=e_.originalEvent.targetTouches.length;var d=e_.originalEvent.targetTouches[0].pageX;var e=e_.originalEvent.targetTouches[0].pageY;var f=$$t.$b.c3(this._b3);this.b0=d-f.left();this.b1=e-f.top()}var g=0;var h=0;if($$a.$ae.l_op_Inequality(this._bk,null)){g=this._bk.left();h=this._bk.top()}this.by=this.b0-g;this.bz=this.b1-h;this._c2={__x:this.b0,__y:this.b1,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};this._c1={__x:this.by,__y:this.bz,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName}},cl:function(e_){this.cv(e_);if(this.ad(this._c2,false,true)){var deltaY_=0;var ev_=e_;deltaY_=ev_.originalEvent?ev_.originalEvent.deltaY:ev_.deltaY;var deltaX_=0;deltaX_=ev_.originalEvent?ev_.originalEvent.deltaX:ev_.deltaX;var a=ev_.originalEvent?ev_.originalEvent.deltaMode==1:ev_.deltaMode==1;if(a){deltaY_=deltaY_*40;deltaX_=deltaX_*40}var b=this.ai(this._c1,deltaY_);var c=this.aj(this._c1,deltaX_);if(b||c){this.ct(e_)}}},cj:function(e_){this.cv(e_);this.cw(e_);if(this.ad(this._c2,false,true)){var ev_=e_;var delta_=0;if(ev_.wheelDelta){delta_=ev_.wheelDelta/120}if(ev_.originalEvent&&ev_.originalEvent.wheelDelta){delta_=ev_.originalEvent.wheelDelta/120}if(ev_.detail){delta_=-ev_.detail/3}if(ev_.originalEvent&&ev_.originalEvent.detail){delta_=-ev_.originalEvent.detail/3}delta_=delta_/10;var a=this.ai(this._c1,delta_);if(a){this.ct(e_)}}},bm:false,b5:0,cq:function(){if(this.bm){if(this.b5==-1){this.b5=this._b2.setTimeout(this.co.runOn(this),500)}else{window.clearTimeout(this.b5);this.b5=-1;this.b5=this._b2.setTimeout(this.co.runOn(this),500)}}},cc:function(){this.bm=true;if(this.b5!=-1){window.clearTimeout(this.b5);this.b5=-1}},co:function(){this.bm=false},_br:false,bo:false,bv:function(a){if(arguments.length===1){this.bo=a;return a}else{return this.bo}},ch:function(a){if(this.bo||this.bm){return}this.cw(a);if(this._br){this._br=false;this.a8(this._c1)}},ci:function(a){if(this.bo||this.bm){return}this.cw(a);this.cv(a);var b=new $$a.ar;b.position(this._c2);if(this.ad(this._c2,false,false)){if(!this._br){this._br=true;this.a7(this._c2)}this.a9(this._c2,true,false);this.ax(this._c1,false)}else if(this._br){this.ch(a)}},cu:function(a){this._b3.focus(this._bu)},bl:false,cg:function(a){if(this.bo||this.bm){return}this.cu(a);this.cw(a);this.cv(a);if(this.ad(this._c2,false,false)){this.bl=true;this.a6(this._c2);this.ay(this._c1,false);this.ct(a)}},cy:function(a){if(this.bo||this.bm){return}if(this.bl){this.ck(a)}},ck:function(a){if(this.bo||this.bm){return}this.cv(a);if($$a.$y.l_op_Equality(this._c2,null)||$$a.$y.l_op_Equality(this._c1,null)){this.cw(a)}var b=this.ad(this._c2,false,false)||this.bl||this._br;this.bl=false;this.ba(this._c2);this.aw(this._c1,false,false);if(b){this.ct(a)}},cd:function(a){this.ce(a,true)},cf:function(a){this.ce(a,false)},c0:function(a){return $$t.$b.cz(a)},cz:function(a){var b;switch(a.which){case 33:b=10;break;case 34:b=11;break;case 36:b=13;break;case 37:b=14;break;case 38:b=15;break;case 39:b=16;break;case 40:b=17;break;case 9:b=2;break;case 32:b=9;break;case 13:b=3;break;case 27:b=8;break;case 16:b=4;break;case 17:b=5;break;case 18:b=6;break;case 8:b=1;break;case 35:b=12;break;case 45:b=18;break;case 46:b=19;break;case 106:b=78;break;case 107:b=79;break;case 109:b=80;break;case 110:b=81;break;case 111:b=82;break;case 220:b=85;break;case 192:b=86;break;case 191:b=84;break;case 186:b=83;break;case 189:b=88;break;case 187:b=87;break;default:if(112<=a.which&&a.which<=123){b=56+a.which-112}else if(65<=a.which&&a.which<=90){b=30+a.which-65}else if(48<=a.which&&a.which<=57){b=20+a.which-48}else if(96<=a.which&&a.which<=105){b=68+a.which-96}else{b=0}break}return b},ce:function(a,b){var c=this.c0(a);var d=c!=0;this.cv(a);if(d){var e=false;if(b){e=this.ag(c)}else{e=this.ah(c)}if(e){this.ct(a)}}},cv:function(a){this._ar=a;this._bh=0;if(a.shiftKey){this._bh=this._bh|4}if(a.altKey){this._bh=this._bh|1}if(a.ctrlKey){this._bh=this._bh|2}this._ak=a.button==2},bi:function(){var a=$$t.$b.c3(this._b3);var b=a.left();var c=a.top();return{__x:b,__y:c,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName}},$type:new $.ig.Type("BaseDOMEventProxy",$.ig.EventProxy.prototype.$type)},true);$c("CanvasGestureDOMEventProxy:a","BaseDOMEventProxy",{dg:0,di:null,c4:null,d:function(){var a=new $$t.a(this._b3,this._b2,this._bw);a._ab=this._ab;a._ao=this._ao;return a},_dh:null,init:function(a,b,c){this.dg=0;this.di="";this.da=new $$4.h(String,$$4.$x.$type.specialize($$0.$c.$type),0);this.c5=false;this.db=new $$4.x($$0.$ax.$type,0);this.dc=new $$4.x($$a.$y.$type,0);this.dd=new $$4.x($$t.$d.$type,0);$$t.$b.init.call(this);this._bw=c;this._b2=b;this.c4=new $$t.f(new $.ig.DOMExecutionContext(b));var d=this.c4;d.holdEnding=$.ig.Delegate.prototype.combine(d.holdEnding,this.dk.runOn(this));var e=this.c4;e.holdStarting=$.ig.Delegate.prototype.combine(e.holdStarting,this.dl.runOn(this));var f=this.c4;f.zoomStarting=$.ig.Delegate.prototype.combine(f.zoomStarting,this.dt.runOn(this));var g=this.c4;g.zoomEnding=$.ig.Delegate.prototype.combine(g.zoomEnding,this.ds.runOn(this));var h=this.c4;h.panStarting=$.ig.Delegate.prototype.combine(h.panStarting,this.dr.runOn(this));var i=this.c4;i.panEnding=$.ig.Delegate.prototype.combine(i.panEnding,this.dq.runOn(this));var j=this.c4;j.manipulationStarting=$.ig.Delegate.prototype.combine(j.manipulationStarting,this.dp.runOn(this));var k=this.c4;k.manipulationChanging=$.ig.Delegate.prototype.combine(k.manipulationChanging,this.dm.runOn(this));var l=this.c4;l.manipulationEnding=$.ig.Delegate.prototype.combine(l.manipulationEnding,this.dn.runOn(this));var m=this.c4;m.doubleTapped=$.ig.Delegate.prototype.combine(m.doubleTapped,this.dj.runOn(this));var n=this.c4;n.flingStarting=$.ig.Delegate.prototype.combine(n.flingStarting,this.c6.runOn(this));this._ao=function(o){return true};this._ab=true;$$t.$a.df++;this.dg=$$t.$a.df;this.di=".DOMProxy"+this.dg.toString();this._bh=0;this._b3=a;$$t.$b.bs=false;try{$$t.$b.bs=window.navigator.msPointerEnabled&&MSGesture!==undefined}catch(o){}$$t.$b.bt=false;try{$$t.$b.bt=window.PointerEvent!==undefined}catch(p){}if($$t.$b.bx()){this._ab=false}$$t.$b.cb=this.ca();$$t.$b.b8=this.b9();this.as(this._b3,"");this._an=function(q){return true}},c6:function(a,b){return this.af({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},b._h,b._i)},dj:function(a,b){this.az({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName})},am:function(){return true},ac:function(){return this.c4._n==5},at:function(){$$t.$b.at.call(this);this.c4.bd()},dn:function(a,b){if(this.c4._n==0){this.a3({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},b._d);this.cq()}},dm:function(a,b){if(this.c4._n==2){this.bb({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},b._d);this.be({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},b._d,b._e,b._c)}if(this.c4._n==1||this.c4._n==5){this.ax({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},true);this.a1({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName})}},dp:function(a,b){},dq:function(a,b){this.c5=false;if(this.c4._n==0){this.aw({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},true,false);this.a0({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName})}},dr:function(a,b){this.a2({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName})},ds:function(a,b){this.bd({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},b._d,b._e,b._c)},dt:function(a,b){this.bc({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},1);this.bf({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},1,1,1)},dl:function(a,b){this.c5=true;this.a4({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName})},dk:function(a,b){if(this.c4._n==0){this.aw({__x:b._a,__y:b._b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},true,false)}},c8:function(){$$t.$b.bs=false;try{$$t.$b.bs=window.navigator.msPointerEnabled&&MSGesture!==undefined}catch(a){}$$t.$b.bt=false;try{$$t.$b.bt=window.PointerEvent!==undefined}catch(b){}return $$t.$b.bx()},da:null,du:function(a,b,c){},as:function(a,b){var c=a;if(!this._b2.supportsDOMEvents()){return}var d=this.di+b;var e=new $$4.x($$0.$c.$type,0);this.da.add(d,e);this.du(a,b,e);if(!$$t.$b.bx()){e.add(c.listen("mousemove",this.ci.runOn(this)));e.add(c.listen("mouseleave",this.ch.runOn(this)));e.add(c.listen("mousedown",this.cg.runOn(this)));e.add(c.listen("mouseup",this.ck.runOn(this)));e.add(this._b2.globalListen("window","mouseup",this.cy.runOn(this)))}e.add(c.listen("keydown",this.cd.runOn(this)));e.add(c.listen("keyup",this.cf.runOn(this)));if($$t.$b.bx()){var source_=this._b3.getNativeElement();$$t.$b.cs(source_);var f=this._b3.getNativeElement();if($$t.$b.bt){e.add(c.listen("pointerdown",this.dx.runOn(this)));e.add(c.listen("pointerup",this.d0.runOn(this)));e.add(c.listen("pointercancel",this.dw.runOn(this)));e.add(c.listen("pointermove",this.dy.runOn(this)));e.add(c.listen("pointerleave",this.dz.runOn(this)));e.add(c.listen("lostpointercapture",this.dv.runOn(this)))}else{e.add(c.listen("MSPointerDown",this.dx.runOn(this)));e.add(c.listen("MSPointerUp",this.d0.runOn(this)));e.add(c.listen("MSPointerCancel",this.dw.runOn(this)));e.add(c.listen("MSPointerMove",this.dy.runOn(this)));e.add(c.listen("MSPointerLeave",this.dz.runOn(this)));e.add(c.listen("MSLostPointerCapture",this.dv.runOn(this)))}}else{e.add(c.listen("touchstart",this.d3.runOn(this)));e.add(c.listen("touchmove",this.d2.runOn(this)));e.add(c.listen("touchend",this.d1.runOn(this)))}if(this._bw){e.add(c.listen("wheel",this.cl.runOn(this)))}else{e.add(c.listen("DOMMouseScroll",this.cj.runOn(this)));e.add(c.listen("mousewheel",this.cj.runOn(this)))}},d6:null,c5:false,d0:function(e_){var a=this.bq(e_);var b=this.db.indexOf(e_.originalEvent.pointerId);if(b>=0){this.db.removeAt(b);this.dc.removeAt(b);this.b7(this.db.count())}if(a){this.d1(e_)}else{this.ck(e_)}},dv:function(e_){var a=this.bq(e_)},dw:function(e_){var a=this.bq(e_);var b=this.db.indexOf(e_.originalEvent.pointerId);if(b>=0){this.db.removeAt(b);this.dc.removeAt(b);this.b7(this.db.count())}},db:null,dc:null,_c7:false,dx:function(e_){var a=this.bq(e_);$$t.$b.cr(e_);this.db.add(e_.originalEvent.pointerId);this.dc.add({__x:e_.pageX,__y:e_.pageY,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName});this.b7(this.db.count());if(a){this.cx(e_)}else{this.cw(e_)}this.cv(e_);if(!this._c7&&this.ad(this._c2,a,false)){var eventSource_=this._b3.getNativeElement();if($$t.$b.bt){eventSource_.setPointerCapture(e_.originalEvent.pointerId)}else{eventSource_.msSetPointerCapture(e_.originalEvent.pointerId)}}if(a){this.d3(e_)}else{this.cg(e_)}},dy:function(e_){var a=this.bq(e_);$$t.$b.cr(e_);this.cv(e_);this.cx(e_);var b=this.db.indexOf(e_.originalEvent.pointerId);if(b>=0){this.dc.__inner[b]={__x:e_.pageX,__y:e_.pageY,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName}}if(this._c7&&this.ad(this._c2,a,false)){var eventSource_=this._b3.getNativeElement();if($$t.$b.bt){eventSource_.setPointerCapture(e_.originalEvent.pointerId)}else{eventSource_.msSetPointerCapture(e_.originalEvent.pointerId)}}if(a){this.d2(e_)}else{this.ci(e_)}},dz:function(e_){var a=this.bq(e_);if(a){}else{this.ch(e_)}},d3:function(e_){this._br=true;this.cv(e_);this.cx(e_);this.d6=this._c1;if(this.ad(this._c2,true,false)){if(!this._ab||this.b7()>1){if(this.bv()){this.bv(false);this.cc()}this.ct(e_)}else{this.bv(true);this.c5=false}this.a9(this._c2,false,true);this.a6(this._c2);this.ay(this._c1,true);this.c4.a7(this.de(e_))}},dd:null,de:function(e_){var a=$$t.$b.c3(this._b3);var b=this._bk;var c=0;var d=0;if($$a.$ae.l_op_Inequality(b,null)){c=b.left();d=b.top()}this.dd.clear();if($$t.$b.bx()){var e=this.db.count();for(var j_=0;j_<e;j_++){var f=this.db.__inner[j_];var g=this.dc.__inner[j_];var h=g.__x;var i=g.__y;var j=new $$t.d(1);j._a=h-a.left()-b.left();j._b=i-a.top()-b.top();this.dd.add(j)}}else{var k=e_.originalEvent.targetTouches.length;for(var j_=0;j_<k;j_++){var l=e_.originalEvent.targetTouches[j_].pageX;var m=e_.originalEvent.targetTouches[j_].pageY;var n=new $$t.d(1);n._a=l-a.left()-c;n._b=m-a.top()-d;this.dd.add(n)}}return this.dd},d2:function(a){this._br=true;this.cv(a);this.cx(a);if(this.bv()){if(this.ad(this._c2,true,false)&&this.c9()||this.c5==true||this.c4._n==2){this.bv(false);this.cc()}}if((this.c5||this.c4._n==2||this.ad(this._c2,true,false))&&!this.bv()){this.c5=true;this.ct(a);this.c4.a7(this.de(a))}},c9:function(){var a={__x:this.d6.__x-this._c1.__x,__y:this.d6.__y-this._c1.__y,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};if(Math.abs(a.__x)>Math.abs(a.__y)){a.__y=0}if(Math.abs(a.__y)>Math.abs(a.__x)){a.__x=0}return this._ao(a)},d1:function(a){this._br=false;this.cv(a);this.cx(a);if(this.bv()){this.bv(false);this.cc()}var b=this.c4._n;var c=this.ad(this._c2,true,false)||b!=0;if(this.c4._n!=2&&this.c4._n!=5){this.a9(this._c2,false,true);this.ba(this._c2)}var d=this.c4._n==2;if(d){c=true;this.aw({__x:this.c4.at(),__y:this.c4.au(),$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},true,true)}this.c4.a7(this.de(a));if(this.c4._n==0){this.cq()}if(!d&&this.c4._n==0){this.aw({__x:this.c4.at(),__y:this.c4.au(),$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName},true,false)}if(this.c4._n!=0){c=true}if(c){this.ct(a)}},d4:function(a){if(this.da.containsKey(a)){var b=this.da.item(a);this.da.remove(a);for(var c=0;c<b.count();c++){b.__inner[c]()}b.clear()}},bg:function(a,b){var c=a;var d=this.di+b;this.d4(d)},au:function(){if(this._b3==null){return}this.d4(this.di);this._b3=null},register:function(){TypeRegistrar.register("CanvasGestureDOMEventProxy",$$t.$a.$type)},$type:new $.ig.Type("CanvasGestureDOMEventProxy",$$t.$b.$type)},true);$c("DOMEventProxy:c","BaseDOMEventProxy",{dd:0,df:null,c5:false,_de:null,init:function(a,b,c){this.dd=0;this.df="";this.c5=false;this.c7=new $$4.h(String,$$4.$x.$type.specialize($$0.$c.$type),0);this.db=-1;this.d3=null;this.c9=0;this.da=0;this.c8=5;this.c4=false;this.d1=null;$$t.$b.init.call(this);this._bw=c;this._b2=b;this._ao=function(d){return true};this._ab=false;$$t.$c.dc++;this.dd=$$t.$c.dc;this.df=".DOMProxy"+this.dd.toString();this._bh=0;this._b3=a;$$t.$b.bs=false;try{$$t.$b.bs=window.navigator.msPointerEnabled&&MSGesture!==undefined}catch(d){}$$t.$b.bt=false;try{$$t.$b.bt=window.PointerEvent!==undefined}catch(e){}$$t.$b.cb=this.ca();$$t.$b.b8=this.b9();this.as(this._b3,"");this._an=function(f){return true}},c7:null,dg:function(a,b,c){},as:function(a,b){var c=a;var d=this.df+b;if(!this._b2.supportsDOMEvents()){return}var e=new $$4.x($$0.$c.$type,0);this.c7.add(d,e);this.dg(a,b,e);if(!$$t.$b.bx()){e.add(c.listen("mousemove",this.ci.runOn(this)));e.add(c.listen("mouseleave",this.ch.runOn(this)));e.add(c.listen("mousedown",this.cg.runOn(this)));e.add(c.listen("mouseup",this.ck.runOn(this)));e.add(this._b2.globalListen("window","mouseup",this.cy.runOn(this)))}e.add(c.listen("keydown",this.cd.runOn(this)));e.add(c.listen("keyup",this.cf.runOn(this)));var source_=this._b3.getNativeElement();if(!this.ae()){$$t.$b.cs(source_)}if($$t.$b.bx()){var f=this._b3.getNativeElement();if(window.MSGesture!==undefined){var gesture_=new MSGesture;var container_=f;gesture_.target=container_;this._de=gesture_;e.add(c.listen("MSGestureStart",this.dj.runOn(this)));e.add(c.listen("MSGestureChange",this.dh.runOn(this)));e.add(c.listen("MSGestureEnd",this.di.runOn(this)))}if($$t.$b.bt){e.add(c.listen("pointerdown",this.dm.runOn(this)));e.add(c.listen("pointerup",this.dq.runOn(this)));e.add(c.listen("pointercancel",this.dl.runOn(this)));e.add(c.listen("pointermove",this.dn.runOn(this)));e.add(c.listen("pointerout",this.dp.runOn(this)));e.add(c.listen("lostpointercapture",this.dk.runOn(this)))}else{e.add(c.listen("MSPointerDown",this.dm.runOn(this)));e.add(c.listen("MSPointerUp",this.dq.runOn(this)));e.add(c.listen("MSPointerCancel",this.dl.runOn(this)));e.add(c.listen("MSPointerMove",this.dn.runOn(this)));e.add(c.listen("MSPointerOut",this.dp.runOn(this)));e.add(c.listen("MSLostPointerCapture",this.dk.runOn(this)))}}else{e.add(c.listen("gesturestart",this.dj.runOn(this)));e.add(c.listen("gesturechange",this.dh.runOn(this)));e.add(c.listen("gestureend",this.di.runOn(this)));e.add(c.listen("touchstart",this.dt.runOn(this)));e.add(c.listen("touchmove",this.ds.runOn(this)));e.add(c.listen("touchend",this.dr.runOn(this)))}if(this._bw){e.add(c.listen("wheel",this.cl.runOn(this)))}else{e.add(c.listen("DOMMouseScroll",this.cj.runOn(this)));e.add(c.listen("mousewheel",this.cj.runOn(this)))}},dq:function(e_){var a=this.bq(e_);if(a){this.b7(this.b7()-1);if(this.b7()<0){this.b7(0)}}if(this.b7()<2&&this.c5&&a){this.c5=false;var b=e_.originalEvent.scale;this.a3(this._c1,b)}else{if(a){this.dr(e_)}else{this.ck(e_)}}},dk:function(e_){var a=this.bq(e_);if(a){(function($obj){var $value=$obj.b7();$obj.b7($value-1);return $value})(this);if(this.b7()<0){this.b7(0)}}if(this.b7()<2&&this.c5&&a){this.c5=false;var b=e_.originalEvent.scale;this.a3(this._c1,b)}},dl:function(e_){var a=this.bq(e_);if(a){(function($obj){var $value=$obj.b7();$obj.b7($value-1);return $value})(this);if(this.b7()<0){this.b7(0)}}if(this.b7()<2&&this.c5&&a){this.c5=false;var b=e_.originalEvent.scale;this.a3(this._c1,b)}},dm:function(e_){var a=this.bq(e_);if(this._de!=null&&a){(function($obj){var $value=$obj.b7();$obj.b7($value+1);return $value})(this);var mGesture_=this._de;mGesture_.addPointer(e_.originalEvent.pointerId)}var eventSource_=this._b3.getNativeElement();if($$t.$b.bt){eventSource_.setPointerCapture(e_.originalEvent.pointerId)}else{eventSource_.msSetPointerCapture(e_.originalEvent.pointerId)}if(this.b7()>1&&!this.c5&&a){this.c5=true;this.cx(e_);var b=e_.originalEvent.scale;this.bc(this._c1,b)}else{if(a){this.dt(e_)}else{this.cg(e_)}}},dn:function(e_){var a=this.bq(e_);if(this.c5){return}if(a){this.ds(e_)}else{this.ci(e_)}},dp:function(e_){var a=this.bq(e_);if(this.c5){return}if(a){}else{this.ch(e_)}},dj:function(e_){this._br=true;this.cv(e_);this.cx(e_);this.dv();if(this.ad(this._c2,true,false)){this.ct(e_);if($$t.$b.bx()&&this.b7()<2){return}var a=e_.originalEvent.scale;this.bc(this._c1,a)}},dh:function(e_){this._br=true;this.cv(e_);this.cx(e_);if(this.ad(this._c2,true,false)){this.ct(e_);if($$t.$b.bx()&&this.b7()<2){return}var a=e_.originalEvent.scale;this.bb(this._c1,a)}},di:function(e_){this.ct(e_);var a=e_.originalEvent.scale;this._br=false;this.cv(e_);this.cx(e_);if(!$$t.$b.bx()||this.c5){this.a3(this._c1,a)}},d2:null,dt:function(e_){this._br=true;this.cv(e_);this.cx(e_);this.d2=this._c1;if(this.ad(this._c2,true,false)){if(!this._ab){this.ct(e_)}else{this.bv(true)}this.a9(this._c2,false,true);this.a6(this._c2);this.ay(this._c1,true);this.dy()}},db:0,d3:null,c9:0,da:0,c8:0,dy:function(){if(this.db==-1){this.c9=this._c2.__x;this.da=this._c2.__y;this.db=this._b2.setTimeout(this.dw.runOn(this),1500)}},dv:function(){if(Math.abs(this.c9-this._c2.__x)>this.c8||Math.abs(this.da-this._c2.__y)>this.c8){this.dz()}},dz:function(){if(this.db!=-1){window.clearTimeout(this.db);this.db=-1}},dw:function(){this.db=-1;if(this.bv()){this.bv(false);this.cc()}this.a4(this._c1)},c4:false,d1:null,ds:function(a){this._br=true;this.cv(a);this.cx(a);if(this.bv()){if(this.ad(this._c2,true,false)&&this.c6()){this.bv(false);this.cc()}}this.dv();this.d0();if(this.ad(this._c2,true,false)&&this.b7()==1&&!this.bv()){this.ct(a);if(!this.c4){this.c4=true;this.d1=this._c1;this.a2(this.d1)}else{this.a9(this._c2,true,true);this.ax(this._c1,true);this.a1(this._c1)}}},c6:function(){var a={__x:this.d2.__x-this._c1.__x,__y:this.d2.__y-this._c1.__y,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};if(Math.abs(a.__x)<2&&Math.abs(a.__y)<2){return false}if(Math.abs(a.__x)>Math.abs(a.__y)){a.__y=0}if(Math.abs(a.__y)>Math.abs(a.__x)){a.__x=0}return this._ao(a)},dr:function(a){this._br=false;this.cv(a);this.cx(a);this.dz();if(this.bv()){this.bv(false);this.cc()}this.ct(a);this.a9(this._c2,false,true);this.ba(this._c2);if(this.b7()==0){this.dx(this._c2);this.cq()}if(this.c4&&this.b7()==0){this.c4=false;this.d1=null;this.a0(this._c1);this.cq()}this.aw(this._c1,true,this.b7()>0)},dx:function(a){if($$a.$ae.l_op_Equality(this.d3,null)){this.d3=new $$a.ae(0,a.__x-50,a.__y-50,100,100);this._b2.setTimeout(this.d0.runOn(this),500)}else{if(a.__x>=this.d3.x()&&a.__x<=this.d3.right()&&a.__y>=this.d3.y()&&a.__y<=this.d3.bottom()){this.d0();this.az(a)}}},d0:function(){this.d3=null},du:function(a){if(this.c7.containsKey(a)){var b=this.c7.item(a);this.c7.remove(a);for(var c=0;c<b.count();c++){b.__inner[c]()}b.clear()}},bg:function(a,b){var c=a;var d=this.df+b;this.du(d)},au:function(){if(this._b3==null){return}this.du(this.df);this._b3=null},$type:new $.ig.Type("DOMEventProxy",$$t.$b.$type)},true);$c("TouchPointInfo:d","Object",{init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$.ig.$op.init.call(this);this._a=b;this._b=c},init1:function(a){$.ig.$op.init.call(this)},_a:0,_b:0,$type:new $.ig.Type("TouchPointInfo",$.ig.$ot)},true);$c("TouchGestureRecognizer:f","Object",{init:function(a){this.p=new $$t.l;this.an=NaN;this.ao=NaN;this.am=NaN;this.ak=1;this.al=1;this.z=1;this.y=10;this.az=-1;this.ag=1;this.ah=1;this.ad=1;this.ae=NaN;this.af=NaN;this.r=false;this.o=null;this.av=800;this.ax=-1;this.ay=-1;$.ig.$op.init.call(this);this._a0=500;this._n=0;this.b=a},_n:0,p:null,u:0,v:0,ab:0,ac:0,w:0,x:0,an:0,ao:0,am:0,ak:0,al:0,z:0,y:0,aw:function(a){if(arguments.length===1){this.y=a;return a}else{return this.y}},at:function(){return this.u},au:function(){return this.v},bh:function(){return{__x:Math.abs(this.w-this.ab),__y:Math.abs(this.x-this.ac),$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName}},bf:function(a){var b=false;if(!$.ig.util.isNaN(this.ab)&&!$.ig.util.isNaN(this.ac)){this.w=a.__inner[0]._a;this.x=a.__inner[0]._b;if(Math.abs(a.__inner[0]._a-this.ab)>this.y||Math.abs(a.__inner[0]._b-this.ac)>this.y){b=true}}if(b){this.be()}},a7:function(a){var b=a.count();var c=this._n;var d=false;var e=false;var f=false;var g=false;var h=false;var i=false;var j=false;var k=false;var l=0;var m=0;var n=0;var o=this._n;if(b>0&&b<2){switch(this._n){case 5:this.r=false;c=4;e=true;j=true;break;case 0:c=4;e=true;break;case 2:c=1;j=true;g=true;break}}if(b>1){switch(this._n){case 5:this.r=false;c=2;h=true;k=true;break;case 4:f=true;c=2;h=true;break;case 0:c=2;h=true;break;case 1:c=2;i=true;h=true;break}}if(b==0){switch(this._n){case 4:if(this.s(new $$t.d(0,this.u,this.v))){c=0;f=true;if(this.doubleTapped!=null){this.doubleTapped(this,this.c())}}else{f=true;c=0}break;case 1:c=0;i=true;break;case 2:c=0;g=true;break;case 3:c=0;d=true;break}}if(k||this.r){if(j){if(this.panEnding!=null){this.panEnding(this,this.c())}if(this.manipulationEnding!=null){this.manipulationEnding(this,this.c())}}this.a2()}if(e){this.ab=a.__inner[0]._a;this.ac=a.__inner[0]._b}if(c==4){if(!$.ig.util.isNaN(this.ab)&&!$.ig.util.isNaN(this.ac)){this.w=a.__inner[0]._a;this.x=a.__inner[0]._b;if(Math.abs(a.__inner[0]._a-this.ab)>this.y||Math.abs(a.__inner[0]._b-this.ac)>this.y){f=true;j=true;c=1}}}var p=0;var q=0;for(var r=0;r<b;r++){p+=a.__inner[r]._a;q+=a.__inner[r]._b}p/=b;q/=b;if(b==0){p=this.ae;q=this.af}this.u=p;this.v=q;this.p.g(this.u,this.v,this.a1());if(h){var s=a.__inner[0]._a-a.__inner[1]._a;var t=a.__inner[0]._b-a.__inner[1]._b;this.an=Math.abs(s);this.ao=Math.abs(t);this.am=Math.sqrt(s*s+t*t);if(this.an<1){this.an=1}if(this.ao<1){this.ao=1}if(this.am<1){this.am=1}}if(c==2){var u=a.__inner[0]._a-a.__inner[1]._a;var v=a.__inner[0]._b-a.__inner[1]._b;l=Math.abs(u);m=Math.abs(v);n=Math.sqrt(u*u+v*v);if(l<1){l=1}if(m<1){m=1}if(n<1){n=1}this.ak=l/this.an;this.al=m/this.ao;this.z=n/this.am}else{this.an=NaN;this.ao=NaN;this.ak=1;this.al=1;this.ai=1;this.aj=1;this.aa=1}this._n=c;if(o==0&&this._n==1||this._n==2){if(this.manipulationStarting!=null){this.manipulationStarting(this,this.c())}}if(g){this.a6()}if(i){this.a5()}if(d){this.a4()}if(f){this.be()}if(j){this.bb()}if(e){this.ba()}if(h){this.bc()}if(this._n==2){this.ai=this.ak/this.ag;this.aj=this.al/this.ah;this.aa=this.z/this.ad;this.ar=this.u-this.ae;this.as=this.v-this.af;this.ag=this.ag*this.ai;this.ah=this.ah*this.aj;this.ad=this.ad*this.aa;this.ae=this.u;this.af=this.v;if(this.manipulationChanging!=null){this.manipulationChanging(this,this.c())}}if(this._n==1){this.ar=this.u-this.ae;this.as=this.v-this.af;this.ae=this.u;this.af=this.v;if(this.manipulationChanging!=null){this.manipulationChanging(this,this.c());
}}this.ae=this.u;this.af=this.v;if((i||g)&&this._n==0){if(this.manipulationEnding!=null){this.manipulationEnding(this,this.c())}}},az:0,ap:0,aq:0,s:function(a){var b=this.a1();if(b-this.az<500){if(Math.abs(a._a-this.ap)<50&&Math.abs(a._b-this.aq)<50){return true}}this.ap=a._a;this.aq=a._b;this.az=b;return false},_a0:0,ba:function(){this.ay=this.a1();if(!this.q){this.q=true;this.b.executeDelayed(this.a3.runOn(this),1e3)}},a3:function(){if(!this.q){return}var a=this.a1();if(a-this.ay>=this._a0){this.a9()}else{this.b.executeDelayed(this.a3.runOn(this),this._a0-(a-this.ay))}},be:function(){this.q=false},a6:function(){this.p.f();if(this.zoomEnding!=null){this.zoomEnding(this,this.c())}},a9:function(){if(this.holdStarting!=null){this.holdStarting(this,this.c())}},ag:0,ah:0,ad:0,ae:0,af:0,bc:function(){this.p.f();this.a2();this.ag=1;this.ah=1;this.ad=1;this.ae=this.u;this.af=this.v;if(this.zoomStarting!=null){this.zoomStarting(this,this.c())}},a4:function(){if(this.holdEnding!=null){this.holdEnding(this,this.c())}},bb:function(){this.p.f();this.a2();this.ae=this.u;this.af=this.v;if(this.panStarting!=null){this.panStarting(this,this.c())}},r:false,bd:function(){if(this._n==5){this.r=true}},a2:function(){this.r=false;if(this._n==5){this._n=0}},o:null,av:0,ax:0,bg:function(){if(this._n!=5){this.r=false;return}if(this.o==null||this.ax==-1){this.a2();return}var a=this.a1();var b=a-this.ax;if(b<16){this.a8(this.bg.runOn(this));return}this.ax=a;var c=b/1e3;var d=this.av*c;var e=this.o;if(e._a>0){e._a-=d;if(e._a<0){e._a=0}}if(e._a<0){e._a+=d;if(e._a>0){e._a=0}}if(e._b>0){e._b-=d;if(e._b<0){e._b=0}}if(e._b<0){e._b+=d;if(e._b>0){e._b=0}}if(e._a==0&&e._b==0||this.r){this._n=0;if(this.panEnding!=null){this.panEnding(this,this.c())}if(this.manipulationEnding!=null){this.manipulationEnding(this,this.c())}this.a2();return}this.u+=e._a*c;this.v+=e._b*c;this.ar=this.u-this.ae;this.as=this.v-this.af;this.ae=this.u;this.af=this.v;if(this.manipulationChanging!=null){this.manipulationChanging(this,this.c())}this.a8(this.bg.runOn(this))},b:null,q:false,ay:0,t:function(a){this.r=false;if(this._n==5){this.a2()}this.ax=this.a1();this.o=a;this._n=5;this.a8(this.bg.runOn(this));if(this.flingStarting!=null){if(!this.flingStarting(this,this.c())){this.a2();return false}}return true},a8:function(a){this.b.enqueueAnimationAction(a)},a5:function(){var a=this.p.b(this.a1());if((a._a>5||a._a<-5||a._b>5||a._b<-5)&&this._n==0){this._n=1;if(!this.t(a)){if(this._n==0){if(this.panEnding!=null){this.panEnding(this,this.c())}if(this.manipulationEnding!=null){this.manipulationEnding(this,this.c())}}}}else{if(this.panEnding!=null){this.panEnding(this,this.c())}if(this._n==0){if(this.manipulationEnding!=null){this.manipulationEnding(this,this.c())}}}},c:function(){var a=new $$t.i;a._a=this.u;a._b=this.v;a._d=this.ai;a._e=this.aj;a._c=this.aa;a._f=this.ar;a._g=this.as;a._h=this.o!=null?this.o._a:this.p.b(this.a1())._a;a._i=this.o!=null?this.o._b:this.p.b(this.a1())._b;return a},a1:function(){return this.b.getCurrentRelativeTime()},holdStarting:null,holdEnding:null,panStarting:null,manipulationStarting:null,manipulationChanging:null,manipulationEnding:null,panEnding:null,zoomStarting:null,zoomEnding:null,flingStarting:null,doubleTapped:null,ai:0,aj:0,aa:0,ar:0,as:0,$type:new $.ig.Type("TouchGestureRecognizer",$.ig.$ot)},true);$c("TouchGestureEventArgs:i","Object",{init:function(){$.ig.$op.init.call(this)},_d:0,_e:0,_c:0,_f:0,_g:0,_a:0,_b:0,_h:0,_i:0,$type:new $.ig.Type("TouchGestureEventArgs",$.ig.$ot)},true);$c("TouchHistoryItem:j","Object",{init:function(){$.ig.$op.init.call(this)},_a:0,_b:0,_c:0,$type:new $.ig.Type("TouchHistoryItem",$.ig.$ot)},true);$c("TouchVelocityReading:k","Object",{init:function(){$.ig.$op.init.call(this)},_a:0,_b:0,$type:new $.ig.Type("TouchVelocityReading",$.ig.$ot)},true);$c("TouchVelocityTracker:l","Object",{init:function(){this.a=new Array(5);this.d=0;$.ig.$op.init.call(this)},a:null,d:0,g:function(a,b,c){if($.ig.util.isNaN(a)||$.ig.util.isNaN(b)){return}var d=function(){var $ret=new $$t.j;$ret._a=a;$ret._b=b;$ret._c=c;return $ret}();this.a[this.d]=d;this.d++;if(this.d>5-1){this.d=0}},f:function(){this.d=0;for(var a=0;a<5;a++){this.a[a]=null}},b:function(a){var b=a;var c=NaN;var d=NaN;var e=NaN;var f=NaN;var g=0;var h=0;var i=true;for(var j=0;j<5;j++){if(this.a[j]==null){continue}var k=this.a[j]._c-b>300;if(k){continue}if(i){i=false;c=this.a[j]._a;d=this.a[j]._a;e=this.a[j]._b;f=this.a[j]._b;g=this.a[j]._c;h=this.a[j]._c}else{if(this.a[j]._c<g){g=this.a[j]._c;d=this.a[j]._a;f=this.a[j]._b}if(this.a[j]._c>h){h=this.a[j]._c;c=this.a[j]._a;e=this.a[j]._b}}}if(g==h||$.ig.util.isNaN(c)||$.ig.util.isNaN(d)||$.ig.util.isNaN(e)||$.ig.util.isNaN(f)){return function(){var $ret=new $$t.k;$ret._a=NaN;$ret._b=NaN;return $ret}()}return function(){var $ret=new $$t.k;$ret._a=(c-d)/((h-g)/1e3);$ret._b=(e-f)/((h-g)/1e3);return $ret}()},$type:new $.ig.Type("TouchVelocityTracker",$.ig.$ot)},true);$c("KeyEventArgs:n","EventArgs",{h:0,m:0,j:null,g:null,b:false,init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$n.init1.call(this,1,b.which,b.altKey,b.shiftKey,b.ctrlKey,b);this.g=b},init1:function(a,b,c,d,e,f){this.j=null;$$0.$w.init.call(this);this.j=f;this.h=b;this.m=$$t.$n.n(c,d,e)},alt:function(){return 1==(this.m&1)},ctrl:function(){return 2==(this.m&2)},keyCode:function(){return this.h},modifiers:function(){return this.m},shift:function(){return 4==(this.m&4)},defaultPrevented:function(){return this.b},preventDefault:function(){this.g.preventDefault();this.b=true},stopPropagation:function(){this.g.stopPropagation()},n:function(a,b,c){var d=0;if(a){d|=1}if(b){d|=4}if(c){d|=2}return d},$type:new $.ig.Type("KeyEventArgs",$$0.$w.$type)},true);$$t.$b.bs=false;$$t.$b.bt=false;$$t.$b.cb=0;$$t.$b.b8=0;$$t.$a.df=0;$$t.$c.dc=0});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});