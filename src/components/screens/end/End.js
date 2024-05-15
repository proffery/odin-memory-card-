import styles from './End.module.css'

const End = ({onGameStart, onGameEnd}) => {
    const changeFlags = () => {
        onGameStart(true)
        onGameEnd(false)
    }

    return <div className={styles.container}>
        <img className={styles.logo} alt='end-logo' src='./assets/img/end-game.jpg'></img>
        <div className={styles.window}>The game is over.
            <button onClick={changeFlags}>Start</button>
        </div>
    </div>
    
}

export default End
