import React from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Favourite from './components/Favourite/Favourite';
import NotFound from './pages/NotFound';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';

import AppContext from './context';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetch() {
      try {
        const cartResp = await axios.get('https://fb21186f41810b45.mokky.dev/cart');
        const favResp = await axios.get('https://fb21186f41810b45.mokky.dev/fav');
        const prodResp = await axios.get('https://fb21186f41810b45.mokky.dev/products');

        setCartItems(cartResp.data);
        setFavourites(favResp.data);
        setProducts(prodResp.data);
        setIsLoading(false);
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
      }
    }

    fetch();
  }, []);

  cartOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  const onRemoveItem = id => {
    axios.delete(`https://fb21186f41810b45.mokky.dev/cart/${id}`);
    setCartItems(data => data.filter(item => Number(item.id) !== Number(id)));
  }

  const onFavRemove = id => {
    axios.delete(`https://fb21186f41810b45.mokky.dev/fav/${id}`);
    setFavourites(data => data.filter(item => item.id !== id));
  }

  const isItemAdded = id => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
  }

  const closeCart = () => {
    setCartOpened(false);
  }

  return (
    <AppContext.Provider value={{ products, cartItems, favourites, isItemAdded, closeCart, setCartItems }}>
      <>
        {cartOpened && <Cart sneakers={cartItems} onClose={closeCart} onRemove={onRemoveItem} />}
        <div className='container'>
          <Header onClickCart={() => setCartOpened(true)} sneakers={cartItems} onFav={favourites} />
          <Routes>
            <Route path='/' element={<Main loading={isLoading} sneakers={cartItems} setCartItems={setCartItems} fetchData={products} onFav={favourites} onSetFav={setFavourites} />} />
            <Route path='/favourite' element={<Favourite onFav={favourites} onRemove={onFavRemove} />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </>
    </AppContext.Provider>
  );
}

export default App;