(ns ^:figwheel-always snail.rules
    (:require [sprague-grundy.core :as core]))
;;;
;; A snail state is a vector of coin locations
;;

(defn- gaps [state]
  "but the gaps between the coins are more useful"
  (reverse (cons (first state) (map dec (map - (rest state) state)))))

(defn- location-follower
  "followers are the states that can follow individual state(s) according to the game rules."
  [previous-loc loc]
  (range (inc previous-loc) loc))

(defn- moves [state]
  (filter #(not ((set state) %)) (range 0 (apply max state)))
  )

(defn- make-move
  "move the first state location bigger than the move "
  [state move]
  (let [move-location (first (filter #(> % move) state))]
    (drop-while zero? (map #(if (= % move-location) move %) state)))
  )

(defn- location-keyed-moves [state]
  (zipmap state (moves state)))

;;;
;; Public
;;;
(defn followers
  "followers are the states that can follow this state (or set of states) according to the game rules."
  [state]
  (if (set? state)
    (set (mapcat followers state))
    (map #(make-move state %) (moves state))))

(def end-state? empty?)

;;;
;; The state of a snail is the vector of locations of coins
;;;
; e.g.
; (defonce snail (atom [4 8 13 18]))
(defn heap-equivalent
  "Returns a seq of equivalent nim heaps for a snail game-state"
  [end-state? state]
  (if (end-state? state)
    '(0)
    (map first (partition 2 (conj (vec (gaps state)) nil)))))

;;;;;; generic stuff
