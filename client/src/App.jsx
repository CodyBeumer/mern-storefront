import SiteNavBar from './components/SiteNavBar';
import { useState, useEffect } from 'react';
import AccountDetails from './pages/AccountDetails'
import Inventory from './pages/Inventory';
import ManageInventory from './pages/ManageInventory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartOffcanvas from './components/CartOffcanvas';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    cartItems.push(item);
    sessionStorage.setItem('user-cart', JSON.stringify(cartItems));
  };

  const removeItemFromCart = (item) => {
    
  }

  useEffect(() => {
    const sessionCartItems = sessionStorage.getItem('user-cart');
    setCartItems(sessionCartItems ? JSON.parse(sessionCartItems) : []);
  }, []);

  return (
    <div id='app'>
        <SiteNavBar cartItems={cartItems} setCartVisible={setCartVisible} />
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inventory addItemToCart={addItemToCart} />} />
                <Route path='/account-details' element={<AccountDetails />} />
                <Route path='/manage-inventory' element={<ManageInventory />} />
            </Routes>
        </BrowserRouter>
        <CartOffcanvas setCartVisible={setCartVisible} cartVisible={cartVisible} cartItems={cartItems}/>
    </div>

  )
}

export default App
