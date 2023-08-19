import React from 'react';
import styles from './Orders.module.scss';
import Btn from '../Button/Button';
import axios from 'axios';

function Orders() {
    const [orderHistory, setOrderHistory] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://fb21186f41810b45.mokky.dev/orders');
                // console.log(data.map(obj => obj.items).flat());
                setOrderHistory(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(true);
            } catch (error) {
                console.log(`Something went wrong: ${error}`);
            }
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <section className={styles.orders}>
                <div className={styles.orders__top}>
                    <h1>Мои заказы</h1>
                </div>
                <div className={styles.orders__block}>
                    <div className={styles.orders__align}>
                        <div className={styles.orders__body}>
                            {orderHistory.map((item, index) => (
                                <div key={index} className={styles.orders__row}>
                                    <div className={styles.orders__info}>
                                        <h3>{item.title}</h3>
                                        <p>Цена: <span>{item.price} лей</span></p>
                                    </div>
                                    <img src={item.img} alt="sneakers" />
                                </div>
                            ))}
                            {orderHistory.length > 1 && <div className={styles.orders__footer}>
                                <h2>Итого:</h2>
                                <p>{orderHistory.reduce((sum, item) => sum + item.price, 0)} лей</p>
                            </div>}
                        </div>
                    </div>
                </div>
                {orderHistory.length < 1 && <div className={styles.orders__empty}>
                    <img src="./img/fav-empty.png" alt="favourite" />
                    <h2>У вас нет заказов</h2>
                    <p>Оформите хотя бы один заказ.</p>
                    <Btn title='Вернуться назад' onGoToMain={'/'} />
                </div>}
            </section>
        </>
    )
}

export default Orders;