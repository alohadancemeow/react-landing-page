import { Mail, Phone, MapPin } from "lucide-react";

export const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email Us",
    details: "hello@viteland.com",
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: <Phone className="h-6 w-6 text-green-600" />,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm PST",
  },
  {
    icon: <MapPin className="h-6 w-6 text-purple-600" />,
    title: "Visit Us",
    details: "San Francisco, CA",
    description: "123 Tech Street, Suite 100",
  },
];

export const budgetOptions = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000",
  "Not sure yet",
];

export const faqs = [
  {
    question: "How do I get started with ViteLand?",
    answer:
      "Getting started is simple! Sign up for a free account, choose your plan, and you can start building immediately. Our onboarding process will guide you through setting up your first project, and our documentation provides step-by-step tutorials for common use cases.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support including 24/7 email support for all users, priority support for Pro users, and dedicated phone support for Enterprise customers. We also provide extensive documentation, video tutorials, community forums, and regular webinars.",
  },
  {
    question: "Can I use ViteLand for commercial projects?",
    answer:
      "ViteLand is designed for both personal and commercial use. Our Pro and Enterprise plans include commercial licenses, advanced features, and priority support. You can build and deploy unlimited commercial projects with full ownership of your code.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Yes, we provide custom enterprise solutions including on-premise deployments, custom integrations, dedicated infrastructure, SSO authentication, advanced security features, and dedicated account management. Contact our sales team to discuss your specific requirements.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "Our free plan includes up to 3 projects, 5GB storage, community support, basic templates, SSL certificates, and access to our core development tools. It's perfect for personal projects, learning, and small-scale applications.",
  },
  {
    question: "How secure is my data on ViteLand?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, regular security audits, SOC 2 compliance, automatic backups, and follow industry best practices. Your code and data are protected with multiple layers of security and are never shared with third parties.",
  },
];
