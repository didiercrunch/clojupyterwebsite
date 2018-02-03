(ns website.home
  (:require [website.logo :refer [logo]]
            [website.notebook :refer [notebook]]
            [reagent.core :as r]))


(defn important [w]
  [:span.has-text-weight-semibold w])

(def example-images ["images/examples/completions-2-1.png"
                     "images/examples/outputs-2-1.png"])

(defn examples []
  (let [timeouts (r/atom 0)
        is-far #(= (mod %1 3) %2)
        image #(get example-images (mod % (count example-images)))]
    (js/setInterval #(swap! timeouts inc) 2500)
    (fn []
      [:div.box
       [:figure.image.is-2by1
        [:img {:src (image @timeouts)}]]
       [:div.has-text-centered {:style {:marginTop "0.5em"}}
        [:span
         [:i.fa-circle.cj-orange-text {:class (if (is-far @timeouts 0) "fas" "far ")}] " "
         [:i.fa-circle.cj-orange-text {:class (if (is-far @timeouts 1) "fas" "far")}] " "
         [:i.fa-circle.cj-orange-text {:class (if (is-far @timeouts 2) "fas" "far")}]]]])))

(def description-block
   [:article.message
    [:div.message-body
     [:p.subtitle (important "Clojupyter") " brings " (important "clojure") " to the " (important "jupyter notebook") "."]
     [:article.content
      [:p "Enjoy the full Clojure repl experience with…"]
      [:ul
       [:li "Full jupyter notebook support"]
       [:li "Completions"]
       [:li "Charting"]
       [:li [notebook "geom.ipynb" "Latex, Markdown, HTML and Hiccup"]]
       [:li "parinfer"]
       [:li "Leiningen integration"]]]]])

(def lein-plugin-example "(defproject my-project\"0.1.0-SNAPSHOT\"
  :description \"FIXME: write description\"
  :url \"http://example.com/FIXME\"
  :license {:name \"Eclipse Public License\"
  :url \"http://www.eclipse.org/legal/epl-v10.html\"}
  :dependencies [[org.clojure/clojure \"1.9.0\"]]
  :main ^:skip-aot my-project.core
  :target-path \"target/%s\"
  :plugins [[lein-jupyter \"0.1.14\"]]
  :profiles {:uberjar {:aot :all}})")

(def installation-block
   [:article.message
    [:div.message-body
     [:p.subtitle (important "Getting Started") " | Leiningen plugin"]
     [:article.content
      [:p]
      [:ol
       [:li "Install the jupyter notebook globally following the " [:a {:href "http://jupyter.org/install"} "official instruction"]]
       [:li [:div
             [:p "Add lein-jupyter in your " [:p.is-italic {:style {:position "inline"}} "project.clj" [:code ":plugins"] "section."]]
             [:pre lein-plugin-example]]]
       [:li "install the jupyter kernel with lein jupyter install-kernel"]
       [:li "run jupyter from within your project using lein jupyter notebook"]]]]])



(defn home-page []
  [:div.columns.is-variable.is-8
   [:div.column
    description-block
    [:div.is-hidden-mobile installation-block]]
   [:div.column
    [examples]]])

