import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header({ onClickCart, sneakers, onFav }) {
    return (
        <>
            <header className={styles.header}>
                <Link to='/'>
                    <div className={styles.header__logo}>
                        <img src="/img/logo.png" alt="Logo" />
                        <div className={styles.logo__info}>
                            <h2>REACT SNEAKERS</h2>
                            <p>Магазин лучших кроссовок</p>
                        </div>
                    </div>
                </Link>
                <div className={styles.header__icons}>
                    <button onClick={onClickCart} className={`${styles.cart} ${styles.header__btns}`}>
                        <img src="/img/cart.svg" alt="Cart" />
                        <p>{sneakers.reduce((sum, item) => sum + item.price, 0)} лей</p>
                    </button>
                    <Link to='/favourite' className={`${styles.favourite} ${styles.header__btns}`}>
                        <img src="/img/favourite.svg" alt="Favourite" />
                        <p>{onFav.reduce((sum) => sum + 1, 0)}</p>
                    </Link>
                    <Link to='/orders' className={`${styles.user} ${styles.header__btns}`}>
                        <img src="/img/user.svg" alt="User" />
                    </Link>
                </div>
            </header >
        </>
    )
}

export default Header;