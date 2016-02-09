(ns ^:figwheel-always gotit.rules
    (:require [sprague-grundy.core :as core]))
;;;
;; The state of gotit is completely defined by a map containing
;;
;; :n - the current location
;; :target - the number we are aiming for
;; :limit - the maximum possible move each turn
;;;

(def env (atom  {:target 23 :limit 4}))

(defn rules
  "The rules define the possible next states for the given settings - a derefed environment, and
  the single state variable n."
  [settings n]
  (let [possible-moves (range 1 (inc (min (- (:target settings) n) (:limit settings))))]
    (map #(+ n %) possible-moves))
  )

(defn precursors
  "Calculate the possible precursors to a given state"
  [settings n]
  (filter #(> % 0) (range (- n (:limit settings)) n)))


;;
;; nimber gives the nim-equivalent of the gotit position
;;
(defn nimber [settings n]
  (let [remaining (- (:target settings) n)]))
