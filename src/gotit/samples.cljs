(ns gotit.samples
  (:require [gotit.rules :refer [sample-followers sample-heaps]]
            [sprague-grundy.core :refer [Game sample-grundy-number]]))

(def gotit1 (Game. :gotit "Got it!" 0 23 4))
(def gotit2 (Game. :gotit "Got it!" 0 23 2))

(def gotit1-followers (sample-followers gotit1))
(def gotit2-followers (sample-followers gotit2))

(def gotit1-heaps (sample-heaps gotit1))
(def gotit2-heaps (sample-heaps gotit2))

;;
;; avoid these for the most part
;;
(def gotit1-grundy (memoize (partial sample-grundy-number gotit1-followers gotit1)))
(def gotit2-grundy (memoize (partial sample-grundy-number gotit2-followers gotit2)))
