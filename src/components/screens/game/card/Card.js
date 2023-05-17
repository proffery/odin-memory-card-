import styles from './Card.module.css'

const Card = ({id, name, isChecked}) => {


    return (
        <div className={styles.container}>
            <div className={styles.imgHolder}>
                <img alt={name}></img>
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default Card