(ns website.tobbar)


;<nav class="navbar" role="navigation" aria-label="main navigation">
;<div class="navbar-brand">
;<!-- navbar items, navbar burger... -->
;</div>
;</nav>

(defn top-bar []
  [:nav.navbar {:role "navigation" :aria-label "main navigation"}
   [:div.navbar-brand
    [:a.navbar-item {:href "https://bulma.io"}
     [:img {:href "https://bulma.io/images/bulma-logo.png"}]]]])
