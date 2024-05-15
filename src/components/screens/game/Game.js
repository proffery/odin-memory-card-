import styles from './Game.module.css'
import { useEffect, useState } from 'react'
import { cards } from '../../../Cards'
import Card from './card/Card'
import Flip from 'react-reveal/Flip'

const Game = ({onGameEnd, isGameEnded, onChangeRound, round, score, onChangeScore}) => {
    const [randCards, setRandCards] = useState([])
    const [clickIdList, setClickIdList] = useState([])
    const clickedSound = new Audio('./assets/sounds/click.wav')
    const roundSound = new Audio('./assets/sounds/round.mp3')
    const gameEndSound = new Audio('./assets/sounds/game-over.mp3')

    const onClickSound = async () => {
        await clickedSound.play()
    }
    const onRoundSound = async () => {
        await roundSound.play()
    }
    const onGameEndSound = async () => {
        await roundSound.play()
    }
    
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
    
    const onClickHandler = async (id) => {
        await onClickSound()

        if(clickIdList.includes(id)){
            onGameEnd(true)
            await onGameEndSound()
            return
        }

        const randCardsCopy = randCards.map(card => {
            if (card.id === id) {
                return {...card, checked: true}
            }
            return card
        })
        
        setRandCards(randCardsCopy)

        if (!isRoundEnded(randCardsCopy) && !isGameEnded) {
            onChangeScore(score + 1)
            const shuffledArray = shuffle(randCardsCopy)
            setRandCards(shuffledArray)
            setClickIdList(prev => [...prev, id])
            await onRoundSound()
        }
        else {
            setClickIdList([])
            onChangeRound(prev => prev + 1)
        }
    }

    useEffect(() => {
        if(cards.length < round + 1) {
            onGameEndSound().then(()=>onGameEnd(true))
        }
        else {
            const newArray = [...cards]
            const shuffledArray = shuffle(newArray)
            const selectedElements = shuffledArray.slice(0, round + 1)
            setRandCards(selectedElements)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [round, isGameEnded])

    return (
        <div className={styles.container}>
            {randCards.map(card =>
                <Flip left key={'pl'+ card.id}>
                    <Card card={card} onClick={onClickHandler}/>
                </Flip>
            )}
        </div>
    )
}

export default Game