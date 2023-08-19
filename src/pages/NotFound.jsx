import React from 'react';
import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <>
            <div className={styles.main}>
                <p>OOPS...</p>
                <img src="./img/404.svg" alt="404 Not Found" />
                <h2>404</h2>
                <h3>PAGE <span>NOT FOUND</span></h3>
            </div>
        </>
    )
}

export default NotFound