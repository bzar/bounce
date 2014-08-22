// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3431__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3431__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3431__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__6885 = (i + class$.length);
start_from = G__6885;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___6910 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6910))
{var class_list_6911 = temp__4090__auto___6910;var seq__6898_6912 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6899_6913 = null;var count__6900_6914 = 0;var i__6901_6915 = 0;while(true){
if((i__6901_6915 < count__6900_6914))
{var class_6916 = cljs.core._nth.call(null,chunk__6899_6913,i__6901_6915);class_list_6911.add(class_6916);
{
var G__6917 = seq__6898_6912;
var G__6918 = chunk__6899_6913;
var G__6919 = count__6900_6914;
var G__6920 = (i__6901_6915 + 1);
seq__6898_6912 = G__6917;
chunk__6899_6913 = G__6918;
count__6900_6914 = G__6919;
i__6901_6915 = G__6920;
continue;
}
} else
{var temp__4092__auto___6921 = cljs.core.seq.call(null,seq__6898_6912);if(temp__4092__auto___6921)
{var seq__6898_6922__$1 = temp__4092__auto___6921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6898_6922__$1))
{var c__4191__auto___6923 = cljs.core.chunk_first.call(null,seq__6898_6922__$1);{
var G__6924 = cljs.core.chunk_rest.call(null,seq__6898_6922__$1);
var G__6925 = c__4191__auto___6923;
var G__6926 = cljs.core.count.call(null,c__4191__auto___6923);
var G__6927 = 0;
seq__6898_6912 = G__6924;
chunk__6899_6913 = G__6925;
count__6900_6914 = G__6926;
i__6901_6915 = G__6927;
continue;
}
} else
{var class_6928 = cljs.core.first.call(null,seq__6898_6922__$1);class_list_6911.add(class_6928);
{
var G__6929 = cljs.core.next.call(null,seq__6898_6922__$1);
var G__6930 = null;
var G__6931 = 0;
var G__6932 = 0;
seq__6898_6912 = G__6929;
chunk__6899_6913 = G__6930;
count__6900_6914 = G__6931;
i__6901_6915 = G__6932;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__6902_6933 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6903_6934 = null;var count__6904_6935 = 0;var i__6905_6936 = 0;while(true){
if((i__6905_6936 < count__6904_6935))
{var class_6937 = cljs.core._nth.call(null,chunk__6903_6934,i__6905_6936);var class_name_6938 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6938,class_6937)))
{} else
{elem__$1.className = (((class_name_6938 === ""))?class_6937:[cljs.core.str(class_name_6938),cljs.core.str(" "),cljs.core.str(class_6937)].join(''));
}
{
var G__6939 = seq__6902_6933;
var G__6940 = chunk__6903_6934;
var G__6941 = count__6904_6935;
var G__6942 = (i__6905_6936 + 1);
seq__6902_6933 = G__6939;
chunk__6903_6934 = G__6940;
count__6904_6935 = G__6941;
i__6905_6936 = G__6942;
continue;
}
} else
{var temp__4092__auto___6943 = cljs.core.seq.call(null,seq__6902_6933);if(temp__4092__auto___6943)
{var seq__6902_6944__$1 = temp__4092__auto___6943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6902_6944__$1))
{var c__4191__auto___6945 = cljs.core.chunk_first.call(null,seq__6902_6944__$1);{
var G__6946 = cljs.core.chunk_rest.call(null,seq__6902_6944__$1);
var G__6947 = c__4191__auto___6945;
var G__6948 = cljs.core.count.call(null,c__4191__auto___6945);
var G__6949 = 0;
seq__6902_6933 = G__6946;
chunk__6903_6934 = G__6947;
count__6904_6935 = G__6948;
i__6905_6936 = G__6949;
continue;
}
} else
{var class_6950 = cljs.core.first.call(null,seq__6902_6944__$1);var class_name_6951 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6951,class_6950)))
{} else
{elem__$1.className = (((class_name_6951 === ""))?class_6950:[cljs.core.str(class_name_6951),cljs.core.str(" "),cljs.core.str(class_6950)].join(''));
}
{
var G__6952 = cljs.core.next.call(null,seq__6902_6944__$1);
var G__6953 = null;
var G__6954 = 0;
var G__6955 = 0;
seq__6902_6933 = G__6952;
chunk__6903_6934 = G__6953;
count__6904_6935 = G__6954;
i__6905_6936 = G__6955;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__6956__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6906_6957 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6907_6958 = null;var count__6908_6959 = 0;var i__6909_6960 = 0;while(true){
if((i__6909_6960 < count__6908_6959))
{var c_6961 = cljs.core._nth.call(null,chunk__6907_6958,i__6909_6960);add_class_BANG_.call(null,elem__$1,c_6961);
{
var G__6962 = seq__6906_6957;
var G__6963 = chunk__6907_6958;
var G__6964 = count__6908_6959;
var G__6965 = (i__6909_6960 + 1);
seq__6906_6957 = G__6962;
chunk__6907_6958 = G__6963;
count__6908_6959 = G__6964;
i__6909_6960 = G__6965;
continue;
}
} else
{var temp__4092__auto___6966 = cljs.core.seq.call(null,seq__6906_6957);if(temp__4092__auto___6966)
{var seq__6906_6967__$1 = temp__4092__auto___6966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6906_6967__$1))
{var c__4191__auto___6968 = cljs.core.chunk_first.call(null,seq__6906_6967__$1);{
var G__6969 = cljs.core.chunk_rest.call(null,seq__6906_6967__$1);
var G__6970 = c__4191__auto___6968;
var G__6971 = cljs.core.count.call(null,c__4191__auto___6968);
var G__6972 = 0;
seq__6906_6957 = G__6969;
chunk__6907_6958 = G__6970;
count__6908_6959 = G__6971;
i__6909_6960 = G__6972;
continue;
}
} else
{var c_6973 = cljs.core.first.call(null,seq__6906_6967__$1);add_class_BANG_.call(null,elem__$1,c_6973);
{
var G__6974 = cljs.core.next.call(null,seq__6906_6967__$1);
var G__6975 = null;
var G__6976 = 0;
var G__6977 = 0;
seq__6906_6957 = G__6974;
chunk__6907_6958 = G__6975;
count__6908_6959 = G__6976;
i__6909_6960 = G__6977;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6956 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6956__delegate.call(this,elem,classes,more_classes);};
G__6956.cljs$lang$maxFixedArity = 2;
G__6956.cljs$lang$applyTo = (function (arglist__6978){
var elem = cljs.core.first(arglist__6978);
arglist__6978 = cljs.core.next(arglist__6978);
var classes = cljs.core.first(arglist__6978);
var more_classes = cljs.core.rest(arglist__6978);
return G__6956__delegate(elem,classes,more_classes);
});
G__6956.cljs$core$IFn$_invoke$arity$variadic = G__6956__delegate;
return G__6956;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__6979 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__6979;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4090__auto___6988 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6988))
{var class_list_6989 = temp__4090__auto___6988;class_list_6989.remove(class$__$1);
} else
{var class_name_6990 = elem__$1.className;var new_class_name_6991 = dommy.attrs.remove_class_str.call(null,class_name_6990,class$__$1);if((class_name_6990 === new_class_name_6991))
{} else
{elem__$1.className = new_class_name_6991;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__6992__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6984 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6985 = null;var count__6986 = 0;var i__6987 = 0;while(true){
if((i__6987 < count__6986))
{var c = cljs.core._nth.call(null,chunk__6985,i__6987);remove_class_BANG_.call(null,elem__$1,c);
{
var G__6993 = seq__6984;
var G__6994 = chunk__6985;
var G__6995 = count__6986;
var G__6996 = (i__6987 + 1);
seq__6984 = G__6993;
chunk__6985 = G__6994;
count__6986 = G__6995;
i__6987 = G__6996;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6984);if(temp__4092__auto__)
{var seq__6984__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6984__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6984__$1);{
var G__6997 = cljs.core.chunk_rest.call(null,seq__6984__$1);
var G__6998 = c__4191__auto__;
var G__6999 = cljs.core.count.call(null,c__4191__auto__);
var G__7000 = 0;
seq__6984 = G__6997;
chunk__6985 = G__6998;
count__6986 = G__6999;
i__6987 = G__7000;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6984__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7001 = cljs.core.next.call(null,seq__6984__$1);
var G__7002 = null;
var G__7003 = 0;
var G__7004 = 0;
seq__6984 = G__7001;
chunk__6985 = G__7002;
count__6986 = G__7003;
i__6987 = G__7004;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6992 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6992__delegate.call(this,elem,class$,classes);};
G__6992.cljs$lang$maxFixedArity = 2;
G__6992.cljs$lang$applyTo = (function (arglist__7005){
var elem = cljs.core.first(arglist__7005);
arglist__7005 = cljs.core.next(arglist__7005);
var class$ = cljs.core.first(arglist__7005);
var classes = cljs.core.rest(arglist__7005);
return G__6992__delegate(elem,class$,classes);
});
G__6992.cljs$core$IFn$_invoke$arity$variadic = G__6992__delegate;
return G__6992;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4090__auto___7006 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7006))
{var class_list_7007 = temp__4090__auto___7006;class_list_7007.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7010){var vec__7011 = p__7010;var k = cljs.core.nth.call(null,vec__7011,0,null);var v = cljs.core.nth.call(null,vec__7011,1,null);return [cljs.core.str(dommy.utils.as_str.call(null,k)),cljs.core.str(":"),cljs.core.str(dommy.utils.as_str.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7018_7024 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7019_7025 = null;var count__7020_7026 = 0;var i__7021_7027 = 0;while(true){
if((i__7021_7027 < count__7020_7026))
{var vec__7022_7028 = cljs.core._nth.call(null,chunk__7019_7025,i__7021_7027);var k_7029 = cljs.core.nth.call(null,vec__7022_7028,0,null);var v_7030 = cljs.core.nth.call(null,vec__7022_7028,1,null);style.setProperty(dommy.utils.as_str.call(null,k_7029),v_7030);
{
var G__7031 = seq__7018_7024;
var G__7032 = chunk__7019_7025;
var G__7033 = count__7020_7026;
var G__7034 = (i__7021_7027 + 1);
seq__7018_7024 = G__7031;
chunk__7019_7025 = G__7032;
count__7020_7026 = G__7033;
i__7021_7027 = G__7034;
continue;
}
} else
{var temp__4092__auto___7035 = cljs.core.seq.call(null,seq__7018_7024);if(temp__4092__auto___7035)
{var seq__7018_7036__$1 = temp__4092__auto___7035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7018_7036__$1))
{var c__4191__auto___7037 = cljs.core.chunk_first.call(null,seq__7018_7036__$1);{
var G__7038 = cljs.core.chunk_rest.call(null,seq__7018_7036__$1);
var G__7039 = c__4191__auto___7037;
var G__7040 = cljs.core.count.call(null,c__4191__auto___7037);
var G__7041 = 0;
seq__7018_7024 = G__7038;
chunk__7019_7025 = G__7039;
count__7020_7026 = G__7040;
i__7021_7027 = G__7041;
continue;
}
} else
{var vec__7023_7042 = cljs.core.first.call(null,seq__7018_7036__$1);var k_7043 = cljs.core.nth.call(null,vec__7023_7042,0,null);var v_7044 = cljs.core.nth.call(null,vec__7023_7042,1,null);style.setProperty(dommy.utils.as_str.call(null,k_7043),v_7044);
{
var G__7045 = cljs.core.next.call(null,seq__7018_7036__$1);
var G__7046 = null;
var G__7047 = 0;
var G__7048 = 0;
seq__7018_7024 = G__7045;
chunk__7019_7025 = G__7046;
count__7020_7026 = G__7047;
i__7021_7027 = G__7048;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7049){
var elem = cljs.core.first(arglist__7049);
var kvs = cljs.core.rest(arglist__7049);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7056_7062 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7057_7063 = null;var count__7058_7064 = 0;var i__7059_7065 = 0;while(true){
if((i__7059_7065 < count__7058_7064))
{var vec__7060_7066 = cljs.core._nth.call(null,chunk__7057_7063,i__7059_7065);var k_7067 = cljs.core.nth.call(null,vec__7060_7066,0,null);var v_7068 = cljs.core.nth.call(null,vec__7060_7066,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7067,[cljs.core.str(v_7068),cljs.core.str("px")].join(''));
{
var G__7069 = seq__7056_7062;
var G__7070 = chunk__7057_7063;
var G__7071 = count__7058_7064;
var G__7072 = (i__7059_7065 + 1);
seq__7056_7062 = G__7069;
chunk__7057_7063 = G__7070;
count__7058_7064 = G__7071;
i__7059_7065 = G__7072;
continue;
}
} else
{var temp__4092__auto___7073 = cljs.core.seq.call(null,seq__7056_7062);if(temp__4092__auto___7073)
{var seq__7056_7074__$1 = temp__4092__auto___7073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7056_7074__$1))
{var c__4191__auto___7075 = cljs.core.chunk_first.call(null,seq__7056_7074__$1);{
var G__7076 = cljs.core.chunk_rest.call(null,seq__7056_7074__$1);
var G__7077 = c__4191__auto___7075;
var G__7078 = cljs.core.count.call(null,c__4191__auto___7075);
var G__7079 = 0;
seq__7056_7062 = G__7076;
chunk__7057_7063 = G__7077;
count__7058_7064 = G__7078;
i__7059_7065 = G__7079;
continue;
}
} else
{var vec__7061_7080 = cljs.core.first.call(null,seq__7056_7074__$1);var k_7081 = cljs.core.nth.call(null,vec__7061_7080,0,null);var v_7082 = cljs.core.nth.call(null,vec__7061_7080,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7081,[cljs.core.str(v_7082),cljs.core.str("px")].join(''));
{
var G__7083 = cljs.core.next.call(null,seq__7056_7074__$1);
var G__7084 = null;
var G__7085 = 0;
var G__7086 = 0;
seq__7056_7062 = G__7083;
chunk__7057_7063 = G__7084;
count__7058_7064 = G__7085;
i__7059_7065 = G__7086;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7087){
var elem = cljs.core.first(arglist__7087);
var kvs = cljs.core.rest(arglist__7087);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__7096 = dommy.template.__GT_node_like.call(null,elem);(G__7096[dommy.utils.as_str.call(null,k)] = v);
return G__7096;
} else
{var G__7097 = dommy.template.__GT_node_like.call(null,elem);G__7097.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__7097;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7104__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7098_7105 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__7099_7106 = null;var count__7100_7107 = 0;var i__7101_7108 = 0;while(true){
if((i__7101_7108 < count__7100_7107))
{var vec__7102_7109 = cljs.core._nth.call(null,chunk__7099_7106,i__7101_7108);var k_7110__$1 = cljs.core.nth.call(null,vec__7102_7109,0,null);var v_7111__$1 = cljs.core.nth.call(null,vec__7102_7109,1,null);set_attr_BANG_.call(null,elem__$1,k_7110__$1,v_7111__$1);
{
var G__7112 = seq__7098_7105;
var G__7113 = chunk__7099_7106;
var G__7114 = count__7100_7107;
var G__7115 = (i__7101_7108 + 1);
seq__7098_7105 = G__7112;
chunk__7099_7106 = G__7113;
count__7100_7107 = G__7114;
i__7101_7108 = G__7115;
continue;
}
} else
{var temp__4092__auto___7116 = cljs.core.seq.call(null,seq__7098_7105);if(temp__4092__auto___7116)
{var seq__7098_7117__$1 = temp__4092__auto___7116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7098_7117__$1))
{var c__4191__auto___7118 = cljs.core.chunk_first.call(null,seq__7098_7117__$1);{
var G__7119 = cljs.core.chunk_rest.call(null,seq__7098_7117__$1);
var G__7120 = c__4191__auto___7118;
var G__7121 = cljs.core.count.call(null,c__4191__auto___7118);
var G__7122 = 0;
seq__7098_7105 = G__7119;
chunk__7099_7106 = G__7120;
count__7100_7107 = G__7121;
i__7101_7108 = G__7122;
continue;
}
} else
{var vec__7103_7123 = cljs.core.first.call(null,seq__7098_7117__$1);var k_7124__$1 = cljs.core.nth.call(null,vec__7103_7123,0,null);var v_7125__$1 = cljs.core.nth.call(null,vec__7103_7123,1,null);set_attr_BANG_.call(null,elem__$1,k_7124__$1,v_7125__$1);
{
var G__7126 = cljs.core.next.call(null,seq__7098_7117__$1);
var G__7127 = null;
var G__7128 = 0;
var G__7129 = 0;
seq__7098_7105 = G__7126;
chunk__7099_7106 = G__7127;
count__7100_7107 = G__7128;
i__7101_7108 = G__7129;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7104 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7104__delegate.call(this,elem,k,v,kvs);};
G__7104.cljs$lang$maxFixedArity = 3;
G__7104.cljs$lang$applyTo = (function (arglist__7130){
var elem = cljs.core.first(arglist__7130);
arglist__7130 = cljs.core.next(arglist__7130);
var k = cljs.core.first(arglist__7130);
arglist__7130 = cljs.core.next(arglist__7130);
var v = cljs.core.first(arglist__7130);
var kvs = cljs.core.rest(arglist__7130);
return G__7104__delegate(elem,k,v,kvs);
});
G__7104.cljs$core$IFn$_invoke$arity$variadic = G__7104__delegate;
return G__7104;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__7139__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7135_7140 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7136_7141 = null;var count__7137_7142 = 0;var i__7138_7143 = 0;while(true){
if((i__7138_7143 < count__7137_7142))
{var k_7144__$1 = cljs.core._nth.call(null,chunk__7136_7141,i__7138_7143);remove_attr_BANG_.call(null,elem__$1,k_7144__$1);
{
var G__7145 = seq__7135_7140;
var G__7146 = chunk__7136_7141;
var G__7147 = count__7137_7142;
var G__7148 = (i__7138_7143 + 1);
seq__7135_7140 = G__7145;
chunk__7136_7141 = G__7146;
count__7137_7142 = G__7147;
i__7138_7143 = G__7148;
continue;
}
} else
{var temp__4092__auto___7149 = cljs.core.seq.call(null,seq__7135_7140);if(temp__4092__auto___7149)
{var seq__7135_7150__$1 = temp__4092__auto___7149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7135_7150__$1))
{var c__4191__auto___7151 = cljs.core.chunk_first.call(null,seq__7135_7150__$1);{
var G__7152 = cljs.core.chunk_rest.call(null,seq__7135_7150__$1);
var G__7153 = c__4191__auto___7151;
var G__7154 = cljs.core.count.call(null,c__4191__auto___7151);
var G__7155 = 0;
seq__7135_7140 = G__7152;
chunk__7136_7141 = G__7153;
count__7137_7142 = G__7154;
i__7138_7143 = G__7155;
continue;
}
} else
{var k_7156__$1 = cljs.core.first.call(null,seq__7135_7150__$1);remove_attr_BANG_.call(null,elem__$1,k_7156__$1);
{
var G__7157 = cljs.core.next.call(null,seq__7135_7150__$1);
var G__7158 = null;
var G__7159 = 0;
var G__7160 = 0;
seq__7135_7140 = G__7157;
chunk__7136_7141 = G__7158;
count__7137_7142 = G__7159;
i__7138_7143 = G__7160;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7139 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7139__delegate.call(this,elem,k,ks);};
G__7139.cljs$lang$maxFixedArity = 2;
G__7139.cljs$lang$applyTo = (function (arglist__7161){
var elem = cljs.core.first(arglist__7161);
arglist__7161 = cljs.core.next(arglist__7161);
var k = cljs.core.first(arglist__7161);
var ks = cljs.core.rest(arglist__7161);
return G__7139__delegate(elem,k,ks);
});
G__7139.cljs$core$IFn$_invoke$arity$variadic = G__7139__delegate;
return G__7139;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7163 = dommy.template.__GT_node_like.call(null,elem);G__7163.style.display = ((show_QMARK_)?"":"none");
return G__7163;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7165 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7165,false);
return G__7165;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7167 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7167,true);
return G__7167;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",1014019271),r.top,new cljs.core.Keyword(null,"bottom","bottom",3925642653),r.bottom,new cljs.core.Keyword(null,"left","left",1017222009),r.left,new cljs.core.Keyword(null,"right","right",1122416014),r.right,new cljs.core.Keyword(null,"width","width",1127031096),r.width,new cljs.core.Keyword(null,"height","height",4087841945),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map