(ns website.tobbar
   (:require [website.logo :refer [logo]]
             [reagent.core :as r]))

(defmacro handler-fn
  ([& body]
   `(fn [~'event] ~@body nil)))  ; always return nil

(defn important [w] ;; to remove
  [:span.has-text-weight-semibold w])

(def github-link
  [:span.title.is-5
    [:i.fab.fa-github]])

(defn topbar []
  (let [active? (r/atom true)]
    (fn []
      (let [text-color (if @active? "black" "white")]
        [:nav.navbar.is-primary.is-transparent {:role "navigation" :aria-label "main navigation"}
         [:div.navbar-brand
          [:a.navbar-item {:href "/"}
           [logo 30]]
          [:div.navbar-burger {:on-click #(swap! active? not)}
            [:span]
            [:span]
            [:span]]]
         [:div.navbar-menu {:class (if @active? "is-active")}
          [:div.navbar-start {:style {:color text-color}}
           [:a.navbar-item {:href "/charting"}
            (important [:p [:i.fas.fa-chart-bar ] " Charting"])]
           [:a.navbar-item {:href "/install"}
            (important [:p [:i.fas.fa-arrow-down ] " Install"])]]
          [:div.navbar-end
           [:a.navbar-item {:href "https://github.com/clojupyter"}
             (important [:span [:i.fab.fa-github] " GitHub"])]]]]))))
