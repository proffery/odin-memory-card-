import styles from './Scores.module.css'

const Scores = ({score, best, round}) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Memory Card Game</h1>
                <h3>Don't click on the card twice!</h3>
            </div>
            <div className={styles.scores}>
                <h2 className={styles.info}>Score: {score}</h2>
                <h2 className={styles.info}>Round: {round}</h2>
                <h2 className={styles.info}>Best: {best}</h2>
            </div>
        </div>
    )
}

export default Scores