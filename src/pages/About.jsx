import { Users, Target, Award, Heart } from "lucide-react";
import { team } from "../data/team";

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community First",
      description:
        "We believe in building tools that bring developers together and foster collaboration.",
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Developer Focus",
      description:
        "Every decision we make is centered around improving the developer experience.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Quality Excellence",
      description:
        "We're committed to delivering high-quality, reliable tools that developers can trust.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Open Source",
      description:
        "We contribute back to the community and believe in the power of open source.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Developers" },
    { number: "100K+", label: "Projects Built" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Building the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're a team of passionate developers, designers, and innovators
            dedicated to creating tools that make web development faster,
            easier, and more enjoyable.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              ViteLand was born out of frustration with slow build tools and
              complex development workflows. As developers ourselves, we
              experienced firsthand the pain of waiting for builds, dealing with
              configuration headaches, and struggling with outdated tooling.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In 2023, we decided to do something about it. We started building
              ViteLand with a simple mission: make web development fast, simple,
              and enjoyable again. We wanted to create a platform that would let
              developers focus on what they do best – building amazing
              applications.
            </p>
            <p className="text-lg leading-relaxed">
              Today, ViteLand powers thousands of projects and helps developers
              around the world ship faster. But we're just getting started.
              We're constantly working on new features, improvements, and
              innovations to make your development experience even better.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">The people behind ViteLand</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented people to join our team and help
            us build the future of web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
