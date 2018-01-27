// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45315 = arguments.length;
var i__36778__auto___45316 = (0);
while(true){
if((i__36778__auto___45316 < len__36777__auto___45315)){
args__36784__auto__.push((arguments[i__36778__auto___45316]));

var G__45317 = (i__36778__auto___45316 + (1));
i__36778__auto___45316 = G__45317;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq45314){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45314));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45319 = arguments.length;
var i__36778__auto___45320 = (0);
while(true){
if((i__36778__auto___45320 < len__36777__auto___45319)){
args__36784__auto__.push((arguments[i__36778__auto___45320]));

var G__45321 = (i__36778__auto___45320 + (1));
i__36778__auto___45320 = G__45321;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq45318){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45318));
});

var g_QMARK__45322 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_45323 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__45322){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__45322))
,null));
var mkg_45324 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__45322,g_45323){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__45322,g_45323))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__45322,g_45323,mkg_45324){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__45322).call(null,x);
});})(g_QMARK__45322,g_45323,mkg_45324))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__45322,g_45323,mkg_45324){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_45324).call(null,gfn);
});})(g_QMARK__45322,g_45323,mkg_45324))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__45322,g_45323,mkg_45324){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_45323).call(null,generator);
});})(g_QMARK__45322,g_45323,mkg_45324))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__36930__auto___45344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__36930__auto___45344){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45345 = arguments.length;
var i__36778__auto___45346 = (0);
while(true){
if((i__36778__auto___45346 < len__36777__auto___45345)){
args__36784__auto__.push((arguments[i__36778__auto___45346]));

var G__45347 = (i__36778__auto___45346 + (1));
i__36778__auto___45346 = G__45347;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45344))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45344),args);
});})(g__36930__auto___45344))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__36930__auto___45344){
return (function (seq45325){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45325));
});})(g__36930__auto___45344))
;


var g__36930__auto___45348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__36930__auto___45348){
return (function cljs$spec$gen$alpha$list(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45349 = arguments.length;
var i__36778__auto___45350 = (0);
while(true){
if((i__36778__auto___45350 < len__36777__auto___45349)){
args__36784__auto__.push((arguments[i__36778__auto___45350]));

var G__45351 = (i__36778__auto___45350 + (1));
i__36778__auto___45350 = G__45351;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45348))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45348),args);
});})(g__36930__auto___45348))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__36930__auto___45348){
return (function (seq45326){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45326));
});})(g__36930__auto___45348))
;


var g__36930__auto___45352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__36930__auto___45352){
return (function cljs$spec$gen$alpha$map(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45353 = arguments.length;
var i__36778__auto___45354 = (0);
while(true){
if((i__36778__auto___45354 < len__36777__auto___45353)){
args__36784__auto__.push((arguments[i__36778__auto___45354]));

var G__45355 = (i__36778__auto___45354 + (1));
i__36778__auto___45354 = G__45355;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45352))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45352),args);
});})(g__36930__auto___45352))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__36930__auto___45352){
return (function (seq45327){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45327));
});})(g__36930__auto___45352))
;


var g__36930__auto___45356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__36930__auto___45356){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45357 = arguments.length;
var i__36778__auto___45358 = (0);
while(true){
if((i__36778__auto___45358 < len__36777__auto___45357)){
args__36784__auto__.push((arguments[i__36778__auto___45358]));

var G__45359 = (i__36778__auto___45358 + (1));
i__36778__auto___45358 = G__45359;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45356))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45356),args);
});})(g__36930__auto___45356))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__36930__auto___45356){
return (function (seq45328){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45328));
});})(g__36930__auto___45356))
;


var g__36930__auto___45360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__36930__auto___45360){
return (function cljs$spec$gen$alpha$set(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45361 = arguments.length;
var i__36778__auto___45362 = (0);
while(true){
if((i__36778__auto___45362 < len__36777__auto___45361)){
args__36784__auto__.push((arguments[i__36778__auto___45362]));

var G__45363 = (i__36778__auto___45362 + (1));
i__36778__auto___45362 = G__45363;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45360))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45360),args);
});})(g__36930__auto___45360))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__36930__auto___45360){
return (function (seq45329){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45329));
});})(g__36930__auto___45360))
;


var g__36930__auto___45364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__36930__auto___45364){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45365 = arguments.length;
var i__36778__auto___45366 = (0);
while(true){
if((i__36778__auto___45366 < len__36777__auto___45365)){
args__36784__auto__.push((arguments[i__36778__auto___45366]));

var G__45367 = (i__36778__auto___45366 + (1));
i__36778__auto___45366 = G__45367;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45364))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45364){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45364),args);
});})(g__36930__auto___45364))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__36930__auto___45364){
return (function (seq45330){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45330));
});})(g__36930__auto___45364))
;


var g__36930__auto___45368 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__36930__auto___45368){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45369 = arguments.length;
var i__36778__auto___45370 = (0);
while(true){
if((i__36778__auto___45370 < len__36777__auto___45369)){
args__36784__auto__.push((arguments[i__36778__auto___45370]));

var G__45371 = (i__36778__auto___45370 + (1));
i__36778__auto___45370 = G__45371;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45368))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45368){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45368),args);
});})(g__36930__auto___45368))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__36930__auto___45368){
return (function (seq45331){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45331));
});})(g__36930__auto___45368))
;


var g__36930__auto___45372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__36930__auto___45372){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45373 = arguments.length;
var i__36778__auto___45374 = (0);
while(true){
if((i__36778__auto___45374 < len__36777__auto___45373)){
args__36784__auto__.push((arguments[i__36778__auto___45374]));

var G__45375 = (i__36778__auto___45374 + (1));
i__36778__auto___45374 = G__45375;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45372))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45372){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45372),args);
});})(g__36930__auto___45372))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__36930__auto___45372){
return (function (seq45332){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45332));
});})(g__36930__auto___45372))
;


var g__36930__auto___45376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__36930__auto___45376){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45377 = arguments.length;
var i__36778__auto___45378 = (0);
while(true){
if((i__36778__auto___45378 < len__36777__auto___45377)){
args__36784__auto__.push((arguments[i__36778__auto___45378]));

var G__45379 = (i__36778__auto___45378 + (1));
i__36778__auto___45378 = G__45379;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45376))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45376){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45376),args);
});})(g__36930__auto___45376))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__36930__auto___45376){
return (function (seq45333){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45333));
});})(g__36930__auto___45376))
;


var g__36930__auto___45380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__36930__auto___45380){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45381 = arguments.length;
var i__36778__auto___45382 = (0);
while(true){
if((i__36778__auto___45382 < len__36777__auto___45381)){
args__36784__auto__.push((arguments[i__36778__auto___45382]));

var G__45383 = (i__36778__auto___45382 + (1));
i__36778__auto___45382 = G__45383;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45380))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45380){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45380),args);
});})(g__36930__auto___45380))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__36930__auto___45380){
return (function (seq45334){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45334));
});})(g__36930__auto___45380))
;


var g__36930__auto___45384 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__36930__auto___45384){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45385 = arguments.length;
var i__36778__auto___45386 = (0);
while(true){
if((i__36778__auto___45386 < len__36777__auto___45385)){
args__36784__auto__.push((arguments[i__36778__auto___45386]));

var G__45387 = (i__36778__auto___45386 + (1));
i__36778__auto___45386 = G__45387;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45384))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45384){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45384),args);
});})(g__36930__auto___45384))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__36930__auto___45384){
return (function (seq45335){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45335));
});})(g__36930__auto___45384))
;


var g__36930__auto___45388 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__36930__auto___45388){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45389 = arguments.length;
var i__36778__auto___45390 = (0);
while(true){
if((i__36778__auto___45390 < len__36777__auto___45389)){
args__36784__auto__.push((arguments[i__36778__auto___45390]));

var G__45391 = (i__36778__auto___45390 + (1));
i__36778__auto___45390 = G__45391;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45388))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45388){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45388),args);
});})(g__36930__auto___45388))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__36930__auto___45388){
return (function (seq45336){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45336));
});})(g__36930__auto___45388))
;


var g__36930__auto___45392 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__36930__auto___45392){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45393 = arguments.length;
var i__36778__auto___45394 = (0);
while(true){
if((i__36778__auto___45394 < len__36777__auto___45393)){
args__36784__auto__.push((arguments[i__36778__auto___45394]));

var G__45395 = (i__36778__auto___45394 + (1));
i__36778__auto___45394 = G__45395;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45392))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45392),args);
});})(g__36930__auto___45392))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__36930__auto___45392){
return (function (seq45337){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45337));
});})(g__36930__auto___45392))
;


var g__36930__auto___45396 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__36930__auto___45396){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45397 = arguments.length;
var i__36778__auto___45398 = (0);
while(true){
if((i__36778__auto___45398 < len__36777__auto___45397)){
args__36784__auto__.push((arguments[i__36778__auto___45398]));

var G__45399 = (i__36778__auto___45398 + (1));
i__36778__auto___45398 = G__45399;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45396))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45396),args);
});})(g__36930__auto___45396))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__36930__auto___45396){
return (function (seq45338){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45338));
});})(g__36930__auto___45396))
;


var g__36930__auto___45400 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__36930__auto___45400){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45401 = arguments.length;
var i__36778__auto___45402 = (0);
while(true){
if((i__36778__auto___45402 < len__36777__auto___45401)){
args__36784__auto__.push((arguments[i__36778__auto___45402]));

var G__45403 = (i__36778__auto___45402 + (1));
i__36778__auto___45402 = G__45403;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45400))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45400),args);
});})(g__36930__auto___45400))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__36930__auto___45400){
return (function (seq45339){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45339));
});})(g__36930__auto___45400))
;


var g__36930__auto___45404 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__36930__auto___45404){
return (function cljs$spec$gen$alpha$return(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45405 = arguments.length;
var i__36778__auto___45406 = (0);
while(true){
if((i__36778__auto___45406 < len__36777__auto___45405)){
args__36784__auto__.push((arguments[i__36778__auto___45406]));

var G__45407 = (i__36778__auto___45406 + (1));
i__36778__auto___45406 = G__45407;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45404))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45404){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45404),args);
});})(g__36930__auto___45404))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__36930__auto___45404){
return (function (seq45340){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45340));
});})(g__36930__auto___45404))
;


var g__36930__auto___45408 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__36930__auto___45408){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45409 = arguments.length;
var i__36778__auto___45410 = (0);
while(true){
if((i__36778__auto___45410 < len__36777__auto___45409)){
args__36784__auto__.push((arguments[i__36778__auto___45410]));

var G__45411 = (i__36778__auto___45410 + (1));
i__36778__auto___45410 = G__45411;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45408))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45408){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45408),args);
});})(g__36930__auto___45408))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__36930__auto___45408){
return (function (seq45341){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45341));
});})(g__36930__auto___45408))
;


var g__36930__auto___45412 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__36930__auto___45412){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45413 = arguments.length;
var i__36778__auto___45414 = (0);
while(true){
if((i__36778__auto___45414 < len__36777__auto___45413)){
args__36784__auto__.push((arguments[i__36778__auto___45414]));

var G__45415 = (i__36778__auto___45414 + (1));
i__36778__auto___45414 = G__45415;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45412))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45412){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45412),args);
});})(g__36930__auto___45412))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__36930__auto___45412){
return (function (seq45342){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45342));
});})(g__36930__auto___45412))
;


var g__36930__auto___45416 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__36930__auto___45416){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45417 = arguments.length;
var i__36778__auto___45418 = (0);
while(true){
if((i__36778__auto___45418 < len__36777__auto___45417)){
args__36784__auto__.push((arguments[i__36778__auto___45418]));

var G__45419 = (i__36778__auto___45418 + (1));
i__36778__auto___45418 = G__45419;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36930__auto___45416))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36930__auto___45416){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36930__auto___45416),args);
});})(g__36930__auto___45416))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__36930__auto___45416){
return (function (seq45343){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45343));
});})(g__36930__auto___45416))
;

var g__36943__auto___45441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__36943__auto___45441){
return (function cljs$spec$gen$alpha$any(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45442 = arguments.length;
var i__36778__auto___45443 = (0);
while(true){
if((i__36778__auto___45443 < len__36777__auto___45442)){
args__36784__auto__.push((arguments[i__36778__auto___45443]));

var G__45444 = (i__36778__auto___45443 + (1));
i__36778__auto___45443 = G__45444;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45441))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45441){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45441);
});})(g__36943__auto___45441))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__36943__auto___45441){
return (function (seq45420){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45420));
});})(g__36943__auto___45441))
;


var g__36943__auto___45445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__36943__auto___45445){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45446 = arguments.length;
var i__36778__auto___45447 = (0);
while(true){
if((i__36778__auto___45447 < len__36777__auto___45446)){
args__36784__auto__.push((arguments[i__36778__auto___45447]));

var G__45448 = (i__36778__auto___45447 + (1));
i__36778__auto___45447 = G__45448;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45445))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45445){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45445);
});})(g__36943__auto___45445))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__36943__auto___45445){
return (function (seq45421){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45421));
});})(g__36943__auto___45445))
;


var g__36943__auto___45449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__36943__auto___45449){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45450 = arguments.length;
var i__36778__auto___45451 = (0);
while(true){
if((i__36778__auto___45451 < len__36777__auto___45450)){
args__36784__auto__.push((arguments[i__36778__auto___45451]));

var G__45452 = (i__36778__auto___45451 + (1));
i__36778__auto___45451 = G__45452;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45449))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45449){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45449);
});})(g__36943__auto___45449))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__36943__auto___45449){
return (function (seq45422){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45422));
});})(g__36943__auto___45449))
;


var g__36943__auto___45453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__36943__auto___45453){
return (function cljs$spec$gen$alpha$char(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45454 = arguments.length;
var i__36778__auto___45455 = (0);
while(true){
if((i__36778__auto___45455 < len__36777__auto___45454)){
args__36784__auto__.push((arguments[i__36778__auto___45455]));

var G__45456 = (i__36778__auto___45455 + (1));
i__36778__auto___45455 = G__45456;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45453))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45453){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45453);
});})(g__36943__auto___45453))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__36943__auto___45453){
return (function (seq45423){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45423));
});})(g__36943__auto___45453))
;


var g__36943__auto___45457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__36943__auto___45457){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45458 = arguments.length;
var i__36778__auto___45459 = (0);
while(true){
if((i__36778__auto___45459 < len__36777__auto___45458)){
args__36784__auto__.push((arguments[i__36778__auto___45459]));

var G__45460 = (i__36778__auto___45459 + (1));
i__36778__auto___45459 = G__45460;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45457))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45457){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45457);
});})(g__36943__auto___45457))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__36943__auto___45457){
return (function (seq45424){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45424));
});})(g__36943__auto___45457))
;


var g__36943__auto___45461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__36943__auto___45461){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45462 = arguments.length;
var i__36778__auto___45463 = (0);
while(true){
if((i__36778__auto___45463 < len__36777__auto___45462)){
args__36784__auto__.push((arguments[i__36778__auto___45463]));

var G__45464 = (i__36778__auto___45463 + (1));
i__36778__auto___45463 = G__45464;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45461))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45461){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45461);
});})(g__36943__auto___45461))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__36943__auto___45461){
return (function (seq45425){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45425));
});})(g__36943__auto___45461))
;


var g__36943__auto___45465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__36943__auto___45465){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45466 = arguments.length;
var i__36778__auto___45467 = (0);
while(true){
if((i__36778__auto___45467 < len__36777__auto___45466)){
args__36784__auto__.push((arguments[i__36778__auto___45467]));

var G__45468 = (i__36778__auto___45467 + (1));
i__36778__auto___45467 = G__45468;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45465))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45465){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45465);
});})(g__36943__auto___45465))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__36943__auto___45465){
return (function (seq45426){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45426));
});})(g__36943__auto___45465))
;


var g__36943__auto___45469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__36943__auto___45469){
return (function cljs$spec$gen$alpha$double(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45470 = arguments.length;
var i__36778__auto___45471 = (0);
while(true){
if((i__36778__auto___45471 < len__36777__auto___45470)){
args__36784__auto__.push((arguments[i__36778__auto___45471]));

var G__45472 = (i__36778__auto___45471 + (1));
i__36778__auto___45471 = G__45472;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45469))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45469){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45469);
});})(g__36943__auto___45469))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__36943__auto___45469){
return (function (seq45427){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45427));
});})(g__36943__auto___45469))
;


var g__36943__auto___45473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__36943__auto___45473){
return (function cljs$spec$gen$alpha$int(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45474 = arguments.length;
var i__36778__auto___45475 = (0);
while(true){
if((i__36778__auto___45475 < len__36777__auto___45474)){
args__36784__auto__.push((arguments[i__36778__auto___45475]));

var G__45476 = (i__36778__auto___45475 + (1));
i__36778__auto___45475 = G__45476;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45473))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45473){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45473);
});})(g__36943__auto___45473))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__36943__auto___45473){
return (function (seq45428){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45428));
});})(g__36943__auto___45473))
;


var g__36943__auto___45477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__36943__auto___45477){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45478 = arguments.length;
var i__36778__auto___45479 = (0);
while(true){
if((i__36778__auto___45479 < len__36777__auto___45478)){
args__36784__auto__.push((arguments[i__36778__auto___45479]));

var G__45480 = (i__36778__auto___45479 + (1));
i__36778__auto___45479 = G__45480;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45477))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45477){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45477);
});})(g__36943__auto___45477))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__36943__auto___45477){
return (function (seq45429){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45429));
});})(g__36943__auto___45477))
;


var g__36943__auto___45481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__36943__auto___45481){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45482 = arguments.length;
var i__36778__auto___45483 = (0);
while(true){
if((i__36778__auto___45483 < len__36777__auto___45482)){
args__36784__auto__.push((arguments[i__36778__auto___45483]));

var G__45484 = (i__36778__auto___45483 + (1));
i__36778__auto___45483 = G__45484;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45481))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45481){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45481);
});})(g__36943__auto___45481))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__36943__auto___45481){
return (function (seq45430){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45430));
});})(g__36943__auto___45481))
;


var g__36943__auto___45485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__36943__auto___45485){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45486 = arguments.length;
var i__36778__auto___45487 = (0);
while(true){
if((i__36778__auto___45487 < len__36777__auto___45486)){
args__36784__auto__.push((arguments[i__36778__auto___45487]));

var G__45488 = (i__36778__auto___45487 + (1));
i__36778__auto___45487 = G__45488;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45485))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45485){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45485);
});})(g__36943__auto___45485))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__36943__auto___45485){
return (function (seq45431){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45431));
});})(g__36943__auto___45485))
;


var g__36943__auto___45489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__36943__auto___45489){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45490 = arguments.length;
var i__36778__auto___45491 = (0);
while(true){
if((i__36778__auto___45491 < len__36777__auto___45490)){
args__36784__auto__.push((arguments[i__36778__auto___45491]));

var G__45492 = (i__36778__auto___45491 + (1));
i__36778__auto___45491 = G__45492;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45489))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45489){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45489);
});})(g__36943__auto___45489))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__36943__auto___45489){
return (function (seq45432){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45432));
});})(g__36943__auto___45489))
;


var g__36943__auto___45493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__36943__auto___45493){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45494 = arguments.length;
var i__36778__auto___45495 = (0);
while(true){
if((i__36778__auto___45495 < len__36777__auto___45494)){
args__36784__auto__.push((arguments[i__36778__auto___45495]));

var G__45496 = (i__36778__auto___45495 + (1));
i__36778__auto___45495 = G__45496;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45493))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45493){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45493);
});})(g__36943__auto___45493))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__36943__auto___45493){
return (function (seq45433){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45433));
});})(g__36943__auto___45493))
;


var g__36943__auto___45497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__36943__auto___45497){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45498 = arguments.length;
var i__36778__auto___45499 = (0);
while(true){
if((i__36778__auto___45499 < len__36777__auto___45498)){
args__36784__auto__.push((arguments[i__36778__auto___45499]));

var G__45500 = (i__36778__auto___45499 + (1));
i__36778__auto___45499 = G__45500;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45497))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45497){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45497);
});})(g__36943__auto___45497))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__36943__auto___45497){
return (function (seq45434){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45434));
});})(g__36943__auto___45497))
;


var g__36943__auto___45501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__36943__auto___45501){
return (function cljs$spec$gen$alpha$string(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45502 = arguments.length;
var i__36778__auto___45503 = (0);
while(true){
if((i__36778__auto___45503 < len__36777__auto___45502)){
args__36784__auto__.push((arguments[i__36778__auto___45503]));

var G__45504 = (i__36778__auto___45503 + (1));
i__36778__auto___45503 = G__45504;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45501))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45501){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45501);
});})(g__36943__auto___45501))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__36943__auto___45501){
return (function (seq45435){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45435));
});})(g__36943__auto___45501))
;


var g__36943__auto___45505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__36943__auto___45505){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45506 = arguments.length;
var i__36778__auto___45507 = (0);
while(true){
if((i__36778__auto___45507 < len__36777__auto___45506)){
args__36784__auto__.push((arguments[i__36778__auto___45507]));

var G__45508 = (i__36778__auto___45507 + (1));
i__36778__auto___45507 = G__45508;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45505))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45505){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45505);
});})(g__36943__auto___45505))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__36943__auto___45505){
return (function (seq45436){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45436));
});})(g__36943__auto___45505))
;


var g__36943__auto___45509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__36943__auto___45509){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45510 = arguments.length;
var i__36778__auto___45511 = (0);
while(true){
if((i__36778__auto___45511 < len__36777__auto___45510)){
args__36784__auto__.push((arguments[i__36778__auto___45511]));

var G__45512 = (i__36778__auto___45511 + (1));
i__36778__auto___45511 = G__45512;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45509))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45509){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45509);
});})(g__36943__auto___45509))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__36943__auto___45509){
return (function (seq45437){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45437));
});})(g__36943__auto___45509))
;


var g__36943__auto___45513 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__36943__auto___45513){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45514 = arguments.length;
var i__36778__auto___45515 = (0);
while(true){
if((i__36778__auto___45515 < len__36777__auto___45514)){
args__36784__auto__.push((arguments[i__36778__auto___45515]));

var G__45516 = (i__36778__auto___45515 + (1));
i__36778__auto___45515 = G__45516;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45513))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45513){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45513);
});})(g__36943__auto___45513))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__36943__auto___45513){
return (function (seq45438){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45438));
});})(g__36943__auto___45513))
;


var g__36943__auto___45517 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__36943__auto___45517){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45518 = arguments.length;
var i__36778__auto___45519 = (0);
while(true){
if((i__36778__auto___45519 < len__36777__auto___45518)){
args__36784__auto__.push((arguments[i__36778__auto___45519]));

var G__45520 = (i__36778__auto___45519 + (1));
i__36778__auto___45519 = G__45520;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45517))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45517){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45517);
});})(g__36943__auto___45517))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__36943__auto___45517){
return (function (seq45439){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45439));
});})(g__36943__auto___45517))
;


var g__36943__auto___45521 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__36943__auto___45521){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45522 = arguments.length;
var i__36778__auto___45523 = (0);
while(true){
if((i__36778__auto___45523 < len__36777__auto___45522)){
args__36784__auto__.push((arguments[i__36778__auto___45523]));

var G__45524 = (i__36778__auto___45523 + (1));
i__36778__auto___45523 = G__45524;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});})(g__36943__auto___45521))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36943__auto___45521){
return (function (args){
return cljs.core.deref.call(null,g__36943__auto___45521);
});})(g__36943__auto___45521))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__36943__auto___45521){
return (function (seq45440){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45440));
});})(g__36943__auto___45521))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__36784__auto__ = [];
var len__36777__auto___45527 = arguments.length;
var i__36778__auto___45528 = (0);
while(true){
if((i__36778__auto___45528 < len__36777__auto___45527)){
args__36784__auto__.push((arguments[i__36778__auto___45528]));

var G__45529 = (i__36778__auto___45528 + (1));
i__36778__auto___45528 = G__45529;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__45525_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__45525_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq45526){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45526));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__45530_SHARP_){
return (new Date(p1__45530_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1517021947626
