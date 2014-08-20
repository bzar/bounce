(ns cljs-pong.keys)

(def player-action (atom {:player-1 :none}))

(defn- key-code-to-action [key-code]
  (case key-code
    81 [:player-1 :up] ;q
    65 [:player-1 :down] ;a
    :unknown))

(defn key-down [key-code]
  (let [action (key-code-to-action key-code)]
    (if (not (= :unknown action))
      (swap! player-action conj action))))

(defn key-up [key-code]
  (let [action (key-code-to-action key-code)]
    (if (not (= :unknown action))
      (swap! player-action conj (assoc (key-code-to-action key-code) 1 :none)))))

(defn get-player-actions [] (@player-action))

(defn register-key-handlers []
  (set! (.-onkeydown js/document) #(key-down (.-keyCode %)))
  (set! (.-onkeyup js/document) #(key-up (.-keyCode %))))
