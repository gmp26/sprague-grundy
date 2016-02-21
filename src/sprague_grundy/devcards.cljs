(ns sprague-grundy.devcards
  (:require
   [sablono.core :as sab :include-macros true]
   [sprague-grundy.core :as core]
   [gotit.samples :refer [gotit1 gotit2 gotit1-followers gotit2-followers gotit1-heaps gotit2-heaps gotit1-grundy gotit2-grundy]]
   [gotit.rules :as gotit]
   [snail.samples :refer [snail1 snail2 snail1-followers snail2-followers snail1-heaps snail2-heaps]]
   [snail.rules :as snail]
   [dollar.samples :refer [dollar1 dollar2 dollar1-followers dollar2-followers dollar1-heaps dollar2-heaps]]
   [dollar.rules :as dollar]
   [kayles.rules :as kayles]
   [kayles.samples :refer [kayles1 kayles2 kayles1-followers kayles2-followers kayles1-heaps kayles2-heaps]]
   [cljs.test :refer-macros [is are testing run-tests]]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

#_(defcard mex
(sab/html
 [:div
  [:p "mex returns the minimum excludant - the smallest non-negative integer that is not present!"]
  [:p "mex #{0 1 5 3 2} = " (core/mex #{0 1 5 3 2})]
  [:p "mex #{1 5 3 2} = " (core/mex #{1 5 3 2})]]))

(deftest mex
  "Minimum excludant tests"
  (is (= (core/mex #{0 1 5 2 4}) 3))
  (is (= (core/mex #{5 4 3 2 1 0}) 6))
  (is (= (core/mex #{0}) 1))
  (is (= (core/mex #{}) 0))
  (is (= (core/mex #{1 2 3}) 0))
  )

(deftest nim-sum
  "nim-sum tests"
  (is (= (core/nim-sum 5 5) 0))
  (is (= (core/nim-sum [5 5]) 0)))

(deftest gotit-state-list
  "gotit1 states"
  (is (= (core/states-> gotit1 gotit1-followers)
         #{0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23}))
  )

(deftest gotit-follower-tests
  (testing "gotit1"
    (is (= (gotit1-followers 13) #{14 15 16 17}))
    (is (= (gotit1-followers #{14 15 16 17}) #{15 16 17 18 19 20 21}))
    (is (= (gotit1-followers #{21 22}) #{22 23}))
    (is (= (gotit1-followers 23) #{})))
  (testing "gotit2"
    (is (= (gotit2-followers 13) #{14 15}))
    (is (= (gotit2-followers #{14 15 16 17}) #{15 16 17 18 19}))
    (is (= (gotit2-followers #{21 22}) #{22 23}))
    (is (= (gotit2-followers 23) #{}))))

#_(defcard gotit.heap-equivalents
(sab/html [:div
           [:h3 "Gotit heap equivalents using mod"]
           [:p "(heap-equivalent 23) => " (gotit1-heaps 23)]
           [:p "(heap-equivalent 22) => " (gotit1-heaps 22)]
           [:p "(heap-equivalent 21) => " (gotit1-heaps 21)]
           [:p "(heap-equivalent 20) => " (gotit1-heaps 20)]
           [:p "(heap-equivalent 19) => " (gotit1-heaps 19)]
           [:p "(heap-equivalent 18) => " (gotit1-heaps 18)]
           ]))

(deftest gotit-heaps
  (testing "gotit1"
    (is (= (gotit1-heaps 18) 0))
    (is (= (gotit1-heaps 20) 3))
    (is (= (gotit1-heaps 23) 0))
    (is (= (gotit1-heaps 1)  2))
    )
  (testing "gotit2"
    (is (= (gotit2-heaps 18) 2))
    (is (= (gotit2-heaps 20) 0))
    (is (= (gotit2-heaps 23) 0))
    (is (= (gotit2-heaps 1)  1))
    ))

#_(defcard gotit.nimbers
(sab/html [:div
           [:h3 "Gotit nimber calculation using game graph"]
           [:p "(grundy-number 23) => " (gotit1-grundy 23)]
           [:p "(grundy-number 22) => " (gotit1-grundy 22)]
           [:p "(grundy-number 21) => " (gotit1-grundy 21)]
           [:p "(grundy-number 20) => " (gotit1-grundy 20)]
           [:p "(grundy-number 19) => " (gotit1-grundy 19)]
           [:p "(grundy-number 18) => " (gotit1-grundy 18)]
           ]))

(deftest gotit-nimbers-from-game-graph
  (testing "gotit1"
    (is (= (gotit1-grundy 18) 0))
    (is (= (gotit1-grundy 20) 3))
    (is (= (gotit1-grundy 23) 0))
    #_(is (= (gotit1-grundy 1)  2))  "correct but takes 5 secs or so"
    )
  (testing "gotit2"
    (is (= (gotit2-grundy 18) 2))
    (is (= (gotit2-grundy 20) 0))
    (is (= (gotit2-grundy 23) 0))
    #_(is (= (gotit2-grundy 1)  1))  "correct but incredibly slow"
    ) )

  ;;
  ;; Typical snail game settings
  ;;

#_(defcard snail.rules
(sab/html [:div
           [:h3 (str "Snail {:start " (:start snail1)
                     " :limit " (:limit snail1)) "}"]
           [:p (str " followers [4 8 13 18] => " (snail1-followers [4 8 13 18]))]]))

(deftest snail-rules-test
  (testing "snail1"
    (is (= (snail1-followers [4 8 13 18])  [[8 13 18]
                                            [1 8 13 18]
                                            [2 8 13 18]
                                            [3 8 13 18]
                                            [4 5 13 18]
                                            [4 6 13 18]
                                            [4 7 13 18]
                                            [4 8 9 18]
                                            [4 8 10 18]
                                            [4 8 11 18]
                                            [4 8 12 18]
                                            [4 8 13 14]
                                            [4 8 13 15]
                                            [4 8 13 16]
                                            [4 8 13 17]]))))


(deftest test-snail-heaps
  (testing "snail1 heap equivalents"
    (let [heap-check (fn [state heaps]
                       (is (= (snail1-heaps state) heaps) (str state " -> " heaps)))]
      (heap-check [4 8 13 18] [4 3])
      (heap-check [4 8 13 17] [3 3])
      (heap-check [8 13 17] [3 8])
      (heap-check [3 13 17] [3 3])
      (heap-check [3 13 14] [0 3])
      (heap-check [13 14] [0])
      (heap-check [5 14] [8])
      (heap-check [5 6] [0])
      (heap-check [6] [6])
      (heap-check [] [0])
      )))

(deftest test-snail2-heaps
  (testing "snail2 heap equivalents"
    (let [heap-check (fn [state heaps]
                       (is (= (snail2-heaps state) heaps) (str state " -> " heaps)))]
      (heap-check [4 8 13 18] [1 0])
      (heap-check [4 8 13 17] [0 0])
      (heap-check [8 13 17] [0 2])
      (heap-check [3 13 17] [0 0])
      (heap-check [3 13 14] [0 0])
      (heap-check [13 14] [0])
      (heap-check [5 14] [2])
      (heap-check [5 6] [0])
      (heap-check [6] [0])
      (heap-check [] [0])
      )))

(deftest dollar-rules-test
  (testing "dollar1"
    (is (= (dollar1-followers [4 8 13 18])  [
                                             [1 8 13 18]
                                             [2 8 13 18]
                                             [3 8 13 18]
                                             [4 5 13 18]
                                             [4 6 13 18]
                                             [4 7 13 18]
                                             [4 8 9 18]
                                             [4 8 10 18]
                                             [4 8 11 18]
                                             [4 8 12 18]
                                             [4 8 13 14]
                                             [4 8 13 15]
                                             [4 8 13 16]
                                             [4 8 13 17]]))))
