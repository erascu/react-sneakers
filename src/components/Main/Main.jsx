import React from 'react';
import axios from 'axios';
import styles from './Main.module.scss'
import Card from '../Card/Card'
import Skeleton from '../Card/Skeleton';
// import Items from '../Items'

function Main({ fetchData, cartItem, sneakers, loading }) {
    const [searchValue, setSearchValue] = React.useState('');
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const resp = await fetch('https://64c67ca00a25021fde91b2af.mockapi.io/products');
    //         const data = await resp.json();
    //         setProducts(data);
    //     };

    //     fetchData();
    // }, []);

    const onAddToCard = (item) => {
        axios.post('https://64c67ca00a25021fde91b2af.mockapi.io/cart', item);
        cartItem([...sneakers, item]);
    }

    // const onAddToFavourite = (item) => {
    //     axios.post('')
    // }

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
                {/* <Card title="Мужские Кроссовки Nike Blazer Mid Suede" price={12999} img="./img/sneakers/1.jpg" />
                <Card title="Мужские Кроссовки Nike Air Max 270" price={13600} img="./img/sneakers/2.jpg" />
                <Card title="Мужские Кроссовки Nike Blazer Mid Suede" price={8499} img="./img/sneakers/3.jpg" />
                <Card title="Кроссовки Puma X Aka Boku Future Rider" price={8999} img="./img/sneakers/4.jpg" /> */}

                {loading ? [...new Array(12)].map((_, index) => <Skeleton key={index} />) : fetchData.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => {
                    return <Card key={item.id} title={item.title} price={item.price} img={item.img} onClickPlus={onAddToCard} />
                })}
            </div>
        </main>
    )
}

export default Main;