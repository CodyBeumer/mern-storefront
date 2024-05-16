import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-pgybp1vsx1dec3wp.us.auth0.com'
      clientId='yM2XBYruYgRl2nhM9M7TSyUax8gxoB9e'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
          <App />
      </Auth0Provider>
  </React.StrictMode>
)
