// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__36231__auto__ = (((value == null))?null:value);
var m__36232__auto__ = (devtools.format._header[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,value);
} else {
var m__36232__auto____$1 = (devtools.format._header["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__36231__auto__ = (((value == null))?null:value);
var m__36232__auto__ = (devtools.format._has_body[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,value);
} else {
var m__36232__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__36231__auto__ = (((value == null))?null:value);
var m__36232__auto__ = (devtools.format._body[goog.typeOf(x__36231__auto__)]);
if(!((m__36232__auto__ == null))){
return m__36232__auto__.call(null,value);
} else {
var m__36232__auto____$1 = (devtools.format._body["_"]);
if(!((m__36232__auto____$1 == null))){
return m__36232__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o38033 = temp__5455__auto__;
var temp__5455__auto____$1 = (o38033["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o38034 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o38034["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o38035 = temp__5455__auto____$2;
return (o38035["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o38036 = temp__5455__auto__;
var temp__5455__auto____$1 = (o38036["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o38037 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o38037["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o38038 = temp__5455__auto____$2;
return (o38038["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o38039 = temp__5455__auto__;
var temp__5455__auto____$1 = (o38039["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o38040 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o38040["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o38041 = temp__5455__auto____$2;
return (o38041["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o38042 = temp__5455__auto__;
var temp__5455__auto____$1 = (o38042["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o38043 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o38043["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o38044 = temp__5455__auto____$2;
return (o38044["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o38045 = temp__5455__auto__;
var temp__5455__auto____$1 = (o38045["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o38046 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o38046["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o38047 = temp__5455__auto____$2;
return (o38047["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o38048 = temp__5455__auto__;
var temp__5455__auto____$1 = (o38048["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o38049 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o38049["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o38050 = temp__5455__auto____$2;
return (o38050["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o38051 = temp__5455__auto__;
var temp__5455__auto____$1 = (o38051["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o38052 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o38052["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o38053 = temp__5455__auto____$2;
return (o38053["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38055 = arguments.length;
var i__36778__auto___38056 = (0);
while(true){
if((i__36778__auto___38056 < len__36777__auto___38055)){
args__36784__auto__.push((arguments[i__36778__auto___38056]));

var G__38057 = (i__36778__auto___38056 + (1));
i__36778__auto___38056 = G__38057;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38054){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38054));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38059 = arguments.length;
var i__36778__auto___38060 = (0);
while(true){
if((i__36778__auto___38060 < len__36777__auto___38059)){
args__36784__auto__.push((arguments[i__36778__auto___38060]));

var G__38061 = (i__36778__auto___38060 + (1));
i__36778__auto___38060 = G__38061;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38058){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38058));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38063 = arguments.length;
var i__36778__auto___38064 = (0);
while(true){
if((i__36778__auto___38064 < len__36777__auto___38063)){
args__36784__auto__.push((arguments[i__36778__auto___38064]));

var G__38065 = (i__36778__auto___38064 + (1));
i__36778__auto___38064 = G__38065;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38062){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38062));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38067 = arguments.length;
var i__36778__auto___38068 = (0);
while(true){
if((i__36778__auto___38068 < len__36777__auto___38067)){
args__36784__auto__.push((arguments[i__36778__auto___38068]));

var G__38069 = (i__36778__auto___38068 + (1));
i__36778__auto___38068 = G__38069;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38066){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38066));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38071 = arguments.length;
var i__36778__auto___38072 = (0);
while(true){
if((i__36778__auto___38072 < len__36777__auto___38071)){
args__36784__auto__.push((arguments[i__36778__auto___38072]));

var G__38073 = (i__36778__auto___38072 + (1));
i__36778__auto___38072 = G__38073;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38070){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38070));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38075 = arguments.length;
var i__36778__auto___38076 = (0);
while(true){
if((i__36778__auto___38076 < len__36777__auto___38075)){
args__36784__auto__.push((arguments[i__36778__auto___38076]));

var G__38077 = (i__36778__auto___38076 + (1));
i__36778__auto___38076 = G__38077;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38074){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38074));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38079 = arguments.length;
var i__36778__auto___38080 = (0);
while(true){
if((i__36778__auto___38080 < len__36777__auto___38079)){
args__36784__auto__.push((arguments[i__36778__auto___38080]));

var G__38081 = (i__36778__auto___38080 + (1));
i__36778__auto___38080 = G__38081;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38078){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38078));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38089 = arguments.length;
var i__36778__auto___38090 = (0);
while(true){
if((i__36778__auto___38090 < len__36777__auto___38089)){
args__36784__auto__.push((arguments[i__36778__auto___38090]));

var G__38091 = (i__36778__auto___38090 + (1));
i__36778__auto___38090 = G__38091;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((1) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36785__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38085){
var vec__38086 = p__38085;
var state_override = cljs.core.nth.call(null,vec__38086,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38086,state_override){
return (function (p1__38082_SHARP_){
return cljs.core.merge.call(null,p1__38082_SHARP_,state_override);
});})(vec__38086,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38083){
var G__38084 = cljs.core.first.call(null,seq38083);
var seq38083__$1 = cljs.core.next.call(null,seq38083);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38084,seq38083__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38093 = arguments.length;
var i__36778__auto___38094 = (0);
while(true){
if((i__36778__auto___38094 < len__36777__auto___38093)){
args__36784__auto__.push((arguments[i__36778__auto___38094]));

var G__38095 = (i__36778__auto___38094 + (1));
i__36778__auto___38094 = G__38095;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((0) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__36785__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38092){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38092));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__36784__auto__ = [];
var len__36777__auto___38098 = arguments.length;
var i__36778__auto___38099 = (0);
while(true){
if((i__36778__auto___38099 < len__36777__auto___38098)){
args__36784__auto__.push((arguments[i__36778__auto___38099]));

var G__38100 = (i__36778__auto___38099 + (1));
i__36778__auto___38099 = G__38100;
continue;
} else {
}
break;
}

var argseq__36785__auto__ = ((((1) < args__36784__auto__.length))?(new cljs.core.IndexedSeq(args__36784__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36785__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38096){
var G__38097 = cljs.core.first.call(null,seq38096);
var seq38096__$1 = cljs.core.next.call(null,seq38096);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38097,seq38096__$1);
});


//# sourceMappingURL=format.js.map?rel=1517021941723
