import React from 'react';
import styles from './Cart.module.scss';
import CartItem from './CartItem';
// import Items from '../Items';

function Cart({ onClose }) {
    const [cartItems, setCartItems] = React.useState([]);
    return (
        <div className={`${styles.overlay}`}>
            <div className={styles.drawer}>
                <div className={styles.cart__title}>
                    <h2>Корзина</h2>
                    <button onClick={onClose} className={styles.close__btn}>
                        <img src="./img/close.svg" alt="Close btn" />
                    </button>
                </div>
                <div className={styles.items}>
                    {cartItems.map(item => <CartItem title={item.title} price={item.price} img={item.img} />)}
                </div>
                <div className={styles.flex}></div>
                <div className={styles.cart__checkout}>
                    <div className={styles.checkout__info}>
                        <h3>Итого:</h3>
                        <div className={styles.checkout__border}></div>
                        <p>21 498 лей</p>
                    </div>
                    <div className={styles.checkout__info}>
                        <h3 > Налог 5 %:</h3>
                        <div className={styles.checkout__border}></div>
                        <p > 1074 лей</p>
                    </div>
                    <div className={styles.checkout__btn}>
                        <h3> Оформить заказ</h3 >
                        <img src="./img/arrow.svg" alt="Arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;