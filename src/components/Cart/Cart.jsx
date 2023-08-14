import React from 'react';
import styles from './Cart.module.scss';
import CartItem from './CartItem';
import Btn from '../../components/Button/Button'
// import Items from '../Items';

function Cart({ onClose, onRemove, sneakers = [] }) {
    // const [cartItems, setCartItems] = React.useState([]);
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
                    {sneakers.length > 0 ? sneakers.map((item, index) => <CartItem onRemove={() => onRemove(item.id)} key={index} title={item.title} price={item.price} img={item.img} />) : <div className={styles.empty}><div className={styles.cart__empty}>
                        <img src="./img/cart-empty.png" alt="Cart empty img" />
                        <h2>Корзина пустая</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <Btn title='Вернуться назад' onClickBack={onClose} />
                    </div>
                    </div>}
                </div>
                <div className={styles.flex}></div>
                {sneakers.length > 0 && <>
                    <div div className={styles.cart__checkout}>
                        <div className={styles.checkout__info}>
                            <h3>Итого:</h3>
                            <div className={styles.checkout__border}></div>
                            <p>0 лей</p>
                        </div>
                        <div className={styles.checkout__info}>
                            <h3> Налог 5 %:</h3>
                            <div className={styles.checkout__border}></div>
                            <p>0 лей</p>
                        </div>
                        <div className={styles.checkout__btn}>
                            <h3> Оформить заказ</h3 >
                            <img src="./img/arrow.svg" alt="Arrow" />
                        </div>
                    </div></>}
            </div>
        </div >
    )
}

export default Cart;