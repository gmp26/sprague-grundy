(ns ^:figwheel-always kayles.rules
    (:require [sprague-grundy.core :as core]))
;;;
;; A kayles state is a vector of coin locations
;;


(defn takeout-pins
  "list outcomes when taking out a single pin from a row"
  [pin-count remove-count]
  (let [n (- pin-count remove-count)]
    (map (fn [i]
           (cond
             (= 0 i) [(- n i)]
             (= 0 (- n i)) [i]
             :else  [i (- n i)])) (range 0 n)))
  )

#_(defn takeout-double-pin
  "hi"
  [pin-count])

(defn aim-at-row
  "aim at a single row - anticipate all possible future states."
  [pin-count]
  (reduce conj (takeout-pins pin-count 1) (takeout-pins pin-count 2)))

(defn single-moves
  "list possible moves from state. State is a vector of contiguous pin counts"
  [state]
  (map aim-at-row state)
)

(defn both-pos? [pair]
  (pos? (* (first pair) (second pair))))

(defn double-moves
  "list possible double moves"
  [state]
  (let [doubles (vec (partition 2 1 state))]
    (for [n (range (count doubles))
          :when (both-pos? (doubles n))]
      (distinct (flatten (assoc doubles n '(0 0))))))
  )

;;;
;; Public
;;;
(defn followers
  "followers are the states that can follow this state (or set of states) according to the game rules."
  [state]
  (if (set? state)
    (set (mapcat followers state))
    ))


(defn sample-followers
  "return the correct followers function for the given state"
  [sample]
  )

;;;
;; The state of a kayles is the vector of locations of coins
;;;
; e.g.
; (defonce kayles (atom [4 8 13 18]))
(defn heap-equivalent
  "Returns a seq of equivalent nim heaps for a kayles game-state"
  [state]
)


(defn sample-heaps
  "Returns a curried function of state giving only the heap-equivalent"
  [sample]
  (fn [state]
    (heap-equivalent state)))


;;;;;; generic stuff
