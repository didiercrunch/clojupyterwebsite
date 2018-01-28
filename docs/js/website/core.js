// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('website.tobbar');
goog.require('website.home');
if(typeof website.core.page !== 'undefined'){
} else {
website.core.page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return website.home.home_page;},cljs.core.cst$sym$website$home_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$website$home,cljs.core.cst$sym$home_DASH_page,"/home/didier/clojupyter/website/src/cljs/website/home.cljs",16,1,29,29,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(website.home.home_page)?website.home.home_page.cljs$lang$test:null)])));
}
website.core.current_page = (function website$core$current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.tobbar.topbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_offset_DASH_1$is_DASH_10,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(website.core.page)], null)], null)], null)], null);
});
var action__15027__auto___15181 = (function (params__15028__auto__){
if(cljs.core.map_QMARK_(params__15028__auto__)){
var map__15176 = params__15028__auto__;
var map__15176__$1 = ((((!((map__15176 == null)))?((((map__15176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15176):map__15176);
return cljs.core.reset_BANG_(website.core.page,new cljs.core.Var(function(){return website.home.home_page;},cljs.core.cst$sym$website$home_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$website$home,cljs.core.cst$sym$home_DASH_page,"/home/didier/clojupyter/website/src/cljs/website/home.cljs",16,1,29,29,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(website.home.home_page)?website.home.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__15028__auto__)){
var vec__15178 = params__15028__auto__;
return cljs.core.reset_BANG_(website.core.page,new cljs.core.Var(function(){return website.home.home_page;},cljs.core.cst$sym$website$home_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$website$home,cljs.core.cst$sym$home_DASH_page,"/home/didier/clojupyter/website/src/cljs/website/home.cljs",16,1,29,29,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(website.home.home_page)?website.home.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15027__auto___15181);

website.core.mount_root = (function website$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.core.current_page], null),document.getElementById("app"));
});
website.core.init_BANG_ = (function website$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return website.core.mount_root();
});
