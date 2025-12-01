import { FileText, AlertTriangle, CheckCircle, XCircle, Scale } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-14 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500 rounded-full mb-4">
            <FileText className="text-white" size={32} />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: December 1, 2024
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 space-y-8">
          
          {/* Introduction */}
          <section>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Agreement to Terms:</strong> By accessing or using VegOre ("Platform," "Service," "we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access or use our services.
              </p>
            </div>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Account Registration & Eligibility
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Eligibility Requirements</h3>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>You must be at least 13 years old to use VegOre</span>
                  </li>
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>Users under 18 must have parental or guardian consent</span>
                  </li>
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>You must provide accurate, current, and complete information</span>
                  </li>
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>One person may not maintain multiple accounts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Account Security</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must:
                </p>
                <ul className="space-y-1 ml-6">
                  <li className="text-gray-600 text-sm flex gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Use a strong, unique password</span>
                  </li>
                  <li className="text-gray-600 text-sm flex gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Notify us immediately of unauthorized access</span>
                  </li>
                  <li className="text-gray-600 text-sm flex gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Log out from shared or public devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Subscription & Payment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Subscription & Payment Terms
            </h2>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Free Tier</h3>
                  <p className="text-gray-600 text-sm">Access to basic features, limited recipes, and community forums</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Premium Tier</h3>
                  <p className="text-gray-600 text-sm">Full access to all features, personalized plans, and priority support</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Billing & Renewal</h3>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>Subscriptions automatically renew unless canceled before the renewal date</span>
                  </li>
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>Prices are subject to change with 30 days advance notice</span>
                  </li>
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>You authorize us to charge your payment method on each billing cycle</span>
                  </li>
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>Failed payments may result in service suspension or termination</span>
                  </li>
                  <li className="text-gray-700 flex gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>All fees are non-refundable except as outlined in our Refund Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Content & Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              User Content & Conduct
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Your Content</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you submit recipes, reviews, comments, or other content to VegOre, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display that content in connection with our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You retain ownership of your content but represent that you have all necessary rights to share it and that it doesn't violate any laws or third-party rights.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
                <div className="flex gap-3 mb-3">
                  <AlertTriangle className="text-red-600 flex-shrink-0" size={24} />
                  <h3 className="font-semibold text-gray-800">Prohibited Activities</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">You may NOT:</p>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Post harmful, offensive, or illegal content</span>
                  </li>
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Harass, bully, or threaten other users</span>
                  </li>
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Share false, misleading, or fraudulent information</span>
                  </li>
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Attempt to hack, reverse engineer, or compromise our systems</span>
                  </li>
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Use automated tools (bots, scrapers) without permission</span>
                  </li>
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Infringe on others' intellectual property rights</span>
                  </li>
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Impersonate another person or organization</span>
                  </li>
                  <li className="text-gray-700 text-sm flex gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Distribute spam, malware, or viruses</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                All content on VegOre, including but not limited to text, graphics, logos, recipes, meal plans, software, and design elements, is owned by VegOre or our licensors and protected by copyright, trademark, and other intellectual property laws.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Limited License</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use VegOre for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or exploit any content without our express written permission.
                </p>
              </div>
            </div>
          </section>

          {/* Medical Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Medical & Health Disclaimer
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
              <div className="flex gap-3">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Important:</strong> VegOre provides general nutritional and dietary information for educational purposes only. We are not medical professionals, and our content should not be considered medical advice.
                  </p>
                  <ul className="space-y-2 ml-3">
                    <li className="text-gray-700 text-sm flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Consult a healthcare professional before making significant dietary changes</span>
                    </li>
                    <li className="text-gray-700 text-sm flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Individual nutritional needs vary based on health conditions, age, and lifestyle</span>
                    </li>
                    <li className="text-gray-700 text-sm flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>We are not liable for health outcomes resulting from following our meal plans</span>
                    </li>
                    <li className="text-gray-700 text-sm flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>If you have allergies or medical conditions, verify all recipes carefully</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Limitation of Liability
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                VegOre is provided "as is" and "as available" without warranties of any kind, either express or implied. To the fullest extent permitted by law:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-700 flex gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>We do not guarantee uninterrupted, error-free, or secure service</span>
                </li>
                <li className="text-gray-700 flex gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>We are not liable for indirect, incidental, or consequential damages</span>
                </li>
                <li className="text-gray-700 flex gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>Our total liability shall not exceed the amount you paid in the past 12 months</span>
                </li>
                <li className="text-gray-700 flex gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>We are not responsible for third-party content, links, or services</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Account Termination
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">By You</h3>
                <p className="text-gray-600 text-sm">You may close your account at any time through account settings or by contacting support</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">By Us</h3>
                <p className="text-gray-600 text-sm">We may suspend or terminate accounts that violate these Terms, engage in fraud, or pose security risks</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 italic">
              Upon termination, your access to premium features will cease, but your data may be retained according to our Privacy Policy.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Dispute Resolution & Governing Law
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. Any disputes arising from these Terms or your use of VegOre will be resolved through:
              </p>
              <ol className="space-y-3 ml-6">
                <li className="text-gray-700">
                  <span className="font-semibold">1. Informal Resolution:</span> Contact us first to attempt good-faith resolution
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">2. Mediation:</span> If informal resolution fails, pursue mediation
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">3. Binding Arbitration:</span> Final disputes subject to binding arbitration in [Your Location]
                </li>
              </ol>
              <p className="text-gray-600 text-sm italic">
                You waive your right to participate in class action lawsuits against VegOre.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent platform notice at least 30 days before taking effect. Continued use of VegOre after changes indicates acceptance of the updated Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <Scale className="flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-2">Questions About These Terms?</h3>
                <p className="text-indigo-50 mb-4">
                  If you have questions or concerns about these Terms and Conditions, please reach out:
                </p>
                <div className="space-y-1">
                  <p className="font-semibold">Email: legal@vegore.com</p>
                  <p className="text-sm text-indigo-50">Support: support@vegore.com</p>
                  <p className="text-sm text-indigo-50">Response time: 2-3 business days</p>
                </div>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
            <div className="flex gap-3 items-start">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-gray-800 mb-2">Acknowledgment</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  By using VegOre, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our services immediately.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}