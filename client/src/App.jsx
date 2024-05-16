import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './hooks/AuthProvider'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
