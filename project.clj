(defproject website "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [ring-server "0.5.0"]
                 [reagent "0.7.0"]
                 [reagent-utils "0.2.1"]
                 [ring "1.6.3"]
                 [ring/ring-defaults "0.3.1"]
                 [compojure "1.6.0"]
                 [hiccup "1.0.5"]
                 [yogthos/config "1.1"]
                 [org.clojure/clojurescript "1.9.946"
                  :scope "provided"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.3"
                  :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-environ "1.1.0"]
            [lein-jupyter "0.1.14"]
            [lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :ring {:handler website.handler/app
         :uberwar-name "website.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "website.jar"

  :main website.server

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["spec/clj"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild
  {:builds {:min
            {:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
             :compiler
             {:output-to        "target/cljsbuild/public/js/app.js"
              :output-dir       "target/cljsbuild/public/js"
              :source-map       "target/cljsbuild/public/js/app.js.map"
              :optimizations :advanced
              :pretty-print  false}}
            :app
            {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
             :figwheel {:on-jsload "website.core/mount-root"}
             :compiler
             {:main "website.dev"
              :asset-path "/js/out"
              :output-to "target/cljsbuild/public/js/app.js"
              :output-dir "target/cljsbuild/public/js/out"
              :source-map true
              :optimizations :none
              :pretty-print  true}}

            :test
            {:source-paths ["src/cljs" "src/cljc" "spec/cljs"]
             :compiler {:output-to "target/test.js"
                        :optimizations :whitespace
                        :pretty-print true}}}


   :test-commands {"unit" ["phantomjs" "runners/speclj" "target/test.js"]}}


  :doo {:build "test"}

  :figwheel
  {:http-server-root "public"
   :server-port 3449
   :nrepl-port 7002
   :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]

   :css-dirs ["resources/public/css"]
   :ring-handler website.handler/app}


  :sass {:source-paths ["src/sass"]
         :target-path "resources/public/css"}

  :profiles {:dev {:repl-options {:init-ns website.repl
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :dependencies [[binaryage/devtools "0.9.8"]
                                  [ring/ring-mock "0.3.2"]
                                  [ring/ring-devel "1.6.3"]
                                  [prone "1.1.4"]
                                  [figwheel-sidecar "0.5.14"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2"]
                                  [speclj "3.3.2"]
                                  [pjstadig/humane-test-output "0.8.3"]
                                  
                                  ;; To silence warnings from sass4clj dependecies about missing logger implementation
                                  [org.slf4j/slf4j-nop "1.7.25"]]


                   :source-paths ["env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.14"]
                             [speclj "3.3.2"]
                             [deraen/lein-sass4clj "0.3.1"]]


                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :env {:dev true}}

             :uberjar {:hooks [minify-assets.plugin/hooks]
                       :source-paths ["env/prod/clj"]
                       :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                       :env {:production true}
                       :aot :all
                       :omit-source true}})
