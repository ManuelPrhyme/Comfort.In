import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Heart 
                size={24} 
                className="text-secondary-400 mr-2" 
                fill="#3CB371" 
                strokeWidth={1.5} 
              />
              <span className="font-serif text-xl font-bold text-white">
                Comfort<span className="text-secondary-400">.In</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Providing Christian counseling and guidance to help you find comfort, peace, and purpose in your life through God's word.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-serif font-bold mb-4 text-secondary-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: 'Courses', path: '/courses' },
                { name: 'Counseling', path: '/counseling' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-serif font-bold mb-4 text-secondary-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary-400" />
                <a href="tel:+256782319579" className="text-gray-300 hover:text-primary-300">
                  +256 782 319 579
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary-400" />
                <a href="tel:+256758918200" className="text-gray-300 hover:text-primary-300">
                  +256 758 918 200
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-secondary-400" />
                <a href="mailto:robertbgl@gmail.com" className="text-gray-300 hover:text-primary-300">
                  robertbgl@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-secondary-400" />
                <span className="text-gray-300">
                  Kampala, Uganda
                </span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-serif font-bold mb-4 text-secondary-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-primary-700 hover:bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-primary-700 hover:bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-primary-700 hover:bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates on articles, courses, and events.
            </p>
          </div>
        </div>

        {/* Bottom / Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Comfort.In - Christian Counseling. All rights reserved.
          </p>
          <p className="mt-2">
            Rev. Robert Bagoole - Helping you find peace through Christ.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;