import styles from './Card.module.css'


const Card = ({card, onClick}) => {

    const onClickHandler = () => {
        onClick(card.id)
    }
    return (
        <div onClick={onClickHandler} className={styles.container} tabIndex={0}>
            <div className={styles.imgHolder}>
                <img className={styles.img} src={'./assets/img/cards/card' + card.id + '.jpg'} alt={card.name}></img>
            </div>
            <h4 className={styles.header}>{card.name}</h4>
        </div>
    )
}

export default Card