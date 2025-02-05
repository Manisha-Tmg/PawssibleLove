import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const quickLinks = [
    "Browse Pets",
    "Adoption Process",
    "Pet Care Tips",
    "Success Stories",
    "Donate",
  ];

  const services = [
    "Dog Adoption",
    "Cat Adoption",
    "Small Animals",
    // "Pet Training",
    // "Veterinary Care",
    "Pet Supplies",
  ];
  return (
    <div>
      <footer className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-white to-white p-5 rounded-full">
                  {/* <Heart className="w-8 h-8 text-white" /> */}
                  <Logo />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    PawssibleLove
                  </h3>
                  <p className="text-sm text-gray-300">
                    Find Your Forever Friend
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Connecting loving families with pets in need. Every adoption
                saves a life and creates countless moments of joy.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white border-b-2 border-pink-500 pb-2 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white border-b-2 border-purple-500 pb-2 inline-block">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white border-b-2 border-blue-500 pb-2 inline-block">
                Stay Connected
              </h4>
              <p className="text-gray-300">
                Get updates on new pets, adoption events, and heartwarming
                stories.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 text-pink-400" />
                  <span>+977 (9867) 231245-PAWS</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>hello@PawssibleLove.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Pet Street, Animal City, AC 12345</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 PawssibleLove. All rights reserved. Made with ❤️ for our
              furry friends.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
