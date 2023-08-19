import React from 'react';
import styles from './Info.module.scss';
import Btn from '../Button/Button';

import AppContext from '../../context';

function Info({ title, desc, img }) {
    const { closeCart } = React.useContext(AppContext);
    return (
        <>
            <div className={styles.empty}>
                <div className={styles.cart__empty}>
                    <img src={img} alt="Cart empty img" />
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <Btn title='Вернуться назад' onClickBack={closeCart} />
                </div>
            </div>
        </>
    )
}

export default Info;