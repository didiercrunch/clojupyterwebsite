(ns website.tobbar
   (:require [website.logo :refer [logo]]))

(def github-link
  [:a.title.is-5 {:href "https://github.com/clojupyter"}
    [:i.fab.fa-github]])


(defn topbar []
  [:div
   [:nav.navbar.is-primary.is-transparent {:role "navigation" :aria-label "main navigation"}
    [:div.navbar-brand
     [:a.navbar-item
      [logo 30]
      [:span.title {:style {:margin-left "0.5em"}} "clojupyter"]]]
    [:div.navbar-end
     [:a.navbar-item
      [:span github-link]]]]])

