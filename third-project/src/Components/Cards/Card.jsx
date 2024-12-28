import { Button } from "../Button/Button"
import Styles from "../Cards/Card.module.css"

export let Card = (({ category, imgSrc, id, title, description, price }) => {
    return (
        <div className={Styles.main}>
            <div className={Styles.top}>
                <h1>{category}</h1>
                <img className={Styles.image} src={imgSrc} alt="" />
            </div>
            <div>
                <h1 className={Styles.title}>{title}</h1>
                <p className={Styles.description}><b>Description :</b> {description}</p>
                <h1>Rs. {price}</h1>
                <Button />
            </div>
        </div>
    )
})