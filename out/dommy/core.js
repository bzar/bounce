// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3443__auto__ = elem.textContent;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6329 = dommy.template.__GT_node_like.call(null,parent);G__6329.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__6329;
});
var append_BANG___3 = (function() { 
var G__6334__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6330_6335 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6331_6336 = null;var count__6332_6337 = 0;var i__6333_6338 = 0;while(true){
if((i__6333_6338 < count__6332_6337))
{var c_6339 = cljs.core._nth.call(null,chunk__6331_6336,i__6333_6338);append_BANG_.call(null,parent__$1,c_6339);
{
var G__6340 = seq__6330_6335;
var G__6341 = chunk__6331_6336;
var G__6342 = count__6332_6337;
var G__6343 = (i__6333_6338 + 1);
seq__6330_6335 = G__6340;
chunk__6331_6336 = G__6341;
count__6332_6337 = G__6342;
i__6333_6338 = G__6343;
continue;
}
} else
{var temp__4092__auto___6344 = cljs.core.seq.call(null,seq__6330_6335);if(temp__4092__auto___6344)
{var seq__6330_6345__$1 = temp__4092__auto___6344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6330_6345__$1))
{var c__4191__auto___6346 = cljs.core.chunk_first.call(null,seq__6330_6345__$1);{
var G__6347 = cljs.core.chunk_rest.call(null,seq__6330_6345__$1);
var G__6348 = c__4191__auto___6346;
var G__6349 = cljs.core.count.call(null,c__4191__auto___6346);
var G__6350 = 0;
seq__6330_6335 = G__6347;
chunk__6331_6336 = G__6348;
count__6332_6337 = G__6349;
i__6333_6338 = G__6350;
continue;
}
} else
{var c_6351 = cljs.core.first.call(null,seq__6330_6345__$1);append_BANG_.call(null,parent__$1,c_6351);
{
var G__6352 = cljs.core.next.call(null,seq__6330_6345__$1);
var G__6353 = null;
var G__6354 = 0;
var G__6355 = 0;
seq__6330_6335 = G__6352;
chunk__6331_6336 = G__6353;
count__6332_6337 = G__6354;
i__6333_6338 = G__6355;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6334 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6334__delegate.call(this,parent,child,more_children);};
G__6334.cljs$lang$maxFixedArity = 2;
G__6334.cljs$lang$applyTo = (function (arglist__6356){
var parent = cljs.core.first(arglist__6356);
arglist__6356 = cljs.core.next(arglist__6356);
var child = cljs.core.first(arglist__6356);
var more_children = cljs.core.rest(arglist__6356);
return G__6334__delegate(parent,child,more_children);
});
G__6334.cljs$core$IFn$_invoke$arity$variadic = G__6334__delegate;
return G__6334;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__6365__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6361_6366 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6362_6367 = null;var count__6363_6368 = 0;var i__6364_6369 = 0;while(true){
if((i__6364_6369 < count__6363_6368))
{var c_6370 = cljs.core._nth.call(null,chunk__6362_6367,i__6364_6369);prepend_BANG_.call(null,parent__$1,c_6370);
{
var G__6371 = seq__6361_6366;
var G__6372 = chunk__6362_6367;
var G__6373 = count__6363_6368;
var G__6374 = (i__6364_6369 + 1);
seq__6361_6366 = G__6371;
chunk__6362_6367 = G__6372;
count__6363_6368 = G__6373;
i__6364_6369 = G__6374;
continue;
}
} else
{var temp__4092__auto___6375 = cljs.core.seq.call(null,seq__6361_6366);if(temp__4092__auto___6375)
{var seq__6361_6376__$1 = temp__4092__auto___6375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6361_6376__$1))
{var c__4191__auto___6377 = cljs.core.chunk_first.call(null,seq__6361_6376__$1);{
var G__6378 = cljs.core.chunk_rest.call(null,seq__6361_6376__$1);
var G__6379 = c__4191__auto___6377;
var G__6380 = cljs.core.count.call(null,c__4191__auto___6377);
var G__6381 = 0;
seq__6361_6366 = G__6378;
chunk__6362_6367 = G__6379;
count__6363_6368 = G__6380;
i__6364_6369 = G__6381;
continue;
}
} else
{var c_6382 = cljs.core.first.call(null,seq__6361_6376__$1);prepend_BANG_.call(null,parent__$1,c_6382);
{
var G__6383 = cljs.core.next.call(null,seq__6361_6376__$1);
var G__6384 = null;
var G__6385 = 0;
var G__6386 = 0;
seq__6361_6366 = G__6383;
chunk__6362_6367 = G__6384;
count__6363_6368 = G__6385;
i__6364_6369 = G__6386;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6365 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6365__delegate.call(this,parent,child,more_children);};
G__6365.cljs$lang$maxFixedArity = 2;
G__6365.cljs$lang$applyTo = (function (arglist__6387){
var parent = cljs.core.first(arglist__6387);
arglist__6387 = cljs.core.next(arglist__6387);
var child = cljs.core.first(arglist__6387);
var more_children = cljs.core.rest(arglist__6387);
return G__6365__delegate(parent,child,more_children);
});
G__6365.cljs$core$IFn$_invoke$arity$variadic = G__6365__delegate;
return G__6365;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___6388 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___6388))
{var next_6389 = temp__4090__auto___6388;parent.insertBefore(actual_node,next_6389);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__6391 = dommy.template.__GT_node_like.call(null,parent);G__6391.innerHTML = "";
dommy.core.append_BANG_.call(null,G__6391,node_like);
return G__6391;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__6393 = elem__$1.parentNode;G__6393.removeChild(elem__$1);
return G__6393;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6399){var vec__6400 = p__6399;var k = cljs.core.nth.call(null,vec__6400,0,null);var v = cljs.core.nth.call(null,vec__6400,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t6401 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t6401 = (function (v,k,vec__6400,p__6399,container,key_selectors_map,template,selector_map,meta6402){
this.v = v;
this.k = k;
this.vec__6400 = vec__6400;
this.p__6399 = p__6399;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta6402 = meta6402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t6401.cljs$lang$type = true;
dommy.core.t6401.cljs$lang$ctorStr = "dommy.core/t6401";
dommy.core.t6401.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t6401");
});
dommy.core.t6401.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t6401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6403){var self__ = this;
var _6403__$1 = this;return self__.meta6402;
});
dommy.core.t6401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6403,meta6402__$1){var self__ = this;
var _6403__$1 = this;return (new dommy.core.t6401(self__.v,self__.k,self__.vec__6400,self__.p__6399,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta6402__$1));
});
dommy.core.__GT_t6401 = (function __GT_t6401(v__$1,k__$1,vec__6400__$1,p__6399__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6402){return (new dommy.core.t6401(v__$1,k__$1,vec__6400__$1,p__6399__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6402));
});
}
return (new dommy.core.t6401(v,k,vec__6400,p__6399,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__6404_SHARP_){return p1__6404_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__6405_SHARP_){return !((p1__6405_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6406){var vec__6407 = p__6406;var special_mouse_event = cljs.core.nth.call(null,vec__6407,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__6407,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3431__auto__ = related_target;if(cljs.core.truth_(and__3431__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3431__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3431__auto__ = selected_target;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3431__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3443__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6408){
var elem = cljs.core.first(arglist__6408);
arglist__6408 = cljs.core.next(arglist__6408);
var f = cljs.core.first(arglist__6408);
var args = cljs.core.rest(arglist__6408);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__6409_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__6409_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6433_6456 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6457 = cljs.core.nth.call(null,vec__6433_6456,0,null);var selector_6458 = cljs.core.nth.call(null,vec__6433_6456,1,null);var seq__6434_6459 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6441_6460 = null;var count__6442_6461 = 0;var i__6443_6462 = 0;while(true){
if((i__6443_6462 < count__6442_6461))
{var vec__6450_6463 = cljs.core._nth.call(null,chunk__6441_6460,i__6443_6462);var orig_type_6464 = cljs.core.nth.call(null,vec__6450_6463,0,null);var f_6465 = cljs.core.nth.call(null,vec__6450_6463,1,null);var seq__6444_6466 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6464,new cljs.core.PersistentArrayMap.fromArray([orig_type_6464,cljs.core.identity], true, false)));var chunk__6446_6467 = null;var count__6447_6468 = 0;var i__6448_6469 = 0;while(true){
if((i__6448_6469 < count__6447_6468))
{var vec__6451_6470 = cljs.core._nth.call(null,chunk__6446_6467,i__6448_6469);var actual_type_6471 = cljs.core.nth.call(null,vec__6451_6470,0,null);var factory_6472 = cljs.core.nth.call(null,vec__6451_6470,1,null);var canonical_f_6473 = (cljs.core.truth_(selector_6458)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6457,selector_6458):cljs.core.identity).call(null,factory_6472.call(null,f_6465));dommy.core.update_event_listeners_BANG_.call(null,elem_6457,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6458,actual_type_6471,f_6465], null),canonical_f_6473);
if(cljs.core.truth_(elem_6457.addEventListener))
{elem_6457.addEventListener(cljs.core.name.call(null,actual_type_6471),canonical_f_6473);
} else
{elem_6457.attachEvent(cljs.core.name.call(null,actual_type_6471),canonical_f_6473);
}
{
var G__6474 = seq__6444_6466;
var G__6475 = chunk__6446_6467;
var G__6476 = count__6447_6468;
var G__6477 = (i__6448_6469 + 1);
seq__6444_6466 = G__6474;
chunk__6446_6467 = G__6475;
count__6447_6468 = G__6476;
i__6448_6469 = G__6477;
continue;
}
} else
{var temp__4092__auto___6478 = cljs.core.seq.call(null,seq__6444_6466);if(temp__4092__auto___6478)
{var seq__6444_6479__$1 = temp__4092__auto___6478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6444_6479__$1))
{var c__4191__auto___6480 = cljs.core.chunk_first.call(null,seq__6444_6479__$1);{
var G__6481 = cljs.core.chunk_rest.call(null,seq__6444_6479__$1);
var G__6482 = c__4191__auto___6480;
var G__6483 = cljs.core.count.call(null,c__4191__auto___6480);
var G__6484 = 0;
seq__6444_6466 = G__6481;
chunk__6446_6467 = G__6482;
count__6447_6468 = G__6483;
i__6448_6469 = G__6484;
continue;
}
} else
{var vec__6452_6485 = cljs.core.first.call(null,seq__6444_6479__$1);var actual_type_6486 = cljs.core.nth.call(null,vec__6452_6485,0,null);var factory_6487 = cljs.core.nth.call(null,vec__6452_6485,1,null);var canonical_f_6488 = (cljs.core.truth_(selector_6458)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6457,selector_6458):cljs.core.identity).call(null,factory_6487.call(null,f_6465));dommy.core.update_event_listeners_BANG_.call(null,elem_6457,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6458,actual_type_6486,f_6465], null),canonical_f_6488);
if(cljs.core.truth_(elem_6457.addEventListener))
{elem_6457.addEventListener(cljs.core.name.call(null,actual_type_6486),canonical_f_6488);
} else
{elem_6457.attachEvent(cljs.core.name.call(null,actual_type_6486),canonical_f_6488);
}
{
var G__6489 = cljs.core.next.call(null,seq__6444_6479__$1);
var G__6490 = null;
var G__6491 = 0;
var G__6492 = 0;
seq__6444_6466 = G__6489;
chunk__6446_6467 = G__6490;
count__6447_6468 = G__6491;
i__6448_6469 = G__6492;
continue;
}
}
} else
{}
}
break;
}
{
var G__6493 = seq__6434_6459;
var G__6494 = chunk__6441_6460;
var G__6495 = count__6442_6461;
var G__6496 = (i__6443_6462 + 1);
seq__6434_6459 = G__6493;
chunk__6441_6460 = G__6494;
count__6442_6461 = G__6495;
i__6443_6462 = G__6496;
continue;
}
} else
{var temp__4092__auto___6497 = cljs.core.seq.call(null,seq__6434_6459);if(temp__4092__auto___6497)
{var seq__6434_6498__$1 = temp__4092__auto___6497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6434_6498__$1))
{var c__4191__auto___6499 = cljs.core.chunk_first.call(null,seq__6434_6498__$1);{
var G__6500 = cljs.core.chunk_rest.call(null,seq__6434_6498__$1);
var G__6501 = c__4191__auto___6499;
var G__6502 = cljs.core.count.call(null,c__4191__auto___6499);
var G__6503 = 0;
seq__6434_6459 = G__6500;
chunk__6441_6460 = G__6501;
count__6442_6461 = G__6502;
i__6443_6462 = G__6503;
continue;
}
} else
{var vec__6453_6504 = cljs.core.first.call(null,seq__6434_6498__$1);var orig_type_6505 = cljs.core.nth.call(null,vec__6453_6504,0,null);var f_6506 = cljs.core.nth.call(null,vec__6453_6504,1,null);var seq__6435_6507 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6505,new cljs.core.PersistentArrayMap.fromArray([orig_type_6505,cljs.core.identity], true, false)));var chunk__6437_6508 = null;var count__6438_6509 = 0;var i__6439_6510 = 0;while(true){
if((i__6439_6510 < count__6438_6509))
{var vec__6454_6511 = cljs.core._nth.call(null,chunk__6437_6508,i__6439_6510);var actual_type_6512 = cljs.core.nth.call(null,vec__6454_6511,0,null);var factory_6513 = cljs.core.nth.call(null,vec__6454_6511,1,null);var canonical_f_6514 = (cljs.core.truth_(selector_6458)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6457,selector_6458):cljs.core.identity).call(null,factory_6513.call(null,f_6506));dommy.core.update_event_listeners_BANG_.call(null,elem_6457,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6458,actual_type_6512,f_6506], null),canonical_f_6514);
if(cljs.core.truth_(elem_6457.addEventListener))
{elem_6457.addEventListener(cljs.core.name.call(null,actual_type_6512),canonical_f_6514);
} else
{elem_6457.attachEvent(cljs.core.name.call(null,actual_type_6512),canonical_f_6514);
}
{
var G__6515 = seq__6435_6507;
var G__6516 = chunk__6437_6508;
var G__6517 = count__6438_6509;
var G__6518 = (i__6439_6510 + 1);
seq__6435_6507 = G__6515;
chunk__6437_6508 = G__6516;
count__6438_6509 = G__6517;
i__6439_6510 = G__6518;
continue;
}
} else
{var temp__4092__auto___6519__$1 = cljs.core.seq.call(null,seq__6435_6507);if(temp__4092__auto___6519__$1)
{var seq__6435_6520__$1 = temp__4092__auto___6519__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6435_6520__$1))
{var c__4191__auto___6521 = cljs.core.chunk_first.call(null,seq__6435_6520__$1);{
var G__6522 = cljs.core.chunk_rest.call(null,seq__6435_6520__$1);
var G__6523 = c__4191__auto___6521;
var G__6524 = cljs.core.count.call(null,c__4191__auto___6521);
var G__6525 = 0;
seq__6435_6507 = G__6522;
chunk__6437_6508 = G__6523;
count__6438_6509 = G__6524;
i__6439_6510 = G__6525;
continue;
}
} else
{var vec__6455_6526 = cljs.core.first.call(null,seq__6435_6520__$1);var actual_type_6527 = cljs.core.nth.call(null,vec__6455_6526,0,null);var factory_6528 = cljs.core.nth.call(null,vec__6455_6526,1,null);var canonical_f_6529 = (cljs.core.truth_(selector_6458)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6457,selector_6458):cljs.core.identity).call(null,factory_6528.call(null,f_6506));dommy.core.update_event_listeners_BANG_.call(null,elem_6457,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6458,actual_type_6527,f_6506], null),canonical_f_6529);
if(cljs.core.truth_(elem_6457.addEventListener))
{elem_6457.addEventListener(cljs.core.name.call(null,actual_type_6527),canonical_f_6529);
} else
{elem_6457.attachEvent(cljs.core.name.call(null,actual_type_6527),canonical_f_6529);
}
{
var G__6530 = cljs.core.next.call(null,seq__6435_6520__$1);
var G__6531 = null;
var G__6532 = 0;
var G__6533 = 0;
seq__6435_6507 = G__6530;
chunk__6437_6508 = G__6531;
count__6438_6509 = G__6532;
i__6439_6510 = G__6533;
continue;
}
}
} else
{}
}
break;
}
{
var G__6534 = cljs.core.next.call(null,seq__6434_6498__$1);
var G__6535 = null;
var G__6536 = 0;
var G__6537 = 0;
seq__6434_6459 = G__6534;
chunk__6441_6460 = G__6535;
count__6442_6461 = G__6536;
i__6443_6462 = G__6537;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__6538){
var elem_sel = cljs.core.first(arglist__6538);
var type_fs = cljs.core.rest(arglist__6538);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6562_6585 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6586 = cljs.core.nth.call(null,vec__6562_6585,0,null);var selector_6587 = cljs.core.nth.call(null,vec__6562_6585,1,null);var seq__6563_6588 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6570_6589 = null;var count__6571_6590 = 0;var i__6572_6591 = 0;while(true){
if((i__6572_6591 < count__6571_6590))
{var vec__6579_6592 = cljs.core._nth.call(null,chunk__6570_6589,i__6572_6591);var orig_type_6593 = cljs.core.nth.call(null,vec__6579_6592,0,null);var f_6594 = cljs.core.nth.call(null,vec__6579_6592,1,null);var seq__6573_6595 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6593,new cljs.core.PersistentArrayMap.fromArray([orig_type_6593,cljs.core.identity], true, false)));var chunk__6575_6596 = null;var count__6576_6597 = 0;var i__6577_6598 = 0;while(true){
if((i__6577_6598 < count__6576_6597))
{var vec__6580_6599 = cljs.core._nth.call(null,chunk__6575_6596,i__6577_6598);var actual_type_6600 = cljs.core.nth.call(null,vec__6580_6599,0,null);var __6601 = cljs.core.nth.call(null,vec__6580_6599,1,null);var keys_6602 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6587,actual_type_6600,f_6594], null);var canonical_f_6603 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6586),keys_6602);dommy.core.update_event_listeners_BANG_.call(null,elem_6586,dommy.utils.dissoc_in,keys_6602);
if(cljs.core.truth_(elem_6586.removeEventListener))
{elem_6586.removeEventListener(cljs.core.name.call(null,actual_type_6600),canonical_f_6603);
} else
{elem_6586.detachEvent(cljs.core.name.call(null,actual_type_6600),canonical_f_6603);
}
{
var G__6604 = seq__6573_6595;
var G__6605 = chunk__6575_6596;
var G__6606 = count__6576_6597;
var G__6607 = (i__6577_6598 + 1);
seq__6573_6595 = G__6604;
chunk__6575_6596 = G__6605;
count__6576_6597 = G__6606;
i__6577_6598 = G__6607;
continue;
}
} else
{var temp__4092__auto___6608 = cljs.core.seq.call(null,seq__6573_6595);if(temp__4092__auto___6608)
{var seq__6573_6609__$1 = temp__4092__auto___6608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6573_6609__$1))
{var c__4191__auto___6610 = cljs.core.chunk_first.call(null,seq__6573_6609__$1);{
var G__6611 = cljs.core.chunk_rest.call(null,seq__6573_6609__$1);
var G__6612 = c__4191__auto___6610;
var G__6613 = cljs.core.count.call(null,c__4191__auto___6610);
var G__6614 = 0;
seq__6573_6595 = G__6611;
chunk__6575_6596 = G__6612;
count__6576_6597 = G__6613;
i__6577_6598 = G__6614;
continue;
}
} else
{var vec__6581_6615 = cljs.core.first.call(null,seq__6573_6609__$1);var actual_type_6616 = cljs.core.nth.call(null,vec__6581_6615,0,null);var __6617 = cljs.core.nth.call(null,vec__6581_6615,1,null);var keys_6618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6587,actual_type_6616,f_6594], null);var canonical_f_6619 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6586),keys_6618);dommy.core.update_event_listeners_BANG_.call(null,elem_6586,dommy.utils.dissoc_in,keys_6618);
if(cljs.core.truth_(elem_6586.removeEventListener))
{elem_6586.removeEventListener(cljs.core.name.call(null,actual_type_6616),canonical_f_6619);
} else
{elem_6586.detachEvent(cljs.core.name.call(null,actual_type_6616),canonical_f_6619);
}
{
var G__6620 = cljs.core.next.call(null,seq__6573_6609__$1);
var G__6621 = null;
var G__6622 = 0;
var G__6623 = 0;
seq__6573_6595 = G__6620;
chunk__6575_6596 = G__6621;
count__6576_6597 = G__6622;
i__6577_6598 = G__6623;
continue;
}
}
} else
{}
}
break;
}
{
var G__6624 = seq__6563_6588;
var G__6625 = chunk__6570_6589;
var G__6626 = count__6571_6590;
var G__6627 = (i__6572_6591 + 1);
seq__6563_6588 = G__6624;
chunk__6570_6589 = G__6625;
count__6571_6590 = G__6626;
i__6572_6591 = G__6627;
continue;
}
} else
{var temp__4092__auto___6628 = cljs.core.seq.call(null,seq__6563_6588);if(temp__4092__auto___6628)
{var seq__6563_6629__$1 = temp__4092__auto___6628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6563_6629__$1))
{var c__4191__auto___6630 = cljs.core.chunk_first.call(null,seq__6563_6629__$1);{
var G__6631 = cljs.core.chunk_rest.call(null,seq__6563_6629__$1);
var G__6632 = c__4191__auto___6630;
var G__6633 = cljs.core.count.call(null,c__4191__auto___6630);
var G__6634 = 0;
seq__6563_6588 = G__6631;
chunk__6570_6589 = G__6632;
count__6571_6590 = G__6633;
i__6572_6591 = G__6634;
continue;
}
} else
{var vec__6582_6635 = cljs.core.first.call(null,seq__6563_6629__$1);var orig_type_6636 = cljs.core.nth.call(null,vec__6582_6635,0,null);var f_6637 = cljs.core.nth.call(null,vec__6582_6635,1,null);var seq__6564_6638 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6636,new cljs.core.PersistentArrayMap.fromArray([orig_type_6636,cljs.core.identity], true, false)));var chunk__6566_6639 = null;var count__6567_6640 = 0;var i__6568_6641 = 0;while(true){
if((i__6568_6641 < count__6567_6640))
{var vec__6583_6642 = cljs.core._nth.call(null,chunk__6566_6639,i__6568_6641);var actual_type_6643 = cljs.core.nth.call(null,vec__6583_6642,0,null);var __6644 = cljs.core.nth.call(null,vec__6583_6642,1,null);var keys_6645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6587,actual_type_6643,f_6637], null);var canonical_f_6646 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6586),keys_6645);dommy.core.update_event_listeners_BANG_.call(null,elem_6586,dommy.utils.dissoc_in,keys_6645);
if(cljs.core.truth_(elem_6586.removeEventListener))
{elem_6586.removeEventListener(cljs.core.name.call(null,actual_type_6643),canonical_f_6646);
} else
{elem_6586.detachEvent(cljs.core.name.call(null,actual_type_6643),canonical_f_6646);
}
{
var G__6647 = seq__6564_6638;
var G__6648 = chunk__6566_6639;
var G__6649 = count__6567_6640;
var G__6650 = (i__6568_6641 + 1);
seq__6564_6638 = G__6647;
chunk__6566_6639 = G__6648;
count__6567_6640 = G__6649;
i__6568_6641 = G__6650;
continue;
}
} else
{var temp__4092__auto___6651__$1 = cljs.core.seq.call(null,seq__6564_6638);if(temp__4092__auto___6651__$1)
{var seq__6564_6652__$1 = temp__4092__auto___6651__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6564_6652__$1))
{var c__4191__auto___6653 = cljs.core.chunk_first.call(null,seq__6564_6652__$1);{
var G__6654 = cljs.core.chunk_rest.call(null,seq__6564_6652__$1);
var G__6655 = c__4191__auto___6653;
var G__6656 = cljs.core.count.call(null,c__4191__auto___6653);
var G__6657 = 0;
seq__6564_6638 = G__6654;
chunk__6566_6639 = G__6655;
count__6567_6640 = G__6656;
i__6568_6641 = G__6657;
continue;
}
} else
{var vec__6584_6658 = cljs.core.first.call(null,seq__6564_6652__$1);var actual_type_6659 = cljs.core.nth.call(null,vec__6584_6658,0,null);var __6660 = cljs.core.nth.call(null,vec__6584_6658,1,null);var keys_6661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6587,actual_type_6659,f_6637], null);var canonical_f_6662 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6586),keys_6661);dommy.core.update_event_listeners_BANG_.call(null,elem_6586,dommy.utils.dissoc_in,keys_6661);
if(cljs.core.truth_(elem_6586.removeEventListener))
{elem_6586.removeEventListener(cljs.core.name.call(null,actual_type_6659),canonical_f_6662);
} else
{elem_6586.detachEvent(cljs.core.name.call(null,actual_type_6659),canonical_f_6662);
}
{
var G__6663 = cljs.core.next.call(null,seq__6564_6652__$1);
var G__6664 = null;
var G__6665 = 0;
var G__6666 = 0;
seq__6564_6638 = G__6663;
chunk__6566_6639 = G__6664;
count__6567_6640 = G__6665;
i__6568_6641 = G__6666;
continue;
}
}
} else
{}
}
break;
}
{
var G__6667 = cljs.core.next.call(null,seq__6563_6629__$1);
var G__6668 = null;
var G__6669 = 0;
var G__6670 = 0;
seq__6563_6588 = G__6667;
chunk__6570_6589 = G__6668;
count__6571_6590 = G__6669;
i__6572_6591 = G__6670;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6671){
var elem_sel = cljs.core.first(arglist__6671);
var type_fs = cljs.core.rest(arglist__6671);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6679_6686 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6687 = cljs.core.nth.call(null,vec__6679_6686,0,null);var selector_6688 = cljs.core.nth.call(null,vec__6679_6686,1,null);var seq__6680_6689 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6681_6690 = null;var count__6682_6691 = 0;var i__6683_6692 = 0;while(true){
if((i__6683_6692 < count__6682_6691))
{var vec__6684_6693 = cljs.core._nth.call(null,chunk__6681_6690,i__6683_6692);var type_6694 = cljs.core.nth.call(null,vec__6684_6693,0,null);var f_6695 = cljs.core.nth.call(null,vec__6684_6693,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6694,((function (seq__6680_6689,chunk__6681_6690,count__6682_6691,i__6683_6692,vec__6684_6693,type_6694,f_6695){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6694,this_fn);
return f_6695.call(null,e);
});})(seq__6680_6689,chunk__6681_6690,count__6682_6691,i__6683_6692,vec__6684_6693,type_6694,f_6695))
);
{
var G__6696 = seq__6680_6689;
var G__6697 = chunk__6681_6690;
var G__6698 = count__6682_6691;
var G__6699 = (i__6683_6692 + 1);
seq__6680_6689 = G__6696;
chunk__6681_6690 = G__6697;
count__6682_6691 = G__6698;
i__6683_6692 = G__6699;
continue;
}
} else
{var temp__4092__auto___6700 = cljs.core.seq.call(null,seq__6680_6689);if(temp__4092__auto___6700)
{var seq__6680_6701__$1 = temp__4092__auto___6700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6680_6701__$1))
{var c__4191__auto___6702 = cljs.core.chunk_first.call(null,seq__6680_6701__$1);{
var G__6703 = cljs.core.chunk_rest.call(null,seq__6680_6701__$1);
var G__6704 = c__4191__auto___6702;
var G__6705 = cljs.core.count.call(null,c__4191__auto___6702);
var G__6706 = 0;
seq__6680_6689 = G__6703;
chunk__6681_6690 = G__6704;
count__6682_6691 = G__6705;
i__6683_6692 = G__6706;
continue;
}
} else
{var vec__6685_6707 = cljs.core.first.call(null,seq__6680_6701__$1);var type_6708 = cljs.core.nth.call(null,vec__6685_6707,0,null);var f_6709 = cljs.core.nth.call(null,vec__6685_6707,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6708,((function (seq__6680_6689,chunk__6681_6690,count__6682_6691,i__6683_6692,vec__6685_6707,type_6708,f_6709,seq__6680_6701__$1,temp__4092__auto___6700){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6708,this_fn);
return f_6709.call(null,e);
});})(seq__6680_6689,chunk__6681_6690,count__6682_6691,i__6683_6692,vec__6685_6707,type_6708,f_6709,seq__6680_6701__$1,temp__4092__auto___6700))
);
{
var G__6710 = cljs.core.next.call(null,seq__6680_6701__$1);
var G__6711 = null;
var G__6712 = 0;
var G__6713 = 0;
seq__6680_6689 = G__6710;
chunk__6681_6690 = G__6711;
count__6682_6691 = G__6712;
i__6683_6692 = G__6713;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6714){
var elem_sel = cljs.core.first(arglist__6714);
var type_fs = cljs.core.rest(arglist__6714);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__6715){var vec__6717 = p__6715;var update_event_BANG_ = cljs.core.nth.call(null,vec__6717,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3443__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__6715 = null;if (arguments.length > 2) {
  p__6715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__6715);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__6718){
var node = cljs.core.first(arglist__6718);
arglist__6718 = cljs.core.next(arglist__6718);
var event_type = cljs.core.first(arglist__6718);
var p__6715 = cljs.core.rest(arglist__6718);
return fire_BANG___delegate(node,event_type,p__6715);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map