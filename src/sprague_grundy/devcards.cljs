(ns sprague-grundy.devcards
  (:require
   [sablono.core :as sab :include-macros true]
   [sprague-grundy.core :as core]
   [gotit.rules :as gotit]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard mex
  (sab/html
   [:div
    [:p "mex returns the minimum excludant - the smallest non-negative integer that is not present!"]
    [:p "mex #{0 1 5 3 2} = " (core/mex #{0 1 5 3 2})]
    [:p "mex #{1 5 3 2} = " (core/mex #{1 5 3 2})]])
  )

(defcard gotit.rules
  (sab/html [:div
             [:h3 "Gotit rules"]
             [:p (str "{:target 23 :limit 4} 5 => " (gotit/rules {:target 23 :limit 4} 5))]
             [:p (str "{:target 23 :limit 1} 5 => " (gotit/rules {:target 23 :limit 1} 5))]
             [:p (str "{:target 23 :limit 4} 21 => " (gotit/rules {:target 23 :limit 4} 21))]
             ]))
