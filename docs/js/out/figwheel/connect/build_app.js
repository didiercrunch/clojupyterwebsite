// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('website.core');
goog.require('website.dev');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39838__delegate = function (x){
if(cljs.core.truth_(website.core.mount_root)){
return cljs.core.apply.call(null,website.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'website.core/mount-root' is missing");
}
};
var G__39838 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39839__i = 0, G__39839__a = new Array(arguments.length -  0);
while (G__39839__i < G__39839__a.length) {G__39839__a[G__39839__i] = arguments[G__39839__i + 0]; ++G__39839__i;}
  x = new cljs.core.IndexedSeq(G__39839__a,0,null);
} 
return G__39838__delegate.call(this,x);};
G__39838.cljs$lang$maxFixedArity = 0;
G__39838.cljs$lang$applyTo = (function (arglist__39840){
var x = cljs.core.seq(arglist__39840);
return G__39838__delegate(x);
});
G__39838.cljs$core$IFn$_invoke$arity$variadic = G__39838__delegate;
return G__39838;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1517069838889
