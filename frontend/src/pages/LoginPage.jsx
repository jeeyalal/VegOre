// import { useState } from "react";
// import { Mail, Smartphone, Lock, X } from "lucide-react";

// export default function LoginPage() {
//   const [mobile, setMobile] = useState("");
//   const [showOTP, setShowOTP] = useState(false);
//   const [otp, setOtp] = useState("");

//   const handleSendOtp = () => {
//     if (mobile.length === 10) {
//       setShowOTP(true);
//     } else {
//       alert("Please enter a valid 10-digit mobile number");
//     }
//   };

//   const handleVerifyOtp = () => {
//     if (otp.length === 4) {
//       alert("Logged in successfully!");
//     } else {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex justify-center items-center px-4 ">
      
//       {/* Login Card */}
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-md px-8 py-10 border border-green-100">

//         {/* Logo */}
//         <h1 className="text-4xl font-bold text-green-700 text-center font-[Okra]">
//           VegOre
//         </h1>

//         <p className="text-center text-gray-600 mt-2 text-sm">
//           Login to continue your healthy journey
//         </p>

//         {/* Mobile Input */}
//         <div className="mt-8">
//           <label className="font-semibold text-gray-700">Mobile Number</label>
//           <div className="flex items-center mt-2 bg-gray-100 rounded-xl px-4 py-3">
//             <Smartphone className="text-green-700" size={20} />
//             <input
//               type="number"
//               maxLength={10}
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="Enter 10-digit mobile number"
//               className="flex-1 bg-transparent outline-none ml-3"
//             />
//           </div>

//           <button 
//             onClick={handleSendOtp}
//             className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
//           >
//             Send OTP
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 h-[1px] bg-gray-300"></div>
//           <span className="px-2 text-gray-500 text-sm">OR</span>
//           <div className="flex-1 h-[1px] bg-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button className="w-full flex justify-center items-center gap-3 py-3 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             className="w-6 h-6"
//           />
//           <span className="font-medium text-gray-700">Login with Google</span>
//         </button>

//         {/* Signup Link */}
//         <p className="text-center text-gray-600 mt-6 text-sm">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-green-700 font-semibold underline">
//             Create Account
//           </a>
//         </p>
//       </div>

//       {/* OTP Modal */}
//       {showOTP && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
//           <div className="bg-white rounded-xl w-full max-w-sm p-6 relative shadow-lg">
            
//             {/* Close */}
//             <button
//               className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//               onClick={() => setShowOTP(false)}
//             >
//               <X size={22} />
//             </button>

//             <h3 className="text-xl font-bold text-green-700 text-center">
//               Enter OTP
//             </h3>

//             <p className="text-center text-gray-500 text-sm mt-1">
//               OTP sent to <span className="font-semibold">{mobile}</span>
//             </p>

//             {/* OTP Input */}
//             <div className="mt-6">
//               <input
//                 type="number"
//                 value={otp}
//                 maxLength={4}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter 4-digit OTP"
//                 className="w-full border rounded-xl px-4 py-3 text-center text-xl tracking-widest outline-none"
//               />
//             </div>

//             {/* Verify Button */}
//             <button
//               onClick={handleVerifyOtp}
//               className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
//             >
//               Verify OTP
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";
// import { Smartphone, X } from "lucide-react";
// import { GoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// export default function LoginPage() {
//   const [mobile, setMobile] = useState("");
//   const [showOTP, setShowOTP] = useState(false);
//   const [otp, setOtp] = useState("");

//   const handleSendOtp = () => {
//     if (mobile.length === 10) {
//       setShowOTP(true);
//     } else {
//       alert("Please enter a valid 10-digit mobile number");
//     }
//   };

//   const handleVerifyOtp = () => {
//     if (otp.length === 4) {
//       alert("Logged in successfully!");
//     } else {
//       alert("Invalid OTP");
//     }
//   };

//   // ✅ GOOGLE LOGIN HANDLER
//   const handleGoogleLogin = async (cred) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:4000/api/user/google",
//         {
//           access_token: cred.access_token,
//         }
//       );

//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         alert("✅ Logged in with Google");
//         window.location.href = "/";
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Google Login Failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex justify-center items-center px-4 ">
      
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-md px-8 py-10 border border-green-100">

//         <h1 className="text-4xl font-bold text-green-700 text-center font-[Okra]">
//           VegOre
//         </h1>

//         <p className="text-center text-gray-600 mt-2 text-sm">
//           Login to continue your healthy journey
//         </p>

//         {/* Mobile OTP Login (Optional – You can remove later) */}
//         <div className="mt-8">
//           <label className="font-semibold text-gray-700">Mobile Number</label>
//           <div className="flex items-center mt-2 bg-gray-100 rounded-xl px-4 py-3">
//             <Smartphone className="text-green-700" size={20} />
//             <input
//               type="number"
//               maxLength={10}
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="Enter 10-digit mobile number"
//               className="flex-1 bg-transparent outline-none ml-3"
//             />
//           </div>

//           <button 
//             onClick={handleSendOtp}
//             className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
//           >
//             Send OTP
//           </button>
//         </div>

//         <div className="flex items-center my-6">
//           <div className="flex-1 h-[1px] bg-gray-300"></div>
//           <span className="px-2 text-gray-500 text-sm">OR</span>
//           <div className="flex-1 h-[1px] bg-gray-300"></div>
//         </div>

//         {/* ✅ REAL GOOGLE LOGIN */}
//         <div className="flex justify-center">
//           <GoogleLogin
//             onSuccess={handleGoogleLogin}
//             onError={() => alert("Google Login Failed")}
//           />
//         </div>

//         <p className="text-center text-gray-600 mt-6 text-sm">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-green-700 font-semibold underline">
//             Create Account
//           </a>
//         </p>
//       </div>

//       {/* OTP Modal */}
//       {showOTP && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
//           <div className="bg-white rounded-xl w-full max-w-sm p-6 relative shadow-lg">
            
//             <button
//               className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//               onClick={() => setShowOTP(false)}
//             >
//               <X size={22} />
//             </button>

//             <h3 className="text-xl font-bold text-green-700 text-center">
//               Enter OTP
//             </h3>

//             <div className="mt-6">
//               <input
//                 type="number"
//                 value={otp}
//                 maxLength={4}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter 4-digit OTP"
//                 className="w-full border rounded-xl px-4 py-3 text-center text-xl tracking-widest outline-none"
//               />
//             </div>

//             <button
//               onClick={handleVerifyOtp}
//               className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
//             >
//               Verify OTP
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import { GoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// export default function LoginPage() {

//   const handleGoogleLogin = async (cred) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:4000/api/user/google",
//         {
//           credential: cred.credential, // ✅ Correct Google token
//         }
//       );

//       if (res.data.success) {
//         // ✅ STORE TOKEN + USER FOR NAVBAR
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("user", JSON.stringify(res.data.user));

//         alert("✅ Logged in successfully");
//         window.location.href = "/";
//       } else {
//         alert("❌ Login failed");
//       }

//     } catch (err) {
//       console.log("Google Login Error:", err);
//       alert("❌ Google Login Failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="bg-white p-10 rounded-xl shadow-lg">
        
//         <h1 className="text-4xl font-bold text-center mb-6">
//           VegOre Login
//         </h1>

//         <div className="flex justify-center">
//           <GoogleLogin
//             onSuccess={handleGoogleLogin}
//             onError={() => alert("Google Login Failed")}
//           />
//         </div>

//       </div>
//     </div>
//   );
// }














// import { GoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// export default function LoginPage() {

//   const handleGoogleLogin = async (cred) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:4000/api/user/google",
//         {
//           credential: cred.credential,
//         }
//       );

//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ REQUIRED

//         alert("✅ Logged in successfully");
//         window.location.href = "/";
//       } else {
//         alert("❌ Login failed");
//       }

//     } catch (err) {
//       console.log(err);
//       alert("❌ Google Login Failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="bg-white p-10 rounded-xl shadow-lg">
//         <h1 className="text-4xl font-bold text-center mb-6">VegOre Login</h1>

//         <div className="flex justify-center">
//           <GoogleLogin
//             onSuccess={handleGoogleLogin}
//             onError={() => alert("Google Login Failed")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }














// import { GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export default function Login() {
//   const navigate = useNavigate();

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       console.log("=== GOOGLE LOGIN START ===");
//       console.log("Google credential received:", credentialResponse);

//       // IMPORTANT: Replace with your actual backend URL
//       const response = await axios.post('http://localhost:4000/api/user/google', {
//         credential: credentialResponse.credential
//       });

//       console.log("=== BACKEND RESPONSE ===");
//       console.log("Full response:", response.data);
//       console.log("User data:", response.data.user);
//       console.log("Picture URL:", response.data.user?.picture);

//       if (response.data.success) {
//         // Store token
//         localStorage.setItem('token', response.data.token);
//         console.log("Token stored:", response.data.token);
        
//         // Store complete user object including picture
//         const userDataString = JSON.stringify(response.data.user);
//         localStorage.setItem('user', userDataString);
//         console.log("User stored in localStorage:", userDataString);
        
//         // Verify it was stored
//         const storedUser = localStorage.getItem('user');
//         console.log("Verification - Retrieved from localStorage:", storedUser);

//         toast.success('Login successful!');
        
//         // Navigate to home
//         navigate('/');
        
//         // Force reload to update navbar
//         setTimeout(() => {
//           window.location.reload();
//         }, 100);
//       }
//     } catch (error) {
//       console.error('=== LOGIN ERROR ===');
//       console.error('Error details:', error);
//       console.error('Response:', error.response?.data);
//       toast.error(error.response?.data?.message || 'Login failed');
//     }
//   };

//   const handleGoogleError = () => {
//     console.error('Google Login Failed');
//     toast.error('Google login failed. Please try again.');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-3xl font-bold text-center mb-2 text-green-700">
//           Welcome to VegOre
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Sign in to continue
//         </p>

//         <div className="flex justify-center">
//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onError={handleGoogleError}
//             useOneTap
//             theme="filled_blue"
//             size="large"
//             text="signin_with"
//             shape="rectangular"
//           />
//         </div>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           By signing in, you agree to our Terms of Service and Privacy Policy
//         </p>

//         {/* DEBUG BUTTON - Remove this after fixing */}
//         <button 
//           onClick={() => {
//             console.log("=== LOCALSTORAGE DEBUG ===");
//             console.log("Token:", localStorage.getItem('token'));
//             console.log("User:", localStorage.getItem('user'));
//             const user = localStorage.getItem('user');
//             if (user) {
//               console.log("Parsed user:", JSON.parse(user));
//             }
//           }}
//           className="mt-4 w-full py-2 bg-gray-200 rounded text-sm"
//         >
//           Debug: Check localStorage
//         </button>
//       </div>
//     </div>
//   );
// }


import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiShield, FiLock, FiCheck } from 'react-icons/fi';

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log("=== GOOGLE LOGIN START ===");
      console.log("Google credential received:", credentialResponse);

      const response = await axios.post('http://localhost:4000/api/user/google', {
        credential: credentialResponse.credential
      });

      console.log("=== BACKEND RESPONSE ===");
      console.log("Full response:", response.data);
      console.log("User data:", response.data.user);
      console.log("Picture URL:", response.data.user?.picture);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        console.log("Token stored:", response.data.token);
        
        const userDataString = JSON.stringify(response.data.user);
        localStorage.setItem('user', userDataString);
        console.log("User stored in localStorage:", userDataString);
        
        const storedUser = localStorage.getItem('user');
        console.log("Verification - Retrieved from localStorage:", storedUser);

        toast.success('Welcome back! Login successful', {
          position: "top-right",
          autoClose: 2000,
        });
        
        navigate('/');
        
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    } catch (error) {
      console.error('=== LOGIN ERROR ===');
      console.error('Error details:', error);
      console.error('Response:', error.response?.data);
      toast.error(error.response?.data?.message || 'Login failed. Please try again.', {
        position: "top-right",
      });
    }
  };

  const handleGoogleError = () => {
    console.error('Google Login Failed');
    toast.error('Google login failed. Please try again.', {
      position: "top-right",
    });
  };

  const features = [
    { icon: FiShield, text: "Secure authentication" },
    { icon: FiLock, text: "Your data is protected" },
    { icon: FiCheck, text: "Quick & easy sign in" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md w-full relative">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-3xl">V</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">
            Welcome to VegOre
          </h1>
          <p className="text-gray-600 text-lg">
            Fresh vegetables, delivered to your door
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white text-center mb-1">
              Sign In
            </h2>
            <p className="text-green-50 text-center text-sm">
              Continue your healthy journey
            </p>
          </div>

          {/* Card Body */}
          <div className="px-8 py-8">
            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-gray-600 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
                    <feature.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Google Login Button Container */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Sign in with
                </span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              <div className="flex justify-center">
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    useOneTap
                    theme="outline"
                    size="large"
                    text="signin_with"
                    shape="rectangular"
                    width="320"
                  />
                </div>
              </div>
            </div>

            {/* Terms & Privacy */}
            <p className="text-center text-xs text-gray-500 mt-8 leading-relaxed">
              By signing in, you agree to our{' '}
              <a href="#" className="text-green-600 hover:text-green-700 font-medium underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-green-600 hover:text-green-700 font-medium underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-semibold">
              Contact Support
            </a>
          </p>
        </div>

        {/* Debug Button - Remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <button 
            onClick={() => {
              console.log("=== LOCALSTORAGE DEBUG ===");
              console.log("Token:", localStorage.getItem('token'));
              console.log("User:", localStorage.getItem('user'));
              const user = localStorage.getItem('user');
              if (user) {
                console.log("Parsed user:", JSON.parse(user));
              }
            }}
            className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-xs font-medium transition-colors duration-200"
          >
            🔍 Debug: Check localStorage
          </button>
        )}
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}