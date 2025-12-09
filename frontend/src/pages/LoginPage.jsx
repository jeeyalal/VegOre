


// // import { GoogleLogin } from '@react-oauth/google';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import { FiShield, FiLock, FiCheck } from 'react-icons/fi';

// // export default function Login() {
// //   const navigate = useNavigate();

// //   // ✅ CHANGE THIS TO YOUR DEPLOYED BACKEND URL
// //   const API_URL = import.meta.env.VITE_API_URL || 'https://vegore-backend.onrender.com';

// //   const handleGoogleSuccess = async (credentialResponse) => {
// //     try {
// //       console.log("=== GOOGLE LOGIN START ===");
// //       console.log("Credential received:", credentialResponse?.credential ? "Yes" : "No");

// //       if (!credentialResponse?.credential) {
// //         toast.error('No credential received from Google');
// //         return;
// //       }

// //       console.log("Sending request to:", `${API_URL}/api/user/google`);

// //       const response = await axios.post(
// //         `${API_URL}/api/user/google`,
// //         {
// //           credential: credentialResponse.credential,
// //         },
// //         {
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         }
// //       );

// //       console.log("=== BACKEND RESPONSE ===");
// //       console.log("Response:", response.data);

// //       if (response.data.success) {
// //         // ✅ Store token
// //         localStorage.setItem('token', response.data.token);
// //         console.log("✅ Token stored");
        
// //         // ✅ Store user data
// //         const userDataString = JSON.stringify(response.data.user);
// //         localStorage.setItem('user', userDataString);
// //         console.log("✅ User stored:", response.data.user);

// //         toast.success('Welcome back! Login successful', {
// //           position: "top-right",
// //           autoClose: 2000,
// //         });
        
// //         // Navigate to home
// //         navigate('/');
        
// //         // Force reload to update navbar
// //         setTimeout(() => {
// //           window.location.reload();
// //         }, 100);
// //       } else {
// //         toast.error(response.data.message || 'Login failed');
// //       }
// //     } catch (error) {
// //       console.error('=== LOGIN ERROR ===');
// //       console.error('Error:', error);
// //       console.error('Response:', error.response?.data);
      
// //       const errorMessage = error.response?.data?.message || 
// //                           error.response?.data?.error || 
// //                           'Login failed. Please try again.';
      
// //       toast.error(errorMessage, {
// //         position: "top-right",
// //       });
// //     }
// //   };

// //   const handleGoogleError = () => {
// //     console.error('Google Login Failed');
// //     toast.error('Google login failed. Please try again.', {
// //       position: "top-right",
// //     });
// //   };

// //   const features = [
// //     { icon: FiShield, text: "Secure authentication" },
// //     { icon: FiLock, text: "Your data is protected" },
// //     { icon: FiCheck, text: "Quick & easy sign in" },
// //   ];

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
// //       {/* Background Decorations */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
// //       </div>

// //       <div className="max-w-md w-full relative">
// //         {/* Logo Section */}
// //         <div className="text-center mb-8">
// //           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300">
// //             <span className="text-white font-bold text-3xl">V</span>
// //           </div>
// //           <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">
// //             Welcome to VegOre
// //           </h1>
// //           <p className="text-gray-600 text-lg">
// //             Fresh vegetables, delivered to your door
// //           </p>
// //         </div>

// //         {/* Main Card */}
// //         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
// //           {/* Card Header */}
// //           <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
// //             <h2 className="text-2xl font-bold text-white text-center mb-1">
// //               Sign In
// //             </h2>
// //             <p className="text-green-50 text-center text-sm">
// //               Continue your healthy journey
// //             </p>
// //           </div>

// //           {/* Card Body */}
// //           <div className="px-8 py-8">
// //             {/* Features List */}
// //             <div className="space-y-3 mb-8">
// //               {features.map((feature, index) => (
// //                 <div 
// //                   key={index}
// //                   className="flex items-center gap-3 text-gray-600 group"
// //                 >
// //                   <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
// //                     <feature.icon className="w-4 h-4 text-green-600" />
// //                   </div>
// //                   <span className="text-sm">{feature.text}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Google Login Button Container */}
// //             <div className="space-y-4">
// //               <div className="flex items-center gap-3 mb-4">
// //                 <div className="flex-1 h-px bg-gray-200"></div>
// //                 <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
// //                   Sign in with
// //                 </span>
// //                 <div className="flex-1 h-px bg-gray-200"></div>
// //               </div>

// //               <div className="flex justify-center">
// //                 <div className="transform hover:scale-105 transition-transform duration-200">
// //                   <GoogleLogin
// //                     onSuccess={handleGoogleSuccess}
// //                     onError={handleGoogleError}
// //                     useOneTap
// //                     theme="outline"
// //                     size="large"
// //                     text="signin_with"
// //                     shape="rectangular"
// //                     width="320"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Terms & Privacy */}
// //             <p className="text-center text-xs text-gray-500 mt-8 leading-relaxed">
// //               By signing in, you agree to our{' '}
// //               <a href="#" className="text-green-600 hover:text-green-700 font-medium underline">
// //                 Terms of Service
// //               </a>{' '}
// //               and{' '}
// //               <a href="#" className="text-green-600 hover:text-green-700 font-medium underline">
// //                 Privacy Policy
// //               </a>
// //             </p>
// //           </div>
// //         </div>

// //         {/* Bottom Info */}
// //         <div className="mt-8 text-center">
// //           <p className="text-sm text-gray-600">
// //             Need help?{' '}
// //             <a href="#" className="text-green-600 hover:text-green-700 font-semibold">
// //               Contact Support
// //             </a>
// //           </p>
// //         </div>

// //         {/* Debug Button - Remove in production */}
// //         {import.meta.env.DEV && (
// //           <button 
// //             onClick={() => {
// //               console.log("=== LOCALSTORAGE DEBUG ===");
// //               console.log("API URL:", API_URL);
// //               console.log("Token:", localStorage.getItem('token'));
// //               console.log("User:", localStorage.getItem('user'));
// //               const user = localStorage.getItem('user');
// //               if (user) {
// //                 console.log("Parsed user:", JSON.parse(user));
// //               }
// //             }}
// //             className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-xs font-medium transition-colors duration-200"
// //           >
// //             🔍 Debug: Check localStorage & Config
// //           </button>
// //         )}
// //       </div>

// //       {/* Custom animations */}
// //       <style>{`
// //         @keyframes blob {
// //           0%, 100% { transform: translate(0, 0) scale(1); }
// //           25% { transform: translate(20px, -50px) scale(1.1); }
// //           50% { transform: translate(-20px, 20px) scale(0.9); }
// //           75% { transform: translate(50px, 50px) scale(1.05); }
// //         }
// //         .animate-blob {
// //           animation: blob 7s infinite;
// //         }
// //         .animation-delay-2000 {
// //           animation-delay: 2s;
// //         }
// //         .animation-delay-4000 {
// //           animation-delay: 4s;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }








// import { GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { FiShield, FiLock, FiCheck } from 'react-icons/fi';

// export default function Login() {
//   const navigate = useNavigate();

//   // ✅ FIXED - Using correct env variable name
//   const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://vegore-backend.onrender.com';

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       console.log("=== GOOGLE LOGIN START ===");
//       console.log("Credential received:", credentialResponse?.credential ? "Yes" : "No");

//       if (!credentialResponse?.credential) {
//         toast.error('No credential received from Google');
//         return;
//       }

//       console.log("Sending request to:", `${API_URL}/api/user/google`);

//       const response = await axios.post(
//         `${API_URL}/api/user/google`,
//         {
//           credential: credentialResponse.credential,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log("=== BACKEND RESPONSE ===");
//       console.log("Response:", response.data);

//       if (response.data.success) {
//         localStorage.setItem('token', response.data.token);
//         console.log("✅ Token stored");
        
//         const userDataString = JSON.stringify(response.data.user);
//         localStorage.setItem('user', userDataString);
//         console.log("✅ User stored:", response.data.user);

//         toast.success('Welcome back! Login successful', {
//           position: "top-right",
//           autoClose: 2000,
//         });
        
//         navigate('/');
        
//         setTimeout(() => {
//           window.location.reload();
//         }, 100);
//       } else {
//         toast.error(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('=== LOGIN ERROR ===');
//       console.error('Error:', error);
//       console.error('Response:', error.response?.data);
      
//       const errorMessage = error.response?.data?.message || 
//                           error.response?.data?.error || 
//                           'Login failed. Please try again.';
      
//       toast.error(errorMessage, {
//         position: "top-right",
//       });
//     }
//   };

//   const handleGoogleError = () => {
//     console.error('Google Login Failed');
//     toast.error('Google login failed. Please try again.', {
//       position: "top-right",
//     });
//   };

//   const features = [
//     { icon: FiShield, text: "Secure authentication" },
//     { icon: FiLock, text: "Your data is protected" },
//     { icon: FiCheck, text: "Quick & easy sign in" },
//   ];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
//       {/* Background Decorations */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="max-w-md w-full relative">
//         {/* Logo Section */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300">
//             <span className="text-white font-bold text-3xl">V</span>
//           </div>
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">
//             Welcome to VegOre
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Fresh vegetables, delivered to your door
//           </p>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//           {/* Card Header */}
//           <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
//             <h2 className="text-2xl font-bold text-white text-center mb-1">
//               Sign In
//             </h2>
//             <p className="text-green-50 text-center text-sm">
//               Continue your healthy journey
//             </p>
//           </div>

//           {/* Card Body */}
//           <div className="px-8 py-8">
//             {/* Features List */}
//             <div className="space-y-3 mb-8">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index}
//                   className="flex items-center gap-3 text-gray-600 group"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
//                     <feature.icon className="w-4 h-4 text-green-600" />
//                   </div>
//                   <span className="text-sm">{feature.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Google Login Button */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="flex-1 h-px bg-gray-200"></div>
//                 <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
//                   Sign in with
//                 </span>
//                 <div className="flex-1 h-px bg-gray-200"></div>
//               </div>

//               <div className="flex justify-center">
//                 <div className="transform hover:scale-105 transition-transform duration-200">
//                   <GoogleLogin
//                     onSuccess={handleGoogleSuccess}
//                     onError={handleGoogleError}
//                     useOneTap={false}
//                     theme="outline"
//                     size="large"
//                     text="signin_with"
//                     shape="rectangular"
//                     width="320"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Terms & Privacy */}
//             <p className="text-center text-xs text-gray-500 mt-8 leading-relaxed">
//               By signing in, you agree to our{' '}
//               <a href="/terms-conditions" className="text-green-600 hover:text-green-700 font-medium underline">
//                 Terms of Service
//               </a>{' '}
//               and{' '}
//               <a href="/privacy-policy" className="text-green-600 hover:text-green-700 font-medium underline">
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Bottom Info */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-600">
//             Need help?{' '}
//             <a href="/contact" className="text-green-600 hover:text-green-700 font-semibold">
//               Contact Support
//             </a>
//           </p>
//         </div>

//         {/* Debug Button */}
//         {import.meta.env.DEV && (
//           <button 
//             onClick={() => {
//               console.log("=== DEBUG INFO ===");
//               console.log("Backend URL:", API_URL);
//               console.log("Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
//               console.log("Token:", localStorage.getItem('token'));
//               console.log("User:", localStorage.getItem('user'));
//             }}
//             className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-xs font-medium transition-colors duration-200"
//           >
//             🔍 Debug Config
//           </button>
//         )}
//       </div>

//       {/* Custom animations */}
//       <style>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           25% { transform: translate(20px, -50px) scale(1.1); }
//           50% { transform: translate(-20px, 20px) scale(0.9); }
//           75% { transform: translate(50px, 50px) scale(1.05); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
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

  const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://vegore-backend.onrender.com';

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log("=== GOOGLE LOGIN START ===");
      console.log("Credential received:", credentialResponse?.credential ? "Yes" : "No");
      console.log("Backend URL:", API_URL);

      if (!credentialResponse?.credential) {
        console.error("❌ No credential in response");
        toast.error('No credential received from Google');
        return;
      }

      // Decode JWT to see user info (for debugging)
      try {
        const base64Url = credentialResponse.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const userInfo = JSON.parse(jsonPayload);
        console.log("👤 User attempting login:", userInfo.email);
      } catch (decodeError) {
        console.warn("Could not decode token for debugging:", decodeError.message);
      }

      console.log("📡 Sending request to backend...");

      const response = await axios.post(
        `${API_URL}/api/user/google`,
        {
          credential: credentialResponse.credential,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 15000, // 15 second timeout
        }
      );

      console.log("=== BACKEND RESPONSE ===");
      console.log("Status:", response.status);
      console.log("Success:", response.data.success);
      console.log("Message:", response.data.message);

      if (response.data.success) {
        console.log("✅ Login successful!");
        console.log("User data:", response.data.user);

        // Store authentication data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        console.log("✅ Data stored in localStorage");

        toast.success(response.data.message || 'Welcome back! Login successful', {
          position: "top-right",
          autoClose: 2000,
        });
        
        // Navigate and reload
        navigate('/');
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        console.error("❌ Backend returned success=false");
        toast.error(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('=== LOGIN ERROR ===');
      console.error('Error type:', error.name);
      console.error('Error message:', error.message);
      
      if (error.response) {
        // Backend returned an error
        console.error('Status:', error.response.status);
        console.error('Response data:', error.response.data);
        
        const errorMessage = error.response.data?.message || 
                            error.response.data?.error || 
                            'Login failed. Please try again.';
        
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 4000,
        });
      } else if (error.request) {
        // Request was made but no response
        console.error('No response from server');
        console.error('Request:', error.request);
        toast.error('Cannot connect to server. Please check your internet connection.', {
          position: "top-right",
          autoClose: 4000,
        });
      } else {
        // Something else happened
        console.error('Setup error:', error.message);
        toast.error('An unexpected error occurred. Please try again.', {
          position: "top-right",
          autoClose: 4000,
        });
      }
    }
  };

  const handleGoogleError = (error) => {
    console.error('=== GOOGLE OAUTH ERROR ===');
    console.error('Error:', error);
    
    let errorMessage = 'Google login failed. ';
    
    if (error?.error === 'popup_closed_by_user') {
      errorMessage += 'You closed the popup. Please try again.';
    } else if (error?.error === 'access_denied') {
      errorMessage += 'Access denied. Please contact support.';
    } else if (error?.error === 'idpiframe_initialization_failed') {
      errorMessage += 'Please check your browser settings and disable ad blockers.';
    } else {
      errorMessage += 'Please try again or contact support.';
    }
    
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
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

            {/* Google Login Button */}
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
                    useOneTap={false}
                    theme="outline"
                    size="large"
                    text="signin_with"
                    shape="rectangular"
                    width="320"
                    auto_select={false}
                  />
                </div>
              </div>
            </div>

            {/* Terms & Privacy */}
            <p className="text-center text-xs text-gray-500 mt-8 leading-relaxed">
              By signing in, you agree to our{' '}
              <a href="/terms-conditions" className="text-green-600 hover:text-green-700 font-medium underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" className="text-green-600 hover:text-green-700 font-medium underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <a href="/contact" className="text-green-600 hover:text-green-700 font-semibold">
              Contact Support
            </a>
          </p>
        </div>

        {/* Debug Button */}
        {import.meta.env.DEV && (
          <button 
            onClick={() => {
              console.log("=== DEBUG INFO ===");
              console.log("Backend URL:", API_URL);
              console.log("Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
              console.log("Token:", localStorage.getItem('token'));
              console.log("User:", localStorage.getItem('user'));
              const user = localStorage.getItem('user');
              if (user) {
                try {
                  console.log("Parsed user:", JSON.parse(user));
                } catch (e) {
                  console.error("Failed to parse user data:", e);
                }
              }
            }}
            className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-xs font-medium transition-colors duration-200"
          >
            🔍 Debug Config
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