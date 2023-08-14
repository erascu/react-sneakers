import React from 'react';
import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <>
            <div className={styles.main}>
                <img src="img/404.png" alt="404 Not Found" />
            </div>
        </>
    )
}

export default NotFound