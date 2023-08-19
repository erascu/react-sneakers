import React from 'react';
import axios from 'axios';
import styles from './Main.module.scss'
import Card from '../Card/Card'
import Skeleton from '../Card/Skeleton';

function Main({ fetchData, setCartItems, sneakers, loading, onFav, onSetFav }) {
    const [searchValue, setSearchValue] = React.useState('');

    const onAddToCard = async obj => {
        try {
            const findItem = sneakers.find(item => Number(item.parentId) === Number(obj.id));

            if (findItem) {
                setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id))); //visual delete cart item
                await axios.delete(`https://fb21186f41810b45.mokky.dev/cart/${findItem.id}`); //backend delete cart item
            } else {
                const { data } = await axios.post('https://fb21186f41810b45.mokky.dev/cart', obj);
                setCartItems(prev => [...prev, data]);
            }
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
        // console.log(obj);
    }

    const onAddToFavourite = async item => {
        try {
            if (onFav.find(favObj => Number(favObj.id) === Number(item.id))) {
                axios.delete(`https://fb21186f41810b45.mokky.dev/fav/${item.id}`); //backend delete fav item
                onSetFav(prev => prev.filter(obj => Number(obj.id) !== Number(item.id))); //visual delete fav item
            } else {
                const { data } = await axios.post('https://fb21186f41810b45.mokky.dev/fav', item);
                onSetFav([...onFav, data]);
            }
        } catch (error) {
            // alert("Error: Couldn't add to Favourite");
            console.log(`Something went wrong: ${error}`);
        }

        // axios.post('https://fb21186f41810b45.mokky.dev/fav', item);
        // console.log(item);
        // onSetFav([...onFav, item]);
    }

    const searchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const escKey = (e) => {
        if (e.key === 'Escape') {
            setSearchValue('');
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.main__top}>
                <h1>Все кроссовки</h1>
                <div className={styles.search}>
                    <img src="./img/search.svg" alt="Search" />
                    <input onChange={searchInput} onKeyDown={escKey} value={searchValue} type="text" placeholder='Поиск...' />
                    {searchValue &&
                        <button onClick={() => setSearchValue('')} className={styles.close__btn}>
                            <img src="./img/close.svg" alt="Clear" />
                        </button>
                    }
                </div>
            </div >
            <div className={styles.main__block}>
                {loading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : fetchData.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => {
                    return <Card added={sneakers.some(obj => obj.id === item.id)} key={item.id} {...item} onClickPlus={onAddToCard} onClickFav={onAddToFavourite} />
                })}
            </div>
        </main>
    )
}

export default Main;