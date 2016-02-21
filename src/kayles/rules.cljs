(ns ^:figwheel-always kayles.rules
    (:require [sprague-grundy.core :as core]
              [clojure.set :refer [union]]))
;;;
;; A kayles state is a vector of coin locations
;;


(defn takeout-pins
  "list outcomes when taking out contiguous pins from a row"
  [pin-count remove-count]
  (let [n (- pin-count remove-count)]
    (if (<= n 0)
      #{}
      (into #{[n]}
            (for [i (range 1 n)]
              [i (- n i)])))
    )
  )

(defn takeout-single-pins
  "list outcomes when taking out contiguous pins from a row"
  [pin-count]
  (let [n pin-count]
    (map (fn [i]
           (cond
             (= 0 i) [0 (dec (- n i))]
             (= i n) [(dec i) 0]
             :else  [(dec i) 0 (- n i)])) (range 0 pin-count)))
  )

(defn aim-at-row
  "aim at a single row - anticipate all possible future states."
  [pin-count]
  (into (takeout-pins pin-count 1) (takeout-pins pin-count 2)))

(defn all-moves
  "aim and hit each row in turn, returning all possible outcomes"
  [state]
  (map-indexed
   (fn [loc1 pin-count1]
     (map-indexed
      (fn [loc2 pin-count2]
        (if (= loc1 loc2)
          (let [pc (aim-at-row pin-count1)]
            (if (empty? pc) 0 pc))
          pin-count2))
      state))
   state)
  )

(defn all-moves-from-state
  [state]
  #_(reduce union #{} (for [row state]
                        (aim-at-row row)))
  (for [row1 state
        row2 state
        :when (not= row1 row2)]
    1


    )
  )

(defn single-moves
  "list possible moves from state. State is a vector of contiguous pin counts"
  [state]
  (vec (into #{} (map aim-at-row state)))
)

;;;
;; Public
;;;
(defn followers
  "followers are the states that can follow this state (or set of states) according to the game rules."
  [state]
  (if (set? state)
    (set (mapcat followers state))
    (single-moves state)
    ))

(defn sample-followers
  "return the correct followers function for the given state"
  [sample]
  followers
  )

;;;
;; see https://en.wikipedia.org/wiki/Kayles
;;;
(def k-nim-values
  "Table of K nim values up to K_83"
  [[0 1 2 3 1 4 3 2 1 4 2 6]
   [4 1 2 7 1 4 3 2 1 4 6 7]
   [4 1 2 8 5 4 7 2 1 8 6 7]
   [4 1 2 3 1 4 7 2 1 8 2 7]
   [4 1 2 8 1 4 7 2 1 4 2 7]
   [4 1 2 8 1 4 7 2 1 8 6 7]
   [4 1 2 8 1 4 7 2 1 8 2 7]]
  )

(defn k
  "k(n) generally "
  [n]
  (let [b (mod n 12)
        a (/ (- n b) 12)]
    (if (< n 84)
      ((k-nim-values a) b)
      ((k-nim-values 6) b))))

;;;
;; The state of a kayles game is a vector of pin counts
;; ||| ||||||| ||||| is [3 7 5]
;; each of which has a nim heap eqivalent - in this case [3 2 4]
;; and a (core/nim-sum 3 2 4) = 5
;;
;;;


; e.g.
(defn heap-equivalent
  "Returns a seq of equivalent nim heaps for a kayles game-state"
  [state]
  (map k state)
  )

(defn deltas-aiming-for
  [pin-count]
  (let [heap (k pin-count)]
    (map #(reduce core/nim-sum heap %) (map heap-equivalent (aim-at-row pin-count)))))


(defn sample-heaps
  "Returns a curried function of state giving only the heap-equivalent"
  [sample]
  (fn [state]
    (heap-equivalent state)))

;; kayles.rules=> (heap-equivalent [5 8 9])
;; 1
;; kayles.rules=> (map heap-equivalent (first (followers [5])))
;; (3 3 3 1 2 0 2)
;; kayles.rules=> (map heap-equivalent (first (followers [8])))
;; (5 3 0 3 5 3 2 2 6 2 2 6 2)
;; kayles.rules=> (map heap-equivalent (first (followers [9])))
;; (2 6 2 2 6 2 2 1 3 1 7 0 7 1 3)
;; kayles.rules=> (heap-equivalent [5])
;; 4
;; kayles.rules=> (heap-equivalent [8])
;; 1
;; kayles.rules=> (heap-equivalent [9])
;; 4
;; kayles.rules=> (first (followers [8]))
;; ([5 1] [4 2] [3 3] [2 4] [1 5] [6] [7] [1 6] [2 5] [3 4] [4 3] [5 2] [6 1])

;;;;;; generic stuff
