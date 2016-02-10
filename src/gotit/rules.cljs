(ns ^:figwheel-always gotit.rules
    (:require [sprague-grundy.core :as core]))
;;;
;; The state of gotit is completely defined by its settings
;;
;; :start - the number we start on
;; :target - the number we are aiming for
;; :limit - the maximum possible moves each turn
;;
;; and the current state.
;;;

(defn followers
  "followers are the states that can follow state according to the game rules."
  [settings state]
  (if (set? state)
    (set (mapcat #(followers settings %) state))
    (map #(+ state %) (range 1 (inc (min (- (:target settings) state) (:limit settings)))))))

(defn precursors
  "Calculate the possible precursors to state according to the rules"
  [settings state]
  (if (set? state)
    (set (mapcat #(precursors settings %) state))
    (filter #(>= % (:start settings)) (range (- state (:limit settings)) state))))
