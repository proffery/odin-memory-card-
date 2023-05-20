import styles from './Game.module.css'
import { useEffect, useState } from 'react'
import { cards } from '../../../Cards'
import Card from './card/Card'

const Game = (prop) => {
    const [updateScore, setUpdateScore] = useState(prop.prop.score)
    const [updateRound, setUpdateRound] = useState(prop.prop.round)
    const [updateIsGameEnded, setUpdateIsGameEnded] = useState(prop.prop.isGameEnded)
    const [randCards, setRandCards] = useState([])
    const [clickCounter, setClickCounter] = useState(0)
    
    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    
    const onFirstClickHandler = () => {
        if (clickCounter < updateRound) {
            setUpdateScore(updateScore + 1)
            prop.onChangeScore(updateScore + 1)
            const shuffledArray = shuffle(randCards)
            setRandCards(shuffledArray)
            setClickCounter(clickCounter + 1)
        }
        else {
            setClickCounter(0)
            setUpdateRound(updateRound + 1)
            prop.onChangeRound(updateRound + 1)
        }
    }

    const onSecondClickHandler = () => {
        setUpdateIsGameEnded(true)
    }
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
        }
    },[updateRound, updateIsGameEnded])

    return (
        <div className={styles.container}>
            {randCards.map(card =>
                <Card key={'pl'+ card.id} prop={card} className={styles.card} onFirstClick={onFirstClickHandler} onSecondClick={onSecondClickHandler}/>
            )}
        </div>
    )
}

export default Game