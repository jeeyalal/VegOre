// // import { Routes, Route } from "react-router-dom";
// // import NavBar from "./components/NavBar";
// // import Footer from "./components/Footer";
// // import ScrollToTop from "./components/ScrollToTop";

// // import HomePage from "./pages/HomePage";
// // import MenuPage from "./pages/MenuPage";
// // import BlogsPage from "./pages/blogs/BlogsPage";
// // import BlogDetails from "./pages/blogs/BlogDetails";
// // import ContactPage from "./pages/ContactPage";
// // import AboutPage from "./pages/AboutPage";
// // import LoginPage from "./pages/LoginPage";
// // import SignupPage from "./pages/SignupPage";
// // import CartPage from "./pages/CartPage";

// // import {
// //   PlanSelection,

// //   DeliveryDetails,
// //   MealPreferences,
// //   SummaryPayment,
// //   SubscriptionSuccess,
// // } from "./pages/Subscription";

// // import AdminApp from "./admin/AdminApp";
// // import CustomizePlan from "./pages/Subscription/CustomizePlan";
// // import SummaryReview from "./pages/Subscription/SummaryReview";

// // export default function App() {
// //   return (
// //     <>
// //       <ScrollToTop />

// //       {/* SHOW NAV & FOOTER ONLY FOR CLIENT ROUTES */}
// //       <Routes>
// //         {/* ADMIN ROUTES (NO NAVBAR & FOOTER) */}
// //         <Route path="/admin/*" element={<AdminApp />} />

// //         {/* CLIENT WEBSITE ROUTES */}
// //         <Route
// //           path="/*"
// //           element={
// //             <>
// //               <NavBar />

// //               <Routes>
// //                 <Route path="/" element={<HomePage />} />
// //                 <Route path="/menu" element={<MenuPage />} />
// //                 <Route path="/blogs" element={<BlogsPage />} />
// //                 <Route path="/blogs/:slug" element={<BlogDetails />} />
// //                 <Route path="/contact" element={<ContactPage />} />
// //                 <Route path="/about" element={<AboutPage />} />
// //                 <Route path="/login" element={<LoginPage />} />
// //                 <Route path="/signup" element={<SignupPage />} />
// //                 <Route path="/cart" element={<CartPage />} />

// //                 {/* Subscription */}
// //                 <Route path="/subscription" element={<PlanSelection />} />
// //                 <Route path="/subscription/delivery" element={<DeliveryDetails />} />
// //                 <Route path="/subscription/preferences" element={<MealPreferences />} />
// //                 <Route path="/subscription/summary" element={<SummaryPayment />} />
// //                 <Route path="/subscription/success" element={<SubscriptionSuccess />} />
// //                 <Route path="/subscription/customize" element={<CustomizePlan />} />
// // <Route path="/subscription/review" element={<SummaryReview />} />
// //               </Routes>

// //               <Footer />
// //             </>
// //           }
// //         />
// //       </Routes>
// //     </>
// //   );
// // }


// import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// import HomePage from "./pages/HomePage";
// import MenuPage from "./pages/MenuPage";
// import BlogsPage from "./pages/blogs/BlogsPage";
// import BlogDetails from "./pages/blogs/BlogDetails";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import CartPage from "./pages/CartPage";

// // Subscription
// import PlanSelection from "./pages/Subscription/PlanSelection";
// import CustomizePlan from "./pages/Subscription/CustomizePlan";
// import DeliveryDetails from "./pages/Subscription/DeliveryDetails";
// import MealPreferences from "./pages/Subscription/MealPreferences";
// import SummaryReview from "./pages/Subscription/SummaryReview";
// import SummaryPayment from "./pages/Subscription/SummaryPayment";
// import SubscriptionSuccess from "./pages/Subscription/SubscriptionSuccess";

// // Admin
// import AdminApp from "./admin/AdminApp";

// export default function App() {
//   return (
//     <>
//       <ScrollToTop />

//       <Routes>
//         {/* ------------------------- */}
//         {/* ADMIN ROUTES (NO HEADER) */}
//         {/* ------------------------- */}
//         <Route path="/admin/*" element={<AdminApp />} />

//         {/* ------------------------- */}
//         {/* CLIENT WEBSITE ROUTES    */}
//         {/* ------------------------- */}
//         <Route
//           path="/*"
//           element={
//             <>
//               <NavBar />

//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/menu" element={<MenuPage />} />
//                 <Route path="/blogs" element={<BlogsPage />} />
//                 <Route path="/blogs/:slug" element={<BlogDetails />} />
//                 <Route path="/contact" element={<ContactPage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/signup" element={<SignupPage />} />
//                 <Route path="/cart" element={<CartPage />} />

//                 {/* SUBSCRIPTION FLOW */}
//                 <Route path="/subscription" element={<PlanSelection />} />
//                 <Route path="/subscription/customize" element={<CustomizePlan />} />
//                 <Route path="/subscription/delivery" element={<DeliveryDetails />} />
//                 <Route path="/subscription/preferences" element={<MealPreferences />} />
//                 <Route path="/subscription/review" element={<SummaryReview />} />
//                 <Route path="/subscription/payment" element={<SummaryPayment />} />
//                 <Route path="/subscription/success" element={<SubscriptionSuccess />} />
//               </Routes>

//               <Footer />
//             </>
//           }
//         />

//       </Routes>
//     </>
//   );
// }






















// import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// import HomePage from "./pages/HomePage";
// import MenuPage from "./pages/MenuPage";
// import BlogsPage from "./pages/blogs/BlogsPage";
// import BlogDetails from "./pages/blogs/BlogDetails";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import CartPage from "./pages/CartPage";

// // ⬇️ NEW: import from index.js
// import {
//   PlanSelection,
//   CustomizeSubscription,
//   MenuPreview,
// } from "./pages/Subscription";

// import AdminApp from "./admin/AdminApp";

// export default function App() {
//   return (
//     <>
//       <ScrollToTop />

//       <Routes>
//         {/* ADMIN ROUTES */}
//         <Route path="/admin/*" element={<AdminApp />} />

//         {/* CLIENT ROUTES */}
//         <Route
//           path="/*"
//           element={
//             <>
//               <NavBar />

//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/menu" element={<MenuPage />} />
//                 <Route path="/blogs" element={<BlogsPage />} />
//                 <Route path="/blogs/:slug" element={<BlogDetails />} />
//                 <Route path="/contact" element={<ContactPage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/signup" element={<SignupPage />} />
//                 <Route path="/cart" element={<CartPage />} />

//                 {/* SUBSCRIPTION ROUTES */}
//                 <Route path="/subscription" element={<PlanSelection />} />
//                 <Route path="/subscription/customize" element={<CustomizeSubscription />} />
//                 <Route path="/subscription/preview" element={<MenuPreview />} />
//               </Routes>

//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </>
//   );
// }














// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import BlogDetails from "./pages/blogs/BlogDetails";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Dashboard from "./pages/Dashboard";

// support 
import FAQ from './pages/FAQ';
import RefundPolicy from './pages/RefundPolicy';
import AppPrivacy from './pages/AppPrivacy';
import TermsConditions from './pages/TermsConditions';
// New Subscription Flow
import {
  ChoosePlan,
  CustomizeSubscription,
  MenuPreview,
  UserDetails,
  Checkout,
  Payment,
  SubscriptionSuccess,
} from "./pages/Subscription";

// Admin
import AdminApp from "./admin/AdminApp";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* ADMIN ROUTES (NO NAVBAR & FOOTER) */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* CLIENT WEBSITE ROUTES */}
        <Route
          path="/*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/:slug" element={<BlogDetails />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} />

                {/* NEW SUBSCRIPTION FLOW */}
                <Route path="/subscription" element={<ChoosePlan />} />
                <Route path="/subscription/customize" element={<CustomizeSubscription />} />
                <Route path="/subscription/menu-preview" element={<MenuPreview />} />
                <Route path="/subscription/user-details" element={<UserDetails />} />
                <Route path="/subscription/checkout" element={<Checkout />} />
                <Route path="/subscription/payment" element={<Payment />} />
                <Route path="/subscription/success" element={<SubscriptionSuccess />} />

                {/* dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* support */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/privacy-policy" element={<AppPrivacy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}