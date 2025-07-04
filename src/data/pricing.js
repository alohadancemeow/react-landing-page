export const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: { monthly: 0, annual: 0 },
    features: [
      "Up to 3 projects",
      "5GB storage",
      "Community support",
      "Basic templates",
      "SSL certificates",
    ],
    limitations: [
      "No custom domains",
      "ViteLand branding",
      "Limited bandwidth",
    ],
    popular: false,
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    description: "Great for growing teams and businesses",
    price: { monthly: 29, annual: 290 },
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Premium templates",
      "Custom domains",
      "Advanced analytics",
      "Team collaboration",
      "API access",
    ],
    limitations: [],
    popular: true,
    cta: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: { monthly: 99, annual: 990 },
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "SSO authentication",
      "Advanced security",
      "Dedicated account manager",
      "SLA guarantee",
      "White-label options",
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
  },
];
