import React from "react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-10">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
          Refund Policy
        </h1>
        <p className="text-gray-600 text-center mb-10 text-sm sm:text-base">
          Your satisfaction is important. Here’s how refunds and cancellations work at VegOre.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          1. Order Cancellation
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          Orders can be canceled up to <strong>1 hour before delivery time</strong>. 
          Cancellations made after this preparation window cannot be refunded.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          2. Subscription Refunds
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          For subscription plans, unused meal days can be refunded or carried forward.  
          Used meal days are non-refundable.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          3. Incorrect or Damaged Orders
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          If you receive the wrong meal or damaged packaging, contact us immediately.  
          We will provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base mb-6">
          <li>A replacement meal (preferred)</li>
          <li>Or a full refund</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          4. Refund Processing Time
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          Refunds are processed within <strong>5–7 business days</strong> to your original payment method.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          5. Non-Refundable Items
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          Gift cards, promotional meals, and discounted bundles are non-refundable.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          6. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          For refund or cancellation support, email us at  
          <span className="font-semibold text-green-700"> support@vegore.me</span>.
        </p>

      </div>
    </div>
  );
}
