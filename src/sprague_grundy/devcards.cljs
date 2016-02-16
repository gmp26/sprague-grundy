(ns sprague-grundy.devcards
  (:require
   [sablono.core :as sab :include-macros true]
   [sprague-grundy.core :as core]
   [gotit.rules :as gotit]
   [snail.rules :as snail]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)


(defcard mex
  (sab/html
   [:div
    [:p "mex returns the minimum excludant - the smallest non-negative integer that is not present!"]
    [:p "mex #{0 1 5 3 2} = " (core/mex #{0 1 5 3 2})]
    [:p "mex #{1 5 3 2} = " (core/mex #{1 5 3 2})]]))

;;
;; Typical gotit game settings
;;
(def gotit (atom  {:start 0
                   :target 23
                   :limit 4
                   :followers gotit/followers}))

(defcard gotit.rules
  (let [settings @gotit]
    (sab/html [:div
               [:h3 "Gotit with environment {:start " (:start settings)
                " :target " (:target settings)
                " :limit " (:limit settings) "}"]
               [:p (str " followers 0 => " ((:followers settings) settings 0))]
               [:p (str " followers 21 => " ((:followers settings) settings 21))]
               [:p (str " forward  states =>" (core/states-> @gotit))]
               ])))

(defcard gotit.nimbers
  (let [settings @gotit]
        (sab/html [:div
                   [:h3 "Gotit nimber calculation"]
                   [:p "(grundy-number 23) => " (core/grundy-number settings 23)]
                   [:p "(grundy-number 22) => " (core/grundy-number settings 22)]
                   [:p "(grundy-number 21) => " (core/grundy-number settings 21)]
                   [:p "(grundy-number 20) => " (core/grundy-number settings 20)]
                   [:p "(grundy-number 19) => " (core/grundy-number settings 19)]
                   [:p "(grundy-number 18) => " (core/grundy-number settings 18)]
                   ]))
  )

;;
;; Typical snail game settings
;;
(def snail (atom  {:start [4 8 13 18]
                   :target [0 0 0 0]
                   :limit 1000
                   :followers snail/followers
                   :heap-equivalent snail/heap-equivalent}))

(defcard snail.rules
  (let [settings @snail]
    (sab/html [:div
               [:h3 "Snail {:start " (str (:start settings)
                                          " :target " (:target settings)
                                          " :limit " (:limit settings)) "}"]
               [:p (str "nim-heap equivalent => " (str ((:heap-equivalent settings) (:start settings))))]
               [:p (str " moves [4 8 13 18] => " (snail/moves [4 8 13 18]))]
               [:p (str " followers [4 8 13 18] => " (snail/followers nil [4 8 13 18]))]

               ])))

()

#_(defcard snail.nimbers
  (let [settings @snail]
        (sab/html [:div
                   [:h3 "Snail nimber calculation"]
                   [:p "(grundy-number 23) => " (core/grundy-number settings [0 0])]
                   [:p "(grundy-number 22) => " (core/grundy-number settings [0 1])]
                   [:p "(grundy-number 21) => " (core/grundy-number settings [0 2])]
                   [:p "(grundy-number 20) => " (core/grundy-number settings [1 2])]
                   [:p "(grundy-number 19) => " (core/grundy-number settings [1 3])]
                   [:p "(grundy-number 18) => " (core/grundy-number settings [1 4])]
                   ]))
  )
