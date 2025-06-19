import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { features, tabContent, tabs } from "../data/features";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Modern Development
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover all the tools and features that make ViteLand the perfect
            choice for your development workflow.
          </p>
        </div>
      </section>

      {/* Features Grid - 4 columns */}
      <section className="py-20 bg-white">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 6).map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-md bg-gray-100 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex text-center items-center justify-center w-14 h-14 bg-white rounded-lg group-hover:bg-blue-50 transition-colors duration-300 mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm text-start">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs text-gray-600"
                    >
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Platform
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into what makes ViteLand special
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg gap-2 p-1 shadow-md border border-gray-200 flex flex-row">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gray-900 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="text-6xl mb-6">
                  {tabContent[activeTab].image}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {tabContent[activeTab].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 flex items-center justify-center">
                <div className="text-center text-gray-800">
                  <div className="text-8xl mb-4">⚡</div>
                  <h4 className="text-2xl font-bold mb-2">Ready to Start?</h4>
                  <p className="mb-6 text-gray-600">
                    Experience the power of modern development
                  </p>
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
