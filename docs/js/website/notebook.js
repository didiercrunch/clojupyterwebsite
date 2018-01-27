// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('website.notebook');
goog.require('cljs.core');
goog.require('cljs.core.constants');
website.notebook.root = "http://nbviewer.jupyter.org/github/didiercrunch/graphly/blob/master/";
website.notebook.notebook = (function website$notebook$notebook(name,msg){
var url_safe_name = encodeURIComponent(name);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(website.notebook.root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_safe_name)].join('')], null),msg], null);
});
