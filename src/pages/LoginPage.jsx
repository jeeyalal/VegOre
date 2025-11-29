import { useState } from "react";
import { Mail, Smartphone, Lock, X } from "lucide-react";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setShowOTP(true);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 4) {
      alert("Logged in successfully!");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex justify-center items-center px-4 ">
      
      {/* Login Card */}
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md px-8 py-10 border border-green-100">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-green-700 text-center font-[Okra]">
          VegOre
        </h1>

        <p className="text-center text-gray-600 mt-2 text-sm">
          Login to continue your healthy journey
        </p>

        {/* Mobile Input */}
        <div className="mt-8">
          <label className="font-semibold text-gray-700">Mobile Number</label>
          <div className="flex items-center mt-2 bg-gray-100 rounded-xl px-4 py-3">
            <Smartphone className="text-green-700" size={20} />
            <input
              type="number"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter 10-digit mobile number"
              className="flex-1 bg-transparent outline-none ml-3"
            />
          </div>

          <button 
            onClick={handleSendOtp}
            className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
          >
            Send OTP
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex justify-center items-center gap-3 py-3 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-6 h-6"
          />
          <span className="font-medium text-gray-700">Login with Google</span>
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-700 font-semibold underline">
            Create Account
          </a>
        </p>
      </div>

      {/* OTP Modal */}
      {showOTP && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-sm p-6 relative shadow-lg">
            
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              onClick={() => setShowOTP(false)}
            >
              <X size={22} />
            </button>

            <h3 className="text-xl font-bold text-green-700 text-center">
              Enter OTP
            </h3>

            <p className="text-center text-gray-500 text-sm mt-1">
              OTP sent to <span className="font-semibold">{mobile}</span>
            </p>

            {/* OTP Input */}
            <div className="mt-6">
              <input
                type="number"
                value={otp}
                maxLength={4}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 4-digit OTP"
                className="w-full border rounded-xl px-4 py-3 text-center text-xl tracking-widest outline-none"
              />
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerifyOtp}
              className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
