import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-10">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-10 text-sm sm:text-base">
          Your privacy matters. This policy explains how VegOre collects, uses, and protects your information.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
          We collect personal information such as your name, email, phone number,
          address, and payment details when you create an account or place an order.  
          We also collect usage data to improve your experience.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base mb-6">
          <li>To process your orders and deliver your meals</li>
          <li>To provide customer support</li>
          <li>To send important updates and promotional offers</li>
          <li>To improve our services and user experience</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
          VegOre does <strong>not</strong> sell or share your data with third-party advertisers.  
          We only share data with secure partners involved in delivery, payment processing,
          and platform management.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          4. Data Security
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
          We use industry-standard encryption and security measures to safeguard your information.
          Regular audits ensure your data stays protected.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          5. Your Rights
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          You have the right to access, update, or delete your personal information at any time.
          You may also request to deactivate your account.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          6. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          For privacy-related questions, email us at  
          <span className="font-semibold text-green-700"> support@vegore.me</span>.
        </p>

      </div>
    </div>
  );
}
