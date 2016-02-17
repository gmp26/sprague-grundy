(ns ^:figwheel-always sprague-grundy.core
    (:require [clojure.set :refer [union difference]]))

(enable-console-print!)

(defn boundary
  [growth-fn settings a-set]
  (difference (growth-fn settings a-set) a-set))

(defn states->
  "enumerate all states forwards from start-state by following precursors"
  [settings]
  (reduce union #{}
          (take-while #(not= % #{})
                      (iterate #(boundary (:followers settings) settings %) #{(:start settings)}))))

(defn mex
  "return the minimum excludant - the first number n in (range) such that (not (p n))
usually, the predicate p determines whether n is a member of a set of integers."  (
   [p]
   (mex p 0))

  ([p n]
   "return the minimum excludant - the first number not meeting the predicate starting at n"
   (loop [m n]
     (if (p m)
       (recur (inc m))
       m))))
;; (mex #{0 1 3 5 2}) => 4)
;; (mex #{1 3 5 2}) => 0

(defn grundy-number
  "Calculate the grundy number of any state given by the game described in settings"
  [settings state]
  (if (= state (:target settings))
    0
    (let [followers ((:followers settings) settings state)
          follower-gs (into #{} (map #(grundy-number settings %) followers))]
      (prn state " " followers " " follower-gs)
      (mex follower-gs))))

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
