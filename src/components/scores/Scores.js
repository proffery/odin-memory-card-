import styles from './Scores.module.css'

const Scores = ({score, best, round}) => {
    
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Score: {score}</h2>
            <h2 className={styles.header}>Round: {round}</h2>
            <h2 className={styles.header}>Best: {best}</h2>
        </div>
    )
}

export default Scores