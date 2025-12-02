import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { SubscriptionProvider } from './context/SubscriptionContext.jsx';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <SubscriptionProvider>
            <App />
          </SubscriptionProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>,
)
