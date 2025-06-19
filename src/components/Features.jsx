import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { features } from "../data/features";
import { useNavigate } from "react-router-dom";

export function Features() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer at TechCorp",
      content:
        "ViteLand transformed our development workflow completely. The speed and reliability are unmatched!",
      avatar: "👩‍💻",
    },
    {
      name: "Mike Chen",
      role: "CTO at StartupXYZ",
      content:
        "The best development platform I've used. Simple, powerful, and incredibly fast to get started.",
      avatar: "👨‍💼",
    },
    {
      name: "Emily Davis",
      role: "Full Stack Developer",
      content:
        "Beautiful interface, powerful features, and excellent documentation. Love using it every day!",
      avatar: "👩‍🎨",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Our Features
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ViteLand?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the features that make our platform the perfect choice
              for your next project.
            </p>
          </div>

          {/* Features Grid - 4 columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 rounded-md bg-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block bg-blue-50 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                💘 Where we believe
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Developers
            </h2>
            <p className="text-xl text-gray-600">
              See what our community has to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all duration-500 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-500 transform scale-105 shadow-xl"
                    : "bg-white border border-gray-200 hover:shadow-lg"
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <svg
                    className="w-8 h-8 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Avatar */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-lg leading-relaxed mb-6 text-gray-700">
                  "{testimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                {/* Active Indicator */}
                {index === currentTestimonial && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-blue-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who are already building amazing
            applications with ViteLand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/pricing")}
              className="bg-white cursor-pointer text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigate("/pricing")}
              className="border-2 cursor-pointer border-gray-400 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
