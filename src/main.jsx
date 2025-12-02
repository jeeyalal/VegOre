import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { SubscriptionProvider } from './context/SubscriptionContext.jsx';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SubscriptionProvider>

          <App />

          {/* 🔥 Toasts now appear in top-right */}
          <ToastContainer
            position="top-right"
            theme="colored"
            autoClose={2000}
            pauseOnHover={false}
            newestOnTop={true}
          />

        </SubscriptionProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
