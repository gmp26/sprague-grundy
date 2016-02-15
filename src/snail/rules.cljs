(ns ^:figwheel-always snail.rules
    (:require [sprague-grundy.core :as core]))
;;;
;; A snail state is a vector of coin locations
;;

(defn gaps [state]
  "but the gaps between the coins are more useful"
  (reverse (cons (first state) (map dec (map - (rest state) state)))))

(defn followers
  "followers are the states that can follow this state (or set of states) according to the game rules."
  [settings state]
  (if (set? state)
    (set (mapcat #(followers settings %) state))
    state))


#_(defn precursors
  "Calculate the possible precursors to state(s) according to the rules"
  [settings state]
  (if (set? state)
    (set (mapcat #(precursors settings %) state))
    (filter #(>= % (:start settings)) (range (- state (:limit settings)) state))))

;;;
;; The state of a snail is the vector of locations of coins
;;;
; e.g.
; (defonce snail (atom [4 8 13 18]))

(defn heap-equivalent
  "Returns a seq of equivalent nim heaps for a snail game-state"
  [state]
  (map first (partition 2 (conj (vec (gaps state)) nil)))

)

;;;;;; generic stuff

(defn nim-sum [heaps]
  (apply bit-xor heaps))


(defn msb
  "most significant bit of a positive integer or zero"
  [n]
  (last (take-while #(>= n (Math.pow 2 %)) (range)))
  )

(defn viable-heaps
  "Return the list of heaps in which we could make a winning move"
  [heaps]
  (let [nimber (nim-sum heaps)]
    (if (= nimber 0)
      []
      (distinct (filter #(bit-test % (msb (nim-sum heaps))) heaps)))
    )
  )

(defn next-game-state
  [settings game-state]
  (let [change-this (rand-nth (viable-heaps ((:heap-equivalent settings) game-state)))]
    (if (empty? change-this)
      "We're in a P position. Pick the largest and move a small amount"
      ())))
