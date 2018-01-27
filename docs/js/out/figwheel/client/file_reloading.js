// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__35498__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__35498__auto__){
return or__35498__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__35498__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
var or__35498__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__35498__auto____$1)){
return or__35498__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44643_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44643_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44644 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44645 = null;
var count__44646 = (0);
var i__44647 = (0);
while(true){
if((i__44647 < count__44646)){
var n = cljs.core._nth.call(null,chunk__44645,i__44647);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44648 = seq__44644;
var G__44649 = chunk__44645;
var G__44650 = count__44646;
var G__44651 = (i__44647 + (1));
seq__44644 = G__44648;
chunk__44645 = G__44649;
count__44646 = G__44650;
i__44647 = G__44651;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44644);
if(temp__5457__auto__){
var seq__44644__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44644__$1)){
var c__36429__auto__ = cljs.core.chunk_first.call(null,seq__44644__$1);
var G__44652 = cljs.core.chunk_rest.call(null,seq__44644__$1);
var G__44653 = c__36429__auto__;
var G__44654 = cljs.core.count.call(null,c__36429__auto__);
var G__44655 = (0);
seq__44644 = G__44652;
chunk__44645 = G__44653;
count__44646 = G__44654;
i__44647 = G__44655;
continue;
} else {
var n = cljs.core.first.call(null,seq__44644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44656 = cljs.core.next.call(null,seq__44644__$1);
var G__44657 = null;
var G__44658 = (0);
var G__44659 = (0);
seq__44644 = G__44656;
chunk__44645 = G__44657;
count__44646 = G__44658;
i__44647 = G__44659;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__44660){
var vec__44661 = p__44660;
var _ = cljs.core.nth.call(null,vec__44661,(0),null);
var v = cljs.core.nth.call(null,vec__44661,(1),null);
var and__35486__auto__ = v;
if(cljs.core.truth_(and__35486__auto__)){
return v.call(null,dep);
} else {
return and__35486__auto__;
}
}),cljs.core.filter.call(null,(function (p__44664){
var vec__44665 = p__44664;
var k = cljs.core.nth.call(null,vec__44665,(0),null);
var v = cljs.core.nth.call(null,vec__44665,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44677_44685 = cljs.core.seq.call(null,deps);
var chunk__44678_44686 = null;
var count__44679_44687 = (0);
var i__44680_44688 = (0);
while(true){
if((i__44680_44688 < count__44679_44687)){
var dep_44689 = cljs.core._nth.call(null,chunk__44678_44686,i__44680_44688);
if(cljs.core.truth_((function (){var and__35486__auto__ = dep_44689;
if(cljs.core.truth_(and__35486__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44689));
} else {
return and__35486__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44689,(depth + (1)),state);
} else {
}

var G__44690 = seq__44677_44685;
var G__44691 = chunk__44678_44686;
var G__44692 = count__44679_44687;
var G__44693 = (i__44680_44688 + (1));
seq__44677_44685 = G__44690;
chunk__44678_44686 = G__44691;
count__44679_44687 = G__44692;
i__44680_44688 = G__44693;
continue;
} else {
var temp__5457__auto___44694 = cljs.core.seq.call(null,seq__44677_44685);
if(temp__5457__auto___44694){
var seq__44677_44695__$1 = temp__5457__auto___44694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44677_44695__$1)){
var c__36429__auto___44696 = cljs.core.chunk_first.call(null,seq__44677_44695__$1);
var G__44697 = cljs.core.chunk_rest.call(null,seq__44677_44695__$1);
var G__44698 = c__36429__auto___44696;
var G__44699 = cljs.core.count.call(null,c__36429__auto___44696);
var G__44700 = (0);
seq__44677_44685 = G__44697;
chunk__44678_44686 = G__44698;
count__44679_44687 = G__44699;
i__44680_44688 = G__44700;
continue;
} else {
var dep_44701 = cljs.core.first.call(null,seq__44677_44695__$1);
if(cljs.core.truth_((function (){var and__35486__auto__ = dep_44701;
if(cljs.core.truth_(and__35486__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44701));
} else {
return and__35486__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44701,(depth + (1)),state);
} else {
}

var G__44702 = cljs.core.next.call(null,seq__44677_44695__$1);
var G__44703 = null;
var G__44704 = (0);
var G__44705 = (0);
seq__44677_44685 = G__44702;
chunk__44678_44686 = G__44703;
count__44679_44687 = G__44704;
i__44680_44688 = G__44705;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44681){
var vec__44682 = p__44681;
var seq__44683 = cljs.core.seq.call(null,vec__44682);
var first__44684 = cljs.core.first.call(null,seq__44683);
var seq__44683__$1 = cljs.core.next.call(null,seq__44683);
var x = first__44684;
var xs = seq__44683__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44682,seq__44683,first__44684,seq__44683__$1,x,xs,get_deps__$1){
return (function (p1__44668_SHARP_){
return clojure.set.difference.call(null,p1__44668_SHARP_,x);
});})(vec__44682,seq__44683,first__44684,seq__44683__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44706 = cljs.core.seq.call(null,provides);
var chunk__44707 = null;
var count__44708 = (0);
var i__44709 = (0);
while(true){
if((i__44709 < count__44708)){
var prov = cljs.core._nth.call(null,chunk__44707,i__44709);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44710_44718 = cljs.core.seq.call(null,requires);
var chunk__44711_44719 = null;
var count__44712_44720 = (0);
var i__44713_44721 = (0);
while(true){
if((i__44713_44721 < count__44712_44720)){
var req_44722 = cljs.core._nth.call(null,chunk__44711_44719,i__44713_44721);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44722,prov);

var G__44723 = seq__44710_44718;
var G__44724 = chunk__44711_44719;
var G__44725 = count__44712_44720;
var G__44726 = (i__44713_44721 + (1));
seq__44710_44718 = G__44723;
chunk__44711_44719 = G__44724;
count__44712_44720 = G__44725;
i__44713_44721 = G__44726;
continue;
} else {
var temp__5457__auto___44727 = cljs.core.seq.call(null,seq__44710_44718);
if(temp__5457__auto___44727){
var seq__44710_44728__$1 = temp__5457__auto___44727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44710_44728__$1)){
var c__36429__auto___44729 = cljs.core.chunk_first.call(null,seq__44710_44728__$1);
var G__44730 = cljs.core.chunk_rest.call(null,seq__44710_44728__$1);
var G__44731 = c__36429__auto___44729;
var G__44732 = cljs.core.count.call(null,c__36429__auto___44729);
var G__44733 = (0);
seq__44710_44718 = G__44730;
chunk__44711_44719 = G__44731;
count__44712_44720 = G__44732;
i__44713_44721 = G__44733;
continue;
} else {
var req_44734 = cljs.core.first.call(null,seq__44710_44728__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44734,prov);

var G__44735 = cljs.core.next.call(null,seq__44710_44728__$1);
var G__44736 = null;
var G__44737 = (0);
var G__44738 = (0);
seq__44710_44718 = G__44735;
chunk__44711_44719 = G__44736;
count__44712_44720 = G__44737;
i__44713_44721 = G__44738;
continue;
}
} else {
}
}
break;
}

var G__44739 = seq__44706;
var G__44740 = chunk__44707;
var G__44741 = count__44708;
var G__44742 = (i__44709 + (1));
seq__44706 = G__44739;
chunk__44707 = G__44740;
count__44708 = G__44741;
i__44709 = G__44742;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44706);
if(temp__5457__auto__){
var seq__44706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44706__$1)){
var c__36429__auto__ = cljs.core.chunk_first.call(null,seq__44706__$1);
var G__44743 = cljs.core.chunk_rest.call(null,seq__44706__$1);
var G__44744 = c__36429__auto__;
var G__44745 = cljs.core.count.call(null,c__36429__auto__);
var G__44746 = (0);
seq__44706 = G__44743;
chunk__44707 = G__44744;
count__44708 = G__44745;
i__44709 = G__44746;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44706__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44714_44747 = cljs.core.seq.call(null,requires);
var chunk__44715_44748 = null;
var count__44716_44749 = (0);
var i__44717_44750 = (0);
while(true){
if((i__44717_44750 < count__44716_44749)){
var req_44751 = cljs.core._nth.call(null,chunk__44715_44748,i__44717_44750);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44751,prov);

var G__44752 = seq__44714_44747;
var G__44753 = chunk__44715_44748;
var G__44754 = count__44716_44749;
var G__44755 = (i__44717_44750 + (1));
seq__44714_44747 = G__44752;
chunk__44715_44748 = G__44753;
count__44716_44749 = G__44754;
i__44717_44750 = G__44755;
continue;
} else {
var temp__5457__auto___44756__$1 = cljs.core.seq.call(null,seq__44714_44747);
if(temp__5457__auto___44756__$1){
var seq__44714_44757__$1 = temp__5457__auto___44756__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44714_44757__$1)){
var c__36429__auto___44758 = cljs.core.chunk_first.call(null,seq__44714_44757__$1);
var G__44759 = cljs.core.chunk_rest.call(null,seq__44714_44757__$1);
var G__44760 = c__36429__auto___44758;
var G__44761 = cljs.core.count.call(null,c__36429__auto___44758);
var G__44762 = (0);
seq__44714_44747 = G__44759;
chunk__44715_44748 = G__44760;
count__44716_44749 = G__44761;
i__44717_44750 = G__44762;
continue;
} else {
var req_44763 = cljs.core.first.call(null,seq__44714_44757__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44763,prov);

var G__44764 = cljs.core.next.call(null,seq__44714_44757__$1);
var G__44765 = null;
var G__44766 = (0);
var G__44767 = (0);
seq__44714_44747 = G__44764;
chunk__44715_44748 = G__44765;
count__44716_44749 = G__44766;
i__44717_44750 = G__44767;
continue;
}
} else {
}
}
break;
}

var G__44768 = cljs.core.next.call(null,seq__44706__$1);
var G__44769 = null;
var G__44770 = (0);
var G__44771 = (0);
seq__44706 = G__44768;
chunk__44707 = G__44769;
count__44708 = G__44770;
i__44709 = G__44771;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44772_44776 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44773_44777 = null;
var count__44774_44778 = (0);
var i__44775_44779 = (0);
while(true){
if((i__44775_44779 < count__44774_44778)){
var ns_44780 = cljs.core._nth.call(null,chunk__44773_44777,i__44775_44779);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44780);

var G__44781 = seq__44772_44776;
var G__44782 = chunk__44773_44777;
var G__44783 = count__44774_44778;
var G__44784 = (i__44775_44779 + (1));
seq__44772_44776 = G__44781;
chunk__44773_44777 = G__44782;
count__44774_44778 = G__44783;
i__44775_44779 = G__44784;
continue;
} else {
var temp__5457__auto___44785 = cljs.core.seq.call(null,seq__44772_44776);
if(temp__5457__auto___44785){
var seq__44772_44786__$1 = temp__5457__auto___44785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44772_44786__$1)){
var c__36429__auto___44787 = cljs.core.chunk_first.call(null,seq__44772_44786__$1);
var G__44788 = cljs.core.chunk_rest.call(null,seq__44772_44786__$1);
var G__44789 = c__36429__auto___44787;
var G__44790 = cljs.core.count.call(null,c__36429__auto___44787);
var G__44791 = (0);
seq__44772_44776 = G__44788;
chunk__44773_44777 = G__44789;
count__44774_44778 = G__44790;
i__44775_44779 = G__44791;
continue;
} else {
var ns_44792 = cljs.core.first.call(null,seq__44772_44786__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44792);

var G__44793 = cljs.core.next.call(null,seq__44772_44786__$1);
var G__44794 = null;
var G__44795 = (0);
var G__44796 = (0);
seq__44772_44776 = G__44793;
chunk__44773_44777 = G__44794;
count__44774_44778 = G__44795;
i__44775_44779 = G__44796;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__35498__auto__ = goog.require__;
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44797__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44798__i = 0, G__44798__a = new Array(arguments.length -  0);
while (G__44798__i < G__44798__a.length) {G__44798__a[G__44798__i] = arguments[G__44798__i + 0]; ++G__44798__i;}
  args = new cljs.core.IndexedSeq(G__44798__a,0,null);
} 
return G__44797__delegate.call(this,args);};
G__44797.cljs$lang$maxFixedArity = 0;
G__44797.cljs$lang$applyTo = (function (arglist__44799){
var args = cljs.core.seq(arglist__44799);
return G__44797__delegate(args);
});
G__44797.cljs$core$IFn$_invoke$arity$variadic = G__44797__delegate;
return G__44797;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__44800_SHARP_,p2__44801_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44800_SHARP_)].join('')),p2__44801_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__44802_SHARP_,p2__44803_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44802_SHARP_)].join(''),p2__44803_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44804 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44804.addCallback(((function (G__44804){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__44804))
);

G__44804.addErrback(((function (G__44804){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__44804))
);

return G__44804;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44805){if((e44805 instanceof Error)){
var e = e44805;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44805;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44806){if((e44806 instanceof Error)){
var e = e44806;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44806;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44807 = cljs.core._EQ_;
var expr__44808 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44807.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44808))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__44807.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44808))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__44807.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44808))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__44807,expr__44808){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44807,expr__44808))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44810,callback){
var map__44811 = p__44810;
var map__44811__$1 = ((((!((map__44811 == null)))?((((map__44811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44811):map__44811);
var file_msg = map__44811__$1;
var request_url = cljs.core.get.call(null,map__44811__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__35498__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__44811,map__44811__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44811,map__44811__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__){
return (function (state_44851){
var state_val_44852 = (state_44851[(1)]);
if((state_val_44852 === (7))){
var inst_44847 = (state_44851[(2)]);
var state_44851__$1 = state_44851;
var statearr_44853_44880 = state_44851__$1;
(statearr_44853_44880[(2)] = inst_44847);

(statearr_44853_44880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (1))){
var state_44851__$1 = state_44851;
var statearr_44854_44881 = state_44851__$1;
(statearr_44854_44881[(2)] = null);

(statearr_44854_44881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (4))){
var inst_44815 = (state_44851[(7)]);
var inst_44815__$1 = (state_44851[(2)]);
var state_44851__$1 = (function (){var statearr_44855 = state_44851;
(statearr_44855[(7)] = inst_44815__$1);

return statearr_44855;
})();
if(cljs.core.truth_(inst_44815__$1)){
var statearr_44856_44882 = state_44851__$1;
(statearr_44856_44882[(1)] = (5));

} else {
var statearr_44857_44883 = state_44851__$1;
(statearr_44857_44883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (15))){
var inst_44832 = (state_44851[(8)]);
var inst_44829 = (state_44851[(9)]);
var inst_44834 = inst_44832.call(null,inst_44829);
var state_44851__$1 = state_44851;
var statearr_44858_44884 = state_44851__$1;
(statearr_44858_44884[(2)] = inst_44834);

(statearr_44858_44884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (13))){
var inst_44841 = (state_44851[(2)]);
var state_44851__$1 = state_44851;
var statearr_44859_44885 = state_44851__$1;
(statearr_44859_44885[(2)] = inst_44841);

(statearr_44859_44885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (6))){
var state_44851__$1 = state_44851;
var statearr_44860_44886 = state_44851__$1;
(statearr_44860_44886[(2)] = null);

(statearr_44860_44886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (17))){
var inst_44838 = (state_44851[(2)]);
var state_44851__$1 = state_44851;
var statearr_44861_44887 = state_44851__$1;
(statearr_44861_44887[(2)] = inst_44838);

(statearr_44861_44887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (3))){
var inst_44849 = (state_44851[(2)]);
var state_44851__$1 = state_44851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44851__$1,inst_44849);
} else {
if((state_val_44852 === (12))){
var state_44851__$1 = state_44851;
var statearr_44862_44888 = state_44851__$1;
(statearr_44862_44888[(2)] = null);

(statearr_44862_44888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (2))){
var state_44851__$1 = state_44851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44851__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44852 === (11))){
var inst_44820 = (state_44851[(10)]);
var inst_44827 = figwheel.client.file_reloading.blocking_load.call(null,inst_44820);
var state_44851__$1 = state_44851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44851__$1,(14),inst_44827);
} else {
if((state_val_44852 === (9))){
var inst_44820 = (state_44851[(10)]);
var state_44851__$1 = state_44851;
if(cljs.core.truth_(inst_44820)){
var statearr_44863_44889 = state_44851__$1;
(statearr_44863_44889[(1)] = (11));

} else {
var statearr_44864_44890 = state_44851__$1;
(statearr_44864_44890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (5))){
var inst_44815 = (state_44851[(7)]);
var inst_44821 = (state_44851[(11)]);
var inst_44820 = cljs.core.nth.call(null,inst_44815,(0),null);
var inst_44821__$1 = cljs.core.nth.call(null,inst_44815,(1),null);
var state_44851__$1 = (function (){var statearr_44865 = state_44851;
(statearr_44865[(10)] = inst_44820);

(statearr_44865[(11)] = inst_44821__$1);

return statearr_44865;
})();
if(cljs.core.truth_(inst_44821__$1)){
var statearr_44866_44891 = state_44851__$1;
(statearr_44866_44891[(1)] = (8));

} else {
var statearr_44867_44892 = state_44851__$1;
(statearr_44867_44892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (14))){
var inst_44832 = (state_44851[(8)]);
var inst_44820 = (state_44851[(10)]);
var inst_44829 = (state_44851[(2)]);
var inst_44830 = console.log("Loading!",inst_44820);
var inst_44831 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44832__$1 = cljs.core.get.call(null,inst_44831,inst_44820);
var state_44851__$1 = (function (){var statearr_44868 = state_44851;
(statearr_44868[(8)] = inst_44832__$1);

(statearr_44868[(9)] = inst_44829);

(statearr_44868[(12)] = inst_44830);

return statearr_44868;
})();
if(cljs.core.truth_(inst_44832__$1)){
var statearr_44869_44893 = state_44851__$1;
(statearr_44869_44893[(1)] = (15));

} else {
var statearr_44870_44894 = state_44851__$1;
(statearr_44870_44894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (16))){
var inst_44829 = (state_44851[(9)]);
var inst_44836 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44829);
var state_44851__$1 = state_44851;
var statearr_44871_44895 = state_44851__$1;
(statearr_44871_44895[(2)] = inst_44836);

(statearr_44871_44895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (10))){
var inst_44843 = (state_44851[(2)]);
var state_44851__$1 = (function (){var statearr_44872 = state_44851;
(statearr_44872[(13)] = inst_44843);

return statearr_44872;
})();
var statearr_44873_44896 = state_44851__$1;
(statearr_44873_44896[(2)] = null);

(statearr_44873_44896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (8))){
var inst_44821 = (state_44851[(11)]);
var inst_44823 = console.log("Evaling!",inst_44821);
var inst_44824 = eval(inst_44821);
var state_44851__$1 = (function (){var statearr_44874 = state_44851;
(statearr_44874[(14)] = inst_44823);

return statearr_44874;
})();
var statearr_44875_44897 = state_44851__$1;
(statearr_44875_44897[(2)] = inst_44824);

(statearr_44875_44897[(1)] = (10));


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
});})(c__42249__auto__))
;
return ((function (switch__42159__auto__,c__42249__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__42160__auto__ = null;
var figwheel$client$file_reloading$state_machine__42160__auto____0 = (function (){
var statearr_44876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44876[(0)] = figwheel$client$file_reloading$state_machine__42160__auto__);

(statearr_44876[(1)] = (1));

return statearr_44876;
});
var figwheel$client$file_reloading$state_machine__42160__auto____1 = (function (state_44851){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_44851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e44877){if((e44877 instanceof Object)){
var ex__42163__auto__ = e44877;
var statearr_44878_44898 = state_44851;
(statearr_44878_44898[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44899 = state_44851;
state_44851 = G__44899;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__42160__auto__ = function(state_44851){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__42160__auto____1.call(this,state_44851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__42160__auto____0;
figwheel$client$file_reloading$state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__42160__auto____1;
return figwheel$client$file_reloading$state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__))
})();
var state__42251__auto__ = (function (){var statearr_44879 = f__42250__auto__.call(null);
(statearr_44879[(6)] = c__42249__auto__);

return statearr_44879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__))
);

return c__42249__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__44901 = arguments.length;
switch (G__44901) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44903,callback){
var map__44904 = p__44903;
var map__44904__$1 = ((((!((map__44904 == null)))?((((map__44904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44904):map__44904);
var file_msg = map__44904__$1;
var namespace = cljs.core.get.call(null,map__44904__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44904,map__44904__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44904,map__44904__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44906){
var map__44907 = p__44906;
var map__44907__$1 = ((((!((map__44907 == null)))?((((map__44907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44907):map__44907);
var file_msg = map__44907__$1;
var namespace = cljs.core.get.call(null,map__44907__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44909){
var map__44910 = p__44909;
var map__44910__$1 = ((((!((map__44910 == null)))?((((map__44910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44910):map__44910);
var file_msg = map__44910__$1;
var namespace = cljs.core.get.call(null,map__44910__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__35486__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__35486__auto__){
var or__35498__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35498__auto__)){
return or__35498__auto__;
} else {
var or__35498__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35498__auto____$1)){
return or__35498__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__35486__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44912,callback){
var map__44913 = p__44912;
var map__44913__$1 = ((((!((map__44913 == null)))?((((map__44913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44913):map__44913);
var file_msg = map__44913__$1;
var request_url = cljs.core.get.call(null,map__44913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44913__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__42249__auto___44963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto___44963,out){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto___44963,out){
return (function (state_44948){
var state_val_44949 = (state_44948[(1)]);
if((state_val_44949 === (1))){
var inst_44922 = cljs.core.seq.call(null,files);
var inst_44923 = cljs.core.first.call(null,inst_44922);
var inst_44924 = cljs.core.next.call(null,inst_44922);
var inst_44925 = files;
var state_44948__$1 = (function (){var statearr_44950 = state_44948;
(statearr_44950[(7)] = inst_44923);

(statearr_44950[(8)] = inst_44925);

(statearr_44950[(9)] = inst_44924);

return statearr_44950;
})();
var statearr_44951_44964 = state_44948__$1;
(statearr_44951_44964[(2)] = null);

(statearr_44951_44964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44949 === (2))){
var inst_44931 = (state_44948[(10)]);
var inst_44925 = (state_44948[(8)]);
var inst_44930 = cljs.core.seq.call(null,inst_44925);
var inst_44931__$1 = cljs.core.first.call(null,inst_44930);
var inst_44932 = cljs.core.next.call(null,inst_44930);
var inst_44933 = (inst_44931__$1 == null);
var inst_44934 = cljs.core.not.call(null,inst_44933);
var state_44948__$1 = (function (){var statearr_44952 = state_44948;
(statearr_44952[(11)] = inst_44932);

(statearr_44952[(10)] = inst_44931__$1);

return statearr_44952;
})();
if(inst_44934){
var statearr_44953_44965 = state_44948__$1;
(statearr_44953_44965[(1)] = (4));

} else {
var statearr_44954_44966 = state_44948__$1;
(statearr_44954_44966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44949 === (3))){
var inst_44946 = (state_44948[(2)]);
var state_44948__$1 = state_44948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44948__$1,inst_44946);
} else {
if((state_val_44949 === (4))){
var inst_44931 = (state_44948[(10)]);
var inst_44936 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44931);
var state_44948__$1 = state_44948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44948__$1,(7),inst_44936);
} else {
if((state_val_44949 === (5))){
var inst_44942 = cljs.core.async.close_BANG_.call(null,out);
var state_44948__$1 = state_44948;
var statearr_44955_44967 = state_44948__$1;
(statearr_44955_44967[(2)] = inst_44942);

(statearr_44955_44967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44949 === (6))){
var inst_44944 = (state_44948[(2)]);
var state_44948__$1 = state_44948;
var statearr_44956_44968 = state_44948__$1;
(statearr_44956_44968[(2)] = inst_44944);

(statearr_44956_44968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44949 === (7))){
var inst_44932 = (state_44948[(11)]);
var inst_44938 = (state_44948[(2)]);
var inst_44939 = cljs.core.async.put_BANG_.call(null,out,inst_44938);
var inst_44925 = inst_44932;
var state_44948__$1 = (function (){var statearr_44957 = state_44948;
(statearr_44957[(12)] = inst_44939);

(statearr_44957[(8)] = inst_44925);

return statearr_44957;
})();
var statearr_44958_44969 = state_44948__$1;
(statearr_44958_44969[(2)] = null);

(statearr_44958_44969[(1)] = (2));


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
});})(c__42249__auto___44963,out))
;
return ((function (switch__42159__auto__,c__42249__auto___44963,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto____0 = (function (){
var statearr_44959 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44959[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto__);

(statearr_44959[(1)] = (1));

return statearr_44959;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto____1 = (function (state_44948){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_44948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e44960){if((e44960 instanceof Object)){
var ex__42163__auto__ = e44960;
var statearr_44961_44970 = state_44948;
(statearr_44961_44970[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44971 = state_44948;
state_44948 = G__44971;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto__ = function(state_44948){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto____1.call(this,state_44948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto___44963,out))
})();
var state__42251__auto__ = (function (){var statearr_44962 = f__42250__auto__.call(null);
(statearr_44962[(6)] = c__42249__auto___44963);

return statearr_44962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto___44963,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44972,opts){
var map__44973 = p__44972;
var map__44973__$1 = ((((!((map__44973 == null)))?((((map__44973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44973):map__44973);
var eval_body = cljs.core.get.call(null,map__44973__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__35486__auto__ = eval_body;
if(cljs.core.truth_(and__35486__auto__)){
return typeof eval_body === 'string';
} else {
return and__35486__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44975){var e = e44975;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44976_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44977){
var vec__44978 = p__44977;
var k = cljs.core.nth.call(null,vec__44978,(0),null);
var v = cljs.core.nth.call(null,vec__44978,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44981){
var vec__44982 = p__44981;
var k = cljs.core.nth.call(null,vec__44982,(0),null);
var v = cljs.core.nth.call(null,vec__44982,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44988,p__44989){
var map__44990 = p__44988;
var map__44990__$1 = ((((!((map__44990 == null)))?((((map__44990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44990):map__44990);
var opts = map__44990__$1;
var before_jsload = cljs.core.get.call(null,map__44990__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44990__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44990__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44991 = p__44989;
var map__44991__$1 = ((((!((map__44991 == null)))?((((map__44991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44991):map__44991);
var msg = map__44991__$1;
var files = cljs.core.get.call(null,map__44991__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44991__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44991__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__42249__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__42250__auto__ = (function (){var switch__42159__auto__ = ((function (c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45145){
var state_val_45146 = (state_45145[(1)]);
if((state_val_45146 === (7))){
var inst_45005 = (state_45145[(7)]);
var inst_45007 = (state_45145[(8)]);
var inst_45008 = (state_45145[(9)]);
var inst_45006 = (state_45145[(10)]);
var inst_45013 = cljs.core._nth.call(null,inst_45006,inst_45008);
var inst_45014 = figwheel.client.file_reloading.eval_body.call(null,inst_45013,opts);
var inst_45015 = (inst_45008 + (1));
var tmp45147 = inst_45005;
var tmp45148 = inst_45007;
var tmp45149 = inst_45006;
var inst_45005__$1 = tmp45147;
var inst_45006__$1 = tmp45149;
var inst_45007__$1 = tmp45148;
var inst_45008__$1 = inst_45015;
var state_45145__$1 = (function (){var statearr_45150 = state_45145;
(statearr_45150[(7)] = inst_45005__$1);

(statearr_45150[(8)] = inst_45007__$1);

(statearr_45150[(9)] = inst_45008__$1);

(statearr_45150[(10)] = inst_45006__$1);

(statearr_45150[(11)] = inst_45014);

return statearr_45150;
})();
var statearr_45151_45234 = state_45145__$1;
(statearr_45151_45234[(2)] = null);

(statearr_45151_45234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (20))){
var inst_45048 = (state_45145[(12)]);
var inst_45056 = figwheel.client.file_reloading.sort_files.call(null,inst_45048);
var state_45145__$1 = state_45145;
var statearr_45152_45235 = state_45145__$1;
(statearr_45152_45235[(2)] = inst_45056);

(statearr_45152_45235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (27))){
var state_45145__$1 = state_45145;
var statearr_45153_45236 = state_45145__$1;
(statearr_45153_45236[(2)] = null);

(statearr_45153_45236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (1))){
var inst_44997 = (state_45145[(13)]);
var inst_44994 = before_jsload.call(null,files);
var inst_44995 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44996 = (function (){return ((function (inst_44997,inst_44994,inst_44995,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44985_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44985_SHARP_);
});
;})(inst_44997,inst_44994,inst_44995,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44997__$1 = cljs.core.filter.call(null,inst_44996,files);
var inst_44998 = cljs.core.not_empty.call(null,inst_44997__$1);
var state_45145__$1 = (function (){var statearr_45154 = state_45145;
(statearr_45154[(14)] = inst_44995);

(statearr_45154[(13)] = inst_44997__$1);

(statearr_45154[(15)] = inst_44994);

return statearr_45154;
})();
if(cljs.core.truth_(inst_44998)){
var statearr_45155_45237 = state_45145__$1;
(statearr_45155_45237[(1)] = (2));

} else {
var statearr_45156_45238 = state_45145__$1;
(statearr_45156_45238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (24))){
var state_45145__$1 = state_45145;
var statearr_45157_45239 = state_45145__$1;
(statearr_45157_45239[(2)] = null);

(statearr_45157_45239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (39))){
var inst_45098 = (state_45145[(16)]);
var state_45145__$1 = state_45145;
var statearr_45158_45240 = state_45145__$1;
(statearr_45158_45240[(2)] = inst_45098);

(statearr_45158_45240[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (46))){
var inst_45140 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45159_45241 = state_45145__$1;
(statearr_45159_45241[(2)] = inst_45140);

(statearr_45159_45241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (4))){
var inst_45042 = (state_45145[(2)]);
var inst_45043 = cljs.core.List.EMPTY;
var inst_45044 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45043);
var inst_45045 = (function (){return ((function (inst_45042,inst_45043,inst_45044,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44986_SHARP_){
var and__35486__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44986_SHARP_);
if(cljs.core.truth_(and__35486__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44986_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44986_SHARP_)));
} else {
return and__35486__auto__;
}
});
;})(inst_45042,inst_45043,inst_45044,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45046 = cljs.core.filter.call(null,inst_45045,files);
var inst_45047 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45048 = cljs.core.concat.call(null,inst_45046,inst_45047);
var state_45145__$1 = (function (){var statearr_45160 = state_45145;
(statearr_45160[(12)] = inst_45048);

(statearr_45160[(17)] = inst_45044);

(statearr_45160[(18)] = inst_45042);

return statearr_45160;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45161_45242 = state_45145__$1;
(statearr_45161_45242[(1)] = (16));

} else {
var statearr_45162_45243 = state_45145__$1;
(statearr_45162_45243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (15))){
var inst_45032 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45163_45244 = state_45145__$1;
(statearr_45163_45244[(2)] = inst_45032);

(statearr_45163_45244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (21))){
var inst_45058 = (state_45145[(19)]);
var inst_45058__$1 = (state_45145[(2)]);
var inst_45059 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45058__$1);
var state_45145__$1 = (function (){var statearr_45164 = state_45145;
(statearr_45164[(19)] = inst_45058__$1);

return statearr_45164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45145__$1,(22),inst_45059);
} else {
if((state_val_45146 === (31))){
var inst_45143 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45145__$1,inst_45143);
} else {
if((state_val_45146 === (32))){
var inst_45098 = (state_45145[(16)]);
var inst_45103 = inst_45098.cljs$lang$protocol_mask$partition0$;
var inst_45104 = (inst_45103 & (64));
var inst_45105 = inst_45098.cljs$core$ISeq$;
var inst_45106 = (cljs.core.PROTOCOL_SENTINEL === inst_45105);
var inst_45107 = (inst_45104) || (inst_45106);
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45107)){
var statearr_45165_45245 = state_45145__$1;
(statearr_45165_45245[(1)] = (35));

} else {
var statearr_45166_45246 = state_45145__$1;
(statearr_45166_45246[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (40))){
var inst_45120 = (state_45145[(20)]);
var inst_45119 = (state_45145[(2)]);
var inst_45120__$1 = cljs.core.get.call(null,inst_45119,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45121 = cljs.core.get.call(null,inst_45119,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45122 = cljs.core.not_empty.call(null,inst_45120__$1);
var state_45145__$1 = (function (){var statearr_45167 = state_45145;
(statearr_45167[(20)] = inst_45120__$1);

(statearr_45167[(21)] = inst_45121);

return statearr_45167;
})();
if(cljs.core.truth_(inst_45122)){
var statearr_45168_45247 = state_45145__$1;
(statearr_45168_45247[(1)] = (41));

} else {
var statearr_45169_45248 = state_45145__$1;
(statearr_45169_45248[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (33))){
var state_45145__$1 = state_45145;
var statearr_45170_45249 = state_45145__$1;
(statearr_45170_45249[(2)] = false);

(statearr_45170_45249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (13))){
var inst_45018 = (state_45145[(22)]);
var inst_45022 = cljs.core.chunk_first.call(null,inst_45018);
var inst_45023 = cljs.core.chunk_rest.call(null,inst_45018);
var inst_45024 = cljs.core.count.call(null,inst_45022);
var inst_45005 = inst_45023;
var inst_45006 = inst_45022;
var inst_45007 = inst_45024;
var inst_45008 = (0);
var state_45145__$1 = (function (){var statearr_45171 = state_45145;
(statearr_45171[(7)] = inst_45005);

(statearr_45171[(8)] = inst_45007);

(statearr_45171[(9)] = inst_45008);

(statearr_45171[(10)] = inst_45006);

return statearr_45171;
})();
var statearr_45172_45250 = state_45145__$1;
(statearr_45172_45250[(2)] = null);

(statearr_45172_45250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (22))){
var inst_45061 = (state_45145[(23)]);
var inst_45058 = (state_45145[(19)]);
var inst_45066 = (state_45145[(24)]);
var inst_45062 = (state_45145[(25)]);
var inst_45061__$1 = (state_45145[(2)]);
var inst_45062__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45061__$1);
var inst_45063 = (function (){var all_files = inst_45058;
var res_SINGLEQUOTE_ = inst_45061__$1;
var res = inst_45062__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45061,inst_45058,inst_45066,inst_45062,inst_45061__$1,inst_45062__$1,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44987_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44987_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45061,inst_45058,inst_45066,inst_45062,inst_45061__$1,inst_45062__$1,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45064 = cljs.core.filter.call(null,inst_45063,inst_45061__$1);
var inst_45065 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45066__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45065);
var inst_45067 = cljs.core.not_empty.call(null,inst_45066__$1);
var state_45145__$1 = (function (){var statearr_45173 = state_45145;
(statearr_45173[(23)] = inst_45061__$1);

(statearr_45173[(26)] = inst_45064);

(statearr_45173[(24)] = inst_45066__$1);

(statearr_45173[(25)] = inst_45062__$1);

return statearr_45173;
})();
if(cljs.core.truth_(inst_45067)){
var statearr_45174_45251 = state_45145__$1;
(statearr_45174_45251[(1)] = (23));

} else {
var statearr_45175_45252 = state_45145__$1;
(statearr_45175_45252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (36))){
var state_45145__$1 = state_45145;
var statearr_45176_45253 = state_45145__$1;
(statearr_45176_45253[(2)] = false);

(statearr_45176_45253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (41))){
var inst_45120 = (state_45145[(20)]);
var inst_45124 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45125 = cljs.core.map.call(null,inst_45124,inst_45120);
var inst_45126 = cljs.core.pr_str.call(null,inst_45125);
var inst_45127 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45126)].join('');
var inst_45128 = figwheel.client.utils.log.call(null,inst_45127);
var state_45145__$1 = state_45145;
var statearr_45177_45254 = state_45145__$1;
(statearr_45177_45254[(2)] = inst_45128);

(statearr_45177_45254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (43))){
var inst_45121 = (state_45145[(21)]);
var inst_45131 = (state_45145[(2)]);
var inst_45132 = cljs.core.not_empty.call(null,inst_45121);
var state_45145__$1 = (function (){var statearr_45178 = state_45145;
(statearr_45178[(27)] = inst_45131);

return statearr_45178;
})();
if(cljs.core.truth_(inst_45132)){
var statearr_45179_45255 = state_45145__$1;
(statearr_45179_45255[(1)] = (44));

} else {
var statearr_45180_45256 = state_45145__$1;
(statearr_45180_45256[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (29))){
var inst_45061 = (state_45145[(23)]);
var inst_45058 = (state_45145[(19)]);
var inst_45098 = (state_45145[(16)]);
var inst_45064 = (state_45145[(26)]);
var inst_45066 = (state_45145[(24)]);
var inst_45062 = (state_45145[(25)]);
var inst_45094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45097 = (function (){var all_files = inst_45058;
var res_SINGLEQUOTE_ = inst_45061;
var res = inst_45062;
var files_not_loaded = inst_45064;
var dependencies_that_loaded = inst_45066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45098,inst_45064,inst_45066,inst_45062,inst_45094,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45096){
var map__45181 = p__45096;
var map__45181__$1 = ((((!((map__45181 == null)))?((((map__45181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45181):map__45181);
var namespace = cljs.core.get.call(null,map__45181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45098,inst_45064,inst_45066,inst_45062,inst_45094,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45098__$1 = cljs.core.group_by.call(null,inst_45097,inst_45064);
var inst_45100 = (inst_45098__$1 == null);
var inst_45101 = cljs.core.not.call(null,inst_45100);
var state_45145__$1 = (function (){var statearr_45183 = state_45145;
(statearr_45183[(28)] = inst_45094);

(statearr_45183[(16)] = inst_45098__$1);

return statearr_45183;
})();
if(inst_45101){
var statearr_45184_45257 = state_45145__$1;
(statearr_45184_45257[(1)] = (32));

} else {
var statearr_45185_45258 = state_45145__$1;
(statearr_45185_45258[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (44))){
var inst_45121 = (state_45145[(21)]);
var inst_45134 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45121);
var inst_45135 = cljs.core.pr_str.call(null,inst_45134);
var inst_45136 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45135)].join('');
var inst_45137 = figwheel.client.utils.log.call(null,inst_45136);
var state_45145__$1 = state_45145;
var statearr_45186_45259 = state_45145__$1;
(statearr_45186_45259[(2)] = inst_45137);

(statearr_45186_45259[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (6))){
var inst_45039 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45187_45260 = state_45145__$1;
(statearr_45187_45260[(2)] = inst_45039);

(statearr_45187_45260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (28))){
var inst_45064 = (state_45145[(26)]);
var inst_45091 = (state_45145[(2)]);
var inst_45092 = cljs.core.not_empty.call(null,inst_45064);
var state_45145__$1 = (function (){var statearr_45188 = state_45145;
(statearr_45188[(29)] = inst_45091);

return statearr_45188;
})();
if(cljs.core.truth_(inst_45092)){
var statearr_45189_45261 = state_45145__$1;
(statearr_45189_45261[(1)] = (29));

} else {
var statearr_45190_45262 = state_45145__$1;
(statearr_45190_45262[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (25))){
var inst_45062 = (state_45145[(25)]);
var inst_45078 = (state_45145[(2)]);
var inst_45079 = cljs.core.not_empty.call(null,inst_45062);
var state_45145__$1 = (function (){var statearr_45191 = state_45145;
(statearr_45191[(30)] = inst_45078);

return statearr_45191;
})();
if(cljs.core.truth_(inst_45079)){
var statearr_45192_45263 = state_45145__$1;
(statearr_45192_45263[(1)] = (26));

} else {
var statearr_45193_45264 = state_45145__$1;
(statearr_45193_45264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (34))){
var inst_45114 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45114)){
var statearr_45194_45265 = state_45145__$1;
(statearr_45194_45265[(1)] = (38));

} else {
var statearr_45195_45266 = state_45145__$1;
(statearr_45195_45266[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (17))){
var state_45145__$1 = state_45145;
var statearr_45196_45267 = state_45145__$1;
(statearr_45196_45267[(2)] = recompile_dependents);

(statearr_45196_45267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (3))){
var state_45145__$1 = state_45145;
var statearr_45197_45268 = state_45145__$1;
(statearr_45197_45268[(2)] = null);

(statearr_45197_45268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (12))){
var inst_45035 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45198_45269 = state_45145__$1;
(statearr_45198_45269[(2)] = inst_45035);

(statearr_45198_45269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (2))){
var inst_44997 = (state_45145[(13)]);
var inst_45004 = cljs.core.seq.call(null,inst_44997);
var inst_45005 = inst_45004;
var inst_45006 = null;
var inst_45007 = (0);
var inst_45008 = (0);
var state_45145__$1 = (function (){var statearr_45199 = state_45145;
(statearr_45199[(7)] = inst_45005);

(statearr_45199[(8)] = inst_45007);

(statearr_45199[(9)] = inst_45008);

(statearr_45199[(10)] = inst_45006);

return statearr_45199;
})();
var statearr_45200_45270 = state_45145__$1;
(statearr_45200_45270[(2)] = null);

(statearr_45200_45270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (23))){
var inst_45061 = (state_45145[(23)]);
var inst_45058 = (state_45145[(19)]);
var inst_45064 = (state_45145[(26)]);
var inst_45066 = (state_45145[(24)]);
var inst_45062 = (state_45145[(25)]);
var inst_45069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45071 = (function (){var all_files = inst_45058;
var res_SINGLEQUOTE_ = inst_45061;
var res = inst_45062;
var files_not_loaded = inst_45064;
var dependencies_that_loaded = inst_45066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45064,inst_45066,inst_45062,inst_45069,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45070){
var map__45201 = p__45070;
var map__45201__$1 = ((((!((map__45201 == null)))?((((map__45201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45201):map__45201);
var request_url = cljs.core.get.call(null,map__45201__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45064,inst_45066,inst_45062,inst_45069,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45072 = cljs.core.reverse.call(null,inst_45066);
var inst_45073 = cljs.core.map.call(null,inst_45071,inst_45072);
var inst_45074 = cljs.core.pr_str.call(null,inst_45073);
var inst_45075 = figwheel.client.utils.log.call(null,inst_45074);
var state_45145__$1 = (function (){var statearr_45203 = state_45145;
(statearr_45203[(31)] = inst_45069);

return statearr_45203;
})();
var statearr_45204_45271 = state_45145__$1;
(statearr_45204_45271[(2)] = inst_45075);

(statearr_45204_45271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (35))){
var state_45145__$1 = state_45145;
var statearr_45205_45272 = state_45145__$1;
(statearr_45205_45272[(2)] = true);

(statearr_45205_45272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (19))){
var inst_45048 = (state_45145[(12)]);
var inst_45054 = figwheel.client.file_reloading.expand_files.call(null,inst_45048);
var state_45145__$1 = state_45145;
var statearr_45206_45273 = state_45145__$1;
(statearr_45206_45273[(2)] = inst_45054);

(statearr_45206_45273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (11))){
var state_45145__$1 = state_45145;
var statearr_45207_45274 = state_45145__$1;
(statearr_45207_45274[(2)] = null);

(statearr_45207_45274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (9))){
var inst_45037 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45208_45275 = state_45145__$1;
(statearr_45208_45275[(2)] = inst_45037);

(statearr_45208_45275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (5))){
var inst_45007 = (state_45145[(8)]);
var inst_45008 = (state_45145[(9)]);
var inst_45010 = (inst_45008 < inst_45007);
var inst_45011 = inst_45010;
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45011)){
var statearr_45209_45276 = state_45145__$1;
(statearr_45209_45276[(1)] = (7));

} else {
var statearr_45210_45277 = state_45145__$1;
(statearr_45210_45277[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (14))){
var inst_45018 = (state_45145[(22)]);
var inst_45027 = cljs.core.first.call(null,inst_45018);
var inst_45028 = figwheel.client.file_reloading.eval_body.call(null,inst_45027,opts);
var inst_45029 = cljs.core.next.call(null,inst_45018);
var inst_45005 = inst_45029;
var inst_45006 = null;
var inst_45007 = (0);
var inst_45008 = (0);
var state_45145__$1 = (function (){var statearr_45211 = state_45145;
(statearr_45211[(7)] = inst_45005);

(statearr_45211[(8)] = inst_45007);

(statearr_45211[(9)] = inst_45008);

(statearr_45211[(10)] = inst_45006);

(statearr_45211[(32)] = inst_45028);

return statearr_45211;
})();
var statearr_45212_45278 = state_45145__$1;
(statearr_45212_45278[(2)] = null);

(statearr_45212_45278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (45))){
var state_45145__$1 = state_45145;
var statearr_45213_45279 = state_45145__$1;
(statearr_45213_45279[(2)] = null);

(statearr_45213_45279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (26))){
var inst_45061 = (state_45145[(23)]);
var inst_45058 = (state_45145[(19)]);
var inst_45064 = (state_45145[(26)]);
var inst_45066 = (state_45145[(24)]);
var inst_45062 = (state_45145[(25)]);
var inst_45081 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45083 = (function (){var all_files = inst_45058;
var res_SINGLEQUOTE_ = inst_45061;
var res = inst_45062;
var files_not_loaded = inst_45064;
var dependencies_that_loaded = inst_45066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45064,inst_45066,inst_45062,inst_45081,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45082){
var map__45214 = p__45082;
var map__45214__$1 = ((((!((map__45214 == null)))?((((map__45214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45214):map__45214);
var namespace = cljs.core.get.call(null,map__45214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45214__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45064,inst_45066,inst_45062,inst_45081,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45084 = cljs.core.map.call(null,inst_45083,inst_45062);
var inst_45085 = cljs.core.pr_str.call(null,inst_45084);
var inst_45086 = figwheel.client.utils.log.call(null,inst_45085);
var inst_45087 = (function (){var all_files = inst_45058;
var res_SINGLEQUOTE_ = inst_45061;
var res = inst_45062;
var files_not_loaded = inst_45064;
var dependencies_that_loaded = inst_45066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45064,inst_45066,inst_45062,inst_45081,inst_45083,inst_45084,inst_45085,inst_45086,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45061,inst_45058,inst_45064,inst_45066,inst_45062,inst_45081,inst_45083,inst_45084,inst_45085,inst_45086,state_val_45146,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45088 = setTimeout(inst_45087,(10));
var state_45145__$1 = (function (){var statearr_45216 = state_45145;
(statearr_45216[(33)] = inst_45081);

(statearr_45216[(34)] = inst_45086);

return statearr_45216;
})();
var statearr_45217_45280 = state_45145__$1;
(statearr_45217_45280[(2)] = inst_45088);

(statearr_45217_45280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (16))){
var state_45145__$1 = state_45145;
var statearr_45218_45281 = state_45145__$1;
(statearr_45218_45281[(2)] = reload_dependents);

(statearr_45218_45281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (38))){
var inst_45098 = (state_45145[(16)]);
var inst_45116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45098);
var state_45145__$1 = state_45145;
var statearr_45219_45282 = state_45145__$1;
(statearr_45219_45282[(2)] = inst_45116);

(statearr_45219_45282[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (30))){
var state_45145__$1 = state_45145;
var statearr_45220_45283 = state_45145__$1;
(statearr_45220_45283[(2)] = null);

(statearr_45220_45283[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (10))){
var inst_45018 = (state_45145[(22)]);
var inst_45020 = cljs.core.chunked_seq_QMARK_.call(null,inst_45018);
var state_45145__$1 = state_45145;
if(inst_45020){
var statearr_45221_45284 = state_45145__$1;
(statearr_45221_45284[(1)] = (13));

} else {
var statearr_45222_45285 = state_45145__$1;
(statearr_45222_45285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (18))){
var inst_45052 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45052)){
var statearr_45223_45286 = state_45145__$1;
(statearr_45223_45286[(1)] = (19));

} else {
var statearr_45224_45287 = state_45145__$1;
(statearr_45224_45287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (42))){
var state_45145__$1 = state_45145;
var statearr_45225_45288 = state_45145__$1;
(statearr_45225_45288[(2)] = null);

(statearr_45225_45288[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (37))){
var inst_45111 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45226_45289 = state_45145__$1;
(statearr_45226_45289[(2)] = inst_45111);

(statearr_45226_45289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (8))){
var inst_45005 = (state_45145[(7)]);
var inst_45018 = (state_45145[(22)]);
var inst_45018__$1 = cljs.core.seq.call(null,inst_45005);
var state_45145__$1 = (function (){var statearr_45227 = state_45145;
(statearr_45227[(22)] = inst_45018__$1);

return statearr_45227;
})();
if(inst_45018__$1){
var statearr_45228_45290 = state_45145__$1;
(statearr_45228_45290[(1)] = (10));

} else {
var statearr_45229_45291 = state_45145__$1;
(statearr_45229_45291[(1)] = (11));

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
}
});})(c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__42159__auto__,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto____0 = (function (){
var statearr_45230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45230[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto__);

(statearr_45230[(1)] = (1));

return statearr_45230;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto____1 = (function (state_45145){
while(true){
var ret_value__42161__auto__ = (function (){try{while(true){
var result__42162__auto__ = switch__42159__auto__.call(null,state_45145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42162__auto__;
}
break;
}
}catch (e45231){if((e45231 instanceof Object)){
var ex__42163__auto__ = e45231;
var statearr_45232_45292 = state_45145;
(statearr_45232_45292[(5)] = ex__42163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45293 = state_45145;
state_45145 = G__45293;
continue;
} else {
return ret_value__42161__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto__ = function(state_45145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto____1.call(this,state_45145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42160__auto__;
})()
;})(switch__42159__auto__,c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__42251__auto__ = (function (){var statearr_45233 = f__42250__auto__.call(null);
(statearr_45233[(6)] = c__42249__auto__);

return statearr_45233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42251__auto__);
});})(c__42249__auto__,map__44990,map__44990__$1,opts,before_jsload,on_jsload,reload_dependents,map__44991,map__44991__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__42249__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45296,link){
var map__45297 = p__45296;
var map__45297__$1 = ((((!((map__45297 == null)))?((((map__45297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45297):map__45297);
var file = cljs.core.get.call(null,map__45297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__45297,map__45297__$1,file){
return (function (p1__45294_SHARP_,p2__45295_SHARP_){
if(cljs.core._EQ_.call(null,p1__45294_SHARP_,p2__45295_SHARP_)){
return p1__45294_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__45297,map__45297__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45300){
var map__45301 = p__45300;
var map__45301__$1 = ((((!((map__45301 == null)))?((((map__45301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45301):map__45301);
var match_length = cljs.core.get.call(null,map__45301__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45301__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45299_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45299_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45303_SHARP_,p2__45304_SHARP_){
return cljs.core.assoc.call(null,p1__45303_SHARP_,cljs.core.get.call(null,p2__45304_SHARP_,key),p2__45304_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_45305 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_45305);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_45305);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45306,p__45307){
var map__45308 = p__45306;
var map__45308__$1 = ((((!((map__45308 == null)))?((((map__45308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45308):map__45308);
var on_cssload = cljs.core.get.call(null,map__45308__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__45309 = p__45307;
var map__45309__$1 = ((((!((map__45309 == null)))?((((map__45309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45309):map__45309);
var files_msg = map__45309__$1;
var files = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1517021947360
