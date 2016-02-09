(ns ^:figwheel-always sprague-grundy.core)

(enable-console-print!)

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

(defn possible-next-states
  "return a list of possible next states"
  [state]
  '())

(defn end-state?
  "true if the game is finished"
  [state]
  true)

(defn nimber
  "calculate the nimber of a game based on the possible game transitions (the rules)
and the current state"
  [settings rules ->nimber state]
  (if (end-state? state)
    0
    (mex (into #{} (map #(->nimber settings %) (possible-next-states state))))))
