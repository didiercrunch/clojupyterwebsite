// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e46398){if((e46398 instanceof Error)){
var e = e46398;
return "Error: Unable to stringify";
} else {
throw e46398;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__46401 = arguments.length;
switch (G__46401) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__46399_SHARP_){
if(typeof p1__46399_SHARP_ === 'string'){
return p1__46399_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__46399_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__36784__auto__ = [];
var len__36777__auto___46404 = arguments.length;
var i__36778__auto___46405 = (0);
while(true){
if((i__36778__auto___46405 < len__36777__auto___46404)){
args__36784__auto__.push((arguments[i__36778__auto___46405]));

var G__46406 = (i__36778__auto___46405 + (1));
i__36778__auto___46405 = G__46406;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46403){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46403));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__36784__auto__ = [];
var len__36777__auto___46408 = arguments.length;
var i__36778__auto___46409 = (0);
while(true){
if((i__36778__auto___46409 < len__36777__auto___46408)){
args__36784__auto__.push((arguments[i__36778__auto___46409]));

var G__46410 = (i__36778__auto___46409 + (1));
i__36778__auto___46409 = G__46410;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46407){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46407));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46411){
var map__46412 = p__46411;
var map__46412__$1 = ((((!((map__46412 == null)))?((((map__46412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46412):map__46412);
var message = cljs.core.get.call(null,map__46412__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46412__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__35498__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__35486__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__35486__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__35486__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__42249__auto___46491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___46491,ch){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___46491,ch){
return (function (state_46463){
var state_val_46464 = (state_46463[(1)]);
if((state_val_46464 === (7))){
var inst_46459 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
var statearr_46465_46492 = state_46463__$1;
(statearr_46465_46492[(2)] = inst_46459);

(statearr_46465_46492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (1))){
var state_46463__$1 = state_46463;
var statearr_46466_46493 = state_46463__$1;
(statearr_46466_46493[(2)] = null);

(statearr_46466_46493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (4))){
var inst_46416 = (state_46463[(7)]);
var inst_46416__$1 = (state_46463[(2)]);
var state_46463__$1 = (function (){var statearr_46467 = state_46463;
(statearr_46467[(7)] = inst_46416__$1);

return statearr_46467;
})();
if(cljs.core.truth_(inst_46416__$1)){
var statearr_46468_46494 = state_46463__$1;
(statearr_46468_46494[(1)] = (5));

} else {
var statearr_46469_46495 = state_46463__$1;
(statearr_46469_46495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (15))){
var inst_46423 = (state_46463[(8)]);
var inst_46438 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46423);
var inst_46439 = cljs.core.first.call(null,inst_46438);
var inst_46440 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46439);
var inst_46441 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46440)].join('');
var inst_46442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46441);
var state_46463__$1 = state_46463;
var statearr_46470_46496 = state_46463__$1;
(statearr_46470_46496[(2)] = inst_46442);

(statearr_46470_46496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (13))){
var inst_46447 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
var statearr_46471_46497 = state_46463__$1;
(statearr_46471_46497[(2)] = inst_46447);

(statearr_46471_46497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (6))){
var state_46463__$1 = state_46463;
var statearr_46472_46498 = state_46463__$1;
(statearr_46472_46498[(2)] = null);

(statearr_46472_46498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (17))){
var inst_46445 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
var statearr_46473_46499 = state_46463__$1;
(statearr_46473_46499[(2)] = inst_46445);

(statearr_46473_46499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (3))){
var inst_46461 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46463__$1,inst_46461);
} else {
if((state_val_46464 === (12))){
var inst_46422 = (state_46463[(9)]);
var inst_46436 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46422,opts);
var state_46463__$1 = state_46463;
if(cljs.core.truth_(inst_46436)){
var statearr_46474_46500 = state_46463__$1;
(statearr_46474_46500[(1)] = (15));

} else {
var statearr_46475_46501 = state_46463__$1;
(statearr_46475_46501[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (2))){
var state_46463__$1 = state_46463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46463__$1,(4),ch);
} else {
if((state_val_46464 === (11))){
var inst_46423 = (state_46463[(8)]);
var inst_46428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46429 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46423);
var inst_46430 = cljs.core.async.timeout.call(null,(1000));
var inst_46431 = [inst_46429,inst_46430];
var inst_46432 = (new cljs.core.PersistentVector(null,2,(5),inst_46428,inst_46431,null));
var state_46463__$1 = state_46463;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46463__$1,(14),inst_46432);
} else {
if((state_val_46464 === (9))){
var inst_46423 = (state_46463[(8)]);
var inst_46449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46450 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46423);
var inst_46451 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46450);
var inst_46452 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46451)].join('');
var inst_46453 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46452);
var state_46463__$1 = (function (){var statearr_46476 = state_46463;
(statearr_46476[(10)] = inst_46449);

return statearr_46476;
})();
var statearr_46477_46502 = state_46463__$1;
(statearr_46477_46502[(2)] = inst_46453);

(statearr_46477_46502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (5))){
var inst_46416 = (state_46463[(7)]);
var inst_46418 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46419 = (new cljs.core.PersistentArrayMap(null,2,inst_46418,null));
var inst_46420 = (new cljs.core.PersistentHashSet(null,inst_46419,null));
var inst_46421 = figwheel.client.focus_msgs.call(null,inst_46420,inst_46416);
var inst_46422 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46421);
var inst_46423 = cljs.core.first.call(null,inst_46421);
var inst_46424 = figwheel.client.autoload_QMARK_.call(null);
var state_46463__$1 = (function (){var statearr_46478 = state_46463;
(statearr_46478[(8)] = inst_46423);

(statearr_46478[(9)] = inst_46422);

return statearr_46478;
})();
if(cljs.core.truth_(inst_46424)){
var statearr_46479_46503 = state_46463__$1;
(statearr_46479_46503[(1)] = (8));

} else {
var statearr_46480_46504 = state_46463__$1;
(statearr_46480_46504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (14))){
var inst_46434 = (state_46463[(2)]);
var state_46463__$1 = state_46463;
var statearr_46481_46505 = state_46463__$1;
(statearr_46481_46505[(2)] = inst_46434);

(statearr_46481_46505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (16))){
var state_46463__$1 = state_46463;
var statearr_46482_46506 = state_46463__$1;
(statearr_46482_46506[(2)] = null);

(statearr_46482_46506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (10))){
var inst_46455 = (state_46463[(2)]);
var state_46463__$1 = (function (){var statearr_46483 = state_46463;
(statearr_46483[(11)] = inst_46455);

return statearr_46483;
})();
var statearr_46484_46507 = state_46463__$1;
(statearr_46484_46507[(2)] = null);

(statearr_46484_46507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46464 === (8))){
var inst_46422 = (state_46463[(9)]);
var inst_46426 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46422,opts);
var state_46463__$1 = state_46463;
if(cljs.core.truth_(inst_46426)){
var statearr_46485_46508 = state_46463__$1;
(statearr_46485_46508[(1)] = (11));

} else {
var statearr_46486_46509 = state_46463__$1;
(statearr_46486_46509[(1)] = (12));

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
});})(c__42249__auto___46491,ch))
;
return ((function (switch__42159__auto__,c__42249__auto___46491,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__42160__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__42160__auto____0 = (function (){
var statearr_46487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46487[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__42160__auto__);

(statearr_46487[(1)] = (1));

return statearr_46487;
});
var figwheel$client$file_reloader_plugin_$_state_machine__42160__auto____1 = (function (state_46463){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_46463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e46488){if((e46488 instanceof Object)){
var ex__42163__auto__ = e46488;
var statearr_46489_46510 = state_46463;
(statearr_46489_46510[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46511 = state_46463;
state_46463 = G__46511;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__42160__auto__ = function(state_46463){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__42160__auto____1.call(this,state_46463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__42160__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__42160__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___46491,ch))
})();
var state__42251__auto__ = (function (){var statearr_46490 = f__42250__auto__.call(null);
(statearr_46490[(6)] = c__42249__auto___46491);

return statearr_46490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___46491,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46512_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46512_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_46514 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46514){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46513){if((e46513 instanceof Error)){
var e = e46513;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46514], null));
} else {
var e = e46513;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46514))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46515){
var map__46516 = p__46515;
var map__46516__$1 = ((((!((map__46516 == null)))?((((map__46516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46516):map__46516);
var opts = map__46516__$1;
var build_id = cljs.core.get.call(null,map__46516__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46516,map__46516__$1,opts,build_id){
return (function (p__46518){
var vec__46519 = p__46518;
var seq__46520 = cljs.core.seq.call(null,vec__46519);
var first__46521 = cljs.core.first.call(null,seq__46520);
var seq__46520__$1 = cljs.core.next.call(null,seq__46520);
var map__46522 = first__46521;
var map__46522__$1 = ((((!((map__46522 == null)))?((((map__46522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46522):map__46522);
var msg = map__46522__$1;
var msg_name = cljs.core.get.call(null,map__46522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46520__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46519,seq__46520,first__46521,seq__46520__$1,map__46522,map__46522__$1,msg,msg_name,_,map__46516,map__46516__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46519,seq__46520,first__46521,seq__46520__$1,map__46522,map__46522__$1,msg,msg_name,_,map__46516,map__46516__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46516,map__46516__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46524){
var vec__46525 = p__46524;
var seq__46526 = cljs.core.seq.call(null,vec__46525);
var first__46527 = cljs.core.first.call(null,seq__46526);
var seq__46526__$1 = cljs.core.next.call(null,seq__46526);
var map__46528 = first__46527;
var map__46528__$1 = ((((!((map__46528 == null)))?((((map__46528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46528):map__46528);
var msg = map__46528__$1;
var msg_name = cljs.core.get.call(null,map__46528__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46526__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46530){
var map__46531 = p__46530;
var map__46531__$1 = ((((!((map__46531 == null)))?((((map__46531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46531):map__46531);
var on_compile_warning = cljs.core.get.call(null,map__46531__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46531__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46531,map__46531__$1,on_compile_warning,on_compile_fail){
return (function (p__46533){
var vec__46534 = p__46533;
var seq__46535 = cljs.core.seq.call(null,vec__46534);
var first__46536 = cljs.core.first.call(null,seq__46535);
var seq__46535__$1 = cljs.core.next.call(null,seq__46535);
var map__46537 = first__46536;
var map__46537__$1 = ((((!((map__46537 == null)))?((((map__46537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46537):map__46537);
var msg = map__46537__$1;
var msg_name = cljs.core.get.call(null,map__46537__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46535__$1;
var pred__46539 = cljs.core._EQ_;
var expr__46540 = msg_name;
if(cljs.core.truth_(pred__46539.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46540))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46539.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46540))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46531,map__46531__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__,msg_hist,msg_names,msg){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__,msg_hist,msg_names,msg){
return (function (state_46629){
var state_val_46630 = (state_46629[(1)]);
if((state_val_46630 === (7))){
var inst_46549 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46549)){
var statearr_46631_46678 = state_46629__$1;
(statearr_46631_46678[(1)] = (8));

} else {
var statearr_46632_46679 = state_46629__$1;
(statearr_46632_46679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (20))){
var inst_46623 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46633_46680 = state_46629__$1;
(statearr_46633_46680[(2)] = inst_46623);

(statearr_46633_46680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (27))){
var inst_46619 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46634_46681 = state_46629__$1;
(statearr_46634_46681[(2)] = inst_46619);

(statearr_46634_46681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (1))){
var inst_46542 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46542)){
var statearr_46635_46682 = state_46629__$1;
(statearr_46635_46682[(1)] = (2));

} else {
var statearr_46636_46683 = state_46629__$1;
(statearr_46636_46683[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (24))){
var inst_46621 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46637_46684 = state_46629__$1;
(statearr_46637_46684[(2)] = inst_46621);

(statearr_46637_46684[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (4))){
var inst_46627 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46629__$1,inst_46627);
} else {
if((state_val_46630 === (15))){
var inst_46625 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46638_46685 = state_46629__$1;
(statearr_46638_46685[(2)] = inst_46625);

(statearr_46638_46685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (21))){
var inst_46578 = (state_46629[(2)]);
var inst_46579 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46580 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46579);
var state_46629__$1 = (function (){var statearr_46639 = state_46629;
(statearr_46639[(7)] = inst_46578);

return statearr_46639;
})();
var statearr_46640_46686 = state_46629__$1;
(statearr_46640_46686[(2)] = inst_46580);

(statearr_46640_46686[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (31))){
var inst_46608 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46608)){
var statearr_46641_46687 = state_46629__$1;
(statearr_46641_46687[(1)] = (34));

} else {
var statearr_46642_46688 = state_46629__$1;
(statearr_46642_46688[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (32))){
var inst_46617 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46643_46689 = state_46629__$1;
(statearr_46643_46689[(2)] = inst_46617);

(statearr_46643_46689[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (33))){
var inst_46604 = (state_46629[(2)]);
var inst_46605 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46606 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46605);
var state_46629__$1 = (function (){var statearr_46644 = state_46629;
(statearr_46644[(8)] = inst_46604);

return statearr_46644;
})();
var statearr_46645_46690 = state_46629__$1;
(statearr_46645_46690[(2)] = inst_46606);

(statearr_46645_46690[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (13))){
var inst_46563 = figwheel.client.heads_up.clear.call(null);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(16),inst_46563);
} else {
if((state_val_46630 === (22))){
var inst_46584 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46585 = figwheel.client.heads_up.append_warning_message.call(null,inst_46584);
var state_46629__$1 = state_46629;
var statearr_46646_46691 = state_46629__$1;
(statearr_46646_46691[(2)] = inst_46585);

(statearr_46646_46691[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (36))){
var inst_46615 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46647_46692 = state_46629__$1;
(statearr_46647_46692[(2)] = inst_46615);

(statearr_46647_46692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (29))){
var inst_46595 = (state_46629[(2)]);
var inst_46596 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46597 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46596);
var state_46629__$1 = (function (){var statearr_46648 = state_46629;
(statearr_46648[(9)] = inst_46595);

return statearr_46648;
})();
var statearr_46649_46693 = state_46629__$1;
(statearr_46649_46693[(2)] = inst_46597);

(statearr_46649_46693[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (6))){
var inst_46544 = (state_46629[(10)]);
var state_46629__$1 = state_46629;
var statearr_46650_46694 = state_46629__$1;
(statearr_46650_46694[(2)] = inst_46544);

(statearr_46650_46694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (28))){
var inst_46591 = (state_46629[(2)]);
var inst_46592 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46593 = figwheel.client.heads_up.display_warning.call(null,inst_46592);
var state_46629__$1 = (function (){var statearr_46651 = state_46629;
(statearr_46651[(11)] = inst_46591);

return statearr_46651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(29),inst_46593);
} else {
if((state_val_46630 === (25))){
var inst_46589 = figwheel.client.heads_up.clear.call(null);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(28),inst_46589);
} else {
if((state_val_46630 === (34))){
var inst_46610 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(37),inst_46610);
} else {
if((state_val_46630 === (17))){
var inst_46569 = (state_46629[(2)]);
var inst_46570 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46571 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46570);
var state_46629__$1 = (function (){var statearr_46652 = state_46629;
(statearr_46652[(12)] = inst_46569);

return statearr_46652;
})();
var statearr_46653_46695 = state_46629__$1;
(statearr_46653_46695[(2)] = inst_46571);

(statearr_46653_46695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (3))){
var inst_46561 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46561)){
var statearr_46654_46696 = state_46629__$1;
(statearr_46654_46696[(1)] = (13));

} else {
var statearr_46655_46697 = state_46629__$1;
(statearr_46655_46697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (12))){
var inst_46557 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46656_46698 = state_46629__$1;
(statearr_46656_46698[(2)] = inst_46557);

(statearr_46656_46698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (2))){
var inst_46544 = (state_46629[(10)]);
var inst_46544__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46629__$1 = (function (){var statearr_46657 = state_46629;
(statearr_46657[(10)] = inst_46544__$1);

return statearr_46657;
})();
if(cljs.core.truth_(inst_46544__$1)){
var statearr_46658_46699 = state_46629__$1;
(statearr_46658_46699[(1)] = (5));

} else {
var statearr_46659_46700 = state_46629__$1;
(statearr_46659_46700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (23))){
var inst_46587 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46587)){
var statearr_46660_46701 = state_46629__$1;
(statearr_46660_46701[(1)] = (25));

} else {
var statearr_46661_46702 = state_46629__$1;
(statearr_46661_46702[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (35))){
var state_46629__$1 = state_46629;
var statearr_46662_46703 = state_46629__$1;
(statearr_46662_46703[(2)] = null);

(statearr_46662_46703[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (19))){
var inst_46582 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46582)){
var statearr_46663_46704 = state_46629__$1;
(statearr_46663_46704[(1)] = (22));

} else {
var statearr_46664_46705 = state_46629__$1;
(statearr_46664_46705[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (11))){
var inst_46553 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46665_46706 = state_46629__$1;
(statearr_46665_46706[(2)] = inst_46553);

(statearr_46665_46706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (9))){
var inst_46555 = figwheel.client.heads_up.clear.call(null);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(12),inst_46555);
} else {
if((state_val_46630 === (5))){
var inst_46546 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46629__$1 = state_46629;
var statearr_46666_46707 = state_46629__$1;
(statearr_46666_46707[(2)] = inst_46546);

(statearr_46666_46707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (14))){
var inst_46573 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46573)){
var statearr_46667_46708 = state_46629__$1;
(statearr_46667_46708[(1)] = (18));

} else {
var statearr_46668_46709 = state_46629__$1;
(statearr_46668_46709[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (26))){
var inst_46599 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46629__$1 = state_46629;
if(cljs.core.truth_(inst_46599)){
var statearr_46669_46710 = state_46629__$1;
(statearr_46669_46710[(1)] = (30));

} else {
var statearr_46670_46711 = state_46629__$1;
(statearr_46670_46711[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (16))){
var inst_46565 = (state_46629[(2)]);
var inst_46566 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46567 = figwheel.client.heads_up.display_exception.call(null,inst_46566);
var state_46629__$1 = (function (){var statearr_46671 = state_46629;
(statearr_46671[(13)] = inst_46565);

return statearr_46671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(17),inst_46567);
} else {
if((state_val_46630 === (30))){
var inst_46601 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46602 = figwheel.client.heads_up.display_warning.call(null,inst_46601);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(33),inst_46602);
} else {
if((state_val_46630 === (10))){
var inst_46559 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46672_46712 = state_46629__$1;
(statearr_46672_46712[(2)] = inst_46559);

(statearr_46672_46712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (18))){
var inst_46575 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46576 = figwheel.client.heads_up.display_exception.call(null,inst_46575);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(21),inst_46576);
} else {
if((state_val_46630 === (37))){
var inst_46612 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46673_46713 = state_46629__$1;
(statearr_46673_46713[(2)] = inst_46612);

(statearr_46673_46713[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (8))){
var inst_46551 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46629__$1,(11),inst_46551);
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
});})(c__42249__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__42159__auto__,c__42249__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto____0 = (function (){
var statearr_46674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46674[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto__);

(statearr_46674[(1)] = (1));

return statearr_46674;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto____1 = (function (state_46629){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_46629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e46675){if((e46675 instanceof Object)){
var ex__42163__auto__ = e46675;
var statearr_46676_46714 = state_46629;
(statearr_46676_46714[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46715 = state_46629;
state_46629 = G__46715;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto__ = function(state_46629){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto____1.call(this,state_46629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__,msg_hist,msg_names,msg))
})();
var state__42251__auto__ = (function (){var statearr_46677 = f__42250__auto__.call(null);
(statearr_46677[(6)] = c__42249__auto__);

return statearr_46677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__,msg_hist,msg_names,msg))
);

return c__42249__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__42249__auto___46744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___46744,ch){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___46744,ch){
return (function (state_46730){
var state_val_46731 = (state_46730[(1)]);
if((state_val_46731 === (1))){
var state_46730__$1 = state_46730;
var statearr_46732_46745 = state_46730__$1;
(statearr_46732_46745[(2)] = null);

(statearr_46732_46745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46731 === (2))){
var state_46730__$1 = state_46730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46730__$1,(4),ch);
} else {
if((state_val_46731 === (3))){
var inst_46728 = (state_46730[(2)]);
var state_46730__$1 = state_46730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46730__$1,inst_46728);
} else {
if((state_val_46731 === (4))){
var inst_46718 = (state_46730[(7)]);
var inst_46718__$1 = (state_46730[(2)]);
var state_46730__$1 = (function (){var statearr_46733 = state_46730;
(statearr_46733[(7)] = inst_46718__$1);

return statearr_46733;
})();
if(cljs.core.truth_(inst_46718__$1)){
var statearr_46734_46746 = state_46730__$1;
(statearr_46734_46746[(1)] = (5));

} else {
var statearr_46735_46747 = state_46730__$1;
(statearr_46735_46747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46731 === (5))){
var inst_46718 = (state_46730[(7)]);
var inst_46720 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46718);
var state_46730__$1 = state_46730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46730__$1,(8),inst_46720);
} else {
if((state_val_46731 === (6))){
var state_46730__$1 = state_46730;
var statearr_46736_46748 = state_46730__$1;
(statearr_46736_46748[(2)] = null);

(statearr_46736_46748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46731 === (7))){
var inst_46726 = (state_46730[(2)]);
var state_46730__$1 = state_46730;
var statearr_46737_46749 = state_46730__$1;
(statearr_46737_46749[(2)] = inst_46726);

(statearr_46737_46749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46731 === (8))){
var inst_46722 = (state_46730[(2)]);
var state_46730__$1 = (function (){var statearr_46738 = state_46730;
(statearr_46738[(8)] = inst_46722);

return statearr_46738;
})();
var statearr_46739_46750 = state_46730__$1;
(statearr_46739_46750[(2)] = null);

(statearr_46739_46750[(1)] = (2));


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
});})(c__42249__auto___46744,ch))
;
return ((function (switch__42159__auto__,c__42249__auto___46744,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__42160__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__42160__auto____0 = (function (){
var statearr_46740 = [null,null,null,null,null,null,null,null,null];
(statearr_46740[(0)] = figwheel$client$heads_up_plugin_$_state_machine__42160__auto__);

(statearr_46740[(1)] = (1));

return statearr_46740;
});
var figwheel$client$heads_up_plugin_$_state_machine__42160__auto____1 = (function (state_46730){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_46730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e46741){if((e46741 instanceof Object)){
var ex__42163__auto__ = e46741;
var statearr_46742_46751 = state_46730;
(statearr_46742_46751[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46752 = state_46730;
state_46730 = G__46752;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__42160__auto__ = function(state_46730){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__42160__auto____1.call(this,state_46730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__42160__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__42160__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___46744,ch))
})();
var state__42251__auto__ = (function (){var statearr_46743 = f__42250__auto__.call(null);
(statearr_46743[(6)] = c__42249__auto___46744);

return statearr_46743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___46744,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__){
return (function (state_46758){
var state_val_46759 = (state_46758[(1)]);
if((state_val_46759 === (1))){
var inst_46753 = cljs.core.async.timeout.call(null,(3000));
var state_46758__$1 = state_46758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46758__$1,(2),inst_46753);
} else {
if((state_val_46759 === (2))){
var inst_46755 = (state_46758[(2)]);
var inst_46756 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46758__$1 = (function (){var statearr_46760 = state_46758;
(statearr_46760[(7)] = inst_46755);

return statearr_46760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46758__$1,inst_46756);
} else {
return null;
}
}
});})(c__42249__auto__))
;
return ((function (switch__42159__auto__,c__42249__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__42160__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__42160__auto____0 = (function (){
var statearr_46761 = [null,null,null,null,null,null,null,null];
(statearr_46761[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__42160__auto__);

(statearr_46761[(1)] = (1));

return statearr_46761;
});
var figwheel$client$enforce_project_plugin_$_state_machine__42160__auto____1 = (function (state_46758){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_46758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e46762){if((e46762 instanceof Object)){
var ex__42163__auto__ = e46762;
var statearr_46763_46765 = state_46758;
(statearr_46763_46765[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46766 = state_46758;
state_46758 = G__46766;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__42160__auto__ = function(state_46758){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__42160__auto____1.call(this,state_46758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__42160__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__42160__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__))
})();
var state__42251__auto__ = (function (){var statearr_46764 = f__42250__auto__.call(null);
(statearr_46764[(6)] = c__42249__auto__);

return statearr_46764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__))
);

return c__42249__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__,figwheel_version,temp__5457__auto__){
return (function (state_46773){
var state_val_46774 = (state_46773[(1)]);
if((state_val_46774 === (1))){
var inst_46767 = cljs.core.async.timeout.call(null,(2000));
var state_46773__$1 = state_46773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46773__$1,(2),inst_46767);
} else {
if((state_val_46774 === (2))){
var inst_46769 = (state_46773[(2)]);
var inst_46770 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_46771 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46770);
var state_46773__$1 = (function (){var statearr_46775 = state_46773;
(statearr_46775[(7)] = inst_46769);

return statearr_46775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46773__$1,inst_46771);
} else {
return null;
}
}
});})(c__42249__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__42159__auto__,c__42249__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto____0 = (function (){
var statearr_46776 = [null,null,null,null,null,null,null,null];
(statearr_46776[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto__);

(statearr_46776[(1)] = (1));

return statearr_46776;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto____1 = (function (state_46773){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_46773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e46777){if((e46777 instanceof Object)){
var ex__42163__auto__ = e46777;
var statearr_46778_46780 = state_46773;
(statearr_46778_46780[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46781 = state_46773;
state_46773 = G__46781;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto__ = function(state_46773){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto____1.call(this,state_46773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__,figwheel_version,temp__5457__auto__))
})();
var state__42251__auto__ = (function (){var statearr_46779 = f__42250__auto__.call(null);
(statearr_46779[(6)] = c__42249__auto__);

return statearr_46779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__,figwheel_version,temp__5457__auto__))
);

return c__42249__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46782){
var map__46783 = p__46782;
var map__46783__$1 = ((((!((map__46783 == null)))?((((map__46783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46783):map__46783);
var file = cljs.core.get.call(null,map__46783__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46783__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46783__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46785 = "";
var G__46785__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46785),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46785);
var G__46785__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46785__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46785__$1);
if(cljs.core.truth_((function (){var and__35486__auto__ = line;
if(cljs.core.truth_(and__35486__auto__)){
return column;
} else {
return and__35486__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46785__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46785__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46786){
var map__46787 = p__46786;
var map__46787__$1 = ((((!((map__46787 == null)))?((((map__46787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46787):map__46787);
var ed = map__46787__$1;
var formatted_exception = cljs.core.get.call(null,map__46787__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46787__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46787__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46789_46793 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46790_46794 = null;
var count__46791_46795 = (0);
var i__46792_46796 = (0);
while(true){
if((i__46792_46796 < count__46791_46795)){
var msg_46797 = cljs.core._nth.call(null,chunk__46790_46794,i__46792_46796);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46797);

var G__46798 = seq__46789_46793;
var G__46799 = chunk__46790_46794;
var G__46800 = count__46791_46795;
var G__46801 = (i__46792_46796 + (1));
seq__46789_46793 = G__46798;
chunk__46790_46794 = G__46799;
count__46791_46795 = G__46800;
i__46792_46796 = G__46801;
continue;
} else {
var temp__5457__auto___46802 = cljs.core.seq.call(null,seq__46789_46793);
if(temp__5457__auto___46802){
var seq__46789_46803__$1 = temp__5457__auto___46802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46789_46803__$1)){
var c__36429__auto___46804 = cljs.core.chunk_first.call(null,seq__46789_46803__$1);
var G__46805 = cljs.core.chunk_rest.call(null,seq__46789_46803__$1);
var G__46806 = c__36429__auto___46804;
var G__46807 = cljs.core.count.call(null,c__36429__auto___46804);
var G__46808 = (0);
seq__46789_46793 = G__46805;
chunk__46790_46794 = G__46806;
count__46791_46795 = G__46807;
i__46792_46796 = G__46808;
continue;
} else {
var msg_46809 = cljs.core.first.call(null,seq__46789_46803__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46809);

var G__46810 = cljs.core.next.call(null,seq__46789_46803__$1);
var G__46811 = null;
var G__46812 = (0);
var G__46813 = (0);
seq__46789_46793 = G__46810;
chunk__46790_46794 = G__46811;
count__46791_46795 = G__46812;
i__46792_46796 = G__46813;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46814){
var map__46815 = p__46814;
var map__46815__$1 = ((((!((map__46815 == null)))?((((map__46815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46815):map__46815);
var w = map__46815__$1;
var message = cljs.core.get.call(null,map__46815__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__35486__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__35486__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__35486__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46817 = cljs.core.seq.call(null,plugins);
var chunk__46818 = null;
var count__46819 = (0);
var i__46820 = (0);
while(true){
if((i__46820 < count__46819)){
var vec__46821 = cljs.core._nth.call(null,chunk__46818,i__46820);
var k = cljs.core.nth.call(null,vec__46821,(0),null);
var plugin = cljs.core.nth.call(null,vec__46821,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46827 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46817,chunk__46818,count__46819,i__46820,pl_46827,vec__46821,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46827.call(null,msg_hist);
});})(seq__46817,chunk__46818,count__46819,i__46820,pl_46827,vec__46821,k,plugin))
);
} else {
}

var G__46828 = seq__46817;
var G__46829 = chunk__46818;
var G__46830 = count__46819;
var G__46831 = (i__46820 + (1));
seq__46817 = G__46828;
chunk__46818 = G__46829;
count__46819 = G__46830;
i__46820 = G__46831;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46817);
if(temp__5457__auto__){
var seq__46817__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46817__$1)){
var c__36429__auto__ = cljs.core.chunk_first.call(null,seq__46817__$1);
var G__46832 = cljs.core.chunk_rest.call(null,seq__46817__$1);
var G__46833 = c__36429__auto__;
var G__46834 = cljs.core.count.call(null,c__36429__auto__);
var G__46835 = (0);
seq__46817 = G__46832;
chunk__46818 = G__46833;
count__46819 = G__46834;
i__46820 = G__46835;
continue;
} else {
var vec__46824 = cljs.core.first.call(null,seq__46817__$1);
var k = cljs.core.nth.call(null,vec__46824,(0),null);
var plugin = cljs.core.nth.call(null,vec__46824,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46836 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46817,chunk__46818,count__46819,i__46820,pl_46836,vec__46824,k,plugin,seq__46817__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46836.call(null,msg_hist);
});})(seq__46817,chunk__46818,count__46819,i__46820,pl_46836,vec__46824,k,plugin,seq__46817__$1,temp__5457__auto__))
);
} else {
}

var G__46837 = cljs.core.next.call(null,seq__46817__$1);
var G__46838 = null;
var G__46839 = (0);
var G__46840 = (0);
seq__46817 = G__46837;
chunk__46818 = G__46838;
count__46819 = G__46839;
i__46820 = G__46840;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__46842 = arguments.length;
switch (G__46842) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__46843_46848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46844_46849 = null;
var count__46845_46850 = (0);
var i__46846_46851 = (0);
while(true){
if((i__46846_46851 < count__46845_46850)){
var msg_46852 = cljs.core._nth.call(null,chunk__46844_46849,i__46846_46851);
figwheel.client.socket.handle_incoming_message.call(null,msg_46852);

var G__46853 = seq__46843_46848;
var G__46854 = chunk__46844_46849;
var G__46855 = count__46845_46850;
var G__46856 = (i__46846_46851 + (1));
seq__46843_46848 = G__46853;
chunk__46844_46849 = G__46854;
count__46845_46850 = G__46855;
i__46846_46851 = G__46856;
continue;
} else {
var temp__5457__auto___46857 = cljs.core.seq.call(null,seq__46843_46848);
if(temp__5457__auto___46857){
var seq__46843_46858__$1 = temp__5457__auto___46857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46843_46858__$1)){
var c__36429__auto___46859 = cljs.core.chunk_first.call(null,seq__46843_46858__$1);
var G__46860 = cljs.core.chunk_rest.call(null,seq__46843_46858__$1);
var G__46861 = c__36429__auto___46859;
var G__46862 = cljs.core.count.call(null,c__36429__auto___46859);
var G__46863 = (0);
seq__46843_46848 = G__46860;
chunk__46844_46849 = G__46861;
count__46845_46850 = G__46862;
i__46846_46851 = G__46863;
continue;
} else {
var msg_46864 = cljs.core.first.call(null,seq__46843_46858__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46864);

var G__46865 = cljs.core.next.call(null,seq__46843_46858__$1);
var G__46866 = null;
var G__46867 = (0);
var G__46868 = (0);
seq__46843_46848 = G__46865;
chunk__46844_46849 = G__46866;
count__46845_46850 = G__46867;
i__46846_46851 = G__46868;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__36784__auto__ = [];
var len__36777__auto___46873 = arguments.length;
var i__36778__auto___46874 = (0);
while(true){
if((i__36778__auto___46874 < len__36777__auto___46873)){
args__36784__auto__.push((arguments[i__36778__auto___46874]));

var G__46875 = (i__36778__auto___46874 + (1));
i__36778__auto___46874 = G__46875;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46870){
var map__46871 = p__46870;
var map__46871__$1 = ((((!((map__46871 == null)))?((((map__46871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46871):map__46871);
var opts = map__46871__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46869){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46869));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46876){if((e46876 instanceof Error)){
var e = e46876;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46876;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__46877){
var map__46878 = p__46877;
var map__46878__$1 = ((((!((map__46878 == null)))?((((map__46878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46878):map__46878);
var msg_name = cljs.core.get.call(null,map__46878__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1517021948937
