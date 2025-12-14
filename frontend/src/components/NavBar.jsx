
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { TbPaperBag } from "react-icons/tb";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cart } = useCart();
  const cartCount = cart.length;
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowProfileMenu(false);
    navigate("/login");
    closeMenu();
  };

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LOGO - Text Only */}
            <Link 
              to="/" 
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent hover:from-green-700 hover:to-green-900 transition-all duration-300"
            >
              VegOre
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:text-green-700 hover:bg-green-50/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* DESKTOP RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Subscription Button */}
              <Link
                to="/subscription"
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive("/subscription")
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md"
                }`}
              >
                Subscription
              </Link>

              {/* Dashboard Button */}
              <Link
                to="/dashboard"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive("/dashboard")
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Dashboard
              </Link>

              {/* Cart */}
              <Link 
                to="/cart" 
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
              >
                <TbPaperBag className="w-6 h-6 text-gray-700 group-hover:text-green-700 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow-md animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Profile / Login */}
              {!user ? (
                <Link
                  to="/login"
                  className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Login
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 p-1 pr-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  >
                    {user.picture ? (
                      <img
                        src={user.picture}
                        alt="profile"
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-full border-2 border-green-500 object-cover shadow-sm"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                        <FiUser className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-700 max-w-[100px] truncate">
                      {user.name?.split(' ')[0]}
                    </span>
                  </button>

                  {/* Profile Dropdown */}
                  {showProfileMenu && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowProfileMenu(false)}
                      />
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 mt-1"
                        >
                          <FiLogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* MOBILE RIGHT SIDE */}
            <div className="flex lg:hidden items-center gap-3">
              <Link to="/cart" className="relative p-2">
                <TbPaperBag className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {user && user.picture && (
                <img
                  src={user.picture}
                  alt="profile"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-green-500 object-cover"
                />
              )}

              <button 
                onClick={() => setOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiMenu className="text-2xl text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[998] backdrop-blur-sm" 
            onClick={closeMenu} 
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[999] shadow-2xl">
            <div className="flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link 
                  to="/" 
                  onClick={closeMenu}
                  className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
                >
                  VegOre
                </Link>
                <button 
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FiX className="text-2xl text-gray-700" />
                </button>
              </div>

              {/* User Profile Section */}
              {user && (
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100/50 border-b border-green-100">
                  <div className="flex items-center gap-3">
                    {user.picture ? (
                      <img
                        src={user.picture}
                        alt="profile"
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full border-2 border-green-500 object-cover shadow-sm"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                        <FiUser className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-600 truncate">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/subscription"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive("/subscription")
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Subscription
                </Link>

                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive("/dashboard")
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Dashboard
                </Link>
              </nav>

              {/* Bottom Actions */}
              <div className="p-4 border-t border-gray-100 space-y-2">
                {!user ? (
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-center rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FiLogOut className="w-4 h-4" />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
}










