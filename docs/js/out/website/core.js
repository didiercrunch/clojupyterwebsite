// Compiled by ClojureScript 1.9.946 {}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('website.tobbar');
goog.require('website.home');
if(typeof website.core.page !== 'undefined'){
} else {
website.core.page = reagent.core.atom.call(null,new cljs.core.Var(function(){return website.home.home_page;},new cljs.core.Symbol("website.home","home-page","website.home/home-page",-1631300293,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"website.home","website.home",-2089173226,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/didier/clojupyter/website/src/cljs/website/home.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(website.home.home_page)?website.home.home_page.cljs$lang$test:null)])));
}
website.core.current_page = (function website$core$current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.tobbar.topbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-offset-1.is-10","div.column.is-offset-1.is-10",-566647859),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,website.core.page)], null)], null)], null)], null);
});
var action__37832__auto___50386 = (function (params__37833__auto__){
if(cljs.core.map_QMARK_.call(null,params__37833__auto__)){
var map__50381 = params__37833__auto__;
var map__50381__$1 = ((((!((map__50381 == null)))?((((map__50381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50381):map__50381);
return cljs.core.reset_BANG_.call(null,website.core.page,new cljs.core.Var(function(){return website.home.home_page;},new cljs.core.Symbol("website.home","home-page","website.home/home-page",-1631300293,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"website.home","website.home",-2089173226,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/didier/clojupyter/website/src/cljs/website/home.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(website.home.home_page)?website.home.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37833__auto__)){
var vec__50383 = params__37833__auto__;
return cljs.core.reset_BANG_.call(null,website.core.page,new cljs.core.Var(function(){return website.home.home_page;},new cljs.core.Symbol("website.home","home-page","website.home/home-page",-1631300293,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"website.home","website.home",-2089173226,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/didier/clojupyter/website/src/cljs/website/home.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(website.home.home_page)?website.home.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__37832__auto___50386);

website.core.mount_root = (function website$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.core.current_page], null),document.getElementById("app"));
});
website.core.init_BANG_ = (function website$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return website.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1517067923258
