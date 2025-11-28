// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-green-900 to-emerald-800 text-white mt-16 pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//         {/* BRAND + ABOUT */}
//         <div>
//           <h2 className="text-3xl sm:text-4xl font-extrabold">VegOre</h2>
//           <p className="mt-3 text-sm text-gray-200 leading-relaxed max-w-xs">
//             Fresh, healthy, and delicious Veg, Vegan & Jain meals delivered daily.  
//             Crafted with ❤️ for your wellness journey.
//           </p>

//           {/* Social icons */}
//           <div className="flex gap-4 mt-4">
//             <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
//               <Instagram size={20} />
//             </a>
//             <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
//               <Facebook size={20} />
//             </a>
//             <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
//               <Twitter size={20} />
//             </a>
//           </div>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-gray-200">
//             <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
//             <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
//             <li><Link to="/subscription" className="hover:text-white">Subscription</Link></li>
//             <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//           </ul>
//         </div>

//         {/* SUPPORT */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Support</h3>
//           <ul className="space-y-2 text-sm text-gray-200">
//             <li><a href="#" className="hover:text-white">FAQ</a></li>
//             <li><a href="#" className="hover:text-white">Refund Policy</a></li>
//             <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
//           </ul>
//         </div>

//         {/* CONTACT + FSSAI */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
//           <ul className="space-y-2 text-sm text-gray-200">
//             <li className="flex items-center gap-2">
//               <Phone size={18} /> +91 98765 43210
//             </li>
//             <li className="flex items-center gap-2">
//               <Mail size={18} /> support@vegore.me
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin size={18} /> Mumbai, India
//             </li>
//           </ul>

//           <div className="mt-4 p-3 bg-white/10 rounded-lg w-fit">
//             <p className="text-xs uppercase tracking-wide">FSSAI License</p>
//             <p className="text-sm font-bold">112233445566</p>
//           </div>
//         </div>
//       </div>

//       {/* COPYRIGHT */}
//       <div className="text-center mt-10 pt-6 border-t border-white/20 text-sm text-gray-300">
//         © {new Date().getFullYear()} <span className="font-semibold">VegOre</span>. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }




import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-emerald-800 text-white mt-16 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND + ABOUT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">VegOre</h2>

          <p className="mt-3 text-sm text-gray-200 max-w-xs leading-relaxed">
            Fresh, healthy & delicious Veg, Vegan & Jain meals delivered daily.  
            Crafted with ❤️ for your wellness journey.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link to="/subscription" className="hover:text-white">Subscription</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/help" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT + FSSAI */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@vegore.me
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Mumbai, India
            </li>
          </ul>

          {/* FSSAI */}
          <div className="mt-5 p-3 bg-white/10 rounded-lg inline-block">
            <p className="text-xs uppercase tracking-wide opacity-80">FSSAI License</p>
            <p className="text-sm font-bold">112233445566</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 pt-6 border-t border-white/20 text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold">VegOre</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
