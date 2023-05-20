import React from 'react'
import { useState } from 'react'
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
  const changeScore = (newScore) => {
    setScore(newScore)
    if (bestScore < newScore) {
      setBestScore(newScore)
    }
  }

  const changeRound = (newRound) => {
    setRound(newRound)
  }

  const onGameEnd = (endGameFlag) => {
    setIsGameEnded(endGameFlag)
  }

  const onGameStart = (startGameFlag) => {
    setIsGameStarted (startGameFlag)
    startGameHandler()
  }

  return (
    <React.StrictMode>
      <Scores score={score} best={bestScore} round={round}/>
      {!isGameStarted ? (
      <div className={styles.container}>
        Start new game?
        <button type='button' onClick={startGameHandler}>Start</button>
      </div>
      ) : !isGameEnded ? (
        <Game prop={{score, bestScore, round, isGameStarted, isGameEnded}} 
        onChangeScore={changeScore} onChangeRound={changeRound} onGameEnd={onGameEnd}/>
      ) : (<End prop={{isGameStarted, isGameEnded}} onGameEnd={onGameEnd} onGameStart={onGameStart}/>)}
    </React.StrictMode>
  )
};

export default Start;
