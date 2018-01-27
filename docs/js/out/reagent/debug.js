// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37347__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37348__i = 0, G__37348__a = new Array(arguments.length -  0);
while (G__37348__i < G__37348__a.length) {G__37348__a[G__37348__i] = arguments[G__37348__i + 0]; ++G__37348__i;}
  args = new cljs.core.IndexedSeq(G__37348__a,0,null);
} 
return G__37347__delegate.call(this,args);};
G__37347.cljs$lang$maxFixedArity = 0;
G__37347.cljs$lang$applyTo = (function (arglist__37349){
var args = cljs.core.seq(arglist__37349);
return G__37347__delegate(args);
});
G__37347.cljs$core$IFn$_invoke$arity$variadic = G__37347__delegate;
return G__37347;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37350__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37351__i = 0, G__37351__a = new Array(arguments.length -  0);
while (G__37351__i < G__37351__a.length) {G__37351__a[G__37351__i] = arguments[G__37351__i + 0]; ++G__37351__i;}
  args = new cljs.core.IndexedSeq(G__37351__a,0,null);
} 
return G__37350__delegate.call(this,args);};
G__37350.cljs$lang$maxFixedArity = 0;
G__37350.cljs$lang$applyTo = (function (arglist__37352){
var args = cljs.core.seq(arglist__37352);
return G__37350__delegate(args);
});
G__37350.cljs$core$IFn$_invoke$arity$variadic = G__37350__delegate;
return G__37350;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1517021940345
