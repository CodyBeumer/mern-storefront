import SiteNavBar from './components/SiteNavBar';
import { useState } from 'react';
import AccountDetails from './pages/AccountDetails'
import Inventory from './pages/Inventory';
import ManageInventory from './pages/ManageInventory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div id='app'>
        <SiteNavBar cartItems={cartItems} />
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inventory addItemToCart={addItemToCart} />} />
                <Route path='/account-details' element={<AccountDetails />} />
                <Route path='/manage-inventory' element={<ManageInventory />} />
            </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
