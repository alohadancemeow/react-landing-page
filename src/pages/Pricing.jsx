import { useState } from "react";
import { Check, X, Star } from "lucide-react";
import { plans } from "../data/pricing";
import { useNavigate } from "react-router-dom";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple,
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              {" "}
              Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your needs. Start free and scale as you
            grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span
              className={`font-medium ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-medium ${
                isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Annual
              <span className="ml-1 text-sm text-green-600 font-semibold">
                (Save 17%)
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 shadow-lg"
                    : "bg-white border border-gray-200 shadow-md"
                } hover:shadow-lg transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-600">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    )}
                  </div>
                  <button
                    className={`w-full cursor-pointer py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Limitations:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span className="text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers building amazing applications with
            ViteLand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const el = document.getElementById("pricing");
                if (el) {
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
