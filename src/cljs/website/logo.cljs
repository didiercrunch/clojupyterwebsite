(ns website.logo)

(defn logo [size]
  [:img {:src "/images/clojupyter-logo.svg" :height size :width (* 3 size) :alt "clojure logo"}])
