import styles from './Game.module.css'
import { useEffect, useState } from 'react'
import { cards } from '../../../Cards'
import Card from './card/Card'

const Game = (prop) => {
    const [updateScore, setUpdateScore] = useState(prop.prop.score)
    const [updateBestScore, setUpdateBestScore] = useState(prop.prop.bestScore)
    const [updateRound, setUpdateRound] = useState(prop.prop.round)
    const [updateIsGameStarted, setUpdateIsGameStarted] = useState(prop.prop.isGameStarted)
    const [updateIsGameEnded, setUpdateIsGameEnded] = useState(prop.prop.isGameEnded)
    const [randCards, setRandCards] = useState(new Array(updateRound + 1))
    
    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    
    const onFirstClickHandler = () => {
        setUpdateScore(updateScore + 1)
        prop.onChangeScore(updateScore)
        const shuffledArray = shuffle(randCards)
        setRandCards(shuffledArray)
    }

    const onSecondClickHandler = () => {
        setUpdateIsGameEnded(true)
    }
    // const handleScore = () => {
        //     setUpdateScore(prev => prev + 1)
        //     prop.onChangeScore(updateScore)
        // }
        
    // const handleBestScore = () => {
        //     setUpdateBestScore(prev => prev + 1)
        //     prop.onChangeBestScore(updateBestScore)
        // }
            
    // const handleRound = () => {
        //     setUpdateRound(prev => prev + 1)
        //     prop.onChangeRound(updateRound)
        // }
    useEffect(() => {
        if(cards.length < updateRound + 1) {
            return 'ERROR'
        }
        else {
            const newArray = [...cards]
            const shuffledArray = shuffle(newArray)
            const selectedElements = shuffledArray.slice(0, updateRound + 1)
            setRandCards(selectedElements)
        }

        if (updateIsGameEnded) {
            prop.onGameEnd(updateIsGameEnded)
            console.log('End game')
        }

    },[updateRound, updateIsGameEnded, prop])

    return (
        <div className={styles.container}>
            {/* <h1>Game</h1>
            <button onClick={handleScore}>Increment score</button>
            <button onClick={handleRound}>Increment round</button>
            <button onClick={handleBestScore}>Increment Best score</button> */}
            {randCards.map(card =>
                <Card key={'pl'+ card.id} prop={card} className={styles.card} onFirstClick={onFirstClickHandler} onSecondClick={onSecondClickHandler}/>
            )}
        </div>
    )
}

export default Game