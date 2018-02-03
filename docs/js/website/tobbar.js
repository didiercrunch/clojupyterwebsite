// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('website.tobbar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('website.logo');
goog.require('reagent.core');
var ret__10107__auto___15179 = (function (){
website.tobbar.handler_fn = (function website$tobbar$handler_fn(var_args){
var args__10068__auto__ = [];
var len__10061__auto___15180 = arguments.length;
var i__10062__auto___15181 = (0);
while(true){
if((i__10062__auto___15181 < len__10061__auto___15180)){
args__10068__auto__.push((arguments[i__10062__auto___15181]));

var G__15182 = (i__10062__auto___15181 + (1));
i__10062__auto___15181 = G__15182;
continue;
} else {
}
break;
}

var argseq__10069__auto__ = ((((2) < args__10068__auto__.length))?(new cljs.core.IndexedSeq(args__10068__auto__.slice((2)),(0),null)):null);
return website.tobbar.handler_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10069__auto__);
});

website.tobbar.handler_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9736__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$event)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9736__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

website.tobbar.handler_fn.cljs$lang$maxFixedArity = (2);

website.tobbar.handler_fn.cljs$lang$applyTo = (function (seq15176){
var G__15177 = cljs.core.first(seq15176);
var seq15176__$1 = cljs.core.next(seq15176);
var G__15178 = cljs.core.first(seq15176__$1);
var seq15176__$2 = cljs.core.next(seq15176__$1);
return website.tobbar.handler_fn.cljs$core$IFn$_invoke$arity$variadic(G__15177,G__15178,seq15176__$2);
});

return null;
})()
;
website.tobbar.handler_fn.cljs$lang$macro = true;

website.tobbar.important = (function website$tobbar$important(w){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$has_DASH_text_DASH_weight_DASH_semibold,w], null);
});
website.tobbar.github_link = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$title$is_DASH_5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_github], null)], null);
website.tobbar.topbar = (function website$tobbar$topbar(){
var active_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (active_QMARK_){
return (function (){
var text_color = (cljs.core.truth_(cljs.core.deref(active_QMARK_))?"black":"white");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$is_DASH_primary$is_DASH_transparent,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"navigation",cljs.core.cst$kw$aria_DASH_label,"main navigation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_brand,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.logo.logo,(30)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_burger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (text_color,active_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active_QMARK_,cljs.core.not);
});})(text_color,active_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(active_QMARK_))?"is-active":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_start,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,text_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/charting"], null),website.tobbar.important(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_chart_DASH_bar], null)," Charting"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/install"], null),website.tobbar.important(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_arrow_DASH_down], null)," Install"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_end,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/clojupyter"], null),website.tobbar.important(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_github], null)," GitHub"], null))], null)], null)], null)], null);
});
;})(active_QMARK_))
});
