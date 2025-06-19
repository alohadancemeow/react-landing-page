import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Plus,
  Minus,
} from "lucide-react";
import { contactInfo, budgetOptions, faqs } from "../data/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
      });
    }, 1000);
  };

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Form */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Let's start a conversation
                  </h2>
                  <p className="text-gray-600">
                    Tell us about your project and how we can help you succeed.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 text-black"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-gray-50 focus:bg-white"
                        placeholder="Tell us more about your project, goals, and how we can help you succeed..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-gray-900 text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We'll get back to you within 24 hours. For urgent matters,
                      call us directly.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why choose ViteLand?
                </h3>

                <div className="space-y-6 text-start">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">24/7 Support</p>
                      <p className="text-gray-600 text-sm">
                        Round-the-clock assistance when you need it
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Expert Team</p>
                      <p className="text-gray-600 text-sm">
                        Experienced developers and designers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Fast Response</p>
                      <p className="text-gray-600 text-sm">
                        Quick turnaround on all inquiries
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-300">
                  <p className="text-sm text-gray-600 mb-4 text-start">
                    Trusted by 10,000+ developers worldwide
                  </p>
                  <div className="flex items-center">
                    {[
                      "https://randomuser.me/api/portraits/men/32.jpg",
                      "https://randomuser.me/api/portraits/women/44.jpg",
                      "https://randomuser.me/api/portraits/men/65.jpg",
                      "https://randomuser.me/api/portraits/women/68.jpg",
                      "https://randomuser.me/api/portraits/men/12.jpg",
                      "https://randomuser.me/api/portraits/men/40.jpg",
                      "https://randomuser.me/api/portraits/women/45.jpg",
                      "https://randomuser.me/api/portraits/men/68.jpg",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="User avatar"
                        className={`w-8 h-8 rounded-full object-cover border-2 border-white shadow -ml-2 first:ml-0`}
                        style={{ zIndex: 10 - i }}
                      />
                    ))}

                    <span className="text-sm text-gray-600 ml-4">
                      +10k more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ViteLand
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed text-start">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
