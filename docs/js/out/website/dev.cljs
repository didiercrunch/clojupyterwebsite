(ns ^:figwheel-no-load website.dev
  (:require
    [website.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
