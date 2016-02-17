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
                   :followers (fn [settings state] (gotit/followers (:target settings) (:limit settings) state))
                   }))

(defcard gotit.rules
  (let [settings @gotit]
    (sab/html [:div
               [:h3 "Gotit with environment {:start " (:start settings)
                " :target " (:target settings)
                " :limit " (:limit settings) "}"]
               [:p (str " followers 0 => " (gotit/followers 23 4 0))]
               [:p (str " followers 21 => " (gotit/followers 23 4 21))]
               [:p (str " forward  states =>" (core/states-> @gotit))]
               ])))

(defcard gotit.heap-equivalents
  (let [settings @gotit]
    (sab/html [:div
                   [:h3 "Gotit heap equivalents using mod"]
                   [:p "(heap-equivalent 23) => " (gotit/heap-equivalent settings 23)]
                   [:p "(heap-equivalent 22) => " (gotit/heap-equivalent settings 22)]
                   [:p "(heap-equivalent 21) => " (gotit/heap-equivalent settings 21)]
                   [:p "(heap-equivalent 20) => " (gotit/heap-equivalent settings 20)]
                   [:p "(heap-equivalent 19) => " (gotit/heap-equivalent settings 19)]
                   [:p "(heap-equivalent 18) => " (gotit/heap-equivalent settings 18)]
                   ])))

(defcard gotit.nimbers
  (let [settings @gotit]
        (sab/html [:div
                   [:h3 "Gotit nimber calculation using game graph"]
                   [:p "(grundy-number 23) => " (core/grundy-number settings 23)]
                   [:p "(grundy-number 22) => " (core/grundy-number settings 22)]
                   [:p "(grundy-number 21) => " (core/grundy-number settings 21)]
                   [:p "(grundy-number 20) => " (core/grundy-number settings 20)]
                   [:p "(grundy-number 19) => " (core/grundy-number settings 19)]
                   [:p "(grundy-number 18) => " (core/grundy-number settings 18)]
                   ])))

;;
;; Typical snail game settings
;;
(def snail (atom  {:start [4 8]
                   :target []
                   :limit 1000
                   :followers (fn [settings state] (snail/followers state))}))

(defcard snail.rules
  (let [settings @snail]
    (sab/html [:div
               [:h3 "Snail {:start " (str (:start settings)
                                          " :target " (:target settings)
                                          " :limit " (:limit settings)) "}"]
               [:p (str " followers [4 8 13 18] => " (snail/followers [4 8 13 18]))]])))

(defcard snail.heap-equivalents
  (let [
        check (fn [state] [:p "(heap-equivalent " (str state) ") => "
                          (str (snail/heap-equivalent snail/end-state? state)
                               " nim-sum => " (str (core/nim-sum (snail/heap-equivalent snail/end-state? state))))])]
        (sab/html [:div
                   [:h3 "Snail heap-equivalents by inspection"]
                   (check [4 8 13 18])
                   (check [4 8 13 17])
                   (check [8 13 17])
                   (check [3 13 17])
                   (check [3 13 14])
                   (check [13 14])
                   (check [5 14])
                   (check [5 6])
                   (check [6])
                   (check [])
                   ]))
  )
