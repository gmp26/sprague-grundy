(ns snail.samples
  (:require [snail.rules :refer [followers heap-equivalent]]
            [sprague-grundy.core :refer [Game]]))


(def snail1 (Game. :snail "Slippery Snail" [4 8 13 18] [] 10000))
(def snail2 (Game. :snail "Slippery Snail" [4 8 13 18 22 28] [] 2))

(def snail1-followers followers)
(def snail2-followers followers)

(def snail1-heaps heap-equivalent)
(def snail2-heaps heap-equivalent)
