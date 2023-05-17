import styles from './Card.module.css'


const Card = ({id, name}) => {

    return (
        <div className={styles.container}>
            <div className={styles.imgHolder}>
                <img className={styles.img} src={'/assets/img/cards/planet' + id + '.jpg'} alt={name}></img>
            </div>
            <h4 className={styles.header}>{name}</h4>
        </div>
    )
}

export default Card