import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen py-16 px-4">
      
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700">
          Contact <span className="text-emerald-600">Us</span>
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          We’re here to help you. Reach out to us anytime.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 sm:p-12 rounded-2xl">
        
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
          Get In Touch
        </h2>

        <div className="space-y-6 text-gray-700">

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <Phone size={28} className="text-green-600" />
            <div>
              <p className="font-semibold text-lg">Phone / WhatsApp</p>
              <p className="text-gray-600 mt-1">+91 7249491979</p>

              <div className="flex gap-3 mt-3">
                {/* CALL BUTTON */}
                <a
                  href="tel:+917249491979"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-green-700"
                >
                  Call Now
                </a>

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/917249491979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-green-600 flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <Mail size={28} className="text-green-600" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p className="text-gray-600 mt-1">vegoreofficial@gmail.com</p>

              <a
                href="mailto:vegoreofficial@gmail.com"
                className="mt-3 inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-emerald-700"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <MapPin size={28} className="text-green-600" />
            <div>
              <p className="font-semibold text-lg">Location</p>
              <p className="text-gray-600 mt-1">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            Our team responds within 15–30 minutes on WhatsApp.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            (Support hours: 9 AM – 11 PM)
          </p>
        </div>
      </div>
    </div>
  );
}
