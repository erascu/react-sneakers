import React from 'react';
import Header from './components/Header/Header';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import NotFound from './pages/NotFound';
// import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
// import Favourite from './components/Favourite/Favourite';
// import CartItem from './components/Cart/CartItem';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  // const [favourite, setFavourite] = React.useState(false);

  cartOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  const mainPage = () => {
    // window.location.reload(true);
    window.location.href = '/';
  }

  const favClicked = () => {
    // setFavourite(true);
    // window.location.href = '/favourite';
  }

  const onRemoveItem = id => {
    axios.delete(`https://64c67ca00a25021fde91b2af.mockapi.io/cart/${id}`);
    setCartItems(data => data.filter(item => item.id !== id));
  }

  // const onAddToCart = (obj) => {
  //   setCartItems([...cartItems, obj]);
  // }

  return (
    <>
      {cartOpened && <Cart sneakers={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <div className='container'>
        {/* {cartItemData && <CartItem onRemove={onRemoveItem} />} */}
        <Header onClickCart={() => setCartOpened(true)} onClickFav={favClicked} onLogoClick={mainPage} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite onGoBack={mainPage} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;