import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { TbPaperBag } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();
  const cartCount = cart.length;

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-green-700">
            VegOre
          </Link>

          {/* MOBILE CART + MENU BUTTON */}
          <div className="flex md:hidden items-center gap-5">

            {/* Mobile Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-green-700 transition"
            >
              <TbPaperBag className="w-7 h-7" />

              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-red-500 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="text-3xl text-gray-700 hover:text-green-700 transition"
            >
              <FiMenu />
            </button>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg text-gray-700 hover:text-green-700 transition"
              >
                {link.name}
              </Link>
            ))}

            {/* SUBSCRIPTION BUTTON */}
            <Link
              to="/subscription"
              className="px-5 py-2.5 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition shadow-sm"
            >
              Subscription
            </Link>

            {/* DASHBOARD BUTTON */}
            <Link
              to="/dashboard"
              className="px-5 py-2.5 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              Dashboard
            </Link>

            {/* Desktop Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-green-700 transition text-2xl"
            >
              <TbPaperBag className="w-7 h-7" />

              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-red-500 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* BACKDROP */}
          <div className="fixed inset-0 bg-black/50 z-[998]" onClick={closeMenu} />

          {/* MENU PANEL */}
          <div className="fixed inset-0 bg-white z-[999] md:hidden flex flex-col">

            {/* TOP BAR */}
            <div className="px-4 py-4 flex justify-between items-center border-b bg-white">

              <Link to="/" className="text-2xl font-bold text-green-700" onClick={closeMenu}>
                VegOre
              </Link>

              <div className="flex items-center gap-5">

                {/* Mobile Cart inside menu */}
                <Link
                  to="/cart"
                  className="relative text-gray-700 hover:text-green-700 transition"
                  onClick={closeMenu}
                >
                  <TbPaperBag className="w-7 h-7" />

                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 bg-red-500 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full shadow-md">
                      {cartCount}
                    </span>
                  )}
                </Link>

                <button onClick={closeMenu} className="text-3xl text-gray-700 hover:text-red-500 transition">
                  <FiX />
                </button>
              </div>
            </div>

            {/* NAV LINKS */}
            <nav className="flex-1 px-4 py-6 flex flex-col gap-4 overflow-y-auto">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="px-4 py-3 text-lg font-medium text-gray-700 
                             hover:text-green-700 hover:bg-green-50 
                             rounded-lg transition"
                >
                  {link.name}
                </Link>
              ))}

              {/* SUBSCRIPTION BTN */}
              <Link
                to="/subscription"
                onClick={closeMenu}
                className="mt-2 px-4 py-3 bg-green-600 text-white text-lg font-medium text-center rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Subscription
              </Link>

              {/* DASHBOARD BTN */}
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className="mt-2 px-4 py-3 bg-green-600 text-white text-lg font-medium text-center rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </>
      )}

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}
