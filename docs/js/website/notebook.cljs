(ns website.notebook)

(def root "http://nbviewer.jupyter.org/github/didiercrunch/graphly/blob/master/")

(defn notebook [name msg]
  (let [url-safe-name (js/encodeURIComponent name)]
    [:a {:href (str root url-safe-name)} msg]))