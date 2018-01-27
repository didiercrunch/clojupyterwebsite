(ns figwheel.connect.build-app (:require [website.core] [website.dev] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/website.core.mount-root (apply js/website.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'website.core/mount-root' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

