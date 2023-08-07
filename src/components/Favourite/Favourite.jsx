import React from 'react';
import styles from './Favourite.module.scss';
import Btn from '../../components/Button/Button'

function Favourite(props) {
    return (
        <>
            <section className={styles.favourite}>
                <div className={styles.favourite__top}>
                    <h1>Мои закладки</h1>
                </div >
                <div className={styles.favourite__block}>
                    {/* {products.map(item => {
                    return <Card key={item.id} title={item.title} price={item.price} img={item.img} />
                })} */}
                </div>
                <div className={styles.favourite__empty}>
                    <img src="./img/empty-fav.png" alt="favourite" />
                    <h2>Закладок нет :(</h2>
                    <p>Вы ничего не добавляли в закладки</p>
                    {/* <button onClick={props.onGoBack} className="btn">Вернуться назад</button> */}
                    <Btn title='Вернуться назад' onClickBack={props.onGoBack} />
                </div>
            </section>
        </>
    )
}

export default Favourite;