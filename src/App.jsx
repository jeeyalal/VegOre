import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SubscriptionPage from "./pages/Subscription/PlanSelection";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {
  PlanSelection,
  PlanDetails,
  DeliveryDetails,
  MealPreferences,
  SummaryPayment,
  SubscriptionSuccess,
} from "./pages/Subscription";
import BlogDetails from "./pages/blogs/BlogDetails";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* OTHER PAGES */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/subscription" element={<PlanSelection />} />
        <Route path="/subscription/plan" element={<PlanDetails />} />
        <Route path="/subscription/delivery" element={<DeliveryDetails />} />
        <Route path="/subscription/preferences" element={<MealPreferences />} />
        <Route path="/subscription/summary" element={<SummaryPayment />} />
        <Route path="/subscription/success" element={<SubscriptionSuccess />} />
      </Routes>

      <Footer />
    </>
  );
}
