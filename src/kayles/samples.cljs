(ns kayles.samples
  (:require [kayles.rules :refer [sample-followers sample-heaps]]
            [sprague-grundy.core :refer [Game]]))

(def kayles1 (Game. :kayles "Silver Kayles" [4 8 13 18] [] nil))
(def kayles2 (Game. :kayles "Silver Kayles" [4 8 13 18 22 28] [] 2))

(def kayles1-followers (sample-followers kayles1))
(def kayles2-followers (sample-followers kayles2))

(def kayles1-heaps (sample-heaps kayles1))
(def kayles2-heaps (sample-heaps kayles2))
