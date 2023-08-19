import React from 'react';
import styles from './Card.module.scss';

function FavCard({ img, title, price, onRemove }) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__block}>
                    <button className={styles.close__btn} onClick={onRemove}>
                        <img src="./img/like-active.svg" alt="Close" />
                    </button>
                    <div className={styles.card__img}>
                        <img src={img} alt="Sneakers" />
                    </div>
                    <h2>{title}</h2>
                    <div className={styles.card__price}>
                        <div className={styles.card__info}>
                            <p>Цена:</p>
                            <p>{price} лей</p>
                        </div>
                        <button className={styles.card__button}>
                            <img src="./img/add-btn.svg" alt="Add button" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavCard;