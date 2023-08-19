import React from 'react';
import styles from './Favourite.module.scss';
import FavCard from '../Card/FavCard';
import Btn from '../../components/Button/Button';
import AppContext from '../../context';

function Favourite({ onRemove }) {
    const { favourites } = React.useContext(AppContext);

    return (
        <>
            <section className={styles.favourite}>
                <div className={styles.favourite__top}>
                    <h1>Мои закладки</h1>
                </div >
                <div className={styles.favourite__block}>
                    {favourites.length > 0 && favourites.map((item, index) => { return <FavCard onRemove={() => onRemove(item.id)} key={index} {...item} /> })}
                </div>
                {favourites.length === 0 && <><div className={styles.favourite__empty}>
                    <img src="./img/empty-fav.png" alt="favourite" />
                    <h2>У вас нет закладок</h2>
                    <p>Вы ничего не добавляли в закладки</p>
                    <Btn title='Вернуться назад' onGoToMain={'/'} />
                </div></>}
            </section>
        </>
    )
}

export default Favourite;