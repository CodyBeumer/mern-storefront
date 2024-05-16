import './App.css'
import SiteNavBar from './components/SiteNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountDetails from './components/AccountDetails'
import SignUp from './components/SignUp';

function App() {
  return (
    <div id='app'>
        <SiteNavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/account-details' element={<AccountDetails />} />
            <Route path='/sign-up' element={<SignUp />}/>
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
