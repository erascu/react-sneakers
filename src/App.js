import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import Favourite from './components/Favourite/Favourite';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  const [favourite, setFavourite] = useState(false);

  cartOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  const refreshPage = () => {
    window.location.reload(true);
  }

  const favClicked = () => {
    setFavourite(true);
  }

  // const onAddToCart = (obj) => {
  //   setCartItems([...cartItems, obj]);
  // }

  return (
    <>
      {cartOpened && <Cart onClose={() => setCartOpened(false)} />}
      <div className='container'>
        <Header onClickCart={() => setCartOpened(true)} onClickFav={favClicked} onLogoClick={refreshPage} />
        {!favourite && <Main />}
        {favourite && <Favourite onGoBack={() => setFavourite(false)} />}
      </div>
    </>
  );
}

export default App;