import {
  Code,
  Rocket,
  Globe,
  Lock,
  Database,
  Smartphone,
  Users,
  Star,
  Shield,
} from "lucide-react";

export const features = [
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
  {
    icon: <Star className="h-8 w-8 text-yellow-600" />,
    title: "Premium Quality",
    description:
      "Enterprise-grade security and reliability you can trust for production applications.",
    benefits: [
      "99.9% uptime",
      "Enterprise security",
      "24/7 support",
      "SLA guarantee",
    ],
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-600" />,
    title: "Secure by Default",
    description:
      "Built-in security features and best practices to keep your applications safe.",
    benefits: [
      "HTTPS everywhere",
      "CSRF protection",
      "XSS prevention",
      "Security headers",
    ],
  },
];

export const tabs = [
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

export const tabContent = {
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
