// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], null), null);
dommy.template.PElement = (function (){var obj6734 = {};return obj6734;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (dommy.template._elem[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (dommy.template._elem["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_6737 = node_str.substring(base_idx);while(true){
var next_idx_6738 = dommy.template.next_css_index.call(null,str_6737,1);var frag_6739 = (((next_idx_6738 >= 0))?str_6737.substring(0,next_idx_6738):str_6737);var G__6736_6740 = frag_6739.charAt(0);if(cljs.core._EQ_.call(null,"#",G__6736_6740))
{node.setAttribute("id",frag_6739.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__6736_6740))
{dommy.attrs.add_class_BANG_.call(null,node,frag_6739.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_6739.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_6738 >= 0))
{{
var G__6741 = str_6737.substring(next_idx_6738);
str_6737 = G__6741;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6747 = data;if(G__6747)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6747.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6747.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6747);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6747);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6748_6752 = cljs.core.seq.call(null,data);var chunk__6749_6753 = null;var count__6750_6754 = 0;var i__6751_6755 = 0;while(true){
if((i__6751_6755 < count__6750_6754))
{var child_6756 = cljs.core._nth.call(null,chunk__6749_6753,i__6751_6755);__GT_document_fragment.call(null,result_frag,child_6756);
{
var G__6757 = seq__6748_6752;
var G__6758 = chunk__6749_6753;
var G__6759 = count__6750_6754;
var G__6760 = (i__6751_6755 + 1);
seq__6748_6752 = G__6757;
chunk__6749_6753 = G__6758;
count__6750_6754 = G__6759;
i__6751_6755 = G__6760;
continue;
}
} else
{var temp__4092__auto___6761 = cljs.core.seq.call(null,seq__6748_6752);if(temp__4092__auto___6761)
{var seq__6748_6762__$1 = temp__4092__auto___6761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6748_6762__$1))
{var c__4191__auto___6763 = cljs.core.chunk_first.call(null,seq__6748_6762__$1);{
var G__6764 = cljs.core.chunk_rest.call(null,seq__6748_6762__$1);
var G__6765 = c__4191__auto___6763;
var G__6766 = cljs.core.count.call(null,c__4191__auto___6763);
var G__6767 = 0;
seq__6748_6752 = G__6764;
chunk__6749_6753 = G__6765;
count__6750_6754 = G__6766;
i__6751_6755 = G__6767;
continue;
}
} else
{var child_6768 = cljs.core.first.call(null,seq__6748_6762__$1);__GT_document_fragment.call(null,result_frag,child_6768);
{
var G__6769 = cljs.core.next.call(null,seq__6748_6762__$1);
var G__6770 = null;
var G__6771 = 0;
var G__6772 = 0;
seq__6748_6752 = G__6769;
chunk__6749_6753 = G__6770;
count__6750_6754 = G__6771;
i__6751_6755 = G__6772;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6774 = data;if(G__6774)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6774.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6774.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6774);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__6775){var vec__6795 = p__6775;var tag_name = cljs.core.nth.call(null,vec__6795,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__6795,1,null);var children = cljs.core.nthnext.call(null,vec__6795,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__6797 = maybe_attrs;if(G__6797)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6797.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6797.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6797);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6797);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6798_6814 = cljs.core.seq.call(null,attrs);var chunk__6799_6815 = null;var count__6800_6816 = 0;var i__6801_6817 = 0;while(true){
if((i__6801_6817 < count__6800_6816))
{var vec__6802_6818 = cljs.core._nth.call(null,chunk__6799_6815,i__6801_6817);var k_6819 = cljs.core.nth.call(null,vec__6802_6818,0,null);var v_6820 = cljs.core.nth.call(null,vec__6802_6818,1,null);var G__6803_6821 = k_6819;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6803_6821))
{var seq__6804_6822 = cljs.core.seq.call(null,v_6820);var chunk__6805_6823 = null;var count__6806_6824 = 0;var i__6807_6825 = 0;while(true){
if((i__6807_6825 < count__6806_6824))
{var c_6826 = cljs.core._nth.call(null,chunk__6805_6823,i__6807_6825);dommy.attrs.add_class_BANG_.call(null,n,c_6826);
{
var G__6827 = seq__6804_6822;
var G__6828 = chunk__6805_6823;
var G__6829 = count__6806_6824;
var G__6830 = (i__6807_6825 + 1);
seq__6804_6822 = G__6827;
chunk__6805_6823 = G__6828;
count__6806_6824 = G__6829;
i__6807_6825 = G__6830;
continue;
}
} else
{var temp__4092__auto___6831 = cljs.core.seq.call(null,seq__6804_6822);if(temp__4092__auto___6831)
{var seq__6804_6832__$1 = temp__4092__auto___6831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6804_6832__$1))
{var c__4191__auto___6833 = cljs.core.chunk_first.call(null,seq__6804_6832__$1);{
var G__6834 = cljs.core.chunk_rest.call(null,seq__6804_6832__$1);
var G__6835 = c__4191__auto___6833;
var G__6836 = cljs.core.count.call(null,c__4191__auto___6833);
var G__6837 = 0;
seq__6804_6822 = G__6834;
chunk__6805_6823 = G__6835;
count__6806_6824 = G__6836;
i__6807_6825 = G__6837;
continue;
}
} else
{var c_6838 = cljs.core.first.call(null,seq__6804_6832__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6838);
{
var G__6839 = cljs.core.next.call(null,seq__6804_6832__$1);
var G__6840 = null;
var G__6841 = 0;
var G__6842 = 0;
seq__6804_6822 = G__6839;
chunk__6805_6823 = G__6840;
count__6806_6824 = G__6841;
i__6807_6825 = G__6842;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6803_6821))
{dommy.attrs.add_class_BANG_.call(null,n,v_6820);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6819,v_6820);
} else
{}
}
}
{
var G__6843 = seq__6798_6814;
var G__6844 = chunk__6799_6815;
var G__6845 = count__6800_6816;
var G__6846 = (i__6801_6817 + 1);
seq__6798_6814 = G__6843;
chunk__6799_6815 = G__6844;
count__6800_6816 = G__6845;
i__6801_6817 = G__6846;
continue;
}
} else
{var temp__4092__auto___6847 = cljs.core.seq.call(null,seq__6798_6814);if(temp__4092__auto___6847)
{var seq__6798_6848__$1 = temp__4092__auto___6847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6798_6848__$1))
{var c__4191__auto___6849 = cljs.core.chunk_first.call(null,seq__6798_6848__$1);{
var G__6850 = cljs.core.chunk_rest.call(null,seq__6798_6848__$1);
var G__6851 = c__4191__auto___6849;
var G__6852 = cljs.core.count.call(null,c__4191__auto___6849);
var G__6853 = 0;
seq__6798_6814 = G__6850;
chunk__6799_6815 = G__6851;
count__6800_6816 = G__6852;
i__6801_6817 = G__6853;
continue;
}
} else
{var vec__6808_6854 = cljs.core.first.call(null,seq__6798_6848__$1);var k_6855 = cljs.core.nth.call(null,vec__6808_6854,0,null);var v_6856 = cljs.core.nth.call(null,vec__6808_6854,1,null);var G__6809_6857 = k_6855;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6809_6857))
{var seq__6810_6858 = cljs.core.seq.call(null,v_6856);var chunk__6811_6859 = null;var count__6812_6860 = 0;var i__6813_6861 = 0;while(true){
if((i__6813_6861 < count__6812_6860))
{var c_6862 = cljs.core._nth.call(null,chunk__6811_6859,i__6813_6861);dommy.attrs.add_class_BANG_.call(null,n,c_6862);
{
var G__6863 = seq__6810_6858;
var G__6864 = chunk__6811_6859;
var G__6865 = count__6812_6860;
var G__6866 = (i__6813_6861 + 1);
seq__6810_6858 = G__6863;
chunk__6811_6859 = G__6864;
count__6812_6860 = G__6865;
i__6813_6861 = G__6866;
continue;
}
} else
{var temp__4092__auto___6867__$1 = cljs.core.seq.call(null,seq__6810_6858);if(temp__4092__auto___6867__$1)
{var seq__6810_6868__$1 = temp__4092__auto___6867__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6810_6868__$1))
{var c__4191__auto___6869 = cljs.core.chunk_first.call(null,seq__6810_6868__$1);{
var G__6870 = cljs.core.chunk_rest.call(null,seq__6810_6868__$1);
var G__6871 = c__4191__auto___6869;
var G__6872 = cljs.core.count.call(null,c__4191__auto___6869);
var G__6873 = 0;
seq__6810_6858 = G__6870;
chunk__6811_6859 = G__6871;
count__6812_6860 = G__6872;
i__6813_6861 = G__6873;
continue;
}
} else
{var c_6874 = cljs.core.first.call(null,seq__6810_6868__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6874);
{
var G__6875 = cljs.core.next.call(null,seq__6810_6868__$1);
var G__6876 = null;
var G__6877 = 0;
var G__6878 = 0;
seq__6810_6858 = G__6875;
chunk__6811_6859 = G__6876;
count__6812_6860 = G__6877;
i__6813_6861 = G__6878;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6809_6857))
{dommy.attrs.add_class_BANG_.call(null,n,v_6856);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6855,v_6856);
} else
{}
}
}
{
var G__6879 = cljs.core.next.call(null,seq__6798_6848__$1);
var G__6880 = null;
var G__6881 = 0;
var G__6882 = 0;
seq__6798_6814 = G__6879;
chunk__6799_6815 = G__6880;
count__6800_6816 = G__6881;
i__6801_6817 = G__6882;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__6884 = data;if(G__6884)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6884.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6884.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6884);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map