(ns website.home
  (:require [website.logo :refer [logo]]
            [website.notebook :refer [notebook]]))


(defn important [w]
  [:span.has-text-weight-semibold w])


(defn home-page []
  [:div.columns
   [:div.column
    [:article.message
     [:div.message-body
      [:p.subtitle (important "Clojupyter") " brings " (important "clojure") " to the " (important "jupyter notebook") "."]
      [:article.content
       [:p "Enjoy the full Clojure repl experience with…"]
       [:ul
        [:li "Full jupyter notebook support"]
        [:li "Charting"]
        [:li [notebook "geom.ipynb" "Latex, Markdown, HTML and Hiccup"]]
        [:li "parinfer"]
        [:li "Leiningen integration"]]]]]]
   [:div.column.is-flex-tablet.has-text-centered {:style {:justify-content "center" :flex-direction "column"}}
    [:span.title {:style {:width "100%"}}
     [logo 133]]]])

