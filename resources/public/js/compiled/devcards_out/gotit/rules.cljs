(ns ^:figwheel-always gotit.rules)

;;;
;; The state of gotit is completely defined by a map containing
;;
;; :n - the current location
;; :target - the number we are aiming for
;; :limit - the maximum possible move each turn
;;;

(def env (atom  {:target 23 :limit 4}))

(defn rules
  "The rules define the possible next states for the given settings - a derefed environment, and
  the single state variable n."
  [settings n]
  (let [possible-moves (range 1 (inc (min (- (:target settings) n) (:limit settings))))]
    (map #(+ n %) possible-moves))
  )
