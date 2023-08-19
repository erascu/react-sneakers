import React from 'react';
import AppContext from '../../context';
import styles from '../Card/Card.module.scss'

function Card({ id, img, title, price, onClickPlus, onClickFav }) {
    const { isItemAdded } = React.useContext(AppContext);
    const [like, setLike] = React.useState(false);
    const itemObj = { id, parentId: id, img, title, price };

    const onClickBtn = () => {
        onClickPlus(itemObj);
    }

    const onClickLike = () => {
        onClickFav(itemObj);
        setLike(!like);
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__block}>
                    <button className={styles.like__btn} onClick={onClickLike}>
                        <img src={like ? "./img/like-active.svg" : "./img/like.svg"} alt="Like" />
                    </button >
                    <div className={styles.card__img}>
                        <img src={img} alt="Sneakers" />
                    </div>
                    <h2>{title}</h2>
                    <div className={styles.card__price}>
                        <div className={styles.card__info}>
                            <p>Цена:</p>
                            <p>{price} лей</p>
                        </div>
                        <button className={styles.card__button} onClick={onClickBtn}>
                            <img src={isItemAdded(id) ? "./img/add-active.svg" : "./img/add-btn.svg"} alt="Add button" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;