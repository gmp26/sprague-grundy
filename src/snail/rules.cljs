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

(defn- unlimited-moves [state]
  (filter #(not ((set state) %)) (range 0 (apply max state)))
  )

(defn- move-location [state move]
  (first (filter #(> % move) state)))

(defn- make-move
  "move the first state location bigger than the move "
  [state move]
  (drop-while zero? (map #(if (= % (move-location state move)) move %) state))
  )

(defn- limited-moves [limit state]
  "return those moves that are less than the move limit"
  (filter (fn [move] (<= (- (move-location state move) move) limit))  (unlimited-moves state))
  )

;;;
;; Public
;;;
(defn followers
  "followers are the states that can follow this state (or set of states) according to the game rules."
  [state]
  (if (set? state)
    (set (mapcat followers state))
    (map #(make-move state %) (unlimited-moves state))))

(defn limited-followers
  "followers are the states that can follow this state (or set of states) according to the game rules."
  [limit state]
  (if (set? state)
    (set (mapcat limited-followers limit state))
    (map #(make-move state %) (limited-moves limit state))))

(defn sample-followers
  "return the correct followers function for the given state"
  [sample]
  (if (:limit sample)
    (partial limited-followers (:limit sample))
    (partial followers)
    ))

;;;
;; The state of a snail is the vector of locations of coins
;;;
; e.g.
; (defonce snail (atom [4 8 13 18]))
(defn heap-equivalent
  "Returns a seq of equivalent nim heaps for a snail game-state"
  [limit state]
  (if (empty? state)
    '(0)
    (map first (partition 2 (conj (vec (gaps state)) nil)))))

(defn sample-heaps
  "Returns a curried function of state giving only the heap-equivalent"
  [sample]
  (fn [state]
    (heap-equivalent (:limit sample) state))
  )


;;;;;; generic stuff
