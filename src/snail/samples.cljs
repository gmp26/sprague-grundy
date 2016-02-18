(ns snail.samples
  (:require [snail.rules :refer [sample-followers sample-heaps]]
            [sprague-grundy.core :refer [Game]]))

(def snail1 (Game. :snail "Slippery Snail" [4 8 13 18] [] nil))
(def snail2 (Game. :snail "Slippery Snail" [4 8 13 18 22 28] [] 2))

(def snail1-followers (sample-followers snail1))
(def snail2-followers (sample-followers snail2))

(def snail1-heaps (sample-heaps snail1))
(def snail2-heaps (sample-heaps snail2))
