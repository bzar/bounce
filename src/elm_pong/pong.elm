module Pong where
import Window
import Keyboard
import Char
import Random

{-- Input --}
type UserInput = { paddle1:Int, paddle2:Int, start:Bool }
userInput : Signal UserInput
userInput = UserInput <~ lift .y (Keyboard.directions (Char.toCode 'q') (Char.toCode 'a') 0 0)
                       ~ lift .y (Keyboard.directions (Char.toCode 'p') (Char.toCode 'l') 0 0)
                       ~ Keyboard.space
type Input = { timeDelta:Float, userInput:UserInput, randomDir:Float }

{-- Model --}
(courtWidth, courtHeight) = (600, 500)
(paddleWidth, paddleHeight) = (10, 80)
ballRadius = 4
(ballWidth, ballHeight) = (2 * ballRadius, 2 * ballRadius)

type Vec2 = (Float, Float)
type Object a = { a | pos:Vec2, v:Vec2 }
type Ball = Object {}
type Paddle = Object { a:Vec2 }
type Player = { paddle:Paddle, score:Int }
data Phase = InsertCoin | Intro | Play | GameOver
type GameState = { p1:Player, p2:Player, ball:Ball, phase:Phase, countDown:Float }

createPaddle : Float -> Paddle
createPaddle x = 
  { pos = (x, 0)
  , v = (0, 0)
  , a = (0, 0)
  }

defaultGame : GameState
defaultGame = 
  { p1 = { paddle = createPaddle (50 - courtWidth / 2), score = 0 }
  , p2 = { paddle = createPaddle (courtWidth / 2 - 50), score = 0 }
  , ball = { pos = (0, 0), v = (90, 70) }
  , phase = InsertCoin
  , countDown = 0
  }


{-- Update --}
wallBounce : Float -> Float -> Float -> Object a -> Object a
wallBounce dt w h obj = 
  let
    (x, y) = obj.pos
    (vx, vy) = obj.v
    newvx = vx --if abs (x + vx * dt) > courtWidth / 2 - w / 2 then -vx else vx
    newvy = if abs (y + vy * dt) > courtHeight / 2 - h / 2 then -vy else vy
  in
    { obj | v <- (newvx, newvy) }

paddleBounce : Float -> Paddle -> Ball -> Ball
paddleBounce dt paddle ball = 
  let (px, py) = paddle.pos
      (pvx, pvy) = paddle.v
      (x, y) = ball.pos
      (vx, vy) = ball.v
      collision = (px - x) * (vx - pvx) > 0
        && abs (px - x) <= (paddleWidth + ballWidth) / 2 
        && abs (py - y) <= (paddleHeight + ballHeight) / 2
      newvx = if collision then -vx else vx
      newvy = if collision then pvy + vy else vy
  in { ball | v <- (newvx, newvy) }

paddlesBounce : [Paddle] -> Float -> Ball -> Ball
paddlesBounce paddles dt ball = foldl (paddleBounce dt) ball paddles

moveObject : Float -> Object a -> Object a
moveObject dt obj = 
  let (x, y) = obj.pos
      (vx, vy) = obj.v
  in { obj | pos <- (x + vx * dt, y + vy * dt) }

moveBall : Ball -> [Paddle] -> Float -> Ball
moveBall ball paddles dt = ball |> wallBounce dt ballWidth ballHeight
                                |> paddlesBounce paddles dt
                                |> moveObject dt

controlPaddle : Int -> Paddle -> Paddle
controlPaddle direction paddle = { paddle | a <- (0.0, toFloat direction * 700) }

controlPaddles : UserInput -> GameState -> GameState
controlPaddles userInput ({p1, p2} as gameState) = 
  let newp1 = { p1 | paddle <- controlPaddle userInput.paddle1 p1.paddle }
      newp2 = { p2 | paddle <- controlPaddle userInput.paddle2 p2.paddle }
  in { gameState | p1 <- newp1
                 , p2 <- newp2 }

acceleratePaddle : Float -> Paddle -> Paddle
acceleratePaddle dt paddle = 
  let (vx, vy) = paddle.v
      (ax, ay) = paddle.a
  in { paddle | v <- (0.95 * vx + ax * dt, 0.95 * vy + ay * dt) }
  
movePaddle : Float -> Paddle -> Paddle
movePaddle dt paddle = paddle |> acceleratePaddle dt
                              |> wallBounce dt paddleWidth paddleHeight
                              |> moveObject dt
                              
stepPaddles : Float -> GameState -> GameState
stepPaddles timeDelta ({p1, p2} as gameState) = 
  { gameState | p1 <- { p1 | paddle <- movePaddle timeDelta p1.paddle }
              , p2 <- { p2 | paddle <- movePaddle timeDelta p2.paddle } }

stepBall : Float -> GameState -> GameState
stepBall timeDelta ({p1, p2, ball} as gameState) = 
  let newBall = moveBall ball [p1.paddle, p2.paddle] timeDelta
  in { gameState | ball <- newBall }

awardScore : Int -> GameState -> GameState
awardScore p ({p1, p2} as gameState) = 
  if | p == 1 -> { gameState | p1 <- { p1 | score <- p1.score + 1 } }
     | p == 2 -> { gameState | p2 <- { p2 | score <- p2.score + 1 } }
     
stepScore : GameState -> GameState
stepScore ({p1, p2} as gameState) = 
  let p1goal = fst gameState.ball.pos >  courtWidth / 2 + ballWidth / 2
      p2goal = fst gameState.ball.pos < -courtWidth / 2 - ballWidth / 2
  in if | p1goal -> awardScore 1 gameState
        | p2goal -> awardScore 2 gameState 
        | otherwise -> gameState

resetBall : Float -> GameState -> GameState
resetBall randomDir ({ball} as gameState) =
  let d = if randomDir >= 0.5 then (randomDir - 0.5) / 2 + 0.875 else randomDir / 2 + 0.375
  in { gameState | ball <- { ball | pos <- (0, 0), 
                                    v <- (200 * cos (2 * pi * d),  
                                          200 * sin (2 * pi * d)) } }

checkWin : GameState -> GameState
checkWin ({p1,p2} as gameState) =
  let gameover = p1.score >= 10 || p2.score >= 10
  in if gameover then { gameState | phase <- GameOver } else gameState

stepState : Float -> GameState -> GameState
stepState randomDir ({ball} as gameState) = 
  let isGoal = abs (fst gameState.ball.pos) > courtWidth / 2 + ballWidth / 2
  in if | isGoal -> gameState |> resetBall randomDir |> checkWin
        | otherwise -> gameState
    

startGame : Bool -> GameState -> GameState
startGame start ({p1, p2} as gameState) = 
  if | start -> { gameState | phase <- Intro
                            , countDown <- 4.0
                            ,  p1 <- { p1 | score <- 0 } 
                            ,  p2 <- { p2 | score <- 0 } }
     | otherwise -> gameState

stepIntro : Float -> GameState -> GameState
stepIntro dt ({countDown} as gameState) = 
  if countDown <= dt
  then { gameState | phase <- Play, countDown <- 0 }
  else { gameState | countDown <- countDown - dt }

stepGame : Input -> GameState -> GameState
stepGame input ({phase} as gameState) = 
  if | phase == InsertCoin -> startGame input.userInput.start gameState
     | phase == GameOver -> startGame input.userInput.start gameState
     | phase == Intro -> stepIntro input.timeDelta gameState
     | phase == Play -> gameState |> controlPaddles input.userInput
                                  |> stepPaddles input.timeDelta
                                  |> stepBall input.timeDelta
                                  |> stepScore 
                                  |> stepState input.randomDir


{-- Draw --}

bouncePurple = rgb 213 115 230

courtStyle = { defaultLine | width <- 5, color <- bouncePurple }
                            
courtEdges = outlined courtStyle (rect courtWidth (courtHeight))
courtMiddleLine = traced { courtStyle | width <- 2 } 
  (segment (0, -courtHeight/2) (0, courtHeight/2))

drawPaddle : Paddle -> Form
drawPaddle p = move p.pos (filled bouncePurple (rect paddleWidth paddleHeight))

drawBall : Ball -> Form
drawBall b = move b.pos (filled bouncePurple (circle ballRadius))

createMessage : String -> Form
createMessage msg = 
  let msgStyle = { defaultStyle | typeface <- ["orbitron", "sans-serif"]
                                , height <- Just 32 
                                , color <- bouncePurple }
  in msg |> toText |> style msgStyle |> centered |> toForm

drawGameOver : Phase -> Form
drawGameOver phase =
  if phase == GameOver
  then move (0, -2 * courtHeight / 6) (createMessage "GAME OVER")
  else filled white (square 0)

drawCountDown : Float -> Form
drawCountDown value = 
  let content = if | value > 3 -> "3"
                   | value > 2 -> "2"
                   | value > 1 -> "1"
                   | otherwise -> "GO"
      contentOpacity = if value > 1 then 1 else value
      el = createMessage content |> alpha contentOpacity
  in move (0, -2 * courtHeight / 6) el

display : (Int,Int) -> GameState -> Element
display (w,h) gameState = collage courtWidth courtHeight
  [ courtEdges
  , courtMiddleLine
  , drawPaddle gameState.p1.paddle
  , drawPaddle gameState.p2.paddle
  , drawBall gameState.ball
  , drawCountDown gameState.countDown
  , drawGameOver gameState.phase
  ]      

{-- Ports in --}
port renderFrame : Signal Float

{-- Main --}
delta = inSeconds <~ renderFrame
random = Random.float delta
input = sampleOn delta (lift3 Input delta userInput random)
gameState = foldp stepGame defaultGame input
main = lift2 display Window.dimensions gameState


{-- Ports out --}
getScore1 gameState = gameState.p1.score
getScore2 gameState = gameState.p2.score
getRunning gameState = gameState.phase == Play
port score1 : Signal Int
port score1 = sampleOn delta (lift getScore1 gameState)
port score2 : Signal Int
port score2 = sampleOn delta (lift getScore2 gameState)
port running : Signal Bool
port running = sampleOn delta (lift getRunning gameState)

