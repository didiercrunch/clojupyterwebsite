// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40233_40234 = value;
x40233_40234.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40236_40237 = value;
x40236_40237.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40239_40240 = value;
x40239_40240.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__35486__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__35486__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__35486__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__36784__auto__ = [];
var len__36777__auto___40247 = arguments.length;
var i__36778__auto___40248 = (0);
while(true){
if((i__36778__auto___40248 < len__36777__auto___40247)){
args__36784__auto__.push((arguments[i__36778__auto___40248]));

var G__40249 = (i__36778__auto___40248 + (1));
i__36778__auto___40248 = G__40249;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40243_40250 = cljs.core.seq.call(null,items);
var chunk__40244_40251 = null;
var count__40245_40252 = (0);
var i__40246_40253 = (0);
while(true){
if((i__40246_40253 < count__40245_40252)){
var item_40254 = cljs.core._nth.call(null,chunk__40244_40251,i__40246_40253);
if(!((item_40254 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40254)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40254)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40254));
}
} else {
}

var G__40255 = seq__40243_40250;
var G__40256 = chunk__40244_40251;
var G__40257 = count__40245_40252;
var G__40258 = (i__40246_40253 + (1));
seq__40243_40250 = G__40255;
chunk__40244_40251 = G__40256;
count__40245_40252 = G__40257;
i__40246_40253 = G__40258;
continue;
} else {
var temp__5457__auto___40259 = cljs.core.seq.call(null,seq__40243_40250);
if(temp__5457__auto___40259){
var seq__40243_40260__$1 = temp__5457__auto___40259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40243_40260__$1)){
var c__36429__auto___40261 = cljs.core.chunk_first.call(null,seq__40243_40260__$1);
var G__40262 = cljs.core.chunk_rest.call(null,seq__40243_40260__$1);
var G__40263 = c__36429__auto___40261;
var G__40264 = cljs.core.count.call(null,c__36429__auto___40261);
var G__40265 = (0);
seq__40243_40250 = G__40262;
chunk__40244_40251 = G__40263;
count__40245_40252 = G__40264;
i__40246_40253 = G__40265;
continue;
} else {
var item_40266 = cljs.core.first.call(null,seq__40243_40260__$1);
if(!((item_40266 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40266)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40266)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40266));
}
} else {
}

var G__40267 = cljs.core.next.call(null,seq__40243_40260__$1);
var G__40268 = null;
var G__40269 = (0);
var G__40270 = (0);
seq__40243_40250 = G__40267;
chunk__40244_40251 = G__40268;
count__40245_40252 = G__40269;
i__40246_40253 = G__40270;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40242){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40242));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__36784__auto__ = [];
var len__36777__auto___40278 = arguments.length;
var i__36778__auto___40279 = (0);
while(true){
if((i__36778__auto___40279 < len__36777__auto___40278)){
args__36784__auto__.push((arguments[i__36778__auto___40279]));

var G__40280 = (i__36778__auto___40279 + (1));
i__36778__auto___40279 = G__40280;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((2) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36785__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40274_40281 = cljs.core.seq.call(null,children);
var chunk__40275_40282 = null;
var count__40276_40283 = (0);
var i__40277_40284 = (0);
while(true){
if((i__40277_40284 < count__40276_40283)){
var child_40285 = cljs.core._nth.call(null,chunk__40275_40282,i__40277_40284);
if(!((child_40285 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40285)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40285))));
} else {
var temp__5455__auto___40286 = devtools.formatters.helpers.pref.call(null,child_40285);
if(cljs.core.truth_(temp__5455__auto___40286)){
var child_value_40287 = temp__5455__auto___40286;
template.push(child_value_40287);
} else {
}
}
} else {
}

var G__40288 = seq__40274_40281;
var G__40289 = chunk__40275_40282;
var G__40290 = count__40276_40283;
var G__40291 = (i__40277_40284 + (1));
seq__40274_40281 = G__40288;
chunk__40275_40282 = G__40289;
count__40276_40283 = G__40290;
i__40277_40284 = G__40291;
continue;
} else {
var temp__5457__auto___40292 = cljs.core.seq.call(null,seq__40274_40281);
if(temp__5457__auto___40292){
var seq__40274_40293__$1 = temp__5457__auto___40292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40274_40293__$1)){
var c__36429__auto___40294 = cljs.core.chunk_first.call(null,seq__40274_40293__$1);
var G__40295 = cljs.core.chunk_rest.call(null,seq__40274_40293__$1);
var G__40296 = c__36429__auto___40294;
var G__40297 = cljs.core.count.call(null,c__36429__auto___40294);
var G__40298 = (0);
seq__40274_40281 = G__40295;
chunk__40275_40282 = G__40296;
count__40276_40283 = G__40297;
i__40277_40284 = G__40298;
continue;
} else {
var child_40299 = cljs.core.first.call(null,seq__40274_40293__$1);
if(!((child_40299 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40299)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40299))));
} else {
var temp__5455__auto___40300 = devtools.formatters.helpers.pref.call(null,child_40299);
if(cljs.core.truth_(temp__5455__auto___40300)){
var child_value_40301 = temp__5455__auto___40300;
template.push(child_value_40301);
} else {
}
}
} else {
}

var G__40302 = cljs.core.next.call(null,seq__40274_40293__$1);
var G__40303 = null;
var G__40304 = (0);
var G__40305 = (0);
seq__40274_40281 = G__40302;
chunk__40275_40282 = G__40303;
count__40276_40283 = G__40304;
i__40277_40284 = G__40305;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40271){
var G__40272 = cljs.core.first.call(null,seq40271);
var seq40271__$1 = cljs.core.next.call(null,seq40271);
var G__40273 = cljs.core.first.call(null,seq40271__$1);
var seq40271__$2 = cljs.core.next.call(null,seq40271__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40272,G__40273,seq40271__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__36784__auto__ = [];
var len__36777__auto___40308 = arguments.length;
var i__36778__auto___40309 = (0);
while(true){
if((i__36778__auto___40309 < len__36777__auto___40308)){
args__36784__auto__.push((arguments[i__36778__auto___40309]));

var G__40310 = (i__36778__auto___40309 + (1));
i__36778__auto___40309 = G__40310;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((1) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36785__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40306){
var G__40307 = cljs.core.first.call(null,seq40306);
var seq40306__$1 = cljs.core.next.call(null,seq40306);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40307,seq40306__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__36784__auto__ = [];
var len__36777__auto___40313 = arguments.length;
var i__36778__auto___40314 = (0);
while(true){
if((i__36778__auto___40314 < len__36777__auto___40313)){
args__36784__auto__.push((arguments[i__36778__auto___40314]));

var G__40315 = (i__36778__auto___40314 + (1));
i__36778__auto___40314 = G__40315;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((1) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36785__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40311){
var G__40312 = cljs.core.first.call(null,seq40311);
var seq40311__$1 = cljs.core.next.call(null,seq40311);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40312,seq40311__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__40317 = arguments.length;
switch (G__40317) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40319 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__35498__auto__ = start_index;
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
return (0);
}
})()};
return obj40319;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__36784__auto__ = [];
var len__36777__auto___40327 = arguments.length;
var i__36778__auto___40328 = (0);
while(true){
if((i__36778__auto___40328 < len__36777__auto___40327)){
args__36784__auto__.push((arguments[i__36778__auto___40328]));

var G__40329 = (i__36778__auto___40328 + (1));
i__36778__auto___40328 = G__40329;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((1) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36785__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40323){
var vec__40324 = p__40323;
var state_override_fn = cljs.core.nth.call(null,vec__40324,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40321){
var G__40322 = cljs.core.first.call(null,seq40321);
var seq40321__$1 = cljs.core.next.call(null,seq40321);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40322,seq40321__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40330 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40330;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40331 = name;
switch (G__40331) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40333 = tag;
var html_tag = cljs.core.nth.call(null,vec__40333,(0),null);
var style = cljs.core.nth.call(null,vec__40333,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40336 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40336;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40337 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40338 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40338;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40337;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40339 = initial_value;
var G__40340 = value.call(null);
initial_value = G__40339;
value = G__40340;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40341 = initial_value;
var G__40342 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40341;
value = G__40342;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40343 = initial_value;
var G__40344 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40343;
value = G__40344;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1517021944037
