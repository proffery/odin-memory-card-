import React from 'react'
import { useState } from 'react'
import styles from './Start.module.css'
import Scores from '../../scores/Scores'
import Game from '../game/Game'

const Start = () => {
  const [isGameStarted, setIsGAmeStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [round, setRound] = useState(0)

  const startGameHandler = () => {
    setIsGAmeStarted((prev) => !prev)
    setScore(0)
    setRound(1)
  }
  const changeScore = (newScore) => {
    setScore(newScore)
  }

  const changeBestScore = (newBestScore) => {
    setBestScore(newBestScore)
  }

  const changeRound = (newRound) => {
    setRound(newRound)
  }

  return (
    <React.StrictMode>
      <Scores score={score} best={bestScore} round={round}/>
      {!isGameStarted ? (
      <div className={styles.container}>
        Start new game?
        <button type='button' onClick={startGameHandler}>Start</button>
      </div>
      ) : (
        <Game prop={{score, bestScore, round}} onChangeScore={changeScore} onChangeBestScore={changeBestScore} onChangeRound={changeRound}/>
      )}
    </React.StrictMode>
  )
};

export default Start;
