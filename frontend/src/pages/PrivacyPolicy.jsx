import { useState } from 'react';
import { ChevronDown, Database, Settings, Share2, Shield, User, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  const policyData = [
    {
      icon: Database,
      title: "Information We Collect",
      content: "We collect personal information such as your name, email, phone number, address, and payment details when you create an account or place an order. We also collect usage data (pages visited, time spent, device information) to improve your experience and provide personalized recommendations. This helps us understand how you interact with our platform and optimize our services.",
      highlight: "Personal & usage data"
    },
    {
      icon: Settings,
      title: "How We Use Your Information",
      listItems: [
        "To process your orders and deliver your meals on time",
        "To provide customer support and respond to your inquiries",
        "To send important updates, order confirmations, and promotional offers",
        "To improve our services, develop new features, and enhance user experience",
        "To prevent fraud and ensure platform security"
      ],
      highlight: "Service delivery & improvements"
    },
    {
      icon: Share2,
      title: "Sharing Your Information",
      content: "VegOre does not sell or share your data with third-party advertisers. We only share data with trusted, secure partners who help us operate our business, including delivery services, payment processors (like Stripe or PayPal), and cloud hosting providers. These partners are bound by strict confidentiality agreements and can only use your data for specific purposes we've authorized.",
      highlight: "No selling or advertising use"
    },
    {
      icon: Shield,
      title: "Data Security",
      content: "We use industry-standard encryption (SSL/TLS) and security measures to safeguard your information during transmission and storage. Our systems undergo regular security audits and vulnerability assessments. All payment information is processed through PCI-DSS compliant payment gateways. We implement multi-factor authentication options and maintain strict access controls to protect your data from unauthorized access.",
      highlight: "Bank-level encryption & audits"
    },
    {
      icon: User,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information at any time through your account settings. You may also request a copy of all data we have about you, opt-out of marketing communications, or request account deactivation. We will respond to all requests within 30 days. Even after account deletion, some information may be retained for legal compliance purposes.",
      highlight: "Full control over your data"
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: "For privacy-related questions, concerns, or to exercise your data rights, email us at support@vegore.me. Our privacy team will respond within 24-48 hours. You can also reach out if you notice any suspicious activity on your account or have questions about how we handle your information.",
      highlight: "24-48 hour response time"
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <Shield className="text-emerald-600" size={32} />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy matters. This policy explains how VegOre collects, uses, and protects your information.
          </p>
        </div>

        {/* Last Updated Badge */}
        <div className="mb-8 text-center">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
            Last Updated: December 2024
          </span>
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
                    isOpen ? 'max-h-[600px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                    {item.listItems ? (
                      <ul className="space-y-2 text-gray-600 leading-relaxed">
                        {item.listItems.map((listItem, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-lg mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Questions About Your Privacy?</h3>
            <p className="text-emerald-50 mb-6">
              Our team is here to answer any privacy-related questions or concerns
            </p>
            <a
              href="mailto:support@vegore.me"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-emerald-50 transition-all"
            >
              <Mail size={20} />
              Contact Privacy Team
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex gap-3">
            <div className="text-blue-600 text-xl">ℹ️</div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Your Privacy Rights</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Under data protection regulations, you have the right to know what personal data 
                we hold about you, request corrections, or ask for deletion. You can exercise 
                these rights at any time by contacting us.
              </p>
            </div>
          </div>
        </div>

        {/* Cookies Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex gap-3">
            <div className="text-amber-600 text-xl">🍪</div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Cookies & Tracking</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, remember your preferences, 
                and analyze site traffic. You can manage cookie preferences in your browser settings. 
                Essential cookies are required for the platform to function properly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}