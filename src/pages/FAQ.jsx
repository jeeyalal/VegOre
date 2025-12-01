import { useState } from 'react';
import { ChevronDown, Search, MessageCircle, Mail } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is VegOre?",
          answer: "VegOre is a comprehensive platform designed to help you transition to and maintain a vegetarian lifestyle. We provide meal plans, recipes, tracking tools, and a supportive community to make your journey easier and more enjoyable."
        },
        {
          question: "How do I create an account?",
          answer: "Click the 'Sign Up' button in the top right corner, enter your email address, create a password, and fill in your basic information. You'll receive a confirmation email to verify your account."
        },
        {
          question: "Is VegOre free to use?",
          answer: "VegOre offers both free and premium plans. The free plan includes basic meal tracking, recipes, and community access. Premium plans unlock advanced features like personalized meal plans, nutritionist consultations, and exclusive content."
        }
      ]
    },
    {
      category: "Meal Plans & Recipes",
      questions: [
        {
          question: "Can I customize my meal plans?",
          answer: "Yes! Premium users can fully customize their meal plans based on dietary preferences, allergies, calorie goals, and cooking time. You can swap meals, adjust portion sizes, and save your favorite recipes."
        },
        {
          question: "Are the recipes suitable for beginners?",
          answer: "Absolutely! We have recipes for all skill levels, clearly marked as beginner, intermediate, or advanced. Each recipe includes step-by-step instructions, cooking times, and helpful tips."
        },
        {
          question: "Can I submit my own recipes?",
          answer: "Yes! Community members can submit recipes through the 'Share Recipe' feature. After review by our team, approved recipes are added to our database and credited to you."
        }
      ]
    },
    {
      category: "Tracking & Progress",
      questions: [
        {
          question: "How does the 30-day challenge work?",
          answer: "The 30-day challenge helps you build consistent vegetarian eating habits. Mark each day you successfully follow your vegetarian goals, track your streak, and earn achievements. You can pause and resume as needed."
        },
        {
          question: "What happens if I miss a day?",
          answer: "Missing a day won't delete your progress! Your total days tracked remain, but your current streak will reset. You can resume anytime and start building a new streak."
        },
        {
          question: "Can I track multiple goals?",
          answer: "Premium users can track multiple goals simultaneously, such as vegetarian days, specific nutrient targets, water intake, and exercise routines."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "How do I upgrade to premium?",
          answer: "Go to Settings > Subscription, choose your preferred plan (monthly or annual), and complete the payment process. You'll have immediate access to premium features."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel anytime from your account settings. You'll continue to have premium access until the end of your current billing period."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. All transactions are secure and encrypted."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "The app isn't loading properly. What should I do?",
          answer: "First, try refreshing your browser or clearing your cache. Make sure you're using an updated browser (Chrome, Firefox, Safari, or Edge). If issues persist, contact our support team with details about your device and browser."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password."
        },
        {
          question: "Is my data secure?",
          answer: "Yes! We use industry-standard encryption and security measures to protect your data. We never share your personal information with third parties without your consent. Read our Privacy Policy for complete details."
        }
      ]
    }
  ];

  const filteredFaqs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-14 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about VegOre
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-gray-800 bg-white shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-8">
            {filteredFaqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-1 h-8 bg-emerald-500 rounded"></div>
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = `${catIndex}-${qIndex}`;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div
                        key={qIndex}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-800 text-lg">
                            {item.question}
                          </span>
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
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No results found for "{searchTerm}"</p>
            <p className="text-gray-500 mt-2">Try searching with different keywords</p>
          </div>
        )}

        {/* Contact Support Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-emerald-50 mb-6">
              Our support team is here to help you with anything you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-colors shadow-md">
                <MessageCircle size={20} />
                Live Chat
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors border-2 border-white">
                <Mail size={20} />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}