import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              DGM
              <span className="text-[#D4AF37] italic font-light"> Gold</span>
              <br />WORKS
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting timeless treasures since 1995. Where tradition meets elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#D4AF37]">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Custom Gold Ornaments</li>
              <li>Gold Repairs & Polishing</li>
              <li>Antique Restoration</li>
              <li>Designer Jewellery</li>
              <li>Gold Exchange</li>
              <li>Certification & Appraisal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-gray-300">
                  11/156, Mokshagundam Street,<br />
                  Proddatur, Kadapa District,<br />
                  Andhra Pradesh - 516360
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-[#D4AF37]" />
                <a href="tel:+917013174340" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  +91 70131 74340
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-[#D4AF37]" />
                <a href="mailto:info@dgmgoldworks.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  info@dgmgoldworks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} DGM Gold Works. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
              <Link to="/admin" className="hover:text-[#D4AF37] transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

