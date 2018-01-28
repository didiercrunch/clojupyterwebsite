// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('website.home');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('website.logo');
goog.require('website.notebook');
goog.require('reagent.core');
website.home.important = (function website$home$important(w){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$has_DASH_text_DASH_weight_DASH_semibold,w], null);
});
website.home.example_images = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/examples/completions-2-1.png","images/examples/outputs-2-1.png"], null);
website.home.examples = (function website$home$examples(){
var timeouts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var is_far = ((function (timeouts){
return (function (p1__14988_SHARP_,p2__14989_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(p1__14988_SHARP_,(3)),p2__14989_SHARP_);
});})(timeouts))
;
var image = ((function (timeouts,is_far){
return (function (p1__14990_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(website.home.example_images,cljs.core.mod(p1__14990_SHARP_,cljs.core.count(website.home.example_images)));
});})(timeouts,is_far))
;
var G__14991_14993 = ((function (timeouts,is_far,image){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(timeouts,cljs.core.inc);
});})(timeouts,is_far,image))
;
var G__14992_14994 = (2500);
setInterval(G__14991_14993,G__14992_14994);

return ((function (timeouts,is_far,image){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$figure$image$is_DASH_2by1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,image(cljs.core.deref(timeouts))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$has_DASH_text_DASH_centered,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$marginTop,"0.5em"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa_DASH_circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(is_far(cljs.core.deref(timeouts),(0)))?"far":"fas")], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa_DASH_circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(is_far(cljs.core.deref(timeouts),(1)))?"far":"fas")], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa_DASH_circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(is_far(cljs.core.deref(timeouts),(2)))?"far":"fas")], null)], null)], null)], null)], null);
});
;})(timeouts,is_far,image))
});
website.home.home_page = (function website$home$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_variable$is_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$article$message,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$message_DASH_body,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$subtitle,website.home.important("Clojupyter")," brings ",website.home.important("clojure")," to the ",website.home.important("jupyter notebook"),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$article$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Enjoy the full Clojure repl experience with\u2026"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Full jupyter notebook support"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Completions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Charting"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.notebook.notebook,"geom.ipynb","Latex, Markdown, HTML and Hiccup"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"parinfer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Leiningen integration"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.home.examples], null)], null)], null);
});
