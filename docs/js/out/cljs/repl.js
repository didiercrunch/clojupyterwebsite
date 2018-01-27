// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46110){
var map__46111 = p__46110;
var map__46111__$1 = ((((!((map__46111 == null)))?((((map__46111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46111):map__46111);
var m = map__46111__$1;
var n = cljs.core.get.call(null,map__46111__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46111__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46113_46135 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46114_46136 = null;
var count__46115_46137 = (0);
var i__46116_46138 = (0);
while(true){
if((i__46116_46138 < count__46115_46137)){
var f_46139 = cljs.core._nth.call(null,chunk__46114_46136,i__46116_46138);
cljs.core.println.call(null,"  ",f_46139);

var G__46140 = seq__46113_46135;
var G__46141 = chunk__46114_46136;
var G__46142 = count__46115_46137;
var G__46143 = (i__46116_46138 + (1));
seq__46113_46135 = G__46140;
chunk__46114_46136 = G__46141;
count__46115_46137 = G__46142;
i__46116_46138 = G__46143;
continue;
} else {
var temp__5457__auto___46144 = cljs.core.seq.call(null,seq__46113_46135);
if(temp__5457__auto___46144){
var seq__46113_46145__$1 = temp__5457__auto___46144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46113_46145__$1)){
var c__36429__auto___46146 = cljs.core.chunk_first.call(null,seq__46113_46145__$1);
var G__46147 = cljs.core.chunk_rest.call(null,seq__46113_46145__$1);
var G__46148 = c__36429__auto___46146;
var G__46149 = cljs.core.count.call(null,c__36429__auto___46146);
var G__46150 = (0);
seq__46113_46135 = G__46147;
chunk__46114_46136 = G__46148;
count__46115_46137 = G__46149;
i__46116_46138 = G__46150;
continue;
} else {
var f_46151 = cljs.core.first.call(null,seq__46113_46145__$1);
cljs.core.println.call(null,"  ",f_46151);

var G__46152 = cljs.core.next.call(null,seq__46113_46145__$1);
var G__46153 = null;
var G__46154 = (0);
var G__46155 = (0);
seq__46113_46135 = G__46152;
chunk__46114_46136 = G__46153;
count__46115_46137 = G__46154;
i__46116_46138 = G__46155;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46156 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35498__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46156);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46156)))?cljs.core.second.call(null,arglists_46156):arglists_46156));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46117_46157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46118_46158 = null;
var count__46119_46159 = (0);
var i__46120_46160 = (0);
while(true){
if((i__46120_46160 < count__46119_46159)){
var vec__46121_46161 = cljs.core._nth.call(null,chunk__46118_46158,i__46120_46160);
var name_46162 = cljs.core.nth.call(null,vec__46121_46161,(0),null);
var map__46124_46163 = cljs.core.nth.call(null,vec__46121_46161,(1),null);
var map__46124_46164__$1 = ((((!((map__46124_46163 == null)))?((((map__46124_46163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46124_46163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46124_46163):map__46124_46163);
var doc_46165 = cljs.core.get.call(null,map__46124_46164__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46166 = cljs.core.get.call(null,map__46124_46164__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46162);

cljs.core.println.call(null," ",arglists_46166);

if(cljs.core.truth_(doc_46165)){
cljs.core.println.call(null," ",doc_46165);
} else {
}

var G__46167 = seq__46117_46157;
var G__46168 = chunk__46118_46158;
var G__46169 = count__46119_46159;
var G__46170 = (i__46120_46160 + (1));
seq__46117_46157 = G__46167;
chunk__46118_46158 = G__46168;
count__46119_46159 = G__46169;
i__46120_46160 = G__46170;
continue;
} else {
var temp__5457__auto___46171 = cljs.core.seq.call(null,seq__46117_46157);
if(temp__5457__auto___46171){
var seq__46117_46172__$1 = temp__5457__auto___46171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46117_46172__$1)){
var c__36429__auto___46173 = cljs.core.chunk_first.call(null,seq__46117_46172__$1);
var G__46174 = cljs.core.chunk_rest.call(null,seq__46117_46172__$1);
var G__46175 = c__36429__auto___46173;
var G__46176 = cljs.core.count.call(null,c__36429__auto___46173);
var G__46177 = (0);
seq__46117_46157 = G__46174;
chunk__46118_46158 = G__46175;
count__46119_46159 = G__46176;
i__46120_46160 = G__46177;
continue;
} else {
var vec__46126_46178 = cljs.core.first.call(null,seq__46117_46172__$1);
var name_46179 = cljs.core.nth.call(null,vec__46126_46178,(0),null);
var map__46129_46180 = cljs.core.nth.call(null,vec__46126_46178,(1),null);
var map__46129_46181__$1 = ((((!((map__46129_46180 == null)))?((((map__46129_46180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46129_46180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46129_46180):map__46129_46180);
var doc_46182 = cljs.core.get.call(null,map__46129_46181__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46183 = cljs.core.get.call(null,map__46129_46181__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46179);

cljs.core.println.call(null," ",arglists_46183);

if(cljs.core.truth_(doc_46182)){
cljs.core.println.call(null," ",doc_46182);
} else {
}

var G__46184 = cljs.core.next.call(null,seq__46117_46172__$1);
var G__46185 = null;
var G__46186 = (0);
var G__46187 = (0);
seq__46117_46157 = G__46184;
chunk__46118_46158 = G__46185;
count__46119_46159 = G__46186;
i__46120_46160 = G__46187;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__46131 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46132 = null;
var count__46133 = (0);
var i__46134 = (0);
while(true){
if((i__46134 < count__46133)){
var role = cljs.core._nth.call(null,chunk__46132,i__46134);
var temp__5457__auto___46188__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46188__$1)){
var spec_46189 = temp__5457__auto___46188__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46189));
} else {
}

var G__46190 = seq__46131;
var G__46191 = chunk__46132;
var G__46192 = count__46133;
var G__46193 = (i__46134 + (1));
seq__46131 = G__46190;
chunk__46132 = G__46191;
count__46133 = G__46192;
i__46134 = G__46193;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__46131);
if(temp__5457__auto____$1){
var seq__46131__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46131__$1)){
var c__36429__auto__ = cljs.core.chunk_first.call(null,seq__46131__$1);
var G__46194 = cljs.core.chunk_rest.call(null,seq__46131__$1);
var G__46195 = c__36429__auto__;
var G__46196 = cljs.core.count.call(null,c__36429__auto__);
var G__46197 = (0);
seq__46131 = G__46194;
chunk__46132 = G__46195;
count__46133 = G__46196;
i__46134 = G__46197;
continue;
} else {
var role = cljs.core.first.call(null,seq__46131__$1);
var temp__5457__auto___46198__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46198__$2)){
var spec_46199 = temp__5457__auto___46198__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46199));
} else {
}

var G__46200 = cljs.core.next.call(null,seq__46131__$1);
var G__46201 = null;
var G__46202 = (0);
var G__46203 = (0);
seq__46131 = G__46200;
chunk__46132 = G__46201;
count__46133 = G__46202;
i__46134 = G__46203;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1517021948509
