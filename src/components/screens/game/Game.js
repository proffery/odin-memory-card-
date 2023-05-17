import styles from './Game.module.css'
import { useState } from 'react'

const Game = (prop) => {

    const [updateScore, setUpdateScore] = useState(prop.prop.score)
    const [updateBestScore, setUpdateBestScore] = useState(prop.prop.bestScore)
    const [updateRound, setUpdateRound] = useState(prop.prop.round)

    const handleScore = () => {
        setUpdateScore(prev => prev + 1)
        prop.onChangeScore(updateScore)
    }

    const handleBestScore = () => {
        setUpdateBestScore(prev => prev + 1)
        prop.onChangeBestScore(updateBestScore)
    }

    const handleRound = () => {
        setUpdateRound(prev => prev + 1)
        prop.onChangeRound(updateRound)
    }

    return (
        <div className={styles.container}>
            <h1>Game</h1>
            <button onClick={handleScore}>Increment score</button>
            <button onClick={handleRound}>Increment round</button>
            <button onClick={handleBestScore}>Increment Best score</button>
        </div>
    )
}

export default Game