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
         [:i.fa-circle {:class (if (is-far @timeouts 0) "far" "fas")}] " "
         [:i.fa-circle {:class (if (is-far @timeouts 1) "far" "fas")}] " "
         [:i.fa-circle {:class (if (is-far @timeouts 2) "far" "fas")}]]]])))


(defn home-page []
  [:div.columns.is-variable.is-8
   [:div.column
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
        [:li "Leiningen integration"]]]]]]
   [:div.column
    [examples]]])


