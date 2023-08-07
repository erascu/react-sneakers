import React from 'react'
import styles from './Header.module.scss'

function Header(props) {
    return (
        <>
            <header className={styles.header}>
                <button onClick={props.onLogoClick}>
                    <div className={styles.header__logo}>
                        <img src="/img/logo.png" alt="Logo" />
                        <div className={styles.logo__info}>
                            <h2>REACT SNEAKERS</h2>
                            <p>Магазин лучших кроссовок</p>
                        </div>
                    </div>
                </button>
                <div className={styles.header__icons}>
                    <button onClick={props.onClickCart} className={`${styles.cart} ${styles.header__btns}`}>
                        <img src="/img/cart.svg" alt="Cart" />
                        <p>0 лей</p>
                    </button>
                    <button onClick={props.onClickFav} className={`${styles.favourite} ${styles.header__btns}`}>
                        <img src="/img/favourite.svg" alt="Favourite" />
                    </button>
                    <button className={`${styles.user} ${styles.header__btns}`}>
                        <img src="/img/user.svg" alt="User" />
                    </button>
                </div>
            </header >
        </>
    )
}

export default Header;