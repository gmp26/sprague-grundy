(ns ^:figwheel-always kayles.rules
    (:require [sprague-grundy.core :as core]
              [clojure.set :refer [union]]))
;;;
;; A kayles state is a vector of 1s and 0s. A 1 is an upright pin, a 0 is down.
;;

(defn followers
  ([pins]
   (if (set? pins)
     (into #{} (mapcat followers pins))
     (into (followers pins false) (followers pins true))))

  ([pins double?]
   (if (set? pins)
     (into #{} (mapcat followers pins true))
     (into #{} (remove #(= pins %)
                       (let [c (count pins)]
                         (for [hit-loc (range (if double? (dec c) c))
                               :let [next-loc (if double? (inc hit-loc) nil)]]
                           (let [single (assoc pins hit-loc 0)]
                             (if next-loc
                               (assoc single next-loc 0)
                               single)))))))))

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

(defn stands
  "count contiguous stands of pins"
  [pins]
  (let [[c a] (reduce (fn [[counts acc] pin]
                        (if (= pin 1)
                          [counts (inc acc)]
                          (if (> acc 0) [(conj counts acc) 0] [counts acc]))
                        ) [[] 0] pins)]
    (if (> a 0) (conj c a) c)))


(defn heap-equivalents
  "Returns a seq of equivalent nim heaps for a kayles game-state"
  [pins]
  (if (set? pins)
    (for [pins' pins]
      (map k (stands pins')))
    (map k (stands pins)))
  )

#_(defn deltas-aiming-for
  [pin-count]
  (let [heap (k pin-count)]
    (map #(reduce core/nim-sum heap %) (map heap-equivalent (aim-at-row pin-count)))))


(defn sample-heaps
  "Returns a curried function of state giving only the heap-equivalent"
  [sample]
  (fn [pins]
    (heap-equivalents pins)))

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
