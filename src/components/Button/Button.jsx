import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ onGoToMain, onClickBack, title }) {
    return (
        <>
            <Link onClick={onClickBack} to={onGoToMain} className={styles.button}>
                <h3>{title}</h3 >
                <img src="./img/arrow-back.svg" alt="Arrow" />
            </Link>
        </>
    )
}

export default Button;