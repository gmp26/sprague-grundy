(ns ^:figwheel-always events.svg)

;;;
;; svg mouse handling
;;;
(defn touchXY
  "get position of first changed touch"
  [event]
  (let [touch (aget (.-changedTouches event) 0)]
    [(.-clientX touch) (.-clientY touch)]))

(defn mouseXY
  "get mouse position"
  [event]
  [(.-clientX event) (.-clientY event)])

(defn eventXY
  "get touch or mouse position"
  [event]
  (let [type (subs (.-type event) 0 5)]
    (condp = type
      "mouse" (mouseXY event)
      "touch" (touchXY event)
      )))

(defn mouse->svg
  "browser independent transform from mouse/touch coords to svg viewport"
  [svg-element svg-point event]
  (let [pt (if @svg-point
             @svg-point
             (do
               (reset! svg-point (.createSVGPoint svg-element))
               @svg-point))
        matrix (.inverse (.getScreenCTM svg-element))
        [x y] (eventXY event)]
    (aset pt "x" x)
    (aset pt "y" y)
    (reset! svg-point (.matrixTransform pt matrix))
    [(.-x @svg-point) (.-y @svg-point)]))

(defn handle-out
  "mouse-out"
  [event]
  (.preventDefault event)
  )

(defn handle-start-line
  "start dragging a line"
  [event]
  (.preventDefault event)
  )

(defn handle-move-line
  "continue dragging a line"
  [event]
  (.preventDefault event)
  )

(defn handle-end-line
  "handle end of drag. Convert to a tap if not moved"
  [event]
  (.preventDefault event)
  )

;;;;;;;;;;;;;;;;;;;;;;

(comment ;; all this is game specific at the moment
  (defn scale [factor]
    (fn [[x y]] [(* factor x) (* factor y)]))

  (defn svg->game
    "transform from svg viewport coords to game coords"
    [g]
    (comp
     (fn [[x y]] [(spag x) (spag y)])
     (scale (/ (:n g) scale-n ))))

  (defn mouse->dot
    "find dot under mouse/touch point"
    [event]
    (game->dot ((svg->game @game) (mouse->svg event))))

  (defn handle-start-line
    "start dragging a line"
    [event]
    (let [g @game
          wps @w-points]
      (if (player-can-move? g wps)
        (let [svg (mouse->svg event)
              dot (game->dot ((svg->game g) svg))]
          (reset! drag-line [[dot dot] (.now js/Date)]))
        (.preventDefault event)
        )))

  (defn handle-move-line
    "continue dragging a line"
    [event]
    (.preventDefault event)
    (let [svg (mouse->svg event)
          g @game
          [[drag-start _ :as dl] started-at] @drag-line
          drag-end ((svg->game g) svg)]
      (when dl
        (reset! drag-line [[drag-start drag-end] started-at]))))

  (defn handle-end-line
    "handle end of drag. Convert to a tap if not moved"
    [event]
    (.preventDefault event)
    (let [g @game
          wps @w-points
          [[draw-start _] started-at] @drag-line
          now (.now js/Date)
          dot (mouse->dot event)
          line (canonical-line [draw-start dot])
          new-wps (new-way-points line)
          pl (:player g)
          ]
      (when (player-can-move? g wps)
        (let [game-state (cond

                           ;; handle possible drag-line
                           (line-move? line)
                           (do
                             #_(prn (str "line move " line))
                             (play-line-move [g wps] line))

                           ;; handle possible tap or click
                           (dot-move? dot)
                           (if (< (- now started-at) click-interval)
                             (play-dot-move [g wps] dot)
                             nil)

                           :else nil)]


          (when game-state (commit-move game-state))

          (when (ai-turn? @game @w-points)
            (schedule-ai-turn))

          ))
      (reset! drag-line [nil 0]))))
