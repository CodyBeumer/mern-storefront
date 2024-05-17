import AccountDetails from './pages/AccountDetails'
import Inventory from './pages/Inventory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/account-details' element={<AccountDetails />} />
                <Route path='/inventory' element={<Inventory />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes;