import { useState } from 'react';
import { ChevronDown, DollarSign, Clock, Package, CreditCard, Gift, Mail } from 'lucide-react';

export default function RefundPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  const policyData = [
    {
      icon: Clock,
      title: "Order Cancellation",
      content: "Orders can be canceled up to 1 hour before delivery time. Cancellations made after this preparation window cannot be refunded as your meal preparation has already begun.",
      highlight: "Cancel within 1 hour before delivery"
    },
    {
      icon: DollarSign,
      title: "Subscription Refunds",
      content: "For subscription plans, unused meal days can be refunded or carried forward to your next billing cycle. Used meal days are non-refundable as the service has already been provided.",
      highlight: "Unused days refundable or transferable"
    },
    {
      icon: Package,
      title: "Incorrect or Damaged Orders",
      content: "If you receive the wrong meal or damaged packaging, contact us immediately with photos if possible. We will provide either a replacement meal (preferred option) or a full refund to your original payment method.",
      highlight: "Replacement or full refund available"
    },
    {
      icon: CreditCard,
      title: "Refund Processing Time",
      content: "Approved refunds are processed within 5–7 business days to your original payment method. You will receive an email confirmation once the refund has been initiated. Please allow additional time for your bank to process the transaction.",
      highlight: "5-7 business days processing"
    },
    {
      icon: Gift,
      title: "Non-Refundable Items",
      content: "Gift cards, promotional meals, and discounted bundles are non-refundable. These special offers are final sale items and cannot be exchanged or refunded under any circumstances.",
      highlight: "Gift cards & promotions excluded"
    },
    {
      icon: Mail,
      title: "Contact Us for Refunds",
      content: "For refund or cancellation support, email us at support@vegore.me. Please include your order number, contact information, and a brief description of the issue. Our team will respond within 24 hours.",
      highlight: "24-hour response time"
    }
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-14 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your satisfaction is important. Here's how refunds and cancellations work at VegOre.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-3 mb-12">
          {policyData.map((item, index) => {
            const isOpen = openIndex === index;
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <IconComponent className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 text-lg block">
                        {item.title}
                      </span>
                      <span className="text-sm text-emerald-600 font-medium">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`text-emerald-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Need Help with a Refund?</h3>
            <p className="text-emerald-50 mb-6">
              Our support team is ready to assist you with any refund or cancellation requests
            </p>
            <a
              href="mailto:support@vegore.me"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-emerald-50 transition-all"
            >
              <Mail size={20} />
              Email Support
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex gap-3">
            <div className="text-amber-600 text-xl">⚠️</div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Important Notice</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                All refund requests must be submitted within 24 hours of delivery. 
                Refunds are subject to review and approval by our team. We reserve the right 
                to deny refunds that don't meet our policy criteria.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}