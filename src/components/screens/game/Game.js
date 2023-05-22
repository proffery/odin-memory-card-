import styles from './Game.module.css'
import { useEffect, useState } from 'react'
import { cards } from '../../../Cards'
import Card from './card/Card'

const Game = (prop) => {
    const [updateScore, setUpdateScore] = useState(prop.prop.score)
    const [updateRound, setUpdateRound] = useState(prop.prop.round)
    const [updateIsGameEnded, setUpdateIsGameEnded] = useState(prop.prop.isGameEnded)
    const [randCards, setRandCards] = useState([])
    const [clickIdList, setClickIdList] = useState([])
    
    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    
    const isRoundEnded = (array) => {
        for(let i = 0; i < array.length; i++) {
            if (array[i].checked === false) {
                return false
            }
        }
        return true
    }
    
    const onClickHandler = (id) => {


        if(clickIdList.includes(id)){
            setUpdateIsGameEnded(true)
        }

        const randCardsCopy = randCards.map(card => {
            if (card.id === id) {
                return {...card, checked: true}
            }
            return card
        })
        
        setRandCards(randCardsCopy)

        if (!isRoundEnded(randCardsCopy)) {
            setUpdateScore(updateScore + 1)
            prop.onChangeScore(updateScore + 1)
            const shuffledArray = shuffle(randCardsCopy)
            setRandCards(shuffledArray)
            setClickIdList(prev => [...prev, id])

        }
        else {
            setClickIdList([])
            setUpdateRound(updateRound + 1)
            prop.onChangeRound(updateRound + 1)
        }
    }

    useEffect(() => {
        if(cards.length < updateRound + 1) {
            setUpdateIsGameEnded(true)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateRound, updateIsGameEnded])

    return (
        <div className={styles.container}>
            {randCards.map(card =>
                <Card key={'pl'+ card.id} prop={card} className={styles.card} onClick={onClickHandler}/>
            )}
        </div>
    )
}

export default Game