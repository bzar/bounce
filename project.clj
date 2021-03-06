(defproject cljs-pong "0.1.0-SNAPSHOT"
  :description "Bounce: A pong clone in cljs!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [prismatic/dommy "0.1.3"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cljs-pong"
              :source-paths ["src"]
              :compiler {
                :output-to "cljs_pong.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
