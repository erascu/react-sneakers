import React from 'react';
import styles from './Button.module.scss';

function Button(props) {
    return (
        <>
            <button onClick={props.onClickBack} className={styles.button}>
                <h3>{props.title}</h3 >
                <img src="./img/arrow-back.svg" alt="Arrow" />
            </button>
        </>
    )
}

export default Button;