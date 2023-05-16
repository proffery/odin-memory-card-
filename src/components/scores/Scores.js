import styles from './Scores.module.css'

const Scores = ({score, best}) => {
    
    return (
        <div className={styles.container}>
            <h2>Score: {score}</h2>
            <h2>Best result: {best}</h2>
        </div>
    )
}

export default Scores