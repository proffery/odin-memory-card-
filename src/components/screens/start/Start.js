import React from 'react'
import { useState } from 'react'
import styles from './Start.module.css'
import Scores from '../../scores/Scores'
import Game from '../game/Game'

const Start = () => {
  const [isGAmeStarted, setIsGAmeStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const startGameHandler = () => {
    setIsGAmeStarted((prev) => !prev)
    setScore(0)
  }
  const changeScore = (newScore) => {
    setScore(newScore)
  }

  const changeBestScore = (newBestScore) => {
    setBestScore(newBestScore)
  }

  return (
    <React.StrictMode>
      <Scores score={score} best={bestScore}/>
      {!isGAmeStarted ? (
      <div className={styles.container}>
        Start new game?
        <button type='button' onClick={startGameHandler}>Start</button>
      </div>
      ) : (
        <Game prop={{score: score, bestScore: bestScore}} onChangeScore={changeScore} onChangeBestScore={changeBestScore}/>
      )}
    </React.StrictMode>
  )
};

export default Start;
