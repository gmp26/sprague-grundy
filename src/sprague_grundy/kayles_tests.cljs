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

(deftest kayles-takeouts
  (testing "single removals"
    (is (= (kayles/takeout-pins 1 1) #{[0]}))
    (is (= (kayles/takeout-pins 2 1) #{[1]}))
    (is (= (kayles/takeout-pins 3 1) #{[1 1] [2]}))
    (is (= (kayles/takeout-pins 4 1) #{[3] [1 2] [2 1]}))
    (is (= (kayles/takeout-pins 5 1) #{[4] [1 3] [2 2] [3 1]}))
    (is (= (kayles/takeout-pins 8 1) #{[7] [1 6] [2 5] [3 4] [4 3] [5 2] [6 1]}))
    (is (= (kayles/takeout-pins 9 1) #{[8] [1 7] [2 6] [3 5] [4 4] [5 3] [6 2] [7 1]}))
    ))

(deftest kayles-double-takeouts
  (testing "double removals"
    (is (= (kayles/takeout-pins 1 2) #{[0]}))
    (is (= (kayles/takeout-pins 2 2) #{[0]}))
    (is (= (kayles/takeout-pins 3 2) #{[1]}))
    (is (= (kayles/takeout-pins 4 2) #{[1 1] [2]}))
    (is (= (kayles/takeout-pins 5 2) #{[3] [1 2] [2 1]}))
    (is (= (kayles/takeout-pins 6 2) #{[4] [1 3] [2 2] [3 1]}))
    (is (= (kayles/takeout-pins 9 2) #{[7] [1 6] [2 5] [3 4] [4 3] [5 2] [6 1]}))
    ))

(deftest kayles-single-or-double-takeouts
  (testing "any removal"
    (is (= (kayles/aim-at-row 1) #{[0]}))
    (is (= (kayles/aim-at-row 2) #{[0] [1]}))
    (is (= (kayles/aim-at-row 3) #{[1] [1 1] [2]}))
    (is (= (kayles/aim-at-row 4) #{[3] [1 1] [2] [1 2] [2 1]}))
    (is (= (kayles/aim-at-row 5) #{[3] [1 2] [2 1] [4] [1 3] [2 2] [3 1]}))
    (is (= (kayles/aim-at-row 9) #{[8] [1 7] [2 6] [3 5] [4 4] [5 3] [6 2] [7 1] [7] [1 6] [2 5] [3 4] [4 3] [5 2] [6 1]}))
    ))

(deftest state-followers
  (testing "followers from a state vector"
    (is (= (kayles/followers [1 1]) #{[1]}))
    (is (= (kayles/followers [1 1 1]) #{[1 1]}))
    (is (= (kayles/followers [2]) #{[0] [1]}))
    ))
