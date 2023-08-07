import React, { useState } from 'react';
import styles from '../Card/Card.module.scss'

function Card({ img, title, price, onClickPlus }) {
    // const propsTitle = () => {
    //     if (props.title.length <= 49) {
    //         return props.title.slice(0, 49);
    //     } else {
    //         return props.title.slice(0, 49) + '...';
    //     }
    // }
    const [isAdded, setIsAdded] = useState(false);
    const [like, setLike] = useState(false);

    const onClickBtn = () => {
        onClickPlus({ img, title, price });
        setIsAdded(!isAdded);
    }

    const onClickLike = () => {
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
                            <img src={isAdded ? "./img/add-active.svg" : "./img/add-btn.svg"} alt="Add button" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;