import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    product: {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Documentation", href: "#docs" },
        { label: "API Reference", href: "#api" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Blog", href: "#blog" },
        { label: "Press", href: "#press" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Contact Us", href: "#contact" },
        { label: "Status", href: "#status" },
        { label: "Community", href: "#community" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Policy", href: "#cookies" },
        { label: "GDPR", href: "#gdpr" },
      ],
    },
  };

  const socialLinks = [
    { name: "Twitter", href: "#twitter", icon: "🐦" },
    { name: "GitHub", href: "#github", icon: "🐙" },
    { name: "LinkedIn", href: "#linkedin", icon: "💼" },
    { name: "Discord", href: "#discord", icon: "💬" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest updates, tutorials, and news delivered to your
                inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="md:col-span-2 sm:col-span-2">
            <Link to="/" className="flex items-center">
              <Logo className="text-white" />
            </Link>
            <p className="text-gray-400 my-6 max-w-md leading-relaxed text-start">
              Building the future of web development with modern tools and
              technologies. Fast, reliable, and developer-friendly solutions for
              everyone.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-lg font-semibold mb-4 text-start">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="text-start">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ViteLand. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Made with ❤️ using React & Vite
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
