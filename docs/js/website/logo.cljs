(ns website.logo)

(defn logo [size]
  [:img {:src "images/clojupyter-logo-alpha-1.svg" :height size :width (* 3 size) :alt "clojure logo"}])
