import styles from './Game.module.css'
import { useState } from 'react'
import { Planets } from '../../../Planets'
import Card from './card/Card'

const Game = (prop) => {
    const [cards, setCards] = useState(new Array(prop.prop.round + 1))
    const [updateScore, setUpdateScore] = useState(prop.prop.score)
    const [updateBestScore, setUpdateBestScore] = useState(prop.prop.bestScore)
    const [updateRound, setUpdateRound] = useState(prop.prop.round)

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
        const getRandomId = () => {
            const rand = Math.floor(Math.random() * (Planets.length)).toString()
            return rand
        }
        cards.forEach(card => {setCards(prev => [...prev,  Planets.filter(planet => planet.id === getRandomId())])}) 
        console.log(cards)


    return (
        <div className={styles.container}>
            {/* <h1>Game</h1>
            <button onClick={handleScore}>Increment score</button>
            <button onClick={handleRound}>Increment round</button>
            <button onClick={handleBestScore}>Increment Best score</button> */}
            {cards.map(planet =>
                <Card key={'pl'+ planet.id} id={planet.id} name={planet.name} className={styles.card}/>
            )}

        </div>
    )
}

export default Game