import React from 'react';
import styles from './Cart.module.scss';
import CartItem from './CartItem';
import Info from '../Info/Info';
import AppContext from '../../context';
import axios from 'axios';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Cart({ onClose, onRemove, sneakers = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [orderIsCompleted, setOrderIsCompleted] = React.useState(false);

    const totalPrice = sneakers.reduce((sum, item) => sum + item.price, 0);
    const pricePrecentage = sneakers.reduce((sum, item) => sum + item.price, 0) * 0.05;

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://fb21186f41810b45.mokky.dev/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setOrderIsCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://fb21186f41810b45.mokky.dev/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
        setIsLoading(false);
    }
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
                    {sneakers.length > 0 ? sneakers.map((item) => <CartItem onRemove={() => onRemove(item.id)} key={item.id} {...item} />) : <Info title={orderIsCompleted ? "Заказ оформлен!" : "Корзина пустая"} desc={orderIsCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} img={orderIsCompleted ? "./img/order_complete.png" : "./img/cart-empty.png"} />}
                </div>
                <div className={styles.flex}></div>
                {sneakers.length > 0 && <>
                    <div className={styles.cart__checkout}>
                        <div className={styles.checkout__info}>
                            <h3>Итого:</h3>
                            <div className={styles.checkout__border}></div>
                            <p>{totalPrice} лей</p>
                        </div>
                        <div className={styles.checkout__info}>
                            <h3> Налог 5 %:</h3>
                            <div className={styles.checkout__border}></div>
                            <p>{pricePrecentage} лей</p>
                        </div>
                        <button disabled={isLoading} onClick={onClickOrder} className={styles.checkout__btn}>
                            <h3>Оформить заказ</h3>
                            <img src="./img/arrow.svg" alt="Arrow" />
                        </button>
                    </div></>}
            </div>
        </div >
    )
}

export default Cart;