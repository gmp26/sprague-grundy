(ns sprague-grundy.kayles-tests
  (:require
   [sablono.core :as sab :include-macros true]
   [sprague-grundy.core :as core]
   [kayles.rules :as kayles]
   [kayles.samples :refer [kayles1 kayles2 kayles1-followers kayles2-followers kayles1-heaps kayles2-heaps]]
   [cljs.test :refer-macros [is are testing run-tests]]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))


(enable-console-print!)

(defcard test
(sab/html [:div
           [:h3 "Devcards working"]
           ]))

(deftest test-stands
  (testing "pin stand counts"
    (is (= (kayles/stands [1 1 0 1 0]) [2 1]))
    (is (= (kayles/stands [1 1 0 1 1]) [2 2])))
  (testing "followers"
    (is (= (kayles/followers [1 1 1 1]) #{[0 1 1 1] [1 0 1 1] [1 1 0 1] [1 1 1 0] [0 0 1 1] [1 0 0 1] [1 1 0 0]}))
    (is (= (kayles/followers [1 1 0 1 0]) #{[0 1 0 1 0] [1 0 0 1 0] [1 1 0 0 0] [0 0 0 1 0]}))
    #_(is (= (kayles/followers [1 1 1 0 1 1 1 1 0 1 1])
           #{[1 1 1 0 1 1 1 0 0 1 1]
             [1 1 0 0 1 1 1 1 0 1 1]
             [1 0 0 0 1 1 1 1 0 1 1]
             [1 1 1 0 1 1 1 1 0 0 0]
             [1 1 1 0 1 1 0 0 0 1 1]
             [1 1 1 0 1 0 1 1 0 1 1]
             [1 0 1 0 1 1 1 1 0 1 1]
             [1 1 1 0 0 1 1 1 0 1 1]
             [0 0 1 0 1 1 1 1 0 1 1]
             [1 1 1 0 1 1 1 1 0 1 0]
             [1 1 1 0 1 0 0 1 0 1 1]
             [0 1 1 0 1 1 1 1 0 1 1]
             [1 1 1 0 1 1 1 1 0 0 1]
             [1 1 1 0 0 0 1 1 0 1 1]
             [1 1 1 0 1 1 0 1 0 1 1]}))
    (is (= (kayles/followers [1]) #{[0]}))
    (is (= (kayles/followers (kayles/followers [1 1])) #{[0 0]}))
    (is (= (kayles/followers (kayles/followers (kayles/followers [1 1 1]))) #{[0 0 0]}))
)
  (testing "heap equivalents"
    (is (= (kayles/heap-equivalents [[1 1 1 1 1 0 1 1] [1 1 1 1 1 1 1] ]) [[4 2] [2]]))
    (is (= (kayles/heap-equivalents [1 1 1 1 1 1 1 1 0 1 1 1 1])
           [1 1]
           )))
  (testing "heap-equivalents of followers"
    (is (= (kayles/heap-equivalents (kayles/followers [1 1 0 1 0])) [[1 1] [1 1] [2] [1]]
           ))
    ))

(deftest test-moves
  (testing "good-moves"
    (is (= (kayles/choose-good-move [1 1 1 1 1]) [1 1 0 1 1]))
    (is (= (kayles/choose-good-move [1 1]) [0 0]))
    (is (= (kayles/choose-good-move [1]) [0]))
    (is (= (kayles/choose-good-move [1 1 1 0 1 1]) [1 1 0 0 1 1]))
    (is (= (kayles/choose-good-move [1 0 1 1 0 1 1 1 1 1 1 1]) [0 0 1 1 0 1 1 1 1 1 1 1]))
    ))
