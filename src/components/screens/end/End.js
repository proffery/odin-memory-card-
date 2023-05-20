import styles from './End.module.css'

const End = (prop) => {
    const changeFlags = () => {
        prop.onGameStart(true)
        prop.onGameEnd(false)
    }

    return <div className={styles.container}>The game is over.
        <button onClick={changeFlags}>Start new game?</button>
    </div>
}

export default End
