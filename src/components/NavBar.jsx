import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // UPDATED LINKS (Added About + Login)
 const navLinks = [
  { name: "Menu", path: "/menu" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
  { name: "About Us", path: "/about" },
  { name: "Login", path: "/login" },
];
  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="text-2xl sm:text-3xl font-bold text-green-700">
            VegOre
          </a>

          {/* MOBILE CART + MENU BUTTON */}
          <div className="flex md:hidden items-center gap-5">
            <a 
              href="/cart" 
              className="text-2xl text-gray-700 hover:text-green-700 transition"
            >
              <FiShoppingCart />
            </a>

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
              <a
                key={link.name}
                href={link.path}
                className="text-lg text-gray-700 hover:text-green-700 transition"
              >
                {link.name}
              </a>
            ))}

            {/* SUBSCRIPTION BUTTON */}
            <a
              href="/subscription"
              className="px-5 py-2.5 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition shadow-sm"
            >
              Subscription
            </a>

            {/* CART ICON */}
            <a
              href="/cart"
              className="text-2xl text-gray-700 hover:text-green-700 transition"
            >
              <FiShoppingCart />
            </a>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/50 z-[998]"
            onClick={closeMenu}
          />

          {/* MENU PANEL */}
          <div className="fixed inset-0 bg-white z-[999] md:hidden flex flex-col">

            {/* TOP BAR */}
            <div className="px-4 py-4 flex justify-between items-center border-b bg-white">
              <a
                href="/"
                className="text-2xl font-bold text-green-700"
                onClick={closeMenu}
              >
                VegOre
              </a>

              <div className="flex items-center gap-5">
                <a 
                  href="/cart"
                  className="text-2xl text-gray-700 hover:text-green-700 transition"
                  onClick={closeMenu}
                >
                  <FiShoppingCart />
                </a>

                <button
                  onClick={closeMenu}
                  className="text-3xl text-gray-700 hover:text-red-500 transition"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* LINKS + SUBSCRIPTION BUTTON */}
            <nav className="flex-1 px-4 py-6 flex flex-col gap-4 overflow-y-auto">

              {/* REGULAR LINKS */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={closeMenu}
                  className="px-4 py-3 text-lg font-medium text-gray-700 
                             hover:text-green-700 hover:bg-green-50 
                             rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}

              {/* FIXED: SUBSCRIPTION ALWAYS VISIBLE */}
              <div className="bg-white py-1 rounded-lg">
                <a
                  href="/subscription"
                  onClick={closeMenu}
                  className="mt-2 px-4 py-3 bg-green-600 text-white 
                             text-lg font-medium text-center rounded-lg shadow-md 
                             hover:bg-green-700 transition w-full block"
                >
                  Subscription
                </a>
              </div>
            </nav>

          </div>
        </>
      )}

      {/* SPACING BELOW FIXED NAVBAR */}
      <div className="h-[72px]" />
    </>
  );
}
