(ns website.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [website.middleware :refer [wrap-middleware]]
            [config.core :refer [env]]))

(defn head []
  [:head
   [:title "Clojupyter"]
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css "https://use.fontawesome.com/releases/v5.0.6/css/all.css")
   (include-css (if (env :dev) "css/site.css" "css/site.min.css"))])

(defn loading-page []
  (html5
    (head)
    [:body {:class "body-container"}
     [:div#app]
     (include-js "js/app.js")]))


(defroutes routes
  (GET "/" [] (loading-page))
  (GET "/about" [] (loading-page))
  
  (resources "/")
  (not-found "Not Found"))

(def app (wrap-middleware #'routes))
