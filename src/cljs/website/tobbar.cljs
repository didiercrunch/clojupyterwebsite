(ns website.tobbar
   (:require [website.logo :refer [logo]]))


(defn important [w] ;; to remove
  [:span.has-text-weight-semibold w])

(def github-link
  [:a.title.is-5 {:href "https://github.com/clojupyter"}
    [:i.fab.fa-github]])

(defn topbar []
   [:nav.navbar.is-primary.is-transparent {:role "navigation" :aria-label "main navigation"}
    [:div.navbar-brand
     [:a.navbar-item {:href "/"}
      [logo 30]]
     [:div.navbar-burger
      [:div.navbar-burger
       [:span]
       [:span]
       [:span]]]]
    [:div.navbar-menu
     [:div.navbar-start
      [:a.navbar-item {:href "/charting" :style {:color "white"}}
       (important [:p [:i.fas.fa-chart-bar ] " Charting"])]
      [:a.navbar-item {:href "/install" :style {:color "white"}}
       (important [:p [:i.fas.fa-arrow-down ] " Install"])]]
     [:div.navbar-end
      [:a.navbar-item github-link]]]])
