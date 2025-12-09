// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { TbPaperBag } from "react-icons/tb";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);

//   const { cart } = useCart();
//   const cartCount = cart.length;

//   const closeMenu = () => setOpen(false);

//   const navLinks = [
//     { name: "Menu", path: "/menu" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Contact", path: "/contact" },
//     { name: "About Us", path: "/about" },
//     { name: "Login", path: "/login" },
//     { name: "Dashboard", path: "/dashboard" },
//   ];

//   return (
//     <>
//       {/* NAVBAR */}
//       <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="text-2xl sm:text-3xl font-bold text-green-700">
//             VegOre
//           </Link>

//           {/* MOBILE CART + MENU BUTTON */}
//           <div className="flex md:hidden items-center gap-5">

//             {/* Mobile Cart */}
//             <Link
//               to="/cart"
//               className="relative text-gray-700 hover:text-green-700 transition"
//             >
//               <TbPaperBag className="w-7 h-7" />

//               {cartCount > 0 && (
//                 <span className="absolute -top-1.5 -right-2.5 bg-red-500 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full shadow-md">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             <button
//               onClick={() => setOpen(true)}
//               className="text-3xl text-gray-700 hover:text-green-700 transition"
//             >
//               <FiMenu />
//             </button>
//           </div>

//           {/* DESKTOP MENU */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="text-lg text-gray-700 hover:text-green-700 transition"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* SUBSCRIPTION BUTTON */}
//             <Link
//               to="/subscription"
//               className="px-5 py-2.5 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition shadow-sm"
//             >
//               Subscription
//             </Link>

//             {/* DASHBOARD BUTTON */}
//             <Link
//               to="/dashboard"
//               className="px-5 py-2.5 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
//             >
//               Dashboard
//             </Link>

//             {/* Desktop Cart */}
//             <Link
//               to="/cart"
//               className="relative text-gray-700 hover:text-green-700 transition text-2xl"
//             >
//               <TbPaperBag className="w-7 h-7" />

//               {cartCount > 0 && (
//                 <span className="absolute -top-1.5 -right-2.5 bg-red-500 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full shadow-md">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       {open && (
//         <>
//           {/* BACKDROP */}
//           <div className="fixed inset-0 bg-black/50 z-[998]" onClick={closeMenu} />

//           {/* MENU PANEL */}
//           <div className="fixed inset-0 bg-white z-[999] md:hidden flex flex-col">

//             {/* TOP BAR */}
//             <div className="px-4 py-4 flex justify-between items-center border-b bg-white">

//               <Link to="/" className="text-2xl font-bold text-green-700" onClick={closeMenu}>
//                 VegOre
//               </Link>

//               <div className="flex items-center gap-5">

//                 {/* Mobile Cart inside menu */}
//                 <Link
//                   to="/cart"
//                   className="relative text-gray-700 hover:text-green-700 transition"
//                   onClick={closeMenu}
//                 >
//                   <TbPaperBag className="w-7 h-7" />

//                   {cartCount > 0 && (
//                     <span className="absolute -top-1.5 -right-2.5 bg-red-500 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full shadow-md">
//                       {cartCount}
//                     </span>
//                   )}
//                 </Link>

//                 <button onClick={closeMenu} className="text-3xl text-gray-700 hover:text-red-500 transition">
//                   <FiX />
//                 </button>
//               </div>
//             </div>

//             {/* NAV LINKS */}
//             <nav className="flex-1 px-4 py-6 flex flex-col gap-4 overflow-y-auto">

//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   onClick={closeMenu}
//                   className="px-4 py-3 text-lg font-medium text-gray-700 
//                              hover:text-green-700 hover:bg-green-50 
//                              rounded-lg transition"
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               {/* SUBSCRIPTION BTN */}
//               <Link
//                 to="/subscription"
//                 onClick={closeMenu}
//                 className="mt-2 px-4 py-3 bg-green-600 text-white text-lg font-medium text-center rounded-lg shadow-md hover:bg-green-700 transition"
//               >
//                 Subscription
//               </Link>

//               {/* DASHBOARD BTN */}
//               <Link
//                 to="/dashboard"
//                 onClick={closeMenu}
//                 className="mt-2 px-4 py-3 bg-green-600 text-white text-lg font-medium text-center rounded-lg shadow-md hover:bg-blue-700 transition"
//               >
//                 Dashboard
//               </Link>
//             </nav>
//           </div>
//         </>
//       )}

//       {/* Spacer */}
//       <div className="h-[72px]" />
//     </>
//   );
// }



















// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { TbPaperBag } from "react-icons/tb";
// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   const { cart } = useCart();
//   const cartCount = cart.length;

//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     console.log("Stored user string:", storedUser);
    
//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         console.log("Parsed user object:", parsedUser);
//         console.log("Picture URL:", parsedUser.picture);
//         setUser(parsedUser);
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//         localStorage.removeItem("user");
//       }
//     }
//   }, []);

//   const closeMenu = () => setOpen(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//     closeMenu();
//   };

//   const navLinks = [
//     { name: "Menu", path: "/menu" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Contact", path: "/contact" },
//     { name: "About Us", path: "/about" },
//     { name: "Dashboard", path: "/dashboard" },
//   ];

//   return (
//     <>
//       {/* NAVBAR */}
//       <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="text-2xl font-bold text-green-700">
//             VegOre
//           </Link>

//           {/* MOBILE ICONS */}
//           <div className="flex md:hidden items-center gap-4">
//             <Link to="/cart" className="relative">
//               <TbPaperBag className="w-7 h-7" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* USER IMAGE IN MOBILE */}
//             {user && user.picture && (
//               <img
//                 src={user.picture}
//                 alt="profile"
//                 className="w-8 h-8 rounded-full border object-cover"
//                 referrerPolicy="no-referrer"
//                 onError={(e) => {
//                   console.error("Image failed to load:", user.picture);
//                   e.target.style.display = 'none';
//                 }}
//               />
//             )}

//             <button onClick={() => setOpen(true)}>
//               <FiMenu className="text-3xl" />
//             </button>
//           </div>

//           {/* DESKTOP MENU */}
//           <nav className="hidden md:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link key={link.name} to={link.path} className="hover:text-green-600">
//                 {link.name}
//               </Link>
//             ))}

//             {!user ? (
//               <Link to="/login" className="px-4 py-2 bg-green-600 text-white rounded-lg">
//                 Login
//               </Link>
//             ) : (
//               <div className="flex items-center gap-3">
//                 {user.picture && (
//                   <img
//                     src={user.picture}
//                     alt="profile"
//                     className="w-9 h-9 rounded-full border object-cover"
//                     referrerPolicy="no-referrer"
//                     onError={(e) => {
//                       console.error("Image failed to load:", user.picture);
//                       e.target.style.display = 'none';
//                     }}
//                   />
//                 )}

//                 <button
//                   onClick={handleLogout}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}

//             <Link to="/cart" className="relative text-2xl">
//               <TbPaperBag />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       {open && (
//         <>
//           <div className="fixed inset-0 bg-black/50 z-[998]" onClick={closeMenu} />

//           <div className="fixed inset-0 bg-white z-[999] p-6 flex flex-col gap-6">
//             <div className="flex justify-between items-center">
//               <Link to="/" onClick={closeMenu} className="text-2xl font-bold text-green-700">
//                 VegOre
//               </Link>
//               <FiX className="text-3xl cursor-pointer" onClick={closeMenu} />
//             </div>

//             {/* PROFILE IN MOBILE MENU */}
//             {user && (
//               <div className="flex items-center gap-3 border-b pb-4">
//                 {user.picture && (
//                   <img
//                     src={user.picture}
//                     alt="profile"
//                     className="w-10 h-10 rounded-full border object-cover"
//                     referrerPolicy="no-referrer"
//                     onError={(e) => {
//                       console.error("Image failed to load:", user.picture);
//                       e.target.style.display = 'none';
//                     }}
//                   />
//                 )}
//                 <div>
//                   <p className="font-semibold">{user.name}</p>
//                   <p className="text-xs text-gray-500">{user.email}</p>
//                 </div>
//               </div>
//             )}

//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={closeMenu}
//                 className="text-lg"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {!user ? (
//               <Link
//                 to="/login"
//                 className="bg-green-600 text-white py-2 rounded text-center"
//                 onClick={closeMenu}
//               >
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white py-2 rounded"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </>
//       )}

//       <div className="h-[72px]" />
//     </>
//   );
// }








// import { useState, useEffect } from "react";
// import { FiMenu, FiX, FiUser, FiLogOut, FiShoppingBag } from "react-icons/fi";
// import { TbPaperBag } from "react-icons/tb";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const { cart } = useCart();
//   const cartCount = cart.length;
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Load user from localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//         localStorage.removeItem("user");
//       }
//     }
//   }, []);

//   const closeMenu = () => setOpen(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     setShowProfileMenu(false);
//     navigate("/login");
//     closeMenu();
//   };

//   const navLinks = [
//     { name: "Menu", path: "/menu" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Contact", path: "/contact" },
//     { name: "About Us", path: "/about" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* NAVBAR */}
//       <header 
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled 
//             ? "bg-white/95 backdrop-blur-md shadow-lg" 
//             : "bg-white shadow-sm"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 sm:h-20">

//             {/* LOGO */}
//             <Link 
//               to="/" 
//               className="flex items-center gap-2 group"
//             >
//               <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
//                 <span className="text-white font-bold text-xl">V</span>
//               </div>
//               <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
//                 VegOre
//               </span>
//             </Link>

//             {/* DESKTOP MENU */}
//             <nav className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                     isActive(link.path)
//                       ? "bg-green-50 text-green-700"
//                       : "text-gray-600 hover:text-green-700 hover:bg-green-50/50"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>

//             {/* DESKTOP RIGHT SIDE */}
//             <div className="hidden lg:flex items-center gap-3">
//               {/* Dashboard Button */}
//               <Link
//                 to="/dashboard"
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive("/dashboard")
//                     ? "bg-green-600 text-white shadow-md"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 Dashboard
//               </Link>

//               {/* Cart */}
//               <Link 
//                 to="/cart" 
//                 className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
//               >
//                 <TbPaperBag className="w-6 h-6 text-gray-700 group-hover:text-green-700 transition-colors" />
//                 {cartCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow-md animate-pulse">
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>

//               {/* User Profile / Login */}
//               {!user ? (
//                 <Link
//                   to="/login"
//                   className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
//                 >
//                   Login
//                 </Link>
//               ) : (
//                 <div className="relative">
//                   <button
//                     onClick={() => setShowProfileMenu(!showProfileMenu)}
//                     className="flex items-center gap-2 p-1 pr-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
//                   >
//                     {user.picture ? (
//                       <img
//                         src={user.picture}
//                         alt="profile"
//                         referrerPolicy="no-referrer"
//                         className="w-9 h-9 rounded-full border-2 border-green-500 object-cover shadow-sm"
//                       />
//                     ) : (
//                       <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
//                         <FiUser className="w-5 h-5 text-white" />
//                       </div>
//                     )}
//                     <span className="text-sm font-medium text-gray-700 max-w-[100px] truncate">
//                       {user.name?.split(' ')[0]}
//                     </span>
//                   </button>

//                   {/* Profile Dropdown */}
//                   {showProfileMenu && (
//                     <>
//                       <div 
//                         className="fixed inset-0 z-10" 
//                         onClick={() => setShowProfileMenu(false)}
//                       />
//                       <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
//                         <div className="px-4 py-3 border-b border-gray-100">
//                           <p className="text-sm font-semibold text-gray-900">{user.name}</p>
//                           <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                         </div>
//                         <button
//                           onClick={handleLogout}
//                           className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 mt-1"
//                         >
//                           <FiLogOut className="w-4 h-4" />
//                           Logout
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* MOBILE RIGHT SIDE */}
//             <div className="flex lg:hidden items-center gap-3">
//               <Link to="/cart" className="relative p-2">
//                 <TbPaperBag className="w-6 h-6 text-gray-700" />
//                 {cartCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>

//               {user && user.picture && (
//                 <img
//                   src={user.picture}
//                   alt="profile"
//                   referrerPolicy="no-referrer"
//                   className="w-8 h-8 rounded-full border-2 border-green-500 object-cover"
//                 />
//               )}

//               <button 
//                 onClick={() => setOpen(true)}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 <FiMenu className="text-2xl text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       {open && (
//         <>
//           {/* Backdrop */}
//           <div 
//             className="fixed inset-0 bg-black/50 z-[998] backdrop-blur-sm animate-in fade-in duration-200" 
//             onClick={closeMenu} 
//           />

//           {/* Menu Panel */}
//           <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[999] shadow-2xl animate-in slide-in-from-right duration-300">
//             <div className="flex flex-col h-full">
              
//               {/* Header */}
//               <div className="flex items-center justify-between p-4 border-b border-gray-100">
//                 <Link 
//                   to="/" 
//                   onClick={closeMenu}
//                   className="flex items-center gap-2"
//                 >
//                   <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-md">
//                     <span className="text-white font-bold text-xl">V</span>
//                   </div>
//                   <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
//                     VegOre
//                   </span>
//                 </Link>
//                 <button 
//                   onClick={closeMenu}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   <FiX className="text-2xl text-gray-700" />
//                 </button>
//               </div>

//               {/* User Profile Section */}
//               {user && (
//                 <div className="p-4 bg-gradient-to-br from-green-50 to-green-100/50 border-b border-green-100">
//                   <div className="flex items-center gap-3">
//                     {user.picture ? (
//                       <img
//                         src={user.picture}
//                         alt="profile"
//                         referrerPolicy="no-referrer"
//                         className="w-12 h-12 rounded-full border-2 border-green-500 object-cover shadow-sm"
//                       />
//                     ) : (
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
//                         <FiUser className="w-6 h-6 text-white" />
//                       </div>
//                     )}
//                     <div className="flex-1 min-w-0">
//                       <p className="font-semibold text-gray-900 truncate">{user.name}</p>
//                       <p className="text-xs text-gray-600 truncate">{user.email}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Navigation Links */}
//               <nav className="flex-1 overflow-y-auto p-4 space-y-1">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     onClick={closeMenu}
//                     className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                       isActive(link.path)
//                         ? "bg-green-50 text-green-700"
//                         : "text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}

//                 <Link
//                   to="/dashboard"
//                   onClick={closeMenu}
//                   className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                     isActive("/dashboard")
//                       ? "bg-green-50 text-green-700"
//                       : "text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   Dashboard
//                 </Link>
//               </nav>

//               {/* Bottom Actions */}
//               <div className="p-4 border-t border-gray-100 space-y-2">
//                 {!user ? (
//                   <Link
//                     to="/login"
//                     onClick={closeMenu}
//                     className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-center rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
//                   >
//                     Login
//                   </Link>
//                 ) : (
//                   <button
//                     onClick={handleLogout}
//                     className="w-full py-3 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-all duration-200 flex items-center justify-center gap-2"
//                   >
//                     <FiLogOut className="w-4 h-4" />
//                     Logout
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Spacer */}
//       <div className="h-16 sm:h-20" />
//     </>
//   );
// }

















































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

