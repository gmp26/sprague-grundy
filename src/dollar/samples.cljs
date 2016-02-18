(ns dollar.samples
  (:require [dollar.rules :refer [sample-followers sample-heaps]]
            [sprague-grundy.core :refer [Game]]))

(def dollar1 (Game. :dollar "Silver Dollar" [4 8 13 18] [] nil))
(def dollar2 (Game. :dollar "Silver Dollar" [4 8 13 18 22 28] [] 2))

(def dollar1-followers (sample-followers dollar1))
(def dollar2-followers (sample-followers dollar2))

(def dollar1-heaps (sample-heaps dollar1))
(def dollar2-heaps (sample-heaps dollar2))
