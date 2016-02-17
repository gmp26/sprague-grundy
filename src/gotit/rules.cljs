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
(comment)
(defn followers
  "followers are the states that can follow state according to the game rules."
  [target limit state]
  (if (set? state)
    (set (mapcat #(followers target limit  %) state))
    (map #(+ state %) (range 1 (inc (min (- target state) limit))))))


(defn heap-equivalent
  "The nim heap equivalent of a gotit state"
  [settings state]
  (mod (- (:target settings) state) (inc (:limit settings))))
