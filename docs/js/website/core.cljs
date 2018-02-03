(ns website.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [website.tobbar :refer [topbar]]
              [website.home :refer [home-page]]
              [website.install :refer [install-page]]
              [website.charting :refer [charting-page]]))


;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div
   [topbar]
   [:div.columns
    [:div.column.is-offset-1.is-10
     [:br]
     [@page]]]])

(secretary/defroute "/" []
  (reset! page #'home-page))

(secretary/defroute "/charting" []
  (reset! page #'charting-page))

(secretary/defroute "/install" []
  (reset! page #'install-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
