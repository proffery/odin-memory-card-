import { useState } from 'react'
import styles from './Card.module.css'


const Card = (prop) => {
    const [isCardChecked, setIsCardChecked] = useState(false)
    
    const onClickHandler = () => {
        if(!isCardChecked) {
            setIsCardChecked(true)
            prop.onFirstClick()
        }
        else {
            prop.onSecondClick()
        }
    }
    return (
        <div className={styles.container} onClick={onClickHandler}>
            <div className={styles.imgHolder}>
                <img className={styles.img} src={'/assets/img/cards/card' + prop.prop.id + '.jpg'} alt={prop.prop.name}></img>
            </div>
            <h4 className={styles.header}>{prop.prop.name}</h4>
        </div>
    )
}

export default Card