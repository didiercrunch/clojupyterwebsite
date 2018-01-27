// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__14485__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14486__i = 0, G__14486__a = new Array(arguments.length -  0);
while (G__14486__i < G__14486__a.length) {G__14486__a[G__14486__i] = arguments[G__14486__i + 0]; ++G__14486__i;}
  args = new cljs.core.IndexedSeq(G__14486__a,0,null);
} 
return G__14485__delegate.call(this,args);};
G__14485.cljs$lang$maxFixedArity = 0;
G__14485.cljs$lang$applyTo = (function (arglist__14487){
var args = cljs.core.seq(arglist__14487);
return G__14485__delegate(args);
});
G__14485.cljs$core$IFn$_invoke$arity$variadic = G__14485__delegate;
return G__14485;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__14488__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14489__i = 0, G__14489__a = new Array(arguments.length -  0);
while (G__14489__i < G__14489__a.length) {G__14489__a[G__14489__i] = arguments[G__14489__i + 0]; ++G__14489__i;}
  args = new cljs.core.IndexedSeq(G__14489__a,0,null);
} 
return G__14488__delegate.call(this,args);};
G__14488.cljs$lang$maxFixedArity = 0;
G__14488.cljs$lang$applyTo = (function (arglist__14490){
var args = cljs.core.seq(arglist__14490);
return G__14488__delegate(args);
});
G__14488.cljs$core$IFn$_invoke$arity$variadic = G__14488__delegate;
return G__14488;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
