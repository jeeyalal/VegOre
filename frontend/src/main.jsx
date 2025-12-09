

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { CartProvider } from "./context/CartContext.jsx";
// import { SubscriptionProvider } from "./context/SubscriptionContext.jsx";
// import FoodProvider from "./context/FoodContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // ✅ GOOGLE AUTH PROVIDER
// import { GoogleOAuthProvider } from "@react-oauth/google";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <GoogleOAuthProvider clientId="321795542746-n8pe2jbbq9l9pbv1ot6q5pph5ukgaief.apps.googleusercontent.com">

//         <FoodProvider>
//           <CartProvider>
//             <SubscriptionProvider>

//               <App />

//               <ToastContainer
//                 position="top-right"
//                 theme="colored"
//                 autoClose={2000}
//                 pauseOnHover={false}
//                 newestOnTop={true}
//               />

//             </SubscriptionProvider>
//           </CartProvider>
//         </FoodProvider>

//       </GoogleOAuthProvider>
//     </BrowserRouter>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { SubscriptionProvider } from "./context/SubscriptionContext.jsx";
import FoodProvider from "./context/FoodContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <FoodProvider>
          <CartProvider>
            <SubscriptionProvider>
              <App />
              <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={2000}
                pauseOnHover={false}
                newestOnTop={true}
              />
            </SubscriptionProvider>
          </CartProvider>
        </FoodProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);