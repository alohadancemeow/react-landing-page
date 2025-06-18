import { useState } from "react";
import {
  Zap,
  Users,
  Star,
  Shield,
  Code,
  Rocket,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Database,
  Smartphone,
} from "lucide-react";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("development");

  const features = [
    // {
    //   icon: <Zap className="h-8 w-8 text-blue-600" />,
    //   title: "Lightning Fast Development",
    //   description:
    //     "Built for speed with Vite's instant hot module replacement and optimized build process.",
    //   benefits: [
    //     "Instant server start",
    //     "Lightning fast HMR",
    //     "Optimized builds",
    //     "Native ES modules",
    //   ],
    // },
    // {
    //   icon: <Users className="h-8 w-8 text-green-600" />,
    //   title: "Team Collaboration",
    //   description:
    //     "Work together seamlessly with real-time collaboration tools and shared workspaces.",
    //   benefits: [
    //     "Real-time editing",
    //     "Version control",
    //     "Team workspaces",
    //     "Comment system",
    //   ],
    // },
    // {
    //   icon: <Star className="h-8 w-8 text-yellow-600" />,
    //   title: "Premium Quality",
    //   description:
    //     "Enterprise-grade security and reliability you can trust for production applications.",
    //   benefits: [
    //     "99.9% uptime",
    //     "Enterprise security",
    //     "24/7 support",
    //     "SLA guarantee",
    //   ],
    // },
    // {
    //   icon: <Shield className="h-8 w-8 text-purple-600" />,
    //   title: "Secure by Default",
    //   description:
    //     "Built-in security features and best practices to keep your applications safe.",
    //   benefits: [
    //     "HTTPS everywhere",
    //     "CSRF protection",
    //     "XSS prevention",
    //     "Security headers",
    //   ],
    // },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "Developer Experience",
      description:
        "Intuitive APIs and comprehensive documentation to get you started quickly.",
      benefits: [
        "TypeScript support",
        "IntelliSense",
        "Debugging tools",
        "Rich ecosystem",
      ],
    },
    {
      icon: <Rocket className="h-8 w-8 text-red-600" />,
      title: "Deploy Anywhere",
      description:
        "Deploy to any platform with our flexible build system and deployment options.",
      benefits: [
        "One-click deploy",
        "CDN integration",
        "Auto scaling",
        "Global edge network",
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-600" />,
      title: "Global CDN",
      description:
        "Lightning-fast content delivery with our worldwide network of edge servers.",
      benefits: [
        "Global reach",
        "Edge caching",
        "Low latency",
        "High availability",
      ],
    },
    {
      icon: <Lock className="h-8 w-8 text-pink-600" />,
      title: "Privacy First",
      description:
        "Your data stays private with end-to-end encryption and zero tracking.",
      benefits: [
        "End-to-end encryption",
        "Zero tracking",
        "GDPR compliant",
        "Data sovereignty",
      ],
    },
    {
      icon: <Database className="h-8 w-8 text-orange-600" />,
      title: "Database Integration",
      description:
        "Seamless integration with popular databases and data management solutions.",
      benefits: [
        "Multiple DB support",
        "Real-time sync",
        "Backup & restore",
        "Migration tools",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-teal-600" />,
      title: "Mobile Optimized",
      description:
        "Build responsive applications that work perfectly on all devices and screen sizes.",
      benefits: [
        "Responsive design",
        "Touch optimized",
        "PWA support",
        "Offline capabilities",
      ],
    },
  ];

  const tabs = [
    {
      id: "development",
      label: "Development",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: "deployment",
      label: "Deployment",
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      id: "collaboration",
      label: "Collaboration",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const tabContent = {
    development: {
      title: "Powerful Development Tools",
      description: "Everything you need to build modern web applications",
      image: "🛠️",
      features: [
        "Hot Module",
        "TypeScript Support",
        "Built-in Testing",
        "Code Splitting",
        "Tree Shaking",
        "Source Maps",
      ],
    },
    deployment: {
      title: "Seamless Deployment",
      description: "Deploy your applications with confidence",
      image: "🚀",
      features: [
        "One-Click Deploy",
        "Auto Scaling",
        "CDN Integration",
        "SSL Certificates",
        "Custom Domains",
        "Env Variables",
      ],
    },
    collaboration: {
      title: "Team Collaboration",
      description: "Work together more effectively",
      image: "👥",
      features: [
        "Real-time Editing",
        "Version Control",
        "Code Reviews",
        "Team Workspaces",
        "Permission",
        "Activity Tracking",
      ],
    },
  };

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
