// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25726__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25725 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__25725,(0),null);
var body = cljs.core.nthnext.call(null,vec__25725,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25727__i = 0, G__25727__a = new Array(arguments.length -  0);
while (G__25727__i < G__25727__a.length) {G__25727__a[G__25727__i] = arguments[G__25727__i + 0]; ++G__25727__i;}
  args = new cljs.core.IndexedSeq(G__25727__a,0);
} 
return G__25726__delegate.call(this,args);};
G__25726.cljs$lang$maxFixedArity = 0;
G__25726.cljs$lang$applyTo = (function (arglist__25728){
var args = cljs.core.seq(arglist__25728);
return G__25726__delegate(args);
});
G__25726.cljs$core$IFn$_invoke$arity$variadic = G__25726__delegate;
return G__25726;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17577__auto__ = (function sablono$core$update_arglists_$_iter__25733(s__25734){
return (new cljs.core.LazySeq(null,(function (){
var s__25734__$1 = s__25734;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25734__$1);
if(temp__4425__auto__){
var s__25734__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25734__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__25734__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__25736 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__25735 = (0);
while(true){
if((i__25735 < size__17576__auto__)){
var args = cljs.core._nth.call(null,c__17575__auto__,i__25735);
cljs.core.chunk_append.call(null,b__25736,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25737 = (i__25735 + (1));
i__25735 = G__25737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25736),sablono$core$update_arglists_$_iter__25733.call(null,cljs.core.chunk_rest.call(null,s__25734__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25736),null);
}
} else {
var args = cljs.core.first.call(null,s__25734__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25733.call(null,cljs.core.rest.call(null,s__25734__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17870__auto__ = [];
var len__17863__auto___25743 = arguments.length;
var i__17864__auto___25744 = (0);
while(true){
if((i__17864__auto___25744 < len__17863__auto___25743)){
args__17870__auto__.push((arguments[i__17864__auto___25744]));

var G__25745 = (i__17864__auto___25744 + (1));
i__17864__auto___25744 = G__25745;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17577__auto__ = (function sablono$core$iter__25739(s__25740){
return (new cljs.core.LazySeq(null,(function (){
var s__25740__$1 = s__25740;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25740__$1);
if(temp__4425__auto__){
var s__25740__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25740__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__25740__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__25742 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__25741 = (0);
while(true){
if((i__25741 < size__17576__auto__)){
var style = cljs.core._nth.call(null,c__17575__auto__,i__25741);
cljs.core.chunk_append.call(null,b__25742,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25746 = (i__25741 + (1));
i__25741 = G__25746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25742),sablono$core$iter__25739.call(null,cljs.core.chunk_rest.call(null,s__25740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25742),null);
}
} else {
var style = cljs.core.first.call(null,s__25740__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25739.call(null,cljs.core.rest.call(null,s__25740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25738){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25738));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25747 = (function sablono$core$link_to25747(var_args){
var args__17870__auto__ = [];
var len__17863__auto___25750 = arguments.length;
var i__17864__auto___25751 = (0);
while(true){
if((i__17864__auto___25751 < len__17863__auto___25750)){
args__17870__auto__.push((arguments[i__17864__auto___25751]));

var G__25752 = (i__17864__auto___25751 + (1));
i__17864__auto___25751 = G__25752;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.link_to25747.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.link_to25747.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25747.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25747.cljs$lang$applyTo = (function (seq25748){
var G__25749 = cljs.core.first.call(null,seq25748);
var seq25748__$1 = cljs.core.next.call(null,seq25748);
return sablono.core.link_to25747.cljs$core$IFn$_invoke$arity$variadic(G__25749,seq25748__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25747);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25753 = (function sablono$core$mail_to25753(var_args){
var args__17870__auto__ = [];
var len__17863__auto___25758 = arguments.length;
var i__17864__auto___25759 = (0);
while(true){
if((i__17864__auto___25759 < len__17863__auto___25758)){
args__17870__auto__.push((arguments[i__17864__auto___25759]));

var G__25760 = (i__17864__auto___25759 + (1));
i__17864__auto___25759 = G__25760;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.mail_to25753.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.mail_to25753.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25756){
var vec__25757 = p__25756;
var content = cljs.core.nth.call(null,vec__25757,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16805__auto__ = content;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25753.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25753.cljs$lang$applyTo = (function (seq25754){
var G__25755 = cljs.core.first.call(null,seq25754);
var seq25754__$1 = cljs.core.next.call(null,seq25754);
return sablono.core.mail_to25753.cljs$core$IFn$_invoke$arity$variadic(G__25755,seq25754__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25753);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25761 = (function sablono$core$unordered_list25761(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17577__auto__ = (function sablono$core$unordered_list25761_$_iter__25766(s__25767){
return (new cljs.core.LazySeq(null,(function (){
var s__25767__$1 = s__25767;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25767__$1);
if(temp__4425__auto__){
var s__25767__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25767__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__25767__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__25769 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__25768 = (0);
while(true){
if((i__25768 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__25768);
cljs.core.chunk_append.call(null,b__25769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25770 = (i__25768 + (1));
i__25768 = G__25770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25769),sablono$core$unordered_list25761_$_iter__25766.call(null,cljs.core.chunk_rest.call(null,s__25767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25769),null);
}
} else {
var x = cljs.core.first.call(null,s__25767__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25761_$_iter__25766.call(null,cljs.core.rest.call(null,s__25767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25761);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25771 = (function sablono$core$ordered_list25771(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17577__auto__ = (function sablono$core$ordered_list25771_$_iter__25776(s__25777){
return (new cljs.core.LazySeq(null,(function (){
var s__25777__$1 = s__25777;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25777__$1);
if(temp__4425__auto__){
var s__25777__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25777__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__25777__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__25779 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__25778 = (0);
while(true){
if((i__25778 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__25778);
cljs.core.chunk_append.call(null,b__25779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25780 = (i__25778 + (1));
i__25778 = G__25780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25779),sablono$core$ordered_list25771_$_iter__25776.call(null,cljs.core.chunk_rest.call(null,s__25777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25779),null);
}
} else {
var x = cljs.core.first.call(null,s__25777__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25771_$_iter__25776.call(null,cljs.core.rest.call(null,s__25777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25771);
/**
 * Create an image element.
 */
sablono.core.image25781 = (function sablono$core$image25781(var_args){
var args25782 = [];
var len__17863__auto___25785 = arguments.length;
var i__17864__auto___25786 = (0);
while(true){
if((i__17864__auto___25786 < len__17863__auto___25785)){
args25782.push((arguments[i__17864__auto___25786]));

var G__25787 = (i__17864__auto___25786 + (1));
i__17864__auto___25786 = G__25787;
continue;
} else {
}
break;
}

var G__25784 = args25782.length;
switch (G__25784) {
case 1:
return sablono.core.image25781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25782.length)].join('')));

}
});

sablono.core.image25781.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25781.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25781.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25781);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25789_SHARP_,p2__25790_SHARP_){
return [cljs.core.str(p1__25789_SHARP_),cljs.core.str("["),cljs.core.str(p2__25790_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25791_SHARP_,p2__25792_SHARP_){
return [cljs.core.str(p1__25791_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25792_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25793 = (function sablono$core$color_field25793(var_args){
var args25794 = [];
var len__17863__auto___25861 = arguments.length;
var i__17864__auto___25862 = (0);
while(true){
if((i__17864__auto___25862 < len__17863__auto___25861)){
args25794.push((arguments[i__17864__auto___25862]));

var G__25863 = (i__17864__auto___25862 + (1));
i__17864__auto___25862 = G__25863;
continue;
} else {
}
break;
}

var G__25796 = args25794.length;
switch (G__25796) {
case 1:
return sablono.core.color_field25793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25794.length)].join('')));

}
});

sablono.core.color_field25793.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.color_field25793.call(null,name__25714__auto__,null);
});

sablono.core.color_field25793.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.color_field25793.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25793);

/**
 * Creates a date input field.
 */
sablono.core.date_field25797 = (function sablono$core$date_field25797(var_args){
var args25798 = [];
var len__17863__auto___25865 = arguments.length;
var i__17864__auto___25866 = (0);
while(true){
if((i__17864__auto___25866 < len__17863__auto___25865)){
args25798.push((arguments[i__17864__auto___25866]));

var G__25867 = (i__17864__auto___25866 + (1));
i__17864__auto___25866 = G__25867;
continue;
} else {
}
break;
}

var G__25800 = args25798.length;
switch (G__25800) {
case 1:
return sablono.core.date_field25797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25798.length)].join('')));

}
});

sablono.core.date_field25797.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.date_field25797.call(null,name__25714__auto__,null);
});

sablono.core.date_field25797.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.date_field25797.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25797);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25801 = (function sablono$core$datetime_field25801(var_args){
var args25802 = [];
var len__17863__auto___25869 = arguments.length;
var i__17864__auto___25870 = (0);
while(true){
if((i__17864__auto___25870 < len__17863__auto___25869)){
args25802.push((arguments[i__17864__auto___25870]));

var G__25871 = (i__17864__auto___25870 + (1));
i__17864__auto___25870 = G__25871;
continue;
} else {
}
break;
}

var G__25804 = args25802.length;
switch (G__25804) {
case 1:
return sablono.core.datetime_field25801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25802.length)].join('')));

}
});

sablono.core.datetime_field25801.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.datetime_field25801.call(null,name__25714__auto__,null);
});

sablono.core.datetime_field25801.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.datetime_field25801.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25801);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25805 = (function sablono$core$datetime_local_field25805(var_args){
var args25806 = [];
var len__17863__auto___25873 = arguments.length;
var i__17864__auto___25874 = (0);
while(true){
if((i__17864__auto___25874 < len__17863__auto___25873)){
args25806.push((arguments[i__17864__auto___25874]));

var G__25875 = (i__17864__auto___25874 + (1));
i__17864__auto___25874 = G__25875;
continue;
} else {
}
break;
}

var G__25808 = args25806.length;
switch (G__25808) {
case 1:
return sablono.core.datetime_local_field25805.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25806.length)].join('')));

}
});

sablono.core.datetime_local_field25805.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.datetime_local_field25805.call(null,name__25714__auto__,null);
});

sablono.core.datetime_local_field25805.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.datetime_local_field25805.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25805);

/**
 * Creates a email input field.
 */
sablono.core.email_field25809 = (function sablono$core$email_field25809(var_args){
var args25810 = [];
var len__17863__auto___25877 = arguments.length;
var i__17864__auto___25878 = (0);
while(true){
if((i__17864__auto___25878 < len__17863__auto___25877)){
args25810.push((arguments[i__17864__auto___25878]));

var G__25879 = (i__17864__auto___25878 + (1));
i__17864__auto___25878 = G__25879;
continue;
} else {
}
break;
}

var G__25812 = args25810.length;
switch (G__25812) {
case 1:
return sablono.core.email_field25809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25810.length)].join('')));

}
});

sablono.core.email_field25809.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.email_field25809.call(null,name__25714__auto__,null);
});

sablono.core.email_field25809.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.email_field25809.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25809);

/**
 * Creates a file input field.
 */
sablono.core.file_field25813 = (function sablono$core$file_field25813(var_args){
var args25814 = [];
var len__17863__auto___25881 = arguments.length;
var i__17864__auto___25882 = (0);
while(true){
if((i__17864__auto___25882 < len__17863__auto___25881)){
args25814.push((arguments[i__17864__auto___25882]));

var G__25883 = (i__17864__auto___25882 + (1));
i__17864__auto___25882 = G__25883;
continue;
} else {
}
break;
}

var G__25816 = args25814.length;
switch (G__25816) {
case 1:
return sablono.core.file_field25813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25814.length)].join('')));

}
});

sablono.core.file_field25813.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.file_field25813.call(null,name__25714__auto__,null);
});

sablono.core.file_field25813.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.file_field25813.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25813);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25817 = (function sablono$core$hidden_field25817(var_args){
var args25818 = [];
var len__17863__auto___25885 = arguments.length;
var i__17864__auto___25886 = (0);
while(true){
if((i__17864__auto___25886 < len__17863__auto___25885)){
args25818.push((arguments[i__17864__auto___25886]));

var G__25887 = (i__17864__auto___25886 + (1));
i__17864__auto___25886 = G__25887;
continue;
} else {
}
break;
}

var G__25820 = args25818.length;
switch (G__25820) {
case 1:
return sablono.core.hidden_field25817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25818.length)].join('')));

}
});

sablono.core.hidden_field25817.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.hidden_field25817.call(null,name__25714__auto__,null);
});

sablono.core.hidden_field25817.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.hidden_field25817.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25817);

/**
 * Creates a month input field.
 */
sablono.core.month_field25821 = (function sablono$core$month_field25821(var_args){
var args25822 = [];
var len__17863__auto___25889 = arguments.length;
var i__17864__auto___25890 = (0);
while(true){
if((i__17864__auto___25890 < len__17863__auto___25889)){
args25822.push((arguments[i__17864__auto___25890]));

var G__25891 = (i__17864__auto___25890 + (1));
i__17864__auto___25890 = G__25891;
continue;
} else {
}
break;
}

var G__25824 = args25822.length;
switch (G__25824) {
case 1:
return sablono.core.month_field25821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25822.length)].join('')));

}
});

sablono.core.month_field25821.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.month_field25821.call(null,name__25714__auto__,null);
});

sablono.core.month_field25821.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.month_field25821.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25821);

/**
 * Creates a number input field.
 */
sablono.core.number_field25825 = (function sablono$core$number_field25825(var_args){
var args25826 = [];
var len__17863__auto___25893 = arguments.length;
var i__17864__auto___25894 = (0);
while(true){
if((i__17864__auto___25894 < len__17863__auto___25893)){
args25826.push((arguments[i__17864__auto___25894]));

var G__25895 = (i__17864__auto___25894 + (1));
i__17864__auto___25894 = G__25895;
continue;
} else {
}
break;
}

var G__25828 = args25826.length;
switch (G__25828) {
case 1:
return sablono.core.number_field25825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25826.length)].join('')));

}
});

sablono.core.number_field25825.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.number_field25825.call(null,name__25714__auto__,null);
});

sablono.core.number_field25825.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.number_field25825.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25825);

/**
 * Creates a password input field.
 */
sablono.core.password_field25829 = (function sablono$core$password_field25829(var_args){
var args25830 = [];
var len__17863__auto___25897 = arguments.length;
var i__17864__auto___25898 = (0);
while(true){
if((i__17864__auto___25898 < len__17863__auto___25897)){
args25830.push((arguments[i__17864__auto___25898]));

var G__25899 = (i__17864__auto___25898 + (1));
i__17864__auto___25898 = G__25899;
continue;
} else {
}
break;
}

var G__25832 = args25830.length;
switch (G__25832) {
case 1:
return sablono.core.password_field25829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25830.length)].join('')));

}
});

sablono.core.password_field25829.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.password_field25829.call(null,name__25714__auto__,null);
});

sablono.core.password_field25829.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.password_field25829.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25829);

/**
 * Creates a range input field.
 */
sablono.core.range_field25833 = (function sablono$core$range_field25833(var_args){
var args25834 = [];
var len__17863__auto___25901 = arguments.length;
var i__17864__auto___25902 = (0);
while(true){
if((i__17864__auto___25902 < len__17863__auto___25901)){
args25834.push((arguments[i__17864__auto___25902]));

var G__25903 = (i__17864__auto___25902 + (1));
i__17864__auto___25902 = G__25903;
continue;
} else {
}
break;
}

var G__25836 = args25834.length;
switch (G__25836) {
case 1:
return sablono.core.range_field25833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25834.length)].join('')));

}
});

sablono.core.range_field25833.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.range_field25833.call(null,name__25714__auto__,null);
});

sablono.core.range_field25833.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.range_field25833.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25833);

/**
 * Creates a search input field.
 */
sablono.core.search_field25837 = (function sablono$core$search_field25837(var_args){
var args25838 = [];
var len__17863__auto___25905 = arguments.length;
var i__17864__auto___25906 = (0);
while(true){
if((i__17864__auto___25906 < len__17863__auto___25905)){
args25838.push((arguments[i__17864__auto___25906]));

var G__25907 = (i__17864__auto___25906 + (1));
i__17864__auto___25906 = G__25907;
continue;
} else {
}
break;
}

var G__25840 = args25838.length;
switch (G__25840) {
case 1:
return sablono.core.search_field25837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25838.length)].join('')));

}
});

sablono.core.search_field25837.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.search_field25837.call(null,name__25714__auto__,null);
});

sablono.core.search_field25837.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.search_field25837.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25837);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25841 = (function sablono$core$tel_field25841(var_args){
var args25842 = [];
var len__17863__auto___25909 = arguments.length;
var i__17864__auto___25910 = (0);
while(true){
if((i__17864__auto___25910 < len__17863__auto___25909)){
args25842.push((arguments[i__17864__auto___25910]));

var G__25911 = (i__17864__auto___25910 + (1));
i__17864__auto___25910 = G__25911;
continue;
} else {
}
break;
}

var G__25844 = args25842.length;
switch (G__25844) {
case 1:
return sablono.core.tel_field25841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25842.length)].join('')));

}
});

sablono.core.tel_field25841.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.tel_field25841.call(null,name__25714__auto__,null);
});

sablono.core.tel_field25841.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.tel_field25841.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25841);

/**
 * Creates a text input field.
 */
sablono.core.text_field25845 = (function sablono$core$text_field25845(var_args){
var args25846 = [];
var len__17863__auto___25913 = arguments.length;
var i__17864__auto___25914 = (0);
while(true){
if((i__17864__auto___25914 < len__17863__auto___25913)){
args25846.push((arguments[i__17864__auto___25914]));

var G__25915 = (i__17864__auto___25914 + (1));
i__17864__auto___25914 = G__25915;
continue;
} else {
}
break;
}

var G__25848 = args25846.length;
switch (G__25848) {
case 1:
return sablono.core.text_field25845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25846.length)].join('')));

}
});

sablono.core.text_field25845.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.text_field25845.call(null,name__25714__auto__,null);
});

sablono.core.text_field25845.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.text_field25845.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25845);

/**
 * Creates a time input field.
 */
sablono.core.time_field25849 = (function sablono$core$time_field25849(var_args){
var args25850 = [];
var len__17863__auto___25917 = arguments.length;
var i__17864__auto___25918 = (0);
while(true){
if((i__17864__auto___25918 < len__17863__auto___25917)){
args25850.push((arguments[i__17864__auto___25918]));

var G__25919 = (i__17864__auto___25918 + (1));
i__17864__auto___25918 = G__25919;
continue;
} else {
}
break;
}

var G__25852 = args25850.length;
switch (G__25852) {
case 1:
return sablono.core.time_field25849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25850.length)].join('')));

}
});

sablono.core.time_field25849.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.time_field25849.call(null,name__25714__auto__,null);
});

sablono.core.time_field25849.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.time_field25849.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25849);

/**
 * Creates a url input field.
 */
sablono.core.url_field25853 = (function sablono$core$url_field25853(var_args){
var args25854 = [];
var len__17863__auto___25921 = arguments.length;
var i__17864__auto___25922 = (0);
while(true){
if((i__17864__auto___25922 < len__17863__auto___25921)){
args25854.push((arguments[i__17864__auto___25922]));

var G__25923 = (i__17864__auto___25922 + (1));
i__17864__auto___25922 = G__25923;
continue;
} else {
}
break;
}

var G__25856 = args25854.length;
switch (G__25856) {
case 1:
return sablono.core.url_field25853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25854.length)].join('')));

}
});

sablono.core.url_field25853.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.url_field25853.call(null,name__25714__auto__,null);
});

sablono.core.url_field25853.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.url_field25853.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25853);

/**
 * Creates a week input field.
 */
sablono.core.week_field25857 = (function sablono$core$week_field25857(var_args){
var args25858 = [];
var len__17863__auto___25925 = arguments.length;
var i__17864__auto___25926 = (0);
while(true){
if((i__17864__auto___25926 < len__17863__auto___25925)){
args25858.push((arguments[i__17864__auto___25926]));

var G__25927 = (i__17864__auto___25926 + (1));
i__17864__auto___25926 = G__25927;
continue;
} else {
}
break;
}

var G__25860 = args25858.length;
switch (G__25860) {
case 1:
return sablono.core.week_field25857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25858.length)].join('')));

}
});

sablono.core.week_field25857.cljs$core$IFn$_invoke$arity$1 = (function (name__25714__auto__){
return sablono.core.week_field25857.call(null,name__25714__auto__,null);
});

sablono.core.week_field25857.cljs$core$IFn$_invoke$arity$2 = (function (name__25714__auto__,value__25715__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25714__auto__,value__25715__auto__);
});

sablono.core.week_field25857.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25857);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25929 = (function sablono$core$check_box25929(var_args){
var args25930 = [];
var len__17863__auto___25933 = arguments.length;
var i__17864__auto___25934 = (0);
while(true){
if((i__17864__auto___25934 < len__17863__auto___25933)){
args25930.push((arguments[i__17864__auto___25934]));

var G__25935 = (i__17864__auto___25934 + (1));
i__17864__auto___25934 = G__25935;
continue;
} else {
}
break;
}

var G__25932 = args25930.length;
switch (G__25932) {
case 1:
return sablono.core.check_box25929.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25929.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25929.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25930.length)].join('')));

}
});

sablono.core.check_box25929.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25929.call(null,name,null);
});

sablono.core.check_box25929.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25929.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25929.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25929.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25929);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25937 = (function sablono$core$radio_button25937(var_args){
var args25938 = [];
var len__17863__auto___25941 = arguments.length;
var i__17864__auto___25942 = (0);
while(true){
if((i__17864__auto___25942 < len__17863__auto___25941)){
args25938.push((arguments[i__17864__auto___25942]));

var G__25943 = (i__17864__auto___25942 + (1));
i__17864__auto___25942 = G__25943;
continue;
} else {
}
break;
}

var G__25940 = args25938.length;
switch (G__25940) {
case 1:
return sablono.core.radio_button25937.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25937.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25937.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25938.length)].join('')));

}
});

sablono.core.radio_button25937.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25937.call(null,group,null);
});

sablono.core.radio_button25937.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25937.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25937.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25937.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25937);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25945 = (function sablono$core$select_options25945(coll){
var iter__17577__auto__ = (function sablono$core$select_options25945_$_iter__25954(s__25955){
return (new cljs.core.LazySeq(null,(function (){
var s__25955__$1 = s__25955;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25955__$1);
if(temp__4425__auto__){
var s__25955__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25955__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__25955__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__25957 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__25956 = (0);
while(true){
if((i__25956 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__25956);
cljs.core.chunk_append.call(null,b__25957,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25960 = x;
var text = cljs.core.nth.call(null,vec__25960,(0),null);
var val = cljs.core.nth.call(null,vec__25960,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25960,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25945.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25962 = (i__25956 + (1));
i__25956 = G__25962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25957),sablono$core$select_options25945_$_iter__25954.call(null,cljs.core.chunk_rest.call(null,s__25955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25957),null);
}
} else {
var x = cljs.core.first.call(null,s__25955__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25961 = x;
var text = cljs.core.nth.call(null,vec__25961,(0),null);
var val = cljs.core.nth.call(null,vec__25961,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25961,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25945.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25945_$_iter__25954.call(null,cljs.core.rest.call(null,s__25955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25945);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25963 = (function sablono$core$drop_down25963(var_args){
var args25964 = [];
var len__17863__auto___25967 = arguments.length;
var i__17864__auto___25968 = (0);
while(true){
if((i__17864__auto___25968 < len__17863__auto___25967)){
args25964.push((arguments[i__17864__auto___25968]));

var G__25969 = (i__17864__auto___25968 + (1));
i__17864__auto___25968 = G__25969;
continue;
} else {
}
break;
}

var G__25966 = args25964.length;
switch (G__25966) {
case 2:
return sablono.core.drop_down25963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25963.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25964.length)].join('')));

}
});

sablono.core.drop_down25963.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25963.call(null,name,options,null);
});

sablono.core.drop_down25963.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25963.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25963);
/**
 * Creates a text area element.
 */
sablono.core.text_area25971 = (function sablono$core$text_area25971(var_args){
var args25972 = [];
var len__17863__auto___25975 = arguments.length;
var i__17864__auto___25976 = (0);
while(true){
if((i__17864__auto___25976 < len__17863__auto___25975)){
args25972.push((arguments[i__17864__auto___25976]));

var G__25977 = (i__17864__auto___25976 + (1));
i__17864__auto___25976 = G__25977;
continue;
} else {
}
break;
}

var G__25974 = args25972.length;
switch (G__25974) {
case 1:
return sablono.core.text_area25971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25972.length)].join('')));

}
});

sablono.core.text_area25971.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25971.call(null,name,null);
});

sablono.core.text_area25971.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area25971.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25971);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25979 = (function sablono$core$label25979(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25979);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25980 = (function sablono$core$submit_button25980(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25980);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25981 = (function sablono$core$reset_button25981(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25981);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25982 = (function sablono$core$form_to25982(var_args){
var args__17870__auto__ = [];
var len__17863__auto___25987 = arguments.length;
var i__17864__auto___25988 = (0);
while(true){
if((i__17864__auto___25988 < len__17863__auto___25987)){
args__17870__auto__.push((arguments[i__17864__auto___25988]));

var G__25989 = (i__17864__auto___25988 + (1));
i__17864__auto___25988 = G__25989;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.form_to25982.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.form_to25982.cljs$core$IFn$_invoke$arity$variadic = (function (p__25985,body){
var vec__25986 = p__25985;
var method = cljs.core.nth.call(null,vec__25986,(0),null);
var action = cljs.core.nth.call(null,vec__25986,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25982.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25982.cljs$lang$applyTo = (function (seq25983){
var G__25984 = cljs.core.first.call(null,seq25983);
var seq25983__$1 = cljs.core.next.call(null,seq25983);
return sablono.core.form_to25982.cljs$core$IFn$_invoke$arity$variadic(G__25984,seq25983__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25982);

//# sourceMappingURL=core.js.map?rel=1455030510211