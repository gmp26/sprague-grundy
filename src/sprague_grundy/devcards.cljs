(ns sprague-grundy.devcards
  (:require
   [sablono.core :as sab :include-macros true]
   [sprague-grundy.core :as core]
   [gotit.rules :as gotit]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)


;; Typical gotit game settings
(def gotit (atom  {:start 0
                   :target 23
                   :limit 4
                   :followers gotit/followers
                   :precursors gotit/precursors}))

(defcard mex
  (sab/html
   [:div
    [:p "mex returns the minimum excludant - the smallest non-negative integer that is not present!"]
    [:p "mex #{0 1 5 3 2} = " (core/mex #{0 1 5 3 2})]
    [:p "mex #{1 5 3 2} = " (core/mex #{1 5 3 2})]]))

(defcard gotit.rules
  (let [settings @gotit]
    (sab/html [:div
               [:h3 "Gotit with environment {:start " (:start settings)
                " :target " (:target settings)
                " :limit " (:limit settings) "}"]
               [:p (str " followers 0 => " ((:followers settings) settings 0))]
               [:p (str " followers 21 => " ((:followers settings) settings 21))]
               [:p (str " precursors 3 => " ((:precursors settings) settings 3))]
               [:p (str " precursors 23 => " ((:precursors settings) settings 23))]
               [:p (str " forward  states =>" (core/states-> @gotit))]
               [:p (str " backward states =>" (core/<-states @gotit))]
               ])))

(defcard gotit.nimbers
  (let [settings @gotit]
        (sab/html [:div
                   [:h3 "Gotit nimber (grundy number) calculation"]
                   [:p "(grundy-number 23) => " (core/grundy-number settings 23)]
                   [:p "(grundy-number 22) => " (core/grundy-number settings 22)]
                   [:p "(grundy-number 21) => " (core/grundy-number settings 21)]
                   [:p "(grundy-number 20) => " (core/grundy-number settings 20)]
                   [:p "(grundy-number 19) => " (core/grundy-number settings 19)]
                   [:p "(grundy-number 18) => " (core/grundy-number settings 18)]
                   ]))
  )
