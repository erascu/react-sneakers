import React from 'react'
import styles from './Cart.module.scss';

function CartItem({ img, title, price, onRemove }) {
    return (
        <div className={styles.cart__block}>
            <div className={styles.cart}>
                <img className={styles.cart__img} src={img} alt="Sneakers" />
                <div className={styles.cart__info}>
                    <div className={styles.cart__text}>
                        <h3>{title}</h3>
                        <p>{price} лей</p>
                    </div>
                    <button onClick={onRemove} className={styles.close__btn}>
                        <img src="./img/close.svg" alt="Close btn" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;