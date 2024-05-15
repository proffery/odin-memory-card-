import React, {useState} from 'react'
import styles from './Start.module.css'
import Scores from '../../scores/Scores'
import Game from '../game/Game'
import End from '../end/End'

const Start = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [round, setRound] = useState(0)

  const startGameHandler = () => {
    setIsGameStarted(true)
    setScore(0)
    setRound(1)
  }
  const onChangeScore = (newScore) => {
    setScore(newScore)
    if (bestScore < newScore) {
      setBestScore(newScore)
    }
  }

  const onChangeRound = (newRound) => {
    setRound(newRound)
    if(!isGameEnded){
      onChangeScore(score + 1)
    }
  }

  const onGameEnd = (endGameFlag) => {
    setIsGameEnded(endGameFlag)
  }

  const onGameStart = (startGameFlag) => {
    setIsGameStarted(startGameFlag)
    startGameHandler()
  }

  return (
    <React.StrictMode>
      <Scores score={score} best={bestScore} round={round}/>
      {!isGameStarted ? (
        <div className={styles.container}>
          <img src={'./assets/img/cards/card' + Math.floor(Math.random() * 30) + '.jpg'} alt='logo' className={styles.logo}/>
          <div className={styles.window}>
            Start new game?
            <button type='button' onClick={startGameHandler}>Start</button>
          </div>
        </div>
      ) : !isGameEnded ? (
        <Game score={score}
              round={round}
              isGameEnded={isGameEnded}
              onChangeScore={onChangeScore}
              onChangeRound={onChangeRound}
              onGameEnd={onGameEnd}/>
      ) : (
          <End isGameStarted={isGameStarted}
                isGameEnded={isGameEnded}
                onGameEnd={onGameEnd}
                onGameStart={onGameStart}
          />
      )}
    </React.StrictMode>
  )
};

export default Start;
