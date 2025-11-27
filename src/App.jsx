import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* OTHER PAGES */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>

      <Footer />
    </>
  );
}
