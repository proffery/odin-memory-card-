import styles from './Card.module.css'


const Card = (prop) => {
    const onClickHandler = () => {
        prop.onClick(prop.prop.id)
    }
    return (
        <div onClick={onClickHandler} className={styles.container} tabIndex={0}>
            <div className={styles.imgHolder}>
                <img className={styles.img} src={'./assets/img/cards/card' + prop.prop.id + '.jpg'} alt={prop.prop.name}></img>
            </div>
            <h4 className={styles.header}>{prop.prop.name}</h4>
        </div>
    )
}

export default Card