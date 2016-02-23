(defproject sprague-grundy "A collection of impartial games - hopefully"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [devcards "0.2.1-5"]
                 [sablono "0.5.3"]

                 ;; need to specify this for sablono
                 ;; when not using devcards
                 [cljsjs/react "0.14.3-0"]
                 [cljsjs/react-dom "0.14.3-1"]
                 [cljsjs/react-dom-server "0.14.3-0"]

                 [rum "0.6.0"]
                 ]

  :plugins [[lein-figwheel "0.5.0-6"]
            [lein-cljsbuild "1.1.2" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "sprague-grundy.devcards"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/sprague_grundy_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                   :source-map-timestamp true }}
                       {:id "gotit"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "gotit.main"
                                   :asset-path "js/compiled/gotit"
                                   :output-to  "resources/public/js/compiled/gotit.js"
                                   :output-dir "resources/public/js/compiled/gotit"
                                   :source-map-timestamp true }}
                       {:id "snail"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "snail.main"
                                   :asset-path "js/compiled/snail"
                                   :output-to  "resources/public/js/compiled/snail.js"
                                   :output-dir "resources/public/js/compiled/snail"
                                   :source-map-timestamp true }}
                       {:id "dollar"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "gotit.main"
                                   :asset-path "js/compiled/dollar"
                                   :output-to  "resources/public/js/compiled/dollar.js"
                                   :output-dir "resources/public/js/compiled/dollar"
                                   :source-map-timestamp true }}
                       {:id "kayles"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "kayles.main"
                                   :asset-path "js/compiled/kayles"
                                   :output-to  "resources/public/js/compiled/kayles.js"
                                   :output-dir "resources/public/js/compiled/kayles"
                                   :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "sprague-grundy.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/sprague_grundy.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "sprague-grundy.core"
                                   :externs ["resources/externs/svg.js"]
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/sprague_grundy.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] })



(comment
                       {:id "kayles"
                        :source-paths ["src"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "sprague-grundy.kayles-tests"
                                    :asset-path "js/compiled/kayles_tests_out"
                                    :output-to  "resources/public/js/compiled/kayles_tests.js"
                                    :output-dir "resources/public/js/compiled/kayles_tests_out"
                                    :source-map-timestamp true }}  )
