(ns kayles.samples
  (:require [kayles.rules :as rules :refer [sample-followers sample-heaps]]
            [sprague-grundy.core :as core :refer [Game]]
            ;[cljs.core :refer-macros [satisfies?]]
            ))
  ;(:require [cljs.core :refer-macros [satisfies?]])


(def kayles1 (core/Game. :kayles "Kayles" [4 8 13 18] [] nil))
;(def kayles2 (Game. :kayles "Kayles" [4 8 13 18 22 28] [] 2))

(def kayles1-followers (sample-followers kayles1))

(def kayles1-heaps (sample-heaps kayles1))


(defrecord Kayles [title start target limit]
           core/IGame
           (followers [this] rules/followers)
           (heap-equivalents [this] (rules/sample-heaps this)))

(def kayles2 (Kayles. "Kayles" [4 8 13 18 22 18] [] 2))
(def kayles2-followers (sample-followers kayles2))
(def kayles2-heaps (sample-heaps kayles2))
