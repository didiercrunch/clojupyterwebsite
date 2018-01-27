// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42309 = arguments.length;
switch (G__42309) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42310 = (function (f,blockable,meta42311){
this.f = f;
this.blockable = blockable;
this.meta42311 = meta42311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42312,meta42311__$1){
var self__ = this;
var _42312__$1 = this;
return (new cljs.core.async.t_cljs$core$async42310(self__.f,self__.blockable,meta42311__$1));
});

cljs.core.async.t_cljs$core$async42310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42312){
var self__ = this;
var _42312__$1 = this;
return self__.meta42311;
});

cljs.core.async.t_cljs$core$async42310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42311","meta42311",401792526,null)], null);
});

cljs.core.async.t_cljs$core$async42310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42310";

cljs.core.async.t_cljs$core$async42310.cljs$lang$ctorPrWriter = (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async42310");
});

cljs.core.async.__GT_t_cljs$core$async42310 = (function cljs$core$async$__GT_t_cljs$core$async42310(f__$1,blockable__$1,meta42311){
return (new cljs.core.async.t_cljs$core$async42310(f__$1,blockable__$1,meta42311));
});

}

return (new cljs.core.async.t_cljs$core$async42310(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42316 = arguments.length;
switch (G__42316) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42319 = arguments.length;
switch (G__42319) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42322 = arguments.length;
switch (G__42322) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42324 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42324);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42324,ret){
return (function (){
return fn1.call(null,val_42324);
});})(val_42324,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42326 = arguments.length;
switch (G__42326) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__36543__auto___42328 = n;
var x_42329 = (0);
while(true){
if((x_42329 < n__36543__auto___42328)){
(a[x_42329] = (0));

var G__42330 = (x_42329 + (1));
x_42329 = G__42330;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__42331 = (i + (1));
i = G__42331;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42332 = (function (flag,meta42333){
this.flag = flag;
this.meta42333 = meta42333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42334,meta42333__$1){
var self__ = this;
var _42334__$1 = this;
return (new cljs.core.async.t_cljs$core$async42332(self__.flag,meta42333__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42334){
var self__ = this;
var _42334__$1 = this;
return self__.meta42333;
});})(flag))
;

cljs.core.async.t_cljs$core$async42332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42332.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42333","meta42333",1313942822,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42332";

cljs.core.async.t_cljs$core$async42332.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async42332");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42332 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42332(flag__$1,meta42333){
return (new cljs.core.async.t_cljs$core$async42332(flag__$1,meta42333));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42332(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42335 = (function (flag,cb,meta42336){
this.flag = flag;
this.cb = cb;
this.meta42336 = meta42336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42337,meta42336__$1){
var self__ = this;
var _42337__$1 = this;
return (new cljs.core.async.t_cljs$core$async42335(self__.flag,self__.cb,meta42336__$1));
});

cljs.core.async.t_cljs$core$async42335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42337){
var self__ = this;
var _42337__$1 = this;
return self__.meta42336;
});

cljs.core.async.t_cljs$core$async42335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42336","meta42336",-1462250853,null)], null);
});

cljs.core.async.t_cljs$core$async42335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42335";

cljs.core.async.t_cljs$core$async42335.cljs$lang$ctorPrWriter = (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async42335");
});

cljs.core.async.__GT_t_cljs$core$async42335 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42335(flag__$1,cb__$1,meta42336){
return (new cljs.core.async.t_cljs$core$async42335(flag__$1,cb__$1,meta42336));
});

}

return (new cljs.core.async.t_cljs$core$async42335(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42338_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42338_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42339_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42339_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35498__auto__ = wport;
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42340 = (i + (1));
i = G__42340;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35498__auto__ = ret;
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__35486__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35486__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35486__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__36784__auto__ = [];
var len__36777__auto___42346 = arguments.length;
var i__36778__auto___42347 = (0);
while(true){
if((i__36778__auto___42347 < len__36777__auto___42346)){
args__36784__auto__.push((arguments[i__36778__auto___42347]));

var G__42348 = (i__36778__auto___42347 + (1));
i__36778__auto___42347 = G__42348;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((1) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36785__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42343){
var map__42344 = p__42343;
var map__42344__$1 = ((((!((map__42344 == null)))?((((map__42344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42344):map__42344);
var opts = map__42344__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42341){
var G__42342 = cljs.core.first.call(null,seq42341);
var seq42341__$1 = cljs.core.next.call(null,seq42341);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42342,seq42341__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42350 = arguments.length;
switch (G__42350) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42249__auto___42396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___42396){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___42396){
return (function (state_42374){
var state_val_42375 = (state_42374[(1)]);
if((state_val_42375 === (7))){
var inst_42370 = (state_42374[(2)]);
var state_42374__$1 = state_42374;
var statearr_42376_42397 = state_42374__$1;
(statearr_42376_42397[(2)] = inst_42370);

(statearr_42376_42397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (1))){
var state_42374__$1 = state_42374;
var statearr_42377_42398 = state_42374__$1;
(statearr_42377_42398[(2)] = null);

(statearr_42377_42398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (4))){
var inst_42353 = (state_42374[(7)]);
var inst_42353__$1 = (state_42374[(2)]);
var inst_42354 = (inst_42353__$1 == null);
var state_42374__$1 = (function (){var statearr_42378 = state_42374;
(statearr_42378[(7)] = inst_42353__$1);

return statearr_42378;
})();
if(cljs.core.truth_(inst_42354)){
var statearr_42379_42399 = state_42374__$1;
(statearr_42379_42399[(1)] = (5));

} else {
var statearr_42380_42400 = state_42374__$1;
(statearr_42380_42400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (13))){
var state_42374__$1 = state_42374;
var statearr_42381_42401 = state_42374__$1;
(statearr_42381_42401[(2)] = null);

(statearr_42381_42401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (6))){
var inst_42353 = (state_42374[(7)]);
var state_42374__$1 = state_42374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42374__$1,(11),to,inst_42353);
} else {
if((state_val_42375 === (3))){
var inst_42372 = (state_42374[(2)]);
var state_42374__$1 = state_42374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42374__$1,inst_42372);
} else {
if((state_val_42375 === (12))){
var state_42374__$1 = state_42374;
var statearr_42382_42402 = state_42374__$1;
(statearr_42382_42402[(2)] = null);

(statearr_42382_42402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (2))){
var state_42374__$1 = state_42374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42374__$1,(4),from);
} else {
if((state_val_42375 === (11))){
var inst_42363 = (state_42374[(2)]);
var state_42374__$1 = state_42374;
if(cljs.core.truth_(inst_42363)){
var statearr_42383_42403 = state_42374__$1;
(statearr_42383_42403[(1)] = (12));

} else {
var statearr_42384_42404 = state_42374__$1;
(statearr_42384_42404[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (9))){
var state_42374__$1 = state_42374;
var statearr_42385_42405 = state_42374__$1;
(statearr_42385_42405[(2)] = null);

(statearr_42385_42405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (5))){
var state_42374__$1 = state_42374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42386_42406 = state_42374__$1;
(statearr_42386_42406[(1)] = (8));

} else {
var statearr_42387_42407 = state_42374__$1;
(statearr_42387_42407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (14))){
var inst_42368 = (state_42374[(2)]);
var state_42374__$1 = state_42374;
var statearr_42388_42408 = state_42374__$1;
(statearr_42388_42408[(2)] = inst_42368);

(statearr_42388_42408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (10))){
var inst_42360 = (state_42374[(2)]);
var state_42374__$1 = state_42374;
var statearr_42389_42409 = state_42374__$1;
(statearr_42389_42409[(2)] = inst_42360);

(statearr_42389_42409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42375 === (8))){
var inst_42357 = cljs.core.async.close_BANG_.call(null,to);
var state_42374__$1 = state_42374;
var statearr_42390_42410 = state_42374__$1;
(statearr_42390_42410[(2)] = inst_42357);

(statearr_42390_42410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___42396))
;
return ((function (switch__42159__auto__,c__42249__auto___42396){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_42391 = [null,null,null,null,null,null,null,null];
(statearr_42391[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_42391[(1)] = (1));

return statearr_42391;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_42374){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42392){if((e42392 instanceof Object)){
var ex__42163__auto__ = e42392;
var statearr_42393_42411 = state_42374;
(statearr_42393_42411[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42412 = state_42374;
state_42374 = G__42412;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_42374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_42374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___42396))
})();
var state__42251__auto__ = (function (){var statearr_42394 = f__42250__auto__.call(null);
(statearr_42394[(6)] = c__42249__auto___42396);

return statearr_42394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___42396))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42413){
var vec__42414 = p__42413;
var v = cljs.core.nth.call(null,vec__42414,(0),null);
var p = cljs.core.nth.call(null,vec__42414,(1),null);
var job = vec__42414;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__42249__auto___42585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___42585,res,vec__42414,v,p,job,jobs,results){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___42585,res,vec__42414,v,p,job,jobs,results){
return (function (state_42421){
var state_val_42422 = (state_42421[(1)]);
if((state_val_42422 === (1))){
var state_42421__$1 = state_42421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42421__$1,(2),res,v);
} else {
if((state_val_42422 === (2))){
var inst_42418 = (state_42421[(2)]);
var inst_42419 = cljs.core.async.close_BANG_.call(null,res);
var state_42421__$1 = (function (){var statearr_42423 = state_42421;
(statearr_42423[(7)] = inst_42418);

return statearr_42423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42421__$1,inst_42419);
} else {
return null;
}
}
});})(c__42249__auto___42585,res,vec__42414,v,p,job,jobs,results))
;
return ((function (switch__42159__auto__,c__42249__auto___42585,res,vec__42414,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0 = (function (){
var statearr_42424 = [null,null,null,null,null,null,null,null];
(statearr_42424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__);

(statearr_42424[(1)] = (1));

return statearr_42424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1 = (function (state_42421){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42425){if((e42425 instanceof Object)){
var ex__42163__auto__ = e42425;
var statearr_42426_42586 = state_42421;
(statearr_42426_42586[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42587 = state_42421;
state_42421 = G__42587;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = function(state_42421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1.call(this,state_42421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___42585,res,vec__42414,v,p,job,jobs,results))
})();
var state__42251__auto__ = (function (){var statearr_42427 = f__42250__auto__.call(null);
(statearr_42427[(6)] = c__42249__auto___42585);

return statearr_42427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___42585,res,vec__42414,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42428){
var vec__42429 = p__42428;
var v = cljs.core.nth.call(null,vec__42429,(0),null);
var p = cljs.core.nth.call(null,vec__42429,(1),null);
var job = vec__42429;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__36543__auto___42588 = n;
var __42589 = (0);
while(true){
if((__42589 < n__36543__auto___42588)){
var G__42432_42590 = type;
var G__42432_42591__$1 = (((G__42432_42590 instanceof cljs.core.Keyword))?G__42432_42590.fqn:null);
switch (G__42432_42591__$1) {
case "compute":
var c__42249__auto___42593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42589,c__42249__auto___42593,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (__42589,c__42249__auto___42593,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async){
return (function (state_42445){
var state_val_42446 = (state_42445[(1)]);
if((state_val_42446 === (1))){
var state_42445__$1 = state_42445;
var statearr_42447_42594 = state_42445__$1;
(statearr_42447_42594[(2)] = null);

(statearr_42447_42594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (2))){
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42445__$1,(4),jobs);
} else {
if((state_val_42446 === (3))){
var inst_42443 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42445__$1,inst_42443);
} else {
if((state_val_42446 === (4))){
var inst_42435 = (state_42445[(2)]);
var inst_42436 = process.call(null,inst_42435);
var state_42445__$1 = state_42445;
if(cljs.core.truth_(inst_42436)){
var statearr_42448_42595 = state_42445__$1;
(statearr_42448_42595[(1)] = (5));

} else {
var statearr_42449_42596 = state_42445__$1;
(statearr_42449_42596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (5))){
var state_42445__$1 = state_42445;
var statearr_42450_42597 = state_42445__$1;
(statearr_42450_42597[(2)] = null);

(statearr_42450_42597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (6))){
var state_42445__$1 = state_42445;
var statearr_42451_42598 = state_42445__$1;
(statearr_42451_42598[(2)] = null);

(statearr_42451_42598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (7))){
var inst_42441 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42452_42599 = state_42445__$1;
(statearr_42452_42599[(2)] = inst_42441);

(statearr_42452_42599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42589,c__42249__auto___42593,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async))
;
return ((function (__42589,switch__42159__auto__,c__42249__auto___42593,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0 = (function (){
var statearr_42453 = [null,null,null,null,null,null,null];
(statearr_42453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__);

(statearr_42453[(1)] = (1));

return statearr_42453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1 = (function (state_42445){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42454){if((e42454 instanceof Object)){
var ex__42163__auto__ = e42454;
var statearr_42455_42600 = state_42445;
(statearr_42455_42600[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42601 = state_42445;
state_42445 = G__42601;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = function(state_42445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1.call(this,state_42445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__;
})()
;})(__42589,switch__42159__auto__,c__42249__auto___42593,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async))
})();
var state__42251__auto__ = (function (){var statearr_42456 = f__42250__auto__.call(null);
(statearr_42456[(6)] = c__42249__auto___42593);

return statearr_42456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(__42589,c__42249__auto___42593,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async))
);


break;
case "async":
var c__42249__auto___42602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42589,c__42249__auto___42602,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (__42589,c__42249__auto___42602,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async){
return (function (state_42469){
var state_val_42470 = (state_42469[(1)]);
if((state_val_42470 === (1))){
var state_42469__$1 = state_42469;
var statearr_42471_42603 = state_42469__$1;
(statearr_42471_42603[(2)] = null);

(statearr_42471_42603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (2))){
var state_42469__$1 = state_42469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42469__$1,(4),jobs);
} else {
if((state_val_42470 === (3))){
var inst_42467 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42469__$1,inst_42467);
} else {
if((state_val_42470 === (4))){
var inst_42459 = (state_42469[(2)]);
var inst_42460 = async.call(null,inst_42459);
var state_42469__$1 = state_42469;
if(cljs.core.truth_(inst_42460)){
var statearr_42472_42604 = state_42469__$1;
(statearr_42472_42604[(1)] = (5));

} else {
var statearr_42473_42605 = state_42469__$1;
(statearr_42473_42605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (5))){
var state_42469__$1 = state_42469;
var statearr_42474_42606 = state_42469__$1;
(statearr_42474_42606[(2)] = null);

(statearr_42474_42606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (6))){
var state_42469__$1 = state_42469;
var statearr_42475_42607 = state_42469__$1;
(statearr_42475_42607[(2)] = null);

(statearr_42475_42607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (7))){
var inst_42465 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
var statearr_42476_42608 = state_42469__$1;
(statearr_42476_42608[(2)] = inst_42465);

(statearr_42476_42608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42589,c__42249__auto___42602,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async))
;
return ((function (__42589,switch__42159__auto__,c__42249__auto___42602,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0 = (function (){
var statearr_42477 = [null,null,null,null,null,null,null];
(statearr_42477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__);

(statearr_42477[(1)] = (1));

return statearr_42477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1 = (function (state_42469){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42478){if((e42478 instanceof Object)){
var ex__42163__auto__ = e42478;
var statearr_42479_42609 = state_42469;
(statearr_42479_42609[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42610 = state_42469;
state_42469 = G__42610;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = function(state_42469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1.call(this,state_42469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__;
})()
;})(__42589,switch__42159__auto__,c__42249__auto___42602,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async))
})();
var state__42251__auto__ = (function (){var statearr_42480 = f__42250__auto__.call(null);
(statearr_42480[(6)] = c__42249__auto___42602);

return statearr_42480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(__42589,c__42249__auto___42602,G__42432_42590,G__42432_42591__$1,n__36543__auto___42588,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42432_42591__$1)].join('')));

}

var G__42611 = (__42589 + (1));
__42589 = G__42611;
continue;
} else {
}
break;
}

var c__42249__auto___42612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___42612,jobs,results,process,async){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___42612,jobs,results,process,async){
return (function (state_42502){
var state_val_42503 = (state_42502[(1)]);
if((state_val_42503 === (1))){
var state_42502__$1 = state_42502;
var statearr_42504_42613 = state_42502__$1;
(statearr_42504_42613[(2)] = null);

(statearr_42504_42613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (2))){
var state_42502__$1 = state_42502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42502__$1,(4),from);
} else {
if((state_val_42503 === (3))){
var inst_42500 = (state_42502[(2)]);
var state_42502__$1 = state_42502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42502__$1,inst_42500);
} else {
if((state_val_42503 === (4))){
var inst_42483 = (state_42502[(7)]);
var inst_42483__$1 = (state_42502[(2)]);
var inst_42484 = (inst_42483__$1 == null);
var state_42502__$1 = (function (){var statearr_42505 = state_42502;
(statearr_42505[(7)] = inst_42483__$1);

return statearr_42505;
})();
if(cljs.core.truth_(inst_42484)){
var statearr_42506_42614 = state_42502__$1;
(statearr_42506_42614[(1)] = (5));

} else {
var statearr_42507_42615 = state_42502__$1;
(statearr_42507_42615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (5))){
var inst_42486 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42502__$1 = state_42502;
var statearr_42508_42616 = state_42502__$1;
(statearr_42508_42616[(2)] = inst_42486);

(statearr_42508_42616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (6))){
var inst_42488 = (state_42502[(8)]);
var inst_42483 = (state_42502[(7)]);
var inst_42488__$1 = cljs.core.async.chan.call(null,(1));
var inst_42489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42490 = [inst_42483,inst_42488__$1];
var inst_42491 = (new cljs.core.PersistentVector(null,2,(5),inst_42489,inst_42490,null));
var state_42502__$1 = (function (){var statearr_42509 = state_42502;
(statearr_42509[(8)] = inst_42488__$1);

return statearr_42509;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42502__$1,(8),jobs,inst_42491);
} else {
if((state_val_42503 === (7))){
var inst_42498 = (state_42502[(2)]);
var state_42502__$1 = state_42502;
var statearr_42510_42617 = state_42502__$1;
(statearr_42510_42617[(2)] = inst_42498);

(statearr_42510_42617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42503 === (8))){
var inst_42488 = (state_42502[(8)]);
var inst_42493 = (state_42502[(2)]);
var state_42502__$1 = (function (){var statearr_42511 = state_42502;
(statearr_42511[(9)] = inst_42493);

return statearr_42511;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42502__$1,(9),results,inst_42488);
} else {
if((state_val_42503 === (9))){
var inst_42495 = (state_42502[(2)]);
var state_42502__$1 = (function (){var statearr_42512 = state_42502;
(statearr_42512[(10)] = inst_42495);

return statearr_42512;
})();
var statearr_42513_42618 = state_42502__$1;
(statearr_42513_42618[(2)] = null);

(statearr_42513_42618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___42612,jobs,results,process,async))
;
return ((function (switch__42159__auto__,c__42249__auto___42612,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0 = (function (){
var statearr_42514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__);

(statearr_42514[(1)] = (1));

return statearr_42514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1 = (function (state_42502){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42515){if((e42515 instanceof Object)){
var ex__42163__auto__ = e42515;
var statearr_42516_42619 = state_42502;
(statearr_42516_42619[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42620 = state_42502;
state_42502 = G__42620;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = function(state_42502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1.call(this,state_42502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___42612,jobs,results,process,async))
})();
var state__42251__auto__ = (function (){var statearr_42517 = f__42250__auto__.call(null);
(statearr_42517[(6)] = c__42249__auto___42612);

return statearr_42517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___42612,jobs,results,process,async))
);


var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__,jobs,results,process,async){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__,jobs,results,process,async){
return (function (state_42555){
var state_val_42556 = (state_42555[(1)]);
if((state_val_42556 === (7))){
var inst_42551 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
var statearr_42557_42621 = state_42555__$1;
(statearr_42557_42621[(2)] = inst_42551);

(statearr_42557_42621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (20))){
var state_42555__$1 = state_42555;
var statearr_42558_42622 = state_42555__$1;
(statearr_42558_42622[(2)] = null);

(statearr_42558_42622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (1))){
var state_42555__$1 = state_42555;
var statearr_42559_42623 = state_42555__$1;
(statearr_42559_42623[(2)] = null);

(statearr_42559_42623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (4))){
var inst_42520 = (state_42555[(7)]);
var inst_42520__$1 = (state_42555[(2)]);
var inst_42521 = (inst_42520__$1 == null);
var state_42555__$1 = (function (){var statearr_42560 = state_42555;
(statearr_42560[(7)] = inst_42520__$1);

return statearr_42560;
})();
if(cljs.core.truth_(inst_42521)){
var statearr_42561_42624 = state_42555__$1;
(statearr_42561_42624[(1)] = (5));

} else {
var statearr_42562_42625 = state_42555__$1;
(statearr_42562_42625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (15))){
var inst_42533 = (state_42555[(8)]);
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42555__$1,(18),to,inst_42533);
} else {
if((state_val_42556 === (21))){
var inst_42546 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
var statearr_42563_42626 = state_42555__$1;
(statearr_42563_42626[(2)] = inst_42546);

(statearr_42563_42626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (13))){
var inst_42548 = (state_42555[(2)]);
var state_42555__$1 = (function (){var statearr_42564 = state_42555;
(statearr_42564[(9)] = inst_42548);

return statearr_42564;
})();
var statearr_42565_42627 = state_42555__$1;
(statearr_42565_42627[(2)] = null);

(statearr_42565_42627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (6))){
var inst_42520 = (state_42555[(7)]);
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42555__$1,(11),inst_42520);
} else {
if((state_val_42556 === (17))){
var inst_42541 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
if(cljs.core.truth_(inst_42541)){
var statearr_42566_42628 = state_42555__$1;
(statearr_42566_42628[(1)] = (19));

} else {
var statearr_42567_42629 = state_42555__$1;
(statearr_42567_42629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (3))){
var inst_42553 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42555__$1,inst_42553);
} else {
if((state_val_42556 === (12))){
var inst_42530 = (state_42555[(10)]);
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42555__$1,(14),inst_42530);
} else {
if((state_val_42556 === (2))){
var state_42555__$1 = state_42555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42555__$1,(4),results);
} else {
if((state_val_42556 === (19))){
var state_42555__$1 = state_42555;
var statearr_42568_42630 = state_42555__$1;
(statearr_42568_42630[(2)] = null);

(statearr_42568_42630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (11))){
var inst_42530 = (state_42555[(2)]);
var state_42555__$1 = (function (){var statearr_42569 = state_42555;
(statearr_42569[(10)] = inst_42530);

return statearr_42569;
})();
var statearr_42570_42631 = state_42555__$1;
(statearr_42570_42631[(2)] = null);

(statearr_42570_42631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (9))){
var state_42555__$1 = state_42555;
var statearr_42571_42632 = state_42555__$1;
(statearr_42571_42632[(2)] = null);

(statearr_42571_42632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (5))){
var state_42555__$1 = state_42555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42572_42633 = state_42555__$1;
(statearr_42572_42633[(1)] = (8));

} else {
var statearr_42573_42634 = state_42555__$1;
(statearr_42573_42634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (14))){
var inst_42535 = (state_42555[(11)]);
var inst_42533 = (state_42555[(8)]);
var inst_42533__$1 = (state_42555[(2)]);
var inst_42534 = (inst_42533__$1 == null);
var inst_42535__$1 = cljs.core.not.call(null,inst_42534);
var state_42555__$1 = (function (){var statearr_42574 = state_42555;
(statearr_42574[(11)] = inst_42535__$1);

(statearr_42574[(8)] = inst_42533__$1);

return statearr_42574;
})();
if(inst_42535__$1){
var statearr_42575_42635 = state_42555__$1;
(statearr_42575_42635[(1)] = (15));

} else {
var statearr_42576_42636 = state_42555__$1;
(statearr_42576_42636[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (16))){
var inst_42535 = (state_42555[(11)]);
var state_42555__$1 = state_42555;
var statearr_42577_42637 = state_42555__$1;
(statearr_42577_42637[(2)] = inst_42535);

(statearr_42577_42637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (10))){
var inst_42527 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
var statearr_42578_42638 = state_42555__$1;
(statearr_42578_42638[(2)] = inst_42527);

(statearr_42578_42638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (18))){
var inst_42538 = (state_42555[(2)]);
var state_42555__$1 = state_42555;
var statearr_42579_42639 = state_42555__$1;
(statearr_42579_42639[(2)] = inst_42538);

(statearr_42579_42639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (8))){
var inst_42524 = cljs.core.async.close_BANG_.call(null,to);
var state_42555__$1 = state_42555;
var statearr_42580_42640 = state_42555__$1;
(statearr_42580_42640[(2)] = inst_42524);

(statearr_42580_42640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto__,jobs,results,process,async))
;
return ((function (switch__42159__auto__,c__42249__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0 = (function (){
var statearr_42581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__);

(statearr_42581[(1)] = (1));

return statearr_42581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1 = (function (state_42555){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42582){if((e42582 instanceof Object)){
var ex__42163__auto__ = e42582;
var statearr_42583_42641 = state_42555;
(statearr_42583_42641[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42642 = state_42555;
state_42555 = G__42642;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__ = function(state_42555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1.call(this,state_42555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__,jobs,results,process,async))
})();
var state__42251__auto__ = (function (){var statearr_42584 = f__42250__auto__.call(null);
(statearr_42584[(6)] = c__42249__auto__);

return statearr_42584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__,jobs,results,process,async))
);

return c__42249__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42644 = arguments.length;
switch (G__42644) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42647 = arguments.length;
switch (G__42647) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42650 = arguments.length;
switch (G__42650) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__42249__auto___42699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___42699,tc,fc){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___42699,tc,fc){
return (function (state_42676){
var state_val_42677 = (state_42676[(1)]);
if((state_val_42677 === (7))){
var inst_42672 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42678_42700 = state_42676__$1;
(statearr_42678_42700[(2)] = inst_42672);

(statearr_42678_42700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (1))){
var state_42676__$1 = state_42676;
var statearr_42679_42701 = state_42676__$1;
(statearr_42679_42701[(2)] = null);

(statearr_42679_42701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (4))){
var inst_42653 = (state_42676[(7)]);
var inst_42653__$1 = (state_42676[(2)]);
var inst_42654 = (inst_42653__$1 == null);
var state_42676__$1 = (function (){var statearr_42680 = state_42676;
(statearr_42680[(7)] = inst_42653__$1);

return statearr_42680;
})();
if(cljs.core.truth_(inst_42654)){
var statearr_42681_42702 = state_42676__$1;
(statearr_42681_42702[(1)] = (5));

} else {
var statearr_42682_42703 = state_42676__$1;
(statearr_42682_42703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (13))){
var state_42676__$1 = state_42676;
var statearr_42683_42704 = state_42676__$1;
(statearr_42683_42704[(2)] = null);

(statearr_42683_42704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (6))){
var inst_42653 = (state_42676[(7)]);
var inst_42659 = p.call(null,inst_42653);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42659)){
var statearr_42684_42705 = state_42676__$1;
(statearr_42684_42705[(1)] = (9));

} else {
var statearr_42685_42706 = state_42676__$1;
(statearr_42685_42706[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (3))){
var inst_42674 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42676__$1,inst_42674);
} else {
if((state_val_42677 === (12))){
var state_42676__$1 = state_42676;
var statearr_42686_42707 = state_42676__$1;
(statearr_42686_42707[(2)] = null);

(statearr_42686_42707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (2))){
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(4),ch);
} else {
if((state_val_42677 === (11))){
var inst_42653 = (state_42676[(7)]);
var inst_42663 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42676__$1,(8),inst_42663,inst_42653);
} else {
if((state_val_42677 === (9))){
var state_42676__$1 = state_42676;
var statearr_42687_42708 = state_42676__$1;
(statearr_42687_42708[(2)] = tc);

(statearr_42687_42708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (5))){
var inst_42656 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42657 = cljs.core.async.close_BANG_.call(null,fc);
var state_42676__$1 = (function (){var statearr_42688 = state_42676;
(statearr_42688[(8)] = inst_42656);

return statearr_42688;
})();
var statearr_42689_42709 = state_42676__$1;
(statearr_42689_42709[(2)] = inst_42657);

(statearr_42689_42709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (14))){
var inst_42670 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42690_42710 = state_42676__$1;
(statearr_42690_42710[(2)] = inst_42670);

(statearr_42690_42710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (10))){
var state_42676__$1 = state_42676;
var statearr_42691_42711 = state_42676__$1;
(statearr_42691_42711[(2)] = fc);

(statearr_42691_42711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (8))){
var inst_42665 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42665)){
var statearr_42692_42712 = state_42676__$1;
(statearr_42692_42712[(1)] = (12));

} else {
var statearr_42693_42713 = state_42676__$1;
(statearr_42693_42713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___42699,tc,fc))
;
return ((function (switch__42159__auto__,c__42249__auto___42699,tc,fc){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_42694 = [null,null,null,null,null,null,null,null,null];
(statearr_42694[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_42694[(1)] = (1));

return statearr_42694;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_42676){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42695){if((e42695 instanceof Object)){
var ex__42163__auto__ = e42695;
var statearr_42696_42714 = state_42676;
(statearr_42696_42714[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42715 = state_42676;
state_42676 = G__42715;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_42676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_42676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___42699,tc,fc))
})();
var state__42251__auto__ = (function (){var statearr_42697 = f__42250__auto__.call(null);
(statearr_42697[(6)] = c__42249__auto___42699);

return statearr_42697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___42699,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__){
return (function (state_42736){
var state_val_42737 = (state_42736[(1)]);
if((state_val_42737 === (7))){
var inst_42732 = (state_42736[(2)]);
var state_42736__$1 = state_42736;
var statearr_42738_42756 = state_42736__$1;
(statearr_42738_42756[(2)] = inst_42732);

(statearr_42738_42756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42737 === (1))){
var inst_42716 = init;
var state_42736__$1 = (function (){var statearr_42739 = state_42736;
(statearr_42739[(7)] = inst_42716);

return statearr_42739;
})();
var statearr_42740_42757 = state_42736__$1;
(statearr_42740_42757[(2)] = null);

(statearr_42740_42757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42737 === (4))){
var inst_42719 = (state_42736[(8)]);
var inst_42719__$1 = (state_42736[(2)]);
var inst_42720 = (inst_42719__$1 == null);
var state_42736__$1 = (function (){var statearr_42741 = state_42736;
(statearr_42741[(8)] = inst_42719__$1);

return statearr_42741;
})();
if(cljs.core.truth_(inst_42720)){
var statearr_42742_42758 = state_42736__$1;
(statearr_42742_42758[(1)] = (5));

} else {
var statearr_42743_42759 = state_42736__$1;
(statearr_42743_42759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42737 === (6))){
var inst_42716 = (state_42736[(7)]);
var inst_42723 = (state_42736[(9)]);
var inst_42719 = (state_42736[(8)]);
var inst_42723__$1 = f.call(null,inst_42716,inst_42719);
var inst_42724 = cljs.core.reduced_QMARK_.call(null,inst_42723__$1);
var state_42736__$1 = (function (){var statearr_42744 = state_42736;
(statearr_42744[(9)] = inst_42723__$1);

return statearr_42744;
})();
if(inst_42724){
var statearr_42745_42760 = state_42736__$1;
(statearr_42745_42760[(1)] = (8));

} else {
var statearr_42746_42761 = state_42736__$1;
(statearr_42746_42761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42737 === (3))){
var inst_42734 = (state_42736[(2)]);
var state_42736__$1 = state_42736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42736__$1,inst_42734);
} else {
if((state_val_42737 === (2))){
var state_42736__$1 = state_42736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42736__$1,(4),ch);
} else {
if((state_val_42737 === (9))){
var inst_42723 = (state_42736[(9)]);
var inst_42716 = inst_42723;
var state_42736__$1 = (function (){var statearr_42747 = state_42736;
(statearr_42747[(7)] = inst_42716);

return statearr_42747;
})();
var statearr_42748_42762 = state_42736__$1;
(statearr_42748_42762[(2)] = null);

(statearr_42748_42762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42737 === (5))){
var inst_42716 = (state_42736[(7)]);
var state_42736__$1 = state_42736;
var statearr_42749_42763 = state_42736__$1;
(statearr_42749_42763[(2)] = inst_42716);

(statearr_42749_42763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42737 === (10))){
var inst_42730 = (state_42736[(2)]);
var state_42736__$1 = state_42736;
var statearr_42750_42764 = state_42736__$1;
(statearr_42750_42764[(2)] = inst_42730);

(statearr_42750_42764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42737 === (8))){
var inst_42723 = (state_42736[(9)]);
var inst_42726 = cljs.core.deref.call(null,inst_42723);
var state_42736__$1 = state_42736;
var statearr_42751_42765 = state_42736__$1;
(statearr_42751_42765[(2)] = inst_42726);

(statearr_42751_42765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto__))
;
return ((function (switch__42159__auto__,c__42249__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__42160__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42160__auto____0 = (function (){
var statearr_42752 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42752[(0)] = cljs$core$async$reduce_$_state_machine__42160__auto__);

(statearr_42752[(1)] = (1));

return statearr_42752;
});
var cljs$core$async$reduce_$_state_machine__42160__auto____1 = (function (state_42736){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42753){if((e42753 instanceof Object)){
var ex__42163__auto__ = e42753;
var statearr_42754_42766 = state_42736;
(statearr_42754_42766[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42767 = state_42736;
state_42736 = G__42767;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42160__auto__ = function(state_42736){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42160__auto____1.call(this,state_42736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42160__auto____0;
cljs$core$async$reduce_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42160__auto____1;
return cljs$core$async$reduce_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__))
})();
var state__42251__auto__ = (function (){var statearr_42755 = f__42250__auto__.call(null);
(statearr_42755[(6)] = c__42249__auto__);

return statearr_42755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__))
);

return c__42249__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__,f__$1){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__,f__$1){
return (function (state_42773){
var state_val_42774 = (state_42773[(1)]);
if((state_val_42774 === (1))){
var inst_42768 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42773__$1 = state_42773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42773__$1,(2),inst_42768);
} else {
if((state_val_42774 === (2))){
var inst_42770 = (state_42773[(2)]);
var inst_42771 = f__$1.call(null,inst_42770);
var state_42773__$1 = state_42773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42773__$1,inst_42771);
} else {
return null;
}
}
});})(c__42249__auto__,f__$1))
;
return ((function (switch__42159__auto__,c__42249__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__42160__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42160__auto____0 = (function (){
var statearr_42775 = [null,null,null,null,null,null,null];
(statearr_42775[(0)] = cljs$core$async$transduce_$_state_machine__42160__auto__);

(statearr_42775[(1)] = (1));

return statearr_42775;
});
var cljs$core$async$transduce_$_state_machine__42160__auto____1 = (function (state_42773){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42776){if((e42776 instanceof Object)){
var ex__42163__auto__ = e42776;
var statearr_42777_42779 = state_42773;
(statearr_42777_42779[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42780 = state_42773;
state_42773 = G__42780;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42160__auto__ = function(state_42773){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42160__auto____1.call(this,state_42773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42160__auto____0;
cljs$core$async$transduce_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42160__auto____1;
return cljs$core$async$transduce_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__,f__$1))
})();
var state__42251__auto__ = (function (){var statearr_42778 = f__42250__auto__.call(null);
(statearr_42778[(6)] = c__42249__auto__);

return statearr_42778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__,f__$1))
);

return c__42249__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42782 = arguments.length;
switch (G__42782) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__){
return (function (state_42807){
var state_val_42808 = (state_42807[(1)]);
if((state_val_42808 === (7))){
var inst_42789 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42809_42830 = state_42807__$1;
(statearr_42809_42830[(2)] = inst_42789);

(statearr_42809_42830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (1))){
var inst_42783 = cljs.core.seq.call(null,coll);
var inst_42784 = inst_42783;
var state_42807__$1 = (function (){var statearr_42810 = state_42807;
(statearr_42810[(7)] = inst_42784);

return statearr_42810;
})();
var statearr_42811_42831 = state_42807__$1;
(statearr_42811_42831[(2)] = null);

(statearr_42811_42831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (4))){
var inst_42784 = (state_42807[(7)]);
var inst_42787 = cljs.core.first.call(null,inst_42784);
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42807__$1,(7),ch,inst_42787);
} else {
if((state_val_42808 === (13))){
var inst_42801 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42812_42832 = state_42807__$1;
(statearr_42812_42832[(2)] = inst_42801);

(statearr_42812_42832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (6))){
var inst_42792 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
if(cljs.core.truth_(inst_42792)){
var statearr_42813_42833 = state_42807__$1;
(statearr_42813_42833[(1)] = (8));

} else {
var statearr_42814_42834 = state_42807__$1;
(statearr_42814_42834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (3))){
var inst_42805 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42807__$1,inst_42805);
} else {
if((state_val_42808 === (12))){
var state_42807__$1 = state_42807;
var statearr_42815_42835 = state_42807__$1;
(statearr_42815_42835[(2)] = null);

(statearr_42815_42835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (2))){
var inst_42784 = (state_42807[(7)]);
var state_42807__$1 = state_42807;
if(cljs.core.truth_(inst_42784)){
var statearr_42816_42836 = state_42807__$1;
(statearr_42816_42836[(1)] = (4));

} else {
var statearr_42817_42837 = state_42807__$1;
(statearr_42817_42837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (11))){
var inst_42798 = cljs.core.async.close_BANG_.call(null,ch);
var state_42807__$1 = state_42807;
var statearr_42818_42838 = state_42807__$1;
(statearr_42818_42838[(2)] = inst_42798);

(statearr_42818_42838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (9))){
var state_42807__$1 = state_42807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42819_42839 = state_42807__$1;
(statearr_42819_42839[(1)] = (11));

} else {
var statearr_42820_42840 = state_42807__$1;
(statearr_42820_42840[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (5))){
var inst_42784 = (state_42807[(7)]);
var state_42807__$1 = state_42807;
var statearr_42821_42841 = state_42807__$1;
(statearr_42821_42841[(2)] = inst_42784);

(statearr_42821_42841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (10))){
var inst_42803 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42822_42842 = state_42807__$1;
(statearr_42822_42842[(2)] = inst_42803);

(statearr_42822_42842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (8))){
var inst_42784 = (state_42807[(7)]);
var inst_42794 = cljs.core.next.call(null,inst_42784);
var inst_42784__$1 = inst_42794;
var state_42807__$1 = (function (){var statearr_42823 = state_42807;
(statearr_42823[(7)] = inst_42784__$1);

return statearr_42823;
})();
var statearr_42824_42843 = state_42807__$1;
(statearr_42824_42843[(2)] = null);

(statearr_42824_42843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto__))
;
return ((function (switch__42159__auto__,c__42249__auto__){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_42825 = [null,null,null,null,null,null,null,null];
(statearr_42825[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_42825[(1)] = (1));

return statearr_42825;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_42807){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e42826){if((e42826 instanceof Object)){
var ex__42163__auto__ = e42826;
var statearr_42827_42844 = state_42807;
(statearr_42827_42844[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42845 = state_42807;
state_42807 = G__42845;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_42807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_42807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__))
})();
var state__42251__auto__ = (function (){var statearr_42828 = f__42250__auto__.call(null);
(statearr_42828[(6)] = c__42249__auto__);

return statearr_42828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__))
);

return c__42249__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__36231__auto__ = (((_ == null))?null:_);
var m__36232__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,_);
} else {
var m__36232__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36232__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m,ch);
} else {
var m__36232__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m);
} else {
var m__36232__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42846 = (function (ch,cs,meta42847){
this.ch = ch;
this.cs = cs;
this.meta42847 = meta42847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42848,meta42847__$1){
var self__ = this;
var _42848__$1 = this;
return (new cljs.core.async.t_cljs$core$async42846(self__.ch,self__.cs,meta42847__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42848){
var self__ = this;
var _42848__$1 = this;
return self__.meta42847;
});})(cs))
;

cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42846.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42846.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42847","meta42847",1998515685,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42846";

cljs.core.async.t_cljs$core$async42846.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async42846");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42846 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42846(ch__$1,cs__$1,meta42847){
return (new cljs.core.async.t_cljs$core$async42846(ch__$1,cs__$1,meta42847));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42846(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__42249__auto___43068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43068,cs,m,dchan,dctr,done){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43068,cs,m,dchan,dctr,done){
return (function (state_42983){
var state_val_42984 = (state_42983[(1)]);
if((state_val_42984 === (7))){
var inst_42979 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_42985_43069 = state_42983__$1;
(statearr_42985_43069[(2)] = inst_42979);

(statearr_42985_43069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (20))){
var inst_42882 = (state_42983[(7)]);
var inst_42894 = cljs.core.first.call(null,inst_42882);
var inst_42895 = cljs.core.nth.call(null,inst_42894,(0),null);
var inst_42896 = cljs.core.nth.call(null,inst_42894,(1),null);
var state_42983__$1 = (function (){var statearr_42986 = state_42983;
(statearr_42986[(8)] = inst_42895);

return statearr_42986;
})();
if(cljs.core.truth_(inst_42896)){
var statearr_42987_43070 = state_42983__$1;
(statearr_42987_43070[(1)] = (22));

} else {
var statearr_42988_43071 = state_42983__$1;
(statearr_42988_43071[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (27))){
var inst_42851 = (state_42983[(9)]);
var inst_42926 = (state_42983[(10)]);
var inst_42931 = (state_42983[(11)]);
var inst_42924 = (state_42983[(12)]);
var inst_42931__$1 = cljs.core._nth.call(null,inst_42924,inst_42926);
var inst_42932 = cljs.core.async.put_BANG_.call(null,inst_42931__$1,inst_42851,done);
var state_42983__$1 = (function (){var statearr_42989 = state_42983;
(statearr_42989[(11)] = inst_42931__$1);

return statearr_42989;
})();
if(cljs.core.truth_(inst_42932)){
var statearr_42990_43072 = state_42983__$1;
(statearr_42990_43072[(1)] = (30));

} else {
var statearr_42991_43073 = state_42983__$1;
(statearr_42991_43073[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (1))){
var state_42983__$1 = state_42983;
var statearr_42992_43074 = state_42983__$1;
(statearr_42992_43074[(2)] = null);

(statearr_42992_43074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (24))){
var inst_42882 = (state_42983[(7)]);
var inst_42901 = (state_42983[(2)]);
var inst_42902 = cljs.core.next.call(null,inst_42882);
var inst_42860 = inst_42902;
var inst_42861 = null;
var inst_42862 = (0);
var inst_42863 = (0);
var state_42983__$1 = (function (){var statearr_42993 = state_42983;
(statearr_42993[(13)] = inst_42860);

(statearr_42993[(14)] = inst_42901);

(statearr_42993[(15)] = inst_42861);

(statearr_42993[(16)] = inst_42862);

(statearr_42993[(17)] = inst_42863);

return statearr_42993;
})();
var statearr_42994_43075 = state_42983__$1;
(statearr_42994_43075[(2)] = null);

(statearr_42994_43075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (39))){
var state_42983__$1 = state_42983;
var statearr_42998_43076 = state_42983__$1;
(statearr_42998_43076[(2)] = null);

(statearr_42998_43076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (4))){
var inst_42851 = (state_42983[(9)]);
var inst_42851__$1 = (state_42983[(2)]);
var inst_42852 = (inst_42851__$1 == null);
var state_42983__$1 = (function (){var statearr_42999 = state_42983;
(statearr_42999[(9)] = inst_42851__$1);

return statearr_42999;
})();
if(cljs.core.truth_(inst_42852)){
var statearr_43000_43077 = state_42983__$1;
(statearr_43000_43077[(1)] = (5));

} else {
var statearr_43001_43078 = state_42983__$1;
(statearr_43001_43078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (15))){
var inst_42860 = (state_42983[(13)]);
var inst_42861 = (state_42983[(15)]);
var inst_42862 = (state_42983[(16)]);
var inst_42863 = (state_42983[(17)]);
var inst_42878 = (state_42983[(2)]);
var inst_42879 = (inst_42863 + (1));
var tmp42995 = inst_42860;
var tmp42996 = inst_42861;
var tmp42997 = inst_42862;
var inst_42860__$1 = tmp42995;
var inst_42861__$1 = tmp42996;
var inst_42862__$1 = tmp42997;
var inst_42863__$1 = inst_42879;
var state_42983__$1 = (function (){var statearr_43002 = state_42983;
(statearr_43002[(13)] = inst_42860__$1);

(statearr_43002[(18)] = inst_42878);

(statearr_43002[(15)] = inst_42861__$1);

(statearr_43002[(16)] = inst_42862__$1);

(statearr_43002[(17)] = inst_42863__$1);

return statearr_43002;
})();
var statearr_43003_43079 = state_42983__$1;
(statearr_43003_43079[(2)] = null);

(statearr_43003_43079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (21))){
var inst_42905 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43007_43080 = state_42983__$1;
(statearr_43007_43080[(2)] = inst_42905);

(statearr_43007_43080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (31))){
var inst_42931 = (state_42983[(11)]);
var inst_42935 = done.call(null,null);
var inst_42936 = cljs.core.async.untap_STAR_.call(null,m,inst_42931);
var state_42983__$1 = (function (){var statearr_43008 = state_42983;
(statearr_43008[(19)] = inst_42935);

return statearr_43008;
})();
var statearr_43009_43081 = state_42983__$1;
(statearr_43009_43081[(2)] = inst_42936);

(statearr_43009_43081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (32))){
var inst_42926 = (state_42983[(10)]);
var inst_42925 = (state_42983[(20)]);
var inst_42923 = (state_42983[(21)]);
var inst_42924 = (state_42983[(12)]);
var inst_42938 = (state_42983[(2)]);
var inst_42939 = (inst_42926 + (1));
var tmp43004 = inst_42925;
var tmp43005 = inst_42923;
var tmp43006 = inst_42924;
var inst_42923__$1 = tmp43005;
var inst_42924__$1 = tmp43006;
var inst_42925__$1 = tmp43004;
var inst_42926__$1 = inst_42939;
var state_42983__$1 = (function (){var statearr_43010 = state_42983;
(statearr_43010[(10)] = inst_42926__$1);

(statearr_43010[(22)] = inst_42938);

(statearr_43010[(20)] = inst_42925__$1);

(statearr_43010[(21)] = inst_42923__$1);

(statearr_43010[(12)] = inst_42924__$1);

return statearr_43010;
})();
var statearr_43011_43082 = state_42983__$1;
(statearr_43011_43082[(2)] = null);

(statearr_43011_43082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (40))){
var inst_42951 = (state_42983[(23)]);
var inst_42955 = done.call(null,null);
var inst_42956 = cljs.core.async.untap_STAR_.call(null,m,inst_42951);
var state_42983__$1 = (function (){var statearr_43012 = state_42983;
(statearr_43012[(24)] = inst_42955);

return statearr_43012;
})();
var statearr_43013_43083 = state_42983__$1;
(statearr_43013_43083[(2)] = inst_42956);

(statearr_43013_43083[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (33))){
var inst_42942 = (state_42983[(25)]);
var inst_42944 = cljs.core.chunked_seq_QMARK_.call(null,inst_42942);
var state_42983__$1 = state_42983;
if(inst_42944){
var statearr_43014_43084 = state_42983__$1;
(statearr_43014_43084[(1)] = (36));

} else {
var statearr_43015_43085 = state_42983__$1;
(statearr_43015_43085[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (13))){
var inst_42872 = (state_42983[(26)]);
var inst_42875 = cljs.core.async.close_BANG_.call(null,inst_42872);
var state_42983__$1 = state_42983;
var statearr_43016_43086 = state_42983__$1;
(statearr_43016_43086[(2)] = inst_42875);

(statearr_43016_43086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (22))){
var inst_42895 = (state_42983[(8)]);
var inst_42898 = cljs.core.async.close_BANG_.call(null,inst_42895);
var state_42983__$1 = state_42983;
var statearr_43017_43087 = state_42983__$1;
(statearr_43017_43087[(2)] = inst_42898);

(statearr_43017_43087[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (36))){
var inst_42942 = (state_42983[(25)]);
var inst_42946 = cljs.core.chunk_first.call(null,inst_42942);
var inst_42947 = cljs.core.chunk_rest.call(null,inst_42942);
var inst_42948 = cljs.core.count.call(null,inst_42946);
var inst_42923 = inst_42947;
var inst_42924 = inst_42946;
var inst_42925 = inst_42948;
var inst_42926 = (0);
var state_42983__$1 = (function (){var statearr_43018 = state_42983;
(statearr_43018[(10)] = inst_42926);

(statearr_43018[(20)] = inst_42925);

(statearr_43018[(21)] = inst_42923);

(statearr_43018[(12)] = inst_42924);

return statearr_43018;
})();
var statearr_43019_43088 = state_42983__$1;
(statearr_43019_43088[(2)] = null);

(statearr_43019_43088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (41))){
var inst_42942 = (state_42983[(25)]);
var inst_42958 = (state_42983[(2)]);
var inst_42959 = cljs.core.next.call(null,inst_42942);
var inst_42923 = inst_42959;
var inst_42924 = null;
var inst_42925 = (0);
var inst_42926 = (0);
var state_42983__$1 = (function (){var statearr_43020 = state_42983;
(statearr_43020[(10)] = inst_42926);

(statearr_43020[(27)] = inst_42958);

(statearr_43020[(20)] = inst_42925);

(statearr_43020[(21)] = inst_42923);

(statearr_43020[(12)] = inst_42924);

return statearr_43020;
})();
var statearr_43021_43089 = state_42983__$1;
(statearr_43021_43089[(2)] = null);

(statearr_43021_43089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (43))){
var state_42983__$1 = state_42983;
var statearr_43022_43090 = state_42983__$1;
(statearr_43022_43090[(2)] = null);

(statearr_43022_43090[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (29))){
var inst_42967 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43023_43091 = state_42983__$1;
(statearr_43023_43091[(2)] = inst_42967);

(statearr_43023_43091[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (44))){
var inst_42976 = (state_42983[(2)]);
var state_42983__$1 = (function (){var statearr_43024 = state_42983;
(statearr_43024[(28)] = inst_42976);

return statearr_43024;
})();
var statearr_43025_43092 = state_42983__$1;
(statearr_43025_43092[(2)] = null);

(statearr_43025_43092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (6))){
var inst_42915 = (state_42983[(29)]);
var inst_42914 = cljs.core.deref.call(null,cs);
var inst_42915__$1 = cljs.core.keys.call(null,inst_42914);
var inst_42916 = cljs.core.count.call(null,inst_42915__$1);
var inst_42917 = cljs.core.reset_BANG_.call(null,dctr,inst_42916);
var inst_42922 = cljs.core.seq.call(null,inst_42915__$1);
var inst_42923 = inst_42922;
var inst_42924 = null;
var inst_42925 = (0);
var inst_42926 = (0);
var state_42983__$1 = (function (){var statearr_43026 = state_42983;
(statearr_43026[(10)] = inst_42926);

(statearr_43026[(29)] = inst_42915__$1);

(statearr_43026[(30)] = inst_42917);

(statearr_43026[(20)] = inst_42925);

(statearr_43026[(21)] = inst_42923);

(statearr_43026[(12)] = inst_42924);

return statearr_43026;
})();
var statearr_43027_43093 = state_42983__$1;
(statearr_43027_43093[(2)] = null);

(statearr_43027_43093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (28))){
var inst_42942 = (state_42983[(25)]);
var inst_42923 = (state_42983[(21)]);
var inst_42942__$1 = cljs.core.seq.call(null,inst_42923);
var state_42983__$1 = (function (){var statearr_43028 = state_42983;
(statearr_43028[(25)] = inst_42942__$1);

return statearr_43028;
})();
if(inst_42942__$1){
var statearr_43029_43094 = state_42983__$1;
(statearr_43029_43094[(1)] = (33));

} else {
var statearr_43030_43095 = state_42983__$1;
(statearr_43030_43095[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (25))){
var inst_42926 = (state_42983[(10)]);
var inst_42925 = (state_42983[(20)]);
var inst_42928 = (inst_42926 < inst_42925);
var inst_42929 = inst_42928;
var state_42983__$1 = state_42983;
if(cljs.core.truth_(inst_42929)){
var statearr_43031_43096 = state_42983__$1;
(statearr_43031_43096[(1)] = (27));

} else {
var statearr_43032_43097 = state_42983__$1;
(statearr_43032_43097[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (34))){
var state_42983__$1 = state_42983;
var statearr_43033_43098 = state_42983__$1;
(statearr_43033_43098[(2)] = null);

(statearr_43033_43098[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (17))){
var state_42983__$1 = state_42983;
var statearr_43034_43099 = state_42983__$1;
(statearr_43034_43099[(2)] = null);

(statearr_43034_43099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (3))){
var inst_42981 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42983__$1,inst_42981);
} else {
if((state_val_42984 === (12))){
var inst_42910 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43035_43100 = state_42983__$1;
(statearr_43035_43100[(2)] = inst_42910);

(statearr_43035_43100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (2))){
var state_42983__$1 = state_42983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42983__$1,(4),ch);
} else {
if((state_val_42984 === (23))){
var state_42983__$1 = state_42983;
var statearr_43036_43101 = state_42983__$1;
(statearr_43036_43101[(2)] = null);

(statearr_43036_43101[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (35))){
var inst_42965 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43037_43102 = state_42983__$1;
(statearr_43037_43102[(2)] = inst_42965);

(statearr_43037_43102[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (19))){
var inst_42882 = (state_42983[(7)]);
var inst_42886 = cljs.core.chunk_first.call(null,inst_42882);
var inst_42887 = cljs.core.chunk_rest.call(null,inst_42882);
var inst_42888 = cljs.core.count.call(null,inst_42886);
var inst_42860 = inst_42887;
var inst_42861 = inst_42886;
var inst_42862 = inst_42888;
var inst_42863 = (0);
var state_42983__$1 = (function (){var statearr_43038 = state_42983;
(statearr_43038[(13)] = inst_42860);

(statearr_43038[(15)] = inst_42861);

(statearr_43038[(16)] = inst_42862);

(statearr_43038[(17)] = inst_42863);

return statearr_43038;
})();
var statearr_43039_43103 = state_42983__$1;
(statearr_43039_43103[(2)] = null);

(statearr_43039_43103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (11))){
var inst_42860 = (state_42983[(13)]);
var inst_42882 = (state_42983[(7)]);
var inst_42882__$1 = cljs.core.seq.call(null,inst_42860);
var state_42983__$1 = (function (){var statearr_43040 = state_42983;
(statearr_43040[(7)] = inst_42882__$1);

return statearr_43040;
})();
if(inst_42882__$1){
var statearr_43041_43104 = state_42983__$1;
(statearr_43041_43104[(1)] = (16));

} else {
var statearr_43042_43105 = state_42983__$1;
(statearr_43042_43105[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (9))){
var inst_42912 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43043_43106 = state_42983__$1;
(statearr_43043_43106[(2)] = inst_42912);

(statearr_43043_43106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (5))){
var inst_42858 = cljs.core.deref.call(null,cs);
var inst_42859 = cljs.core.seq.call(null,inst_42858);
var inst_42860 = inst_42859;
var inst_42861 = null;
var inst_42862 = (0);
var inst_42863 = (0);
var state_42983__$1 = (function (){var statearr_43044 = state_42983;
(statearr_43044[(13)] = inst_42860);

(statearr_43044[(15)] = inst_42861);

(statearr_43044[(16)] = inst_42862);

(statearr_43044[(17)] = inst_42863);

return statearr_43044;
})();
var statearr_43045_43107 = state_42983__$1;
(statearr_43045_43107[(2)] = null);

(statearr_43045_43107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (14))){
var state_42983__$1 = state_42983;
var statearr_43046_43108 = state_42983__$1;
(statearr_43046_43108[(2)] = null);

(statearr_43046_43108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (45))){
var inst_42973 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43047_43109 = state_42983__$1;
(statearr_43047_43109[(2)] = inst_42973);

(statearr_43047_43109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (26))){
var inst_42915 = (state_42983[(29)]);
var inst_42969 = (state_42983[(2)]);
var inst_42970 = cljs.core.seq.call(null,inst_42915);
var state_42983__$1 = (function (){var statearr_43048 = state_42983;
(statearr_43048[(31)] = inst_42969);

return statearr_43048;
})();
if(inst_42970){
var statearr_43049_43110 = state_42983__$1;
(statearr_43049_43110[(1)] = (42));

} else {
var statearr_43050_43111 = state_42983__$1;
(statearr_43050_43111[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (16))){
var inst_42882 = (state_42983[(7)]);
var inst_42884 = cljs.core.chunked_seq_QMARK_.call(null,inst_42882);
var state_42983__$1 = state_42983;
if(inst_42884){
var statearr_43051_43112 = state_42983__$1;
(statearr_43051_43112[(1)] = (19));

} else {
var statearr_43052_43113 = state_42983__$1;
(statearr_43052_43113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (38))){
var inst_42962 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43053_43114 = state_42983__$1;
(statearr_43053_43114[(2)] = inst_42962);

(statearr_43053_43114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (30))){
var state_42983__$1 = state_42983;
var statearr_43054_43115 = state_42983__$1;
(statearr_43054_43115[(2)] = null);

(statearr_43054_43115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (10))){
var inst_42861 = (state_42983[(15)]);
var inst_42863 = (state_42983[(17)]);
var inst_42871 = cljs.core._nth.call(null,inst_42861,inst_42863);
var inst_42872 = cljs.core.nth.call(null,inst_42871,(0),null);
var inst_42873 = cljs.core.nth.call(null,inst_42871,(1),null);
var state_42983__$1 = (function (){var statearr_43055 = state_42983;
(statearr_43055[(26)] = inst_42872);

return statearr_43055;
})();
if(cljs.core.truth_(inst_42873)){
var statearr_43056_43116 = state_42983__$1;
(statearr_43056_43116[(1)] = (13));

} else {
var statearr_43057_43117 = state_42983__$1;
(statearr_43057_43117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (18))){
var inst_42908 = (state_42983[(2)]);
var state_42983__$1 = state_42983;
var statearr_43058_43118 = state_42983__$1;
(statearr_43058_43118[(2)] = inst_42908);

(statearr_43058_43118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (42))){
var state_42983__$1 = state_42983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42983__$1,(45),dchan);
} else {
if((state_val_42984 === (37))){
var inst_42851 = (state_42983[(9)]);
var inst_42942 = (state_42983[(25)]);
var inst_42951 = (state_42983[(23)]);
var inst_42951__$1 = cljs.core.first.call(null,inst_42942);
var inst_42952 = cljs.core.async.put_BANG_.call(null,inst_42951__$1,inst_42851,done);
var state_42983__$1 = (function (){var statearr_43059 = state_42983;
(statearr_43059[(23)] = inst_42951__$1);

return statearr_43059;
})();
if(cljs.core.truth_(inst_42952)){
var statearr_43060_43119 = state_42983__$1;
(statearr_43060_43119[(1)] = (39));

} else {
var statearr_43061_43120 = state_42983__$1;
(statearr_43061_43120[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42984 === (8))){
var inst_42862 = (state_42983[(16)]);
var inst_42863 = (state_42983[(17)]);
var inst_42865 = (inst_42863 < inst_42862);
var inst_42866 = inst_42865;
var state_42983__$1 = state_42983;
if(cljs.core.truth_(inst_42866)){
var statearr_43062_43121 = state_42983__$1;
(statearr_43062_43121[(1)] = (10));

} else {
var statearr_43063_43122 = state_42983__$1;
(statearr_43063_43122[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43068,cs,m,dchan,dctr,done))
;
return ((function (switch__42159__auto__,c__42249__auto___43068,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__42160__auto__ = null;
var cljs$core$async$mult_$_state_machine__42160__auto____0 = (function (){
var statearr_43064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43064[(0)] = cljs$core$async$mult_$_state_machine__42160__auto__);

(statearr_43064[(1)] = (1));

return statearr_43064;
});
var cljs$core$async$mult_$_state_machine__42160__auto____1 = (function (state_42983){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_42983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43065){if((e43065 instanceof Object)){
var ex__42163__auto__ = e43065;
var statearr_43066_43123 = state_42983;
(statearr_43066_43123[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43124 = state_42983;
state_42983 = G__43124;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42160__auto__ = function(state_42983){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42160__auto____1.call(this,state_42983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42160__auto____0;
cljs$core$async$mult_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42160__auto____1;
return cljs$core$async$mult_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43068,cs,m,dchan,dctr,done))
})();
var state__42251__auto__ = (function (){var statearr_43067 = f__42250__auto__.call(null);
(statearr_43067[(6)] = c__42249__auto___43068);

return statearr_43067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43068,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43126 = arguments.length;
switch (G__43126) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m,ch);
} else {
var m__36232__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m,ch);
} else {
var m__36232__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m);
} else {
var m__36232__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m,state_map);
} else {
var m__36232__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__36231__auto__ = (((m == null))?null:m);
var m__36232__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,m,mode);
} else {
var m__36232__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36784__auto__ = [];
var len__36777__auto___43138 = arguments.length;
var i__36778__auto___43139 = (0);
while(true){
if((i__36778__auto___43139 < len__36777__auto___43138)){
args__36784__auto__.push((arguments[i__36778__auto___43139]));

var G__43140 = (i__36778__auto___43139 + (1));
i__36778__auto___43139 = G__43140;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((3) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36785__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43132){
var map__43133 = p__43132;
var map__43133__$1 = ((((!((map__43133 == null)))?((((map__43133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43133):map__43133);
var opts = map__43133__$1;
var statearr_43135_43141 = state;
(statearr_43135_43141[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__43133,map__43133__$1,opts){
return (function (val){
var statearr_43136_43142 = state;
(statearr_43136_43142[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43133,map__43133__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_43137_43143 = state;
(statearr_43137_43143[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43128){
var G__43129 = cljs.core.first.call(null,seq43128);
var seq43128__$1 = cljs.core.next.call(null,seq43128);
var G__43130 = cljs.core.first.call(null,seq43128__$1);
var seq43128__$2 = cljs.core.next.call(null,seq43128__$1);
var G__43131 = cljs.core.first.call(null,seq43128__$2);
var seq43128__$3 = cljs.core.next.call(null,seq43128__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43129,G__43130,G__43131,seq43128__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43144 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta43145){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta43145 = meta43145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43146,meta43145__$1){
var self__ = this;
var _43146__$1 = this;
return (new cljs.core.async.t_cljs$core$async43144(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta43145__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43146){
var self__ = this;
var _43146__$1 = this;
return self__.meta43145;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta43145","meta43145",-1551591300,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43144";

cljs.core.async.t_cljs$core$async43144.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async43144");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43144 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43144(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43145){
return (new cljs.core.async.t_cljs$core$async43144(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43145));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43144(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42249__auto___43308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43308,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43308,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43248){
var state_val_43249 = (state_43248[(1)]);
if((state_val_43249 === (7))){
var inst_43163 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
var statearr_43250_43309 = state_43248__$1;
(statearr_43250_43309[(2)] = inst_43163);

(statearr_43250_43309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (20))){
var inst_43175 = (state_43248[(7)]);
var state_43248__$1 = state_43248;
var statearr_43251_43310 = state_43248__$1;
(statearr_43251_43310[(2)] = inst_43175);

(statearr_43251_43310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (27))){
var state_43248__$1 = state_43248;
var statearr_43252_43311 = state_43248__$1;
(statearr_43252_43311[(2)] = null);

(statearr_43252_43311[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (1))){
var inst_43150 = (state_43248[(8)]);
var inst_43150__$1 = calc_state.call(null);
var inst_43152 = (inst_43150__$1 == null);
var inst_43153 = cljs.core.not.call(null,inst_43152);
var state_43248__$1 = (function (){var statearr_43253 = state_43248;
(statearr_43253[(8)] = inst_43150__$1);

return statearr_43253;
})();
if(inst_43153){
var statearr_43254_43312 = state_43248__$1;
(statearr_43254_43312[(1)] = (2));

} else {
var statearr_43255_43313 = state_43248__$1;
(statearr_43255_43313[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (24))){
var inst_43208 = (state_43248[(9)]);
var inst_43199 = (state_43248[(10)]);
var inst_43222 = (state_43248[(11)]);
var inst_43222__$1 = inst_43199.call(null,inst_43208);
var state_43248__$1 = (function (){var statearr_43256 = state_43248;
(statearr_43256[(11)] = inst_43222__$1);

return statearr_43256;
})();
if(cljs.core.truth_(inst_43222__$1)){
var statearr_43257_43314 = state_43248__$1;
(statearr_43257_43314[(1)] = (29));

} else {
var statearr_43258_43315 = state_43248__$1;
(statearr_43258_43315[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (4))){
var inst_43166 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
if(cljs.core.truth_(inst_43166)){
var statearr_43259_43316 = state_43248__$1;
(statearr_43259_43316[(1)] = (8));

} else {
var statearr_43260_43317 = state_43248__$1;
(statearr_43260_43317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (15))){
var inst_43193 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
if(cljs.core.truth_(inst_43193)){
var statearr_43261_43318 = state_43248__$1;
(statearr_43261_43318[(1)] = (19));

} else {
var statearr_43262_43319 = state_43248__$1;
(statearr_43262_43319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (21))){
var inst_43198 = (state_43248[(12)]);
var inst_43198__$1 = (state_43248[(2)]);
var inst_43199 = cljs.core.get.call(null,inst_43198__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43200 = cljs.core.get.call(null,inst_43198__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43201 = cljs.core.get.call(null,inst_43198__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43248__$1 = (function (){var statearr_43263 = state_43248;
(statearr_43263[(12)] = inst_43198__$1);

(statearr_43263[(10)] = inst_43199);

(statearr_43263[(13)] = inst_43200);

return statearr_43263;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43248__$1,(22),inst_43201);
} else {
if((state_val_43249 === (31))){
var inst_43230 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
if(cljs.core.truth_(inst_43230)){
var statearr_43264_43320 = state_43248__$1;
(statearr_43264_43320[(1)] = (32));

} else {
var statearr_43265_43321 = state_43248__$1;
(statearr_43265_43321[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (32))){
var inst_43207 = (state_43248[(14)]);
var state_43248__$1 = state_43248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43248__$1,(35),out,inst_43207);
} else {
if((state_val_43249 === (33))){
var inst_43198 = (state_43248[(12)]);
var inst_43175 = inst_43198;
var state_43248__$1 = (function (){var statearr_43266 = state_43248;
(statearr_43266[(7)] = inst_43175);

return statearr_43266;
})();
var statearr_43267_43322 = state_43248__$1;
(statearr_43267_43322[(2)] = null);

(statearr_43267_43322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (13))){
var inst_43175 = (state_43248[(7)]);
var inst_43182 = inst_43175.cljs$lang$protocol_mask$partition0$;
var inst_43183 = (inst_43182 & (64));
var inst_43184 = inst_43175.cljs$core$ISeq$;
var inst_43185 = (cljs.core.PROTOCOL_SENTINEL === inst_43184);
var inst_43186 = (inst_43183) || (inst_43185);
var state_43248__$1 = state_43248;
if(cljs.core.truth_(inst_43186)){
var statearr_43268_43323 = state_43248__$1;
(statearr_43268_43323[(1)] = (16));

} else {
var statearr_43269_43324 = state_43248__$1;
(statearr_43269_43324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (22))){
var inst_43207 = (state_43248[(14)]);
var inst_43208 = (state_43248[(9)]);
var inst_43206 = (state_43248[(2)]);
var inst_43207__$1 = cljs.core.nth.call(null,inst_43206,(0),null);
var inst_43208__$1 = cljs.core.nth.call(null,inst_43206,(1),null);
var inst_43209 = (inst_43207__$1 == null);
var inst_43210 = cljs.core._EQ_.call(null,inst_43208__$1,change);
var inst_43211 = (inst_43209) || (inst_43210);
var state_43248__$1 = (function (){var statearr_43270 = state_43248;
(statearr_43270[(14)] = inst_43207__$1);

(statearr_43270[(9)] = inst_43208__$1);

return statearr_43270;
})();
if(cljs.core.truth_(inst_43211)){
var statearr_43271_43325 = state_43248__$1;
(statearr_43271_43325[(1)] = (23));

} else {
var statearr_43272_43326 = state_43248__$1;
(statearr_43272_43326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (36))){
var inst_43198 = (state_43248[(12)]);
var inst_43175 = inst_43198;
var state_43248__$1 = (function (){var statearr_43273 = state_43248;
(statearr_43273[(7)] = inst_43175);

return statearr_43273;
})();
var statearr_43274_43327 = state_43248__$1;
(statearr_43274_43327[(2)] = null);

(statearr_43274_43327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (29))){
var inst_43222 = (state_43248[(11)]);
var state_43248__$1 = state_43248;
var statearr_43275_43328 = state_43248__$1;
(statearr_43275_43328[(2)] = inst_43222);

(statearr_43275_43328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (6))){
var state_43248__$1 = state_43248;
var statearr_43276_43329 = state_43248__$1;
(statearr_43276_43329[(2)] = false);

(statearr_43276_43329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (28))){
var inst_43218 = (state_43248[(2)]);
var inst_43219 = calc_state.call(null);
var inst_43175 = inst_43219;
var state_43248__$1 = (function (){var statearr_43277 = state_43248;
(statearr_43277[(15)] = inst_43218);

(statearr_43277[(7)] = inst_43175);

return statearr_43277;
})();
var statearr_43278_43330 = state_43248__$1;
(statearr_43278_43330[(2)] = null);

(statearr_43278_43330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (25))){
var inst_43244 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
var statearr_43279_43331 = state_43248__$1;
(statearr_43279_43331[(2)] = inst_43244);

(statearr_43279_43331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (34))){
var inst_43242 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
var statearr_43280_43332 = state_43248__$1;
(statearr_43280_43332[(2)] = inst_43242);

(statearr_43280_43332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (17))){
var state_43248__$1 = state_43248;
var statearr_43281_43333 = state_43248__$1;
(statearr_43281_43333[(2)] = false);

(statearr_43281_43333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (3))){
var state_43248__$1 = state_43248;
var statearr_43282_43334 = state_43248__$1;
(statearr_43282_43334[(2)] = false);

(statearr_43282_43334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (12))){
var inst_43246 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43248__$1,inst_43246);
} else {
if((state_val_43249 === (2))){
var inst_43150 = (state_43248[(8)]);
var inst_43155 = inst_43150.cljs$lang$protocol_mask$partition0$;
var inst_43156 = (inst_43155 & (64));
var inst_43157 = inst_43150.cljs$core$ISeq$;
var inst_43158 = (cljs.core.PROTOCOL_SENTINEL === inst_43157);
var inst_43159 = (inst_43156) || (inst_43158);
var state_43248__$1 = state_43248;
if(cljs.core.truth_(inst_43159)){
var statearr_43283_43335 = state_43248__$1;
(statearr_43283_43335[(1)] = (5));

} else {
var statearr_43284_43336 = state_43248__$1;
(statearr_43284_43336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (23))){
var inst_43207 = (state_43248[(14)]);
var inst_43213 = (inst_43207 == null);
var state_43248__$1 = state_43248;
if(cljs.core.truth_(inst_43213)){
var statearr_43285_43337 = state_43248__$1;
(statearr_43285_43337[(1)] = (26));

} else {
var statearr_43286_43338 = state_43248__$1;
(statearr_43286_43338[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (35))){
var inst_43233 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
if(cljs.core.truth_(inst_43233)){
var statearr_43287_43339 = state_43248__$1;
(statearr_43287_43339[(1)] = (36));

} else {
var statearr_43288_43340 = state_43248__$1;
(statearr_43288_43340[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (19))){
var inst_43175 = (state_43248[(7)]);
var inst_43195 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43175);
var state_43248__$1 = state_43248;
var statearr_43289_43341 = state_43248__$1;
(statearr_43289_43341[(2)] = inst_43195);

(statearr_43289_43341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (11))){
var inst_43175 = (state_43248[(7)]);
var inst_43179 = (inst_43175 == null);
var inst_43180 = cljs.core.not.call(null,inst_43179);
var state_43248__$1 = state_43248;
if(inst_43180){
var statearr_43290_43342 = state_43248__$1;
(statearr_43290_43342[(1)] = (13));

} else {
var statearr_43291_43343 = state_43248__$1;
(statearr_43291_43343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (9))){
var inst_43150 = (state_43248[(8)]);
var state_43248__$1 = state_43248;
var statearr_43292_43344 = state_43248__$1;
(statearr_43292_43344[(2)] = inst_43150);

(statearr_43292_43344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (5))){
var state_43248__$1 = state_43248;
var statearr_43293_43345 = state_43248__$1;
(statearr_43293_43345[(2)] = true);

(statearr_43293_43345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (14))){
var state_43248__$1 = state_43248;
var statearr_43294_43346 = state_43248__$1;
(statearr_43294_43346[(2)] = false);

(statearr_43294_43346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (26))){
var inst_43208 = (state_43248[(9)]);
var inst_43215 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43208);
var state_43248__$1 = state_43248;
var statearr_43295_43347 = state_43248__$1;
(statearr_43295_43347[(2)] = inst_43215);

(statearr_43295_43347[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (16))){
var state_43248__$1 = state_43248;
var statearr_43296_43348 = state_43248__$1;
(statearr_43296_43348[(2)] = true);

(statearr_43296_43348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (38))){
var inst_43238 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
var statearr_43297_43349 = state_43248__$1;
(statearr_43297_43349[(2)] = inst_43238);

(statearr_43297_43349[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (30))){
var inst_43208 = (state_43248[(9)]);
var inst_43199 = (state_43248[(10)]);
var inst_43200 = (state_43248[(13)]);
var inst_43225 = cljs.core.empty_QMARK_.call(null,inst_43199);
var inst_43226 = inst_43200.call(null,inst_43208);
var inst_43227 = cljs.core.not.call(null,inst_43226);
var inst_43228 = (inst_43225) && (inst_43227);
var state_43248__$1 = state_43248;
var statearr_43298_43350 = state_43248__$1;
(statearr_43298_43350[(2)] = inst_43228);

(statearr_43298_43350[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (10))){
var inst_43150 = (state_43248[(8)]);
var inst_43171 = (state_43248[(2)]);
var inst_43172 = cljs.core.get.call(null,inst_43171,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43173 = cljs.core.get.call(null,inst_43171,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43174 = cljs.core.get.call(null,inst_43171,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43175 = inst_43150;
var state_43248__$1 = (function (){var statearr_43299 = state_43248;
(statearr_43299[(16)] = inst_43173);

(statearr_43299[(17)] = inst_43172);

(statearr_43299[(18)] = inst_43174);

(statearr_43299[(7)] = inst_43175);

return statearr_43299;
})();
var statearr_43300_43351 = state_43248__$1;
(statearr_43300_43351[(2)] = null);

(statearr_43300_43351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (18))){
var inst_43190 = (state_43248[(2)]);
var state_43248__$1 = state_43248;
var statearr_43301_43352 = state_43248__$1;
(statearr_43301_43352[(2)] = inst_43190);

(statearr_43301_43352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (37))){
var state_43248__$1 = state_43248;
var statearr_43302_43353 = state_43248__$1;
(statearr_43302_43353[(2)] = null);

(statearr_43302_43353[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43249 === (8))){
var inst_43150 = (state_43248[(8)]);
var inst_43168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43150);
var state_43248__$1 = state_43248;
var statearr_43303_43354 = state_43248__$1;
(statearr_43303_43354[(2)] = inst_43168);

(statearr_43303_43354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43308,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__42159__auto__,c__42249__auto___43308,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__42160__auto__ = null;
var cljs$core$async$mix_$_state_machine__42160__auto____0 = (function (){
var statearr_43304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43304[(0)] = cljs$core$async$mix_$_state_machine__42160__auto__);

(statearr_43304[(1)] = (1));

return statearr_43304;
});
var cljs$core$async$mix_$_state_machine__42160__auto____1 = (function (state_43248){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43305){if((e43305 instanceof Object)){
var ex__42163__auto__ = e43305;
var statearr_43306_43355 = state_43248;
(statearr_43306_43355[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43356 = state_43248;
state_43248 = G__43356;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42160__auto__ = function(state_43248){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42160__auto____1.call(this,state_43248);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42160__auto____0;
cljs$core$async$mix_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42160__auto____1;
return cljs$core$async$mix_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43308,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__42251__auto__ = (function (){var statearr_43307 = f__42250__auto__.call(null);
(statearr_43307[(6)] = c__42249__auto___43308);

return statearr_43307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43308,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__36231__auto__ = (((p == null))?null:p);
var m__36232__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36232__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__36231__auto__ = (((p == null))?null:p);
var m__36232__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,p,v,ch);
} else {
var m__36232__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43358 = arguments.length;
switch (G__43358) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36231__auto__ = (((p == null))?null:p);
var m__36232__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,p);
} else {
var m__36232__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__36231__auto__ = (((p == null))?null:p);
var m__36232__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,p,v);
} else {
var m__36232__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43362 = arguments.length;
switch (G__43362) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35498__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35498__auto__,mults){
return (function (p1__43360_SHARP_){
if(cljs.core.truth_(p1__43360_SHARP_.call(null,topic))){
return p1__43360_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43360_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35498__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43363 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43364){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43364 = meta43364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43365,meta43364__$1){
var self__ = this;
var _43365__$1 = this;
return (new cljs.core.async.t_cljs$core$async43363(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43364__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43365){
var self__ = this;
var _43365__$1 = this;
return self__.meta43364;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43364","meta43364",-2122934947,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43363";

cljs.core.async.t_cljs$core$async43363.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async43363");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43363 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43363(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43364){
return (new cljs.core.async.t_cljs$core$async43363(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43364));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43363(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42249__auto___43483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43483,mults,ensure_mult,p){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43483,mults,ensure_mult,p){
return (function (state_43437){
var state_val_43438 = (state_43437[(1)]);
if((state_val_43438 === (7))){
var inst_43433 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
var statearr_43439_43484 = state_43437__$1;
(statearr_43439_43484[(2)] = inst_43433);

(statearr_43439_43484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (20))){
var state_43437__$1 = state_43437;
var statearr_43440_43485 = state_43437__$1;
(statearr_43440_43485[(2)] = null);

(statearr_43440_43485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (1))){
var state_43437__$1 = state_43437;
var statearr_43441_43486 = state_43437__$1;
(statearr_43441_43486[(2)] = null);

(statearr_43441_43486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (24))){
var inst_43416 = (state_43437[(7)]);
var inst_43425 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43416);
var state_43437__$1 = state_43437;
var statearr_43442_43487 = state_43437__$1;
(statearr_43442_43487[(2)] = inst_43425);

(statearr_43442_43487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (4))){
var inst_43368 = (state_43437[(8)]);
var inst_43368__$1 = (state_43437[(2)]);
var inst_43369 = (inst_43368__$1 == null);
var state_43437__$1 = (function (){var statearr_43443 = state_43437;
(statearr_43443[(8)] = inst_43368__$1);

return statearr_43443;
})();
if(cljs.core.truth_(inst_43369)){
var statearr_43444_43488 = state_43437__$1;
(statearr_43444_43488[(1)] = (5));

} else {
var statearr_43445_43489 = state_43437__$1;
(statearr_43445_43489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (15))){
var inst_43410 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
var statearr_43446_43490 = state_43437__$1;
(statearr_43446_43490[(2)] = inst_43410);

(statearr_43446_43490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (21))){
var inst_43430 = (state_43437[(2)]);
var state_43437__$1 = (function (){var statearr_43447 = state_43437;
(statearr_43447[(9)] = inst_43430);

return statearr_43447;
})();
var statearr_43448_43491 = state_43437__$1;
(statearr_43448_43491[(2)] = null);

(statearr_43448_43491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (13))){
var inst_43392 = (state_43437[(10)]);
var inst_43394 = cljs.core.chunked_seq_QMARK_.call(null,inst_43392);
var state_43437__$1 = state_43437;
if(inst_43394){
var statearr_43449_43492 = state_43437__$1;
(statearr_43449_43492[(1)] = (16));

} else {
var statearr_43450_43493 = state_43437__$1;
(statearr_43450_43493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (22))){
var inst_43422 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
if(cljs.core.truth_(inst_43422)){
var statearr_43451_43494 = state_43437__$1;
(statearr_43451_43494[(1)] = (23));

} else {
var statearr_43452_43495 = state_43437__$1;
(statearr_43452_43495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (6))){
var inst_43368 = (state_43437[(8)]);
var inst_43416 = (state_43437[(7)]);
var inst_43418 = (state_43437[(11)]);
var inst_43416__$1 = topic_fn.call(null,inst_43368);
var inst_43417 = cljs.core.deref.call(null,mults);
var inst_43418__$1 = cljs.core.get.call(null,inst_43417,inst_43416__$1);
var state_43437__$1 = (function (){var statearr_43453 = state_43437;
(statearr_43453[(7)] = inst_43416__$1);

(statearr_43453[(11)] = inst_43418__$1);

return statearr_43453;
})();
if(cljs.core.truth_(inst_43418__$1)){
var statearr_43454_43496 = state_43437__$1;
(statearr_43454_43496[(1)] = (19));

} else {
var statearr_43455_43497 = state_43437__$1;
(statearr_43455_43497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (25))){
var inst_43427 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
var statearr_43456_43498 = state_43437__$1;
(statearr_43456_43498[(2)] = inst_43427);

(statearr_43456_43498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (17))){
var inst_43392 = (state_43437[(10)]);
var inst_43401 = cljs.core.first.call(null,inst_43392);
var inst_43402 = cljs.core.async.muxch_STAR_.call(null,inst_43401);
var inst_43403 = cljs.core.async.close_BANG_.call(null,inst_43402);
var inst_43404 = cljs.core.next.call(null,inst_43392);
var inst_43378 = inst_43404;
var inst_43379 = null;
var inst_43380 = (0);
var inst_43381 = (0);
var state_43437__$1 = (function (){var statearr_43457 = state_43437;
(statearr_43457[(12)] = inst_43380);

(statearr_43457[(13)] = inst_43403);

(statearr_43457[(14)] = inst_43379);

(statearr_43457[(15)] = inst_43378);

(statearr_43457[(16)] = inst_43381);

return statearr_43457;
})();
var statearr_43458_43499 = state_43437__$1;
(statearr_43458_43499[(2)] = null);

(statearr_43458_43499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (3))){
var inst_43435 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43437__$1,inst_43435);
} else {
if((state_val_43438 === (12))){
var inst_43412 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
var statearr_43459_43500 = state_43437__$1;
(statearr_43459_43500[(2)] = inst_43412);

(statearr_43459_43500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (2))){
var state_43437__$1 = state_43437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43437__$1,(4),ch);
} else {
if((state_val_43438 === (23))){
var state_43437__$1 = state_43437;
var statearr_43460_43501 = state_43437__$1;
(statearr_43460_43501[(2)] = null);

(statearr_43460_43501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (19))){
var inst_43368 = (state_43437[(8)]);
var inst_43418 = (state_43437[(11)]);
var inst_43420 = cljs.core.async.muxch_STAR_.call(null,inst_43418);
var state_43437__$1 = state_43437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43437__$1,(22),inst_43420,inst_43368);
} else {
if((state_val_43438 === (11))){
var inst_43378 = (state_43437[(15)]);
var inst_43392 = (state_43437[(10)]);
var inst_43392__$1 = cljs.core.seq.call(null,inst_43378);
var state_43437__$1 = (function (){var statearr_43461 = state_43437;
(statearr_43461[(10)] = inst_43392__$1);

return statearr_43461;
})();
if(inst_43392__$1){
var statearr_43462_43502 = state_43437__$1;
(statearr_43462_43502[(1)] = (13));

} else {
var statearr_43463_43503 = state_43437__$1;
(statearr_43463_43503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (9))){
var inst_43414 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
var statearr_43464_43504 = state_43437__$1;
(statearr_43464_43504[(2)] = inst_43414);

(statearr_43464_43504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (5))){
var inst_43375 = cljs.core.deref.call(null,mults);
var inst_43376 = cljs.core.vals.call(null,inst_43375);
var inst_43377 = cljs.core.seq.call(null,inst_43376);
var inst_43378 = inst_43377;
var inst_43379 = null;
var inst_43380 = (0);
var inst_43381 = (0);
var state_43437__$1 = (function (){var statearr_43465 = state_43437;
(statearr_43465[(12)] = inst_43380);

(statearr_43465[(14)] = inst_43379);

(statearr_43465[(15)] = inst_43378);

(statearr_43465[(16)] = inst_43381);

return statearr_43465;
})();
var statearr_43466_43505 = state_43437__$1;
(statearr_43466_43505[(2)] = null);

(statearr_43466_43505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (14))){
var state_43437__$1 = state_43437;
var statearr_43470_43506 = state_43437__$1;
(statearr_43470_43506[(2)] = null);

(statearr_43470_43506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (16))){
var inst_43392 = (state_43437[(10)]);
var inst_43396 = cljs.core.chunk_first.call(null,inst_43392);
var inst_43397 = cljs.core.chunk_rest.call(null,inst_43392);
var inst_43398 = cljs.core.count.call(null,inst_43396);
var inst_43378 = inst_43397;
var inst_43379 = inst_43396;
var inst_43380 = inst_43398;
var inst_43381 = (0);
var state_43437__$1 = (function (){var statearr_43471 = state_43437;
(statearr_43471[(12)] = inst_43380);

(statearr_43471[(14)] = inst_43379);

(statearr_43471[(15)] = inst_43378);

(statearr_43471[(16)] = inst_43381);

return statearr_43471;
})();
var statearr_43472_43507 = state_43437__$1;
(statearr_43472_43507[(2)] = null);

(statearr_43472_43507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (10))){
var inst_43380 = (state_43437[(12)]);
var inst_43379 = (state_43437[(14)]);
var inst_43378 = (state_43437[(15)]);
var inst_43381 = (state_43437[(16)]);
var inst_43386 = cljs.core._nth.call(null,inst_43379,inst_43381);
var inst_43387 = cljs.core.async.muxch_STAR_.call(null,inst_43386);
var inst_43388 = cljs.core.async.close_BANG_.call(null,inst_43387);
var inst_43389 = (inst_43381 + (1));
var tmp43467 = inst_43380;
var tmp43468 = inst_43379;
var tmp43469 = inst_43378;
var inst_43378__$1 = tmp43469;
var inst_43379__$1 = tmp43468;
var inst_43380__$1 = tmp43467;
var inst_43381__$1 = inst_43389;
var state_43437__$1 = (function (){var statearr_43473 = state_43437;
(statearr_43473[(12)] = inst_43380__$1);

(statearr_43473[(17)] = inst_43388);

(statearr_43473[(14)] = inst_43379__$1);

(statearr_43473[(15)] = inst_43378__$1);

(statearr_43473[(16)] = inst_43381__$1);

return statearr_43473;
})();
var statearr_43474_43508 = state_43437__$1;
(statearr_43474_43508[(2)] = null);

(statearr_43474_43508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (18))){
var inst_43407 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
var statearr_43475_43509 = state_43437__$1;
(statearr_43475_43509[(2)] = inst_43407);

(statearr_43475_43509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (8))){
var inst_43380 = (state_43437[(12)]);
var inst_43381 = (state_43437[(16)]);
var inst_43383 = (inst_43381 < inst_43380);
var inst_43384 = inst_43383;
var state_43437__$1 = state_43437;
if(cljs.core.truth_(inst_43384)){
var statearr_43476_43510 = state_43437__$1;
(statearr_43476_43510[(1)] = (10));

} else {
var statearr_43477_43511 = state_43437__$1;
(statearr_43477_43511[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43483,mults,ensure_mult,p))
;
return ((function (switch__42159__auto__,c__42249__auto___43483,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_43478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43478[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_43478[(1)] = (1));

return statearr_43478;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_43437){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43479){if((e43479 instanceof Object)){
var ex__42163__auto__ = e43479;
var statearr_43480_43512 = state_43437;
(statearr_43480_43512[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43513 = state_43437;
state_43437 = G__43513;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_43437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_43437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43483,mults,ensure_mult,p))
})();
var state__42251__auto__ = (function (){var statearr_43481 = f__42250__auto__.call(null);
(statearr_43481[(6)] = c__42249__auto___43483);

return statearr_43481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43483,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43515 = arguments.length;
switch (G__43515) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43518 = arguments.length;
switch (G__43518) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43521 = arguments.length;
switch (G__43521) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__42249__auto___43588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43588,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43588,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43560){
var state_val_43561 = (state_43560[(1)]);
if((state_val_43561 === (7))){
var state_43560__$1 = state_43560;
var statearr_43562_43589 = state_43560__$1;
(statearr_43562_43589[(2)] = null);

(statearr_43562_43589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (1))){
var state_43560__$1 = state_43560;
var statearr_43563_43590 = state_43560__$1;
(statearr_43563_43590[(2)] = null);

(statearr_43563_43590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (4))){
var inst_43524 = (state_43560[(7)]);
var inst_43526 = (inst_43524 < cnt);
var state_43560__$1 = state_43560;
if(cljs.core.truth_(inst_43526)){
var statearr_43564_43591 = state_43560__$1;
(statearr_43564_43591[(1)] = (6));

} else {
var statearr_43565_43592 = state_43560__$1;
(statearr_43565_43592[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (15))){
var inst_43556 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43566_43593 = state_43560__$1;
(statearr_43566_43593[(2)] = inst_43556);

(statearr_43566_43593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (13))){
var inst_43549 = cljs.core.async.close_BANG_.call(null,out);
var state_43560__$1 = state_43560;
var statearr_43567_43594 = state_43560__$1;
(statearr_43567_43594[(2)] = inst_43549);

(statearr_43567_43594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (6))){
var state_43560__$1 = state_43560;
var statearr_43568_43595 = state_43560__$1;
(statearr_43568_43595[(2)] = null);

(statearr_43568_43595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (3))){
var inst_43558 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43560__$1,inst_43558);
} else {
if((state_val_43561 === (12))){
var inst_43546 = (state_43560[(8)]);
var inst_43546__$1 = (state_43560[(2)]);
var inst_43547 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43546__$1);
var state_43560__$1 = (function (){var statearr_43569 = state_43560;
(statearr_43569[(8)] = inst_43546__$1);

return statearr_43569;
})();
if(cljs.core.truth_(inst_43547)){
var statearr_43570_43596 = state_43560__$1;
(statearr_43570_43596[(1)] = (13));

} else {
var statearr_43571_43597 = state_43560__$1;
(statearr_43571_43597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (2))){
var inst_43523 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43524 = (0);
var state_43560__$1 = (function (){var statearr_43572 = state_43560;
(statearr_43572[(7)] = inst_43524);

(statearr_43572[(9)] = inst_43523);

return statearr_43572;
})();
var statearr_43573_43598 = state_43560__$1;
(statearr_43573_43598[(2)] = null);

(statearr_43573_43598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (11))){
var inst_43524 = (state_43560[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43560,(10),Object,null,(9));
var inst_43533 = chs__$1.call(null,inst_43524);
var inst_43534 = done.call(null,inst_43524);
var inst_43535 = cljs.core.async.take_BANG_.call(null,inst_43533,inst_43534);
var state_43560__$1 = state_43560;
var statearr_43574_43599 = state_43560__$1;
(statearr_43574_43599[(2)] = inst_43535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (9))){
var inst_43524 = (state_43560[(7)]);
var inst_43537 = (state_43560[(2)]);
var inst_43538 = (inst_43524 + (1));
var inst_43524__$1 = inst_43538;
var state_43560__$1 = (function (){var statearr_43575 = state_43560;
(statearr_43575[(7)] = inst_43524__$1);

(statearr_43575[(10)] = inst_43537);

return statearr_43575;
})();
var statearr_43576_43600 = state_43560__$1;
(statearr_43576_43600[(2)] = null);

(statearr_43576_43600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (5))){
var inst_43544 = (state_43560[(2)]);
var state_43560__$1 = (function (){var statearr_43577 = state_43560;
(statearr_43577[(11)] = inst_43544);

return statearr_43577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43560__$1,(12),dchan);
} else {
if((state_val_43561 === (14))){
var inst_43546 = (state_43560[(8)]);
var inst_43551 = cljs.core.apply.call(null,f,inst_43546);
var state_43560__$1 = state_43560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43560__$1,(16),out,inst_43551);
} else {
if((state_val_43561 === (16))){
var inst_43553 = (state_43560[(2)]);
var state_43560__$1 = (function (){var statearr_43578 = state_43560;
(statearr_43578[(12)] = inst_43553);

return statearr_43578;
})();
var statearr_43579_43601 = state_43560__$1;
(statearr_43579_43601[(2)] = null);

(statearr_43579_43601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (10))){
var inst_43528 = (state_43560[(2)]);
var inst_43529 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43560__$1 = (function (){var statearr_43580 = state_43560;
(statearr_43580[(13)] = inst_43528);

return statearr_43580;
})();
var statearr_43581_43602 = state_43560__$1;
(statearr_43581_43602[(2)] = inst_43529);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43561 === (8))){
var inst_43542 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43582_43603 = state_43560__$1;
(statearr_43582_43603[(2)] = inst_43542);

(statearr_43582_43603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43588,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__42159__auto__,c__42249__auto___43588,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_43583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43583[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_43583[(1)] = (1));

return statearr_43583;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_43560){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43584){if((e43584 instanceof Object)){
var ex__42163__auto__ = e43584;
var statearr_43585_43604 = state_43560;
(statearr_43585_43604[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43605 = state_43560;
state_43560 = G__43605;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_43560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_43560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43588,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__42251__auto__ = (function (){var statearr_43586 = f__42250__auto__.call(null);
(statearr_43586[(6)] = c__42249__auto___43588);

return statearr_43586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43588,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43608 = arguments.length;
switch (G__43608) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42249__auto___43662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43662,out){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43662,out){
return (function (state_43640){
var state_val_43641 = (state_43640[(1)]);
if((state_val_43641 === (7))){
var inst_43619 = (state_43640[(7)]);
var inst_43620 = (state_43640[(8)]);
var inst_43619__$1 = (state_43640[(2)]);
var inst_43620__$1 = cljs.core.nth.call(null,inst_43619__$1,(0),null);
var inst_43621 = cljs.core.nth.call(null,inst_43619__$1,(1),null);
var inst_43622 = (inst_43620__$1 == null);
var state_43640__$1 = (function (){var statearr_43642 = state_43640;
(statearr_43642[(9)] = inst_43621);

(statearr_43642[(7)] = inst_43619__$1);

(statearr_43642[(8)] = inst_43620__$1);

return statearr_43642;
})();
if(cljs.core.truth_(inst_43622)){
var statearr_43643_43663 = state_43640__$1;
(statearr_43643_43663[(1)] = (8));

} else {
var statearr_43644_43664 = state_43640__$1;
(statearr_43644_43664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (1))){
var inst_43609 = cljs.core.vec.call(null,chs);
var inst_43610 = inst_43609;
var state_43640__$1 = (function (){var statearr_43645 = state_43640;
(statearr_43645[(10)] = inst_43610);

return statearr_43645;
})();
var statearr_43646_43665 = state_43640__$1;
(statearr_43646_43665[(2)] = null);

(statearr_43646_43665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (4))){
var inst_43610 = (state_43640[(10)]);
var state_43640__$1 = state_43640;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43640__$1,(7),inst_43610);
} else {
if((state_val_43641 === (6))){
var inst_43636 = (state_43640[(2)]);
var state_43640__$1 = state_43640;
var statearr_43647_43666 = state_43640__$1;
(statearr_43647_43666[(2)] = inst_43636);

(statearr_43647_43666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (3))){
var inst_43638 = (state_43640[(2)]);
var state_43640__$1 = state_43640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43640__$1,inst_43638);
} else {
if((state_val_43641 === (2))){
var inst_43610 = (state_43640[(10)]);
var inst_43612 = cljs.core.count.call(null,inst_43610);
var inst_43613 = (inst_43612 > (0));
var state_43640__$1 = state_43640;
if(cljs.core.truth_(inst_43613)){
var statearr_43649_43667 = state_43640__$1;
(statearr_43649_43667[(1)] = (4));

} else {
var statearr_43650_43668 = state_43640__$1;
(statearr_43650_43668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (11))){
var inst_43610 = (state_43640[(10)]);
var inst_43629 = (state_43640[(2)]);
var tmp43648 = inst_43610;
var inst_43610__$1 = tmp43648;
var state_43640__$1 = (function (){var statearr_43651 = state_43640;
(statearr_43651[(11)] = inst_43629);

(statearr_43651[(10)] = inst_43610__$1);

return statearr_43651;
})();
var statearr_43652_43669 = state_43640__$1;
(statearr_43652_43669[(2)] = null);

(statearr_43652_43669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (9))){
var inst_43620 = (state_43640[(8)]);
var state_43640__$1 = state_43640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43640__$1,(11),out,inst_43620);
} else {
if((state_val_43641 === (5))){
var inst_43634 = cljs.core.async.close_BANG_.call(null,out);
var state_43640__$1 = state_43640;
var statearr_43653_43670 = state_43640__$1;
(statearr_43653_43670[(2)] = inst_43634);

(statearr_43653_43670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (10))){
var inst_43632 = (state_43640[(2)]);
var state_43640__$1 = state_43640;
var statearr_43654_43671 = state_43640__$1;
(statearr_43654_43671[(2)] = inst_43632);

(statearr_43654_43671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43641 === (8))){
var inst_43621 = (state_43640[(9)]);
var inst_43619 = (state_43640[(7)]);
var inst_43610 = (state_43640[(10)]);
var inst_43620 = (state_43640[(8)]);
var inst_43624 = (function (){var cs = inst_43610;
var vec__43615 = inst_43619;
var v = inst_43620;
var c = inst_43621;
return ((function (cs,vec__43615,v,c,inst_43621,inst_43619,inst_43610,inst_43620,state_val_43641,c__42249__auto___43662,out){
return (function (p1__43606_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43606_SHARP_);
});
;})(cs,vec__43615,v,c,inst_43621,inst_43619,inst_43610,inst_43620,state_val_43641,c__42249__auto___43662,out))
})();
var inst_43625 = cljs.core.filterv.call(null,inst_43624,inst_43610);
var inst_43610__$1 = inst_43625;
var state_43640__$1 = (function (){var statearr_43655 = state_43640;
(statearr_43655[(10)] = inst_43610__$1);

return statearr_43655;
})();
var statearr_43656_43672 = state_43640__$1;
(statearr_43656_43672[(2)] = null);

(statearr_43656_43672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43662,out))
;
return ((function (switch__42159__auto__,c__42249__auto___43662,out){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_43657 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43657[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_43657[(1)] = (1));

return statearr_43657;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_43640){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43658){if((e43658 instanceof Object)){
var ex__42163__auto__ = e43658;
var statearr_43659_43673 = state_43640;
(statearr_43659_43673[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43674 = state_43640;
state_43640 = G__43674;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_43640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_43640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43662,out))
})();
var state__42251__auto__ = (function (){var statearr_43660 = f__42250__auto__.call(null);
(statearr_43660[(6)] = c__42249__auto___43662);

return statearr_43660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43662,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43676 = arguments.length;
switch (G__43676) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42249__auto___43721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43721,out){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43721,out){
return (function (state_43700){
var state_val_43701 = (state_43700[(1)]);
if((state_val_43701 === (7))){
var inst_43682 = (state_43700[(7)]);
var inst_43682__$1 = (state_43700[(2)]);
var inst_43683 = (inst_43682__$1 == null);
var inst_43684 = cljs.core.not.call(null,inst_43683);
var state_43700__$1 = (function (){var statearr_43702 = state_43700;
(statearr_43702[(7)] = inst_43682__$1);

return statearr_43702;
})();
if(inst_43684){
var statearr_43703_43722 = state_43700__$1;
(statearr_43703_43722[(1)] = (8));

} else {
var statearr_43704_43723 = state_43700__$1;
(statearr_43704_43723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (1))){
var inst_43677 = (0);
var state_43700__$1 = (function (){var statearr_43705 = state_43700;
(statearr_43705[(8)] = inst_43677);

return statearr_43705;
})();
var statearr_43706_43724 = state_43700__$1;
(statearr_43706_43724[(2)] = null);

(statearr_43706_43724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (4))){
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(7),ch);
} else {
if((state_val_43701 === (6))){
var inst_43695 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43707_43725 = state_43700__$1;
(statearr_43707_43725[(2)] = inst_43695);

(statearr_43707_43725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (3))){
var inst_43697 = (state_43700[(2)]);
var inst_43698 = cljs.core.async.close_BANG_.call(null,out);
var state_43700__$1 = (function (){var statearr_43708 = state_43700;
(statearr_43708[(9)] = inst_43697);

return statearr_43708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43700__$1,inst_43698);
} else {
if((state_val_43701 === (2))){
var inst_43677 = (state_43700[(8)]);
var inst_43679 = (inst_43677 < n);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43679)){
var statearr_43709_43726 = state_43700__$1;
(statearr_43709_43726[(1)] = (4));

} else {
var statearr_43710_43727 = state_43700__$1;
(statearr_43710_43727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (11))){
var inst_43677 = (state_43700[(8)]);
var inst_43687 = (state_43700[(2)]);
var inst_43688 = (inst_43677 + (1));
var inst_43677__$1 = inst_43688;
var state_43700__$1 = (function (){var statearr_43711 = state_43700;
(statearr_43711[(8)] = inst_43677__$1);

(statearr_43711[(10)] = inst_43687);

return statearr_43711;
})();
var statearr_43712_43728 = state_43700__$1;
(statearr_43712_43728[(2)] = null);

(statearr_43712_43728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (9))){
var state_43700__$1 = state_43700;
var statearr_43713_43729 = state_43700__$1;
(statearr_43713_43729[(2)] = null);

(statearr_43713_43729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (5))){
var state_43700__$1 = state_43700;
var statearr_43714_43730 = state_43700__$1;
(statearr_43714_43730[(2)] = null);

(statearr_43714_43730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (10))){
var inst_43692 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43715_43731 = state_43700__$1;
(statearr_43715_43731[(2)] = inst_43692);

(statearr_43715_43731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (8))){
var inst_43682 = (state_43700[(7)]);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43700__$1,(11),out,inst_43682);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43721,out))
;
return ((function (switch__42159__auto__,c__42249__auto___43721,out){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_43716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43716[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_43716[(1)] = (1));

return statearr_43716;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_43700){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43717){if((e43717 instanceof Object)){
var ex__42163__auto__ = e43717;
var statearr_43718_43732 = state_43700;
(statearr_43718_43732[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43733 = state_43700;
state_43700 = G__43733;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_43700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_43700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43721,out))
})();
var state__42251__auto__ = (function (){var statearr_43719 = f__42250__auto__.call(null);
(statearr_43719[(6)] = c__42249__auto___43721);

return statearr_43719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43721,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43735 = (function (f,ch,meta43736){
this.f = f;
this.ch = ch;
this.meta43736 = meta43736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43737,meta43736__$1){
var self__ = this;
var _43737__$1 = this;
return (new cljs.core.async.t_cljs$core$async43735(self__.f,self__.ch,meta43736__$1));
});

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43737){
var self__ = this;
var _43737__$1 = this;
return self__.meta43736;
});

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43738 = (function (f,ch,meta43736,_,fn1,meta43739){
this.f = f;
this.ch = ch;
this.meta43736 = meta43736;
this._ = _;
this.fn1 = fn1;
this.meta43739 = meta43739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43740,meta43739__$1){
var self__ = this;
var _43740__$1 = this;
return (new cljs.core.async.t_cljs$core$async43738(self__.f,self__.ch,self__.meta43736,self__._,self__.fn1,meta43739__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43740){
var self__ = this;
var _43740__$1 = this;
return self__.meta43739;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43738.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43734_SHARP_){
return f1.call(null,(((p1__43734_SHARP_ == null))?null:self__.f.call(null,p1__43734_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43738.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43736","meta43736",-1767522732,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43735","cljs.core.async/t_cljs$core$async43735",-1417607442,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43739","meta43739",-471526467,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43738";

cljs.core.async.t_cljs$core$async43738.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async43738");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43738 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43738(f__$1,ch__$1,meta43736__$1,___$2,fn1__$1,meta43739){
return (new cljs.core.async.t_cljs$core$async43738(f__$1,ch__$1,meta43736__$1,___$2,fn1__$1,meta43739));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43738(self__.f,self__.ch,self__.meta43736,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35486__auto__ = ret;
if(cljs.core.truth_(and__35486__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35486__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43736","meta43736",-1767522732,null)], null);
});

cljs.core.async.t_cljs$core$async43735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43735";

cljs.core.async.t_cljs$core$async43735.cljs$lang$ctorPrWriter = (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async43735");
});

cljs.core.async.__GT_t_cljs$core$async43735 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43735(f__$1,ch__$1,meta43736){
return (new cljs.core.async.t_cljs$core$async43735(f__$1,ch__$1,meta43736));
});

}

return (new cljs.core.async.t_cljs$core$async43735(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43741 = (function (f,ch,meta43742){
this.f = f;
this.ch = ch;
this.meta43742 = meta43742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43743,meta43742__$1){
var self__ = this;
var _43743__$1 = this;
return (new cljs.core.async.t_cljs$core$async43741(self__.f,self__.ch,meta43742__$1));
});

cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43743){
var self__ = this;
var _43743__$1 = this;
return self__.meta43742;
});

cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43741.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43742","meta43742",1065939123,null)], null);
});

cljs.core.async.t_cljs$core$async43741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43741";

cljs.core.async.t_cljs$core$async43741.cljs$lang$ctorPrWriter = (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async43741");
});

cljs.core.async.__GT_t_cljs$core$async43741 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43741(f__$1,ch__$1,meta43742){
return (new cljs.core.async.t_cljs$core$async43741(f__$1,ch__$1,meta43742));
});

}

return (new cljs.core.async.t_cljs$core$async43741(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43744 = (function (p,ch,meta43745){
this.p = p;
this.ch = ch;
this.meta43745 = meta43745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43746,meta43745__$1){
var self__ = this;
var _43746__$1 = this;
return (new cljs.core.async.t_cljs$core$async43744(self__.p,self__.ch,meta43745__$1));
});

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43746){
var self__ = this;
var _43746__$1 = this;
return self__.meta43745;
});

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43745","meta43745",-420216931,null)], null);
});

cljs.core.async.t_cljs$core$async43744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43744";

cljs.core.async.t_cljs$core$async43744.cljs$lang$ctorPrWriter = (function (this__36169__auto__,writer__36170__auto__,opt__36171__auto__){
return cljs.core._write.call(null,writer__36170__auto__,"cljs.core.async/t_cljs$core$async43744");
});

cljs.core.async.__GT_t_cljs$core$async43744 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43744(p__$1,ch__$1,meta43745){
return (new cljs.core.async.t_cljs$core$async43744(p__$1,ch__$1,meta43745));
});

}

return (new cljs.core.async.t_cljs$core$async43744(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43748 = arguments.length;
switch (G__43748) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42249__auto___43788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43788,out){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43788,out){
return (function (state_43769){
var state_val_43770 = (state_43769[(1)]);
if((state_val_43770 === (7))){
var inst_43765 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43771_43789 = state_43769__$1;
(statearr_43771_43789[(2)] = inst_43765);

(statearr_43771_43789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (1))){
var state_43769__$1 = state_43769;
var statearr_43772_43790 = state_43769__$1;
(statearr_43772_43790[(2)] = null);

(statearr_43772_43790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (4))){
var inst_43751 = (state_43769[(7)]);
var inst_43751__$1 = (state_43769[(2)]);
var inst_43752 = (inst_43751__$1 == null);
var state_43769__$1 = (function (){var statearr_43773 = state_43769;
(statearr_43773[(7)] = inst_43751__$1);

return statearr_43773;
})();
if(cljs.core.truth_(inst_43752)){
var statearr_43774_43791 = state_43769__$1;
(statearr_43774_43791[(1)] = (5));

} else {
var statearr_43775_43792 = state_43769__$1;
(statearr_43775_43792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (6))){
var inst_43751 = (state_43769[(7)]);
var inst_43756 = p.call(null,inst_43751);
var state_43769__$1 = state_43769;
if(cljs.core.truth_(inst_43756)){
var statearr_43776_43793 = state_43769__$1;
(statearr_43776_43793[(1)] = (8));

} else {
var statearr_43777_43794 = state_43769__$1;
(statearr_43777_43794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (3))){
var inst_43767 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43769__$1,inst_43767);
} else {
if((state_val_43770 === (2))){
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43769__$1,(4),ch);
} else {
if((state_val_43770 === (11))){
var inst_43759 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43778_43795 = state_43769__$1;
(statearr_43778_43795[(2)] = inst_43759);

(statearr_43778_43795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (9))){
var state_43769__$1 = state_43769;
var statearr_43779_43796 = state_43769__$1;
(statearr_43779_43796[(2)] = null);

(statearr_43779_43796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (5))){
var inst_43754 = cljs.core.async.close_BANG_.call(null,out);
var state_43769__$1 = state_43769;
var statearr_43780_43797 = state_43769__$1;
(statearr_43780_43797[(2)] = inst_43754);

(statearr_43780_43797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (10))){
var inst_43762 = (state_43769[(2)]);
var state_43769__$1 = (function (){var statearr_43781 = state_43769;
(statearr_43781[(8)] = inst_43762);

return statearr_43781;
})();
var statearr_43782_43798 = state_43769__$1;
(statearr_43782_43798[(2)] = null);

(statearr_43782_43798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (8))){
var inst_43751 = (state_43769[(7)]);
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43769__$1,(11),out,inst_43751);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43788,out))
;
return ((function (switch__42159__auto__,c__42249__auto___43788,out){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_43783 = [null,null,null,null,null,null,null,null,null];
(statearr_43783[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_43783[(1)] = (1));

return statearr_43783;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_43769){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43784){if((e43784 instanceof Object)){
var ex__42163__auto__ = e43784;
var statearr_43785_43799 = state_43769;
(statearr_43785_43799[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43800 = state_43769;
state_43769 = G__43800;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_43769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_43769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43788,out))
})();
var state__42251__auto__ = (function (){var statearr_43786 = f__42250__auto__.call(null);
(statearr_43786[(6)] = c__42249__auto___43788);

return statearr_43786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43788,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43802 = arguments.length;
switch (G__43802) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__){
return (function (state_43865){
var state_val_43866 = (state_43865[(1)]);
if((state_val_43866 === (7))){
var inst_43861 = (state_43865[(2)]);
var state_43865__$1 = state_43865;
var statearr_43867_43905 = state_43865__$1;
(statearr_43867_43905[(2)] = inst_43861);

(statearr_43867_43905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (20))){
var inst_43831 = (state_43865[(7)]);
var inst_43842 = (state_43865[(2)]);
var inst_43843 = cljs.core.next.call(null,inst_43831);
var inst_43817 = inst_43843;
var inst_43818 = null;
var inst_43819 = (0);
var inst_43820 = (0);
var state_43865__$1 = (function (){var statearr_43868 = state_43865;
(statearr_43868[(8)] = inst_43842);

(statearr_43868[(9)] = inst_43817);

(statearr_43868[(10)] = inst_43820);

(statearr_43868[(11)] = inst_43818);

(statearr_43868[(12)] = inst_43819);

return statearr_43868;
})();
var statearr_43869_43906 = state_43865__$1;
(statearr_43869_43906[(2)] = null);

(statearr_43869_43906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (1))){
var state_43865__$1 = state_43865;
var statearr_43870_43907 = state_43865__$1;
(statearr_43870_43907[(2)] = null);

(statearr_43870_43907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (4))){
var inst_43806 = (state_43865[(13)]);
var inst_43806__$1 = (state_43865[(2)]);
var inst_43807 = (inst_43806__$1 == null);
var state_43865__$1 = (function (){var statearr_43871 = state_43865;
(statearr_43871[(13)] = inst_43806__$1);

return statearr_43871;
})();
if(cljs.core.truth_(inst_43807)){
var statearr_43872_43908 = state_43865__$1;
(statearr_43872_43908[(1)] = (5));

} else {
var statearr_43873_43909 = state_43865__$1;
(statearr_43873_43909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (15))){
var state_43865__$1 = state_43865;
var statearr_43877_43910 = state_43865__$1;
(statearr_43877_43910[(2)] = null);

(statearr_43877_43910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (21))){
var state_43865__$1 = state_43865;
var statearr_43878_43911 = state_43865__$1;
(statearr_43878_43911[(2)] = null);

(statearr_43878_43911[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (13))){
var inst_43817 = (state_43865[(9)]);
var inst_43820 = (state_43865[(10)]);
var inst_43818 = (state_43865[(11)]);
var inst_43819 = (state_43865[(12)]);
var inst_43827 = (state_43865[(2)]);
var inst_43828 = (inst_43820 + (1));
var tmp43874 = inst_43817;
var tmp43875 = inst_43818;
var tmp43876 = inst_43819;
var inst_43817__$1 = tmp43874;
var inst_43818__$1 = tmp43875;
var inst_43819__$1 = tmp43876;
var inst_43820__$1 = inst_43828;
var state_43865__$1 = (function (){var statearr_43879 = state_43865;
(statearr_43879[(14)] = inst_43827);

(statearr_43879[(9)] = inst_43817__$1);

(statearr_43879[(10)] = inst_43820__$1);

(statearr_43879[(11)] = inst_43818__$1);

(statearr_43879[(12)] = inst_43819__$1);

return statearr_43879;
})();
var statearr_43880_43912 = state_43865__$1;
(statearr_43880_43912[(2)] = null);

(statearr_43880_43912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (22))){
var state_43865__$1 = state_43865;
var statearr_43881_43913 = state_43865__$1;
(statearr_43881_43913[(2)] = null);

(statearr_43881_43913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (6))){
var inst_43806 = (state_43865[(13)]);
var inst_43815 = f.call(null,inst_43806);
var inst_43816 = cljs.core.seq.call(null,inst_43815);
var inst_43817 = inst_43816;
var inst_43818 = null;
var inst_43819 = (0);
var inst_43820 = (0);
var state_43865__$1 = (function (){var statearr_43882 = state_43865;
(statearr_43882[(9)] = inst_43817);

(statearr_43882[(10)] = inst_43820);

(statearr_43882[(11)] = inst_43818);

(statearr_43882[(12)] = inst_43819);

return statearr_43882;
})();
var statearr_43883_43914 = state_43865__$1;
(statearr_43883_43914[(2)] = null);

(statearr_43883_43914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (17))){
var inst_43831 = (state_43865[(7)]);
var inst_43835 = cljs.core.chunk_first.call(null,inst_43831);
var inst_43836 = cljs.core.chunk_rest.call(null,inst_43831);
var inst_43837 = cljs.core.count.call(null,inst_43835);
var inst_43817 = inst_43836;
var inst_43818 = inst_43835;
var inst_43819 = inst_43837;
var inst_43820 = (0);
var state_43865__$1 = (function (){var statearr_43884 = state_43865;
(statearr_43884[(9)] = inst_43817);

(statearr_43884[(10)] = inst_43820);

(statearr_43884[(11)] = inst_43818);

(statearr_43884[(12)] = inst_43819);

return statearr_43884;
})();
var statearr_43885_43915 = state_43865__$1;
(statearr_43885_43915[(2)] = null);

(statearr_43885_43915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (3))){
var inst_43863 = (state_43865[(2)]);
var state_43865__$1 = state_43865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43865__$1,inst_43863);
} else {
if((state_val_43866 === (12))){
var inst_43851 = (state_43865[(2)]);
var state_43865__$1 = state_43865;
var statearr_43886_43916 = state_43865__$1;
(statearr_43886_43916[(2)] = inst_43851);

(statearr_43886_43916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (2))){
var state_43865__$1 = state_43865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43865__$1,(4),in$);
} else {
if((state_val_43866 === (23))){
var inst_43859 = (state_43865[(2)]);
var state_43865__$1 = state_43865;
var statearr_43887_43917 = state_43865__$1;
(statearr_43887_43917[(2)] = inst_43859);

(statearr_43887_43917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (19))){
var inst_43846 = (state_43865[(2)]);
var state_43865__$1 = state_43865;
var statearr_43888_43918 = state_43865__$1;
(statearr_43888_43918[(2)] = inst_43846);

(statearr_43888_43918[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (11))){
var inst_43831 = (state_43865[(7)]);
var inst_43817 = (state_43865[(9)]);
var inst_43831__$1 = cljs.core.seq.call(null,inst_43817);
var state_43865__$1 = (function (){var statearr_43889 = state_43865;
(statearr_43889[(7)] = inst_43831__$1);

return statearr_43889;
})();
if(inst_43831__$1){
var statearr_43890_43919 = state_43865__$1;
(statearr_43890_43919[(1)] = (14));

} else {
var statearr_43891_43920 = state_43865__$1;
(statearr_43891_43920[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (9))){
var inst_43853 = (state_43865[(2)]);
var inst_43854 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43865__$1 = (function (){var statearr_43892 = state_43865;
(statearr_43892[(15)] = inst_43853);

return statearr_43892;
})();
if(cljs.core.truth_(inst_43854)){
var statearr_43893_43921 = state_43865__$1;
(statearr_43893_43921[(1)] = (21));

} else {
var statearr_43894_43922 = state_43865__$1;
(statearr_43894_43922[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (5))){
var inst_43809 = cljs.core.async.close_BANG_.call(null,out);
var state_43865__$1 = state_43865;
var statearr_43895_43923 = state_43865__$1;
(statearr_43895_43923[(2)] = inst_43809);

(statearr_43895_43923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (14))){
var inst_43831 = (state_43865[(7)]);
var inst_43833 = cljs.core.chunked_seq_QMARK_.call(null,inst_43831);
var state_43865__$1 = state_43865;
if(inst_43833){
var statearr_43896_43924 = state_43865__$1;
(statearr_43896_43924[(1)] = (17));

} else {
var statearr_43897_43925 = state_43865__$1;
(statearr_43897_43925[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (16))){
var inst_43849 = (state_43865[(2)]);
var state_43865__$1 = state_43865;
var statearr_43898_43926 = state_43865__$1;
(statearr_43898_43926[(2)] = inst_43849);

(statearr_43898_43926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43866 === (10))){
var inst_43820 = (state_43865[(10)]);
var inst_43818 = (state_43865[(11)]);
var inst_43825 = cljs.core._nth.call(null,inst_43818,inst_43820);
var state_43865__$1 = state_43865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43865__$1,(13),out,inst_43825);
} else {
if((state_val_43866 === (18))){
var inst_43831 = (state_43865[(7)]);
var inst_43840 = cljs.core.first.call(null,inst_43831);
var state_43865__$1 = state_43865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43865__$1,(20),out,inst_43840);
} else {
if((state_val_43866 === (8))){
var inst_43820 = (state_43865[(10)]);
var inst_43819 = (state_43865[(12)]);
var inst_43822 = (inst_43820 < inst_43819);
var inst_43823 = inst_43822;
var state_43865__$1 = state_43865;
if(cljs.core.truth_(inst_43823)){
var statearr_43899_43927 = state_43865__$1;
(statearr_43899_43927[(1)] = (10));

} else {
var statearr_43900_43928 = state_43865__$1;
(statearr_43900_43928[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto__))
;
return ((function (switch__42159__auto__,c__42249__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42160__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42160__auto____0 = (function (){
var statearr_43901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43901[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42160__auto__);

(statearr_43901[(1)] = (1));

return statearr_43901;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42160__auto____1 = (function (state_43865){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43902){if((e43902 instanceof Object)){
var ex__42163__auto__ = e43902;
var statearr_43903_43929 = state_43865;
(statearr_43903_43929[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43930 = state_43865;
state_43865 = G__43930;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42160__auto__ = function(state_43865){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42160__auto____1.call(this,state_43865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42160__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42160__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__))
})();
var state__42251__auto__ = (function (){var statearr_43904 = f__42250__auto__.call(null);
(statearr_43904[(6)] = c__42249__auto__);

return statearr_43904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__))
);

return c__42249__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43932 = arguments.length;
switch (G__43932) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43935 = arguments.length;
switch (G__43935) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43938 = arguments.length;
switch (G__43938) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42249__auto___43985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___43985,out){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___43985,out){
return (function (state_43962){
var state_val_43963 = (state_43962[(1)]);
if((state_val_43963 === (7))){
var inst_43957 = (state_43962[(2)]);
var state_43962__$1 = state_43962;
var statearr_43964_43986 = state_43962__$1;
(statearr_43964_43986[(2)] = inst_43957);

(statearr_43964_43986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (1))){
var inst_43939 = null;
var state_43962__$1 = (function (){var statearr_43965 = state_43962;
(statearr_43965[(7)] = inst_43939);

return statearr_43965;
})();
var statearr_43966_43987 = state_43962__$1;
(statearr_43966_43987[(2)] = null);

(statearr_43966_43987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (4))){
var inst_43942 = (state_43962[(8)]);
var inst_43942__$1 = (state_43962[(2)]);
var inst_43943 = (inst_43942__$1 == null);
var inst_43944 = cljs.core.not.call(null,inst_43943);
var state_43962__$1 = (function (){var statearr_43967 = state_43962;
(statearr_43967[(8)] = inst_43942__$1);

return statearr_43967;
})();
if(inst_43944){
var statearr_43968_43988 = state_43962__$1;
(statearr_43968_43988[(1)] = (5));

} else {
var statearr_43969_43989 = state_43962__$1;
(statearr_43969_43989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (6))){
var state_43962__$1 = state_43962;
var statearr_43970_43990 = state_43962__$1;
(statearr_43970_43990[(2)] = null);

(statearr_43970_43990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (3))){
var inst_43959 = (state_43962[(2)]);
var inst_43960 = cljs.core.async.close_BANG_.call(null,out);
var state_43962__$1 = (function (){var statearr_43971 = state_43962;
(statearr_43971[(9)] = inst_43959);

return statearr_43971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43962__$1,inst_43960);
} else {
if((state_val_43963 === (2))){
var state_43962__$1 = state_43962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43962__$1,(4),ch);
} else {
if((state_val_43963 === (11))){
var inst_43942 = (state_43962[(8)]);
var inst_43951 = (state_43962[(2)]);
var inst_43939 = inst_43942;
var state_43962__$1 = (function (){var statearr_43972 = state_43962;
(statearr_43972[(7)] = inst_43939);

(statearr_43972[(10)] = inst_43951);

return statearr_43972;
})();
var statearr_43973_43991 = state_43962__$1;
(statearr_43973_43991[(2)] = null);

(statearr_43973_43991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (9))){
var inst_43942 = (state_43962[(8)]);
var state_43962__$1 = state_43962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43962__$1,(11),out,inst_43942);
} else {
if((state_val_43963 === (5))){
var inst_43942 = (state_43962[(8)]);
var inst_43939 = (state_43962[(7)]);
var inst_43946 = cljs.core._EQ_.call(null,inst_43942,inst_43939);
var state_43962__$1 = state_43962;
if(inst_43946){
var statearr_43975_43992 = state_43962__$1;
(statearr_43975_43992[(1)] = (8));

} else {
var statearr_43976_43993 = state_43962__$1;
(statearr_43976_43993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (10))){
var inst_43954 = (state_43962[(2)]);
var state_43962__$1 = state_43962;
var statearr_43977_43994 = state_43962__$1;
(statearr_43977_43994[(2)] = inst_43954);

(statearr_43977_43994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (8))){
var inst_43939 = (state_43962[(7)]);
var tmp43974 = inst_43939;
var inst_43939__$1 = tmp43974;
var state_43962__$1 = (function (){var statearr_43978 = state_43962;
(statearr_43978[(7)] = inst_43939__$1);

return statearr_43978;
})();
var statearr_43979_43995 = state_43962__$1;
(statearr_43979_43995[(2)] = null);

(statearr_43979_43995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___43985,out))
;
return ((function (switch__42159__auto__,c__42249__auto___43985,out){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_43980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43980[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_43980[(1)] = (1));

return statearr_43980;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_43962){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_43962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e43981){if((e43981 instanceof Object)){
var ex__42163__auto__ = e43981;
var statearr_43982_43996 = state_43962;
(statearr_43982_43996[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43997 = state_43962;
state_43962 = G__43997;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_43962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_43962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___43985,out))
})();
var state__42251__auto__ = (function (){var statearr_43983 = f__42250__auto__.call(null);
(statearr_43983[(6)] = c__42249__auto___43985);

return statearr_43983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___43985,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43999 = arguments.length;
switch (G__43999) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42249__auto___44065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___44065,out){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___44065,out){
return (function (state_44037){
var state_val_44038 = (state_44037[(1)]);
if((state_val_44038 === (7))){
var inst_44033 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
var statearr_44039_44066 = state_44037__$1;
(statearr_44039_44066[(2)] = inst_44033);

(statearr_44039_44066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (1))){
var inst_44000 = (new Array(n));
var inst_44001 = inst_44000;
var inst_44002 = (0);
var state_44037__$1 = (function (){var statearr_44040 = state_44037;
(statearr_44040[(7)] = inst_44002);

(statearr_44040[(8)] = inst_44001);

return statearr_44040;
})();
var statearr_44041_44067 = state_44037__$1;
(statearr_44041_44067[(2)] = null);

(statearr_44041_44067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (4))){
var inst_44005 = (state_44037[(9)]);
var inst_44005__$1 = (state_44037[(2)]);
var inst_44006 = (inst_44005__$1 == null);
var inst_44007 = cljs.core.not.call(null,inst_44006);
var state_44037__$1 = (function (){var statearr_44042 = state_44037;
(statearr_44042[(9)] = inst_44005__$1);

return statearr_44042;
})();
if(inst_44007){
var statearr_44043_44068 = state_44037__$1;
(statearr_44043_44068[(1)] = (5));

} else {
var statearr_44044_44069 = state_44037__$1;
(statearr_44044_44069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (15))){
var inst_44027 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
var statearr_44045_44070 = state_44037__$1;
(statearr_44045_44070[(2)] = inst_44027);

(statearr_44045_44070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (13))){
var state_44037__$1 = state_44037;
var statearr_44046_44071 = state_44037__$1;
(statearr_44046_44071[(2)] = null);

(statearr_44046_44071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (6))){
var inst_44002 = (state_44037[(7)]);
var inst_44023 = (inst_44002 > (0));
var state_44037__$1 = state_44037;
if(cljs.core.truth_(inst_44023)){
var statearr_44047_44072 = state_44037__$1;
(statearr_44047_44072[(1)] = (12));

} else {
var statearr_44048_44073 = state_44037__$1;
(statearr_44048_44073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (3))){
var inst_44035 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44037__$1,inst_44035);
} else {
if((state_val_44038 === (12))){
var inst_44001 = (state_44037[(8)]);
var inst_44025 = cljs.core.vec.call(null,inst_44001);
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44037__$1,(15),out,inst_44025);
} else {
if((state_val_44038 === (2))){
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44037__$1,(4),ch);
} else {
if((state_val_44038 === (11))){
var inst_44017 = (state_44037[(2)]);
var inst_44018 = (new Array(n));
var inst_44001 = inst_44018;
var inst_44002 = (0);
var state_44037__$1 = (function (){var statearr_44049 = state_44037;
(statearr_44049[(7)] = inst_44002);

(statearr_44049[(10)] = inst_44017);

(statearr_44049[(8)] = inst_44001);

return statearr_44049;
})();
var statearr_44050_44074 = state_44037__$1;
(statearr_44050_44074[(2)] = null);

(statearr_44050_44074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (9))){
var inst_44001 = (state_44037[(8)]);
var inst_44015 = cljs.core.vec.call(null,inst_44001);
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44037__$1,(11),out,inst_44015);
} else {
if((state_val_44038 === (5))){
var inst_44002 = (state_44037[(7)]);
var inst_44010 = (state_44037[(11)]);
var inst_44005 = (state_44037[(9)]);
var inst_44001 = (state_44037[(8)]);
var inst_44009 = (inst_44001[inst_44002] = inst_44005);
var inst_44010__$1 = (inst_44002 + (1));
var inst_44011 = (inst_44010__$1 < n);
var state_44037__$1 = (function (){var statearr_44051 = state_44037;
(statearr_44051[(12)] = inst_44009);

(statearr_44051[(11)] = inst_44010__$1);

return statearr_44051;
})();
if(cljs.core.truth_(inst_44011)){
var statearr_44052_44075 = state_44037__$1;
(statearr_44052_44075[(1)] = (8));

} else {
var statearr_44053_44076 = state_44037__$1;
(statearr_44053_44076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (14))){
var inst_44030 = (state_44037[(2)]);
var inst_44031 = cljs.core.async.close_BANG_.call(null,out);
var state_44037__$1 = (function (){var statearr_44055 = state_44037;
(statearr_44055[(13)] = inst_44030);

return statearr_44055;
})();
var statearr_44056_44077 = state_44037__$1;
(statearr_44056_44077[(2)] = inst_44031);

(statearr_44056_44077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (10))){
var inst_44021 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
var statearr_44057_44078 = state_44037__$1;
(statearr_44057_44078[(2)] = inst_44021);

(statearr_44057_44078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (8))){
var inst_44010 = (state_44037[(11)]);
var inst_44001 = (state_44037[(8)]);
var tmp44054 = inst_44001;
var inst_44001__$1 = tmp44054;
var inst_44002 = inst_44010;
var state_44037__$1 = (function (){var statearr_44058 = state_44037;
(statearr_44058[(7)] = inst_44002);

(statearr_44058[(8)] = inst_44001__$1);

return statearr_44058;
})();
var statearr_44059_44079 = state_44037__$1;
(statearr_44059_44079[(2)] = null);

(statearr_44059_44079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___44065,out))
;
return ((function (switch__42159__auto__,c__42249__auto___44065,out){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_44060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44060[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_44060[(1)] = (1));

return statearr_44060;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_44037){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_44037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e44061){if((e44061 instanceof Object)){
var ex__42163__auto__ = e44061;
var statearr_44062_44080 = state_44037;
(statearr_44062_44080[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44081 = state_44037;
state_44037 = G__44081;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_44037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_44037);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___44065,out))
})();
var state__42251__auto__ = (function (){var statearr_44063 = f__42250__auto__.call(null);
(statearr_44063[(6)] = c__42249__auto___44065);

return statearr_44063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___44065,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44083 = arguments.length;
switch (G__44083) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42249__auto___44153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___44153,out){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___44153,out){
return (function (state_44125){
var state_val_44126 = (state_44125[(1)]);
if((state_val_44126 === (7))){
var inst_44121 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44127_44154 = state_44125__$1;
(statearr_44127_44154[(2)] = inst_44121);

(statearr_44127_44154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (1))){
var inst_44084 = [];
var inst_44085 = inst_44084;
var inst_44086 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44125__$1 = (function (){var statearr_44128 = state_44125;
(statearr_44128[(7)] = inst_44086);

(statearr_44128[(8)] = inst_44085);

return statearr_44128;
})();
var statearr_44129_44155 = state_44125__$1;
(statearr_44129_44155[(2)] = null);

(statearr_44129_44155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (4))){
var inst_44089 = (state_44125[(9)]);
var inst_44089__$1 = (state_44125[(2)]);
var inst_44090 = (inst_44089__$1 == null);
var inst_44091 = cljs.core.not.call(null,inst_44090);
var state_44125__$1 = (function (){var statearr_44130 = state_44125;
(statearr_44130[(9)] = inst_44089__$1);

return statearr_44130;
})();
if(inst_44091){
var statearr_44131_44156 = state_44125__$1;
(statearr_44131_44156[(1)] = (5));

} else {
var statearr_44132_44157 = state_44125__$1;
(statearr_44132_44157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (15))){
var inst_44115 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44133_44158 = state_44125__$1;
(statearr_44133_44158[(2)] = inst_44115);

(statearr_44133_44158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (13))){
var state_44125__$1 = state_44125;
var statearr_44134_44159 = state_44125__$1;
(statearr_44134_44159[(2)] = null);

(statearr_44134_44159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (6))){
var inst_44085 = (state_44125[(8)]);
var inst_44110 = inst_44085.length;
var inst_44111 = (inst_44110 > (0));
var state_44125__$1 = state_44125;
if(cljs.core.truth_(inst_44111)){
var statearr_44135_44160 = state_44125__$1;
(statearr_44135_44160[(1)] = (12));

} else {
var statearr_44136_44161 = state_44125__$1;
(statearr_44136_44161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (3))){
var inst_44123 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44125__$1,inst_44123);
} else {
if((state_val_44126 === (12))){
var inst_44085 = (state_44125[(8)]);
var inst_44113 = cljs.core.vec.call(null,inst_44085);
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44125__$1,(15),out,inst_44113);
} else {
if((state_val_44126 === (2))){
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44125__$1,(4),ch);
} else {
if((state_val_44126 === (11))){
var inst_44093 = (state_44125[(10)]);
var inst_44089 = (state_44125[(9)]);
var inst_44103 = (state_44125[(2)]);
var inst_44104 = [];
var inst_44105 = inst_44104.push(inst_44089);
var inst_44085 = inst_44104;
var inst_44086 = inst_44093;
var state_44125__$1 = (function (){var statearr_44137 = state_44125;
(statearr_44137[(11)] = inst_44103);

(statearr_44137[(12)] = inst_44105);

(statearr_44137[(7)] = inst_44086);

(statearr_44137[(8)] = inst_44085);

return statearr_44137;
})();
var statearr_44138_44162 = state_44125__$1;
(statearr_44138_44162[(2)] = null);

(statearr_44138_44162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (9))){
var inst_44085 = (state_44125[(8)]);
var inst_44101 = cljs.core.vec.call(null,inst_44085);
var state_44125__$1 = state_44125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44125__$1,(11),out,inst_44101);
} else {
if((state_val_44126 === (5))){
var inst_44093 = (state_44125[(10)]);
var inst_44089 = (state_44125[(9)]);
var inst_44086 = (state_44125[(7)]);
var inst_44093__$1 = f.call(null,inst_44089);
var inst_44094 = cljs.core._EQ_.call(null,inst_44093__$1,inst_44086);
var inst_44095 = cljs.core.keyword_identical_QMARK_.call(null,inst_44086,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44096 = (inst_44094) || (inst_44095);
var state_44125__$1 = (function (){var statearr_44139 = state_44125;
(statearr_44139[(10)] = inst_44093__$1);

return statearr_44139;
})();
if(cljs.core.truth_(inst_44096)){
var statearr_44140_44163 = state_44125__$1;
(statearr_44140_44163[(1)] = (8));

} else {
var statearr_44141_44164 = state_44125__$1;
(statearr_44141_44164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (14))){
var inst_44118 = (state_44125[(2)]);
var inst_44119 = cljs.core.async.close_BANG_.call(null,out);
var state_44125__$1 = (function (){var statearr_44143 = state_44125;
(statearr_44143[(13)] = inst_44118);

return statearr_44143;
})();
var statearr_44144_44165 = state_44125__$1;
(statearr_44144_44165[(2)] = inst_44119);

(statearr_44144_44165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (10))){
var inst_44108 = (state_44125[(2)]);
var state_44125__$1 = state_44125;
var statearr_44145_44166 = state_44125__$1;
(statearr_44145_44166[(2)] = inst_44108);

(statearr_44145_44166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44126 === (8))){
var inst_44093 = (state_44125[(10)]);
var inst_44089 = (state_44125[(9)]);
var inst_44085 = (state_44125[(8)]);
var inst_44098 = inst_44085.push(inst_44089);
var tmp44142 = inst_44085;
var inst_44085__$1 = tmp44142;
var inst_44086 = inst_44093;
var state_44125__$1 = (function (){var statearr_44146 = state_44125;
(statearr_44146[(14)] = inst_44098);

(statearr_44146[(7)] = inst_44086);

(statearr_44146[(8)] = inst_44085__$1);

return statearr_44146;
})();
var statearr_44147_44167 = state_44125__$1;
(statearr_44147_44167[(2)] = null);

(statearr_44147_44167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42249__auto___44153,out))
;
return ((function (switch__42159__auto__,c__42249__auto___44153,out){
return (function() {
var cljs$core$async$state_machine__42160__auto__ = null;
var cljs$core$async$state_machine__42160__auto____0 = (function (){
var statearr_44148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44148[(0)] = cljs$core$async$state_machine__42160__auto__);

(statearr_44148[(1)] = (1));

return statearr_44148;
});
var cljs$core$async$state_machine__42160__auto____1 = (function (state_44125){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_44125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e44149){if((e44149 instanceof Object)){
var ex__42163__auto__ = e44149;
var statearr_44150_44168 = state_44125;
(statearr_44150_44168[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44169 = state_44125;
state_44125 = G__44169;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
cljs$core$async$state_machine__42160__auto__ = function(state_44125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42160__auto____1.call(this,state_44125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42160__auto____0;
cljs$core$async$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42160__auto____1;
return cljs$core$async$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___44153,out))
})();
var state__42251__auto__ = (function (){var statearr_44151 = f__42250__auto__.call(null);
(statearr_44151[(6)] = c__42249__auto___44153);

return statearr_44151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___44153,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517021946107
