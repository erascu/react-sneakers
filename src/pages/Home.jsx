import React from 'react';
import axios from 'axios';
import Main from '../components/Main/Main';

function Home() {
    const [cartItems, setCartItems] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get('https://64c67ca00a25021fde91b2af.mockapi.io/products').then(res => {
            setProducts(res.data);
            setIsLoading(false);
        });
        axios.get('https://64c67ca00a25021fde91b2af.mockapi.io/cart').then(res => {
            setCartItems(res.data);
        });
    }, []);
    return (
        <><Main loading={isLoading} sneakers={cartItems} cartItem={setCartItems} fetchData={products} /></>
    )
}

export default Home;