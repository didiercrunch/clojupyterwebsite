(ns website.server
  (:require [website.handler :refer [app loading-page]]
            [config.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(defn run-server []
  (let [port (Integer/parseInt (or (env :port) "3000"))]
      (run-jetty app {:port port :join? false})))

(defn print-index []
  (println (loading-page)))


(defn print-error-message []
  (println "The command line argument must be \"server\" to
            run the server or \"static\" to print the
            index.html to generate static website."))


(defn -main [& args]
  (case (first args)
    "server" (run-server)
    "static" (print-index)
    (print-error-message)))
