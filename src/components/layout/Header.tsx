import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center" 
            onClick={closeMenu}
          >
            <Heart 
              size={32} 
              className="text-primary-500 mr-2" 
              fill="#8A2BE2" 
              strokeWidth={1.5} 
            />
            <span className="font-serif text-2xl font-bold text-primary-700">
              Comfort<span className="text-secondary-600">.In</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: 'Courses', path: '/courses' },
              { name: 'Counseling', path: '/counseling' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 hover:text-primary-600 ${
                    isActive 
                      ? 'text-primary-600 border-b-2 border-primary-500' 
                      : `${scrolled ? 'text-gray-800' : 'text-gray-800'}`
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t mt-2"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: 'Courses', path: '/courses' },
              { name: 'Counseling', path: '/counseling' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg py-2 font-medium ${
                    isActive ? 'text-primary-600' : 'text-gray-800'
                  }`
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;