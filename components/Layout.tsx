import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';
import { NavItem } from '../types';
import { Button, Container } from './UI';

// Recreated Logo Icon based on the Grow Marq brand
const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0ea5e9" /> {/* Light Blue */}
        <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan */}
      </linearGradient>
    </defs>
    {/* Bars */}
    <rect x="20" y="45" width="15" height="35" rx="2" fill="url(#logoGradient)" opacity="0.8" />
    <rect x="42" y="30" width="15" height="50" rx="2" fill="url(#logoGradient)" opacity="0.9" />
    <rect x="64" y="15" width="15" height="65" rx="2" fill="url(#logoGradient)" />
    
    {/* Arrow */}
    <path d="M25 60 C 40 50, 50 40, 85 10" stroke="#bef264" strokeWidth="0" fill="none" /> 
    <path d="M15 65 L 85 20" stroke="#e0f2fe" strokeWidth="6" strokeLinecap="round" />
    <path d="M85 20 L 65 20 M 85 20 L 85 40" stroke="#e0f2fe" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Landing Pages', path: '/landing-page-services' },
  { label: 'Process', path: '/process' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      {/* Navbar - Dark Theme to match Brand */}
      <nav className="bg-navy-900 sticky top-0 z-50 border-b border-navy-800">
        <Container>
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                <LogoIcon className="h-10 w-10" />
                <span className="font-bold text-2xl tracking-tight text-white group-hover:text-accent-400 transition-colors">
                  Grow <span className="text-accent-400">Marq</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-accent-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="primary" to="/contact" className="py-2 px-4 text-sm font-bold shadow-cyan-500/20">
                Book Strategy Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-800 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-900 border-b border-navy-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-navy-800 text-accent-400'
                      : 'text-gray-300 hover:bg-navy-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Button variant="primary" to="/contact" fullWidth>
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <LogoIcon className="h-8 w-8" />
                <span className="font-bold text-xl text-white">
                  Grow <span className="text-accent-400">Marq</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                We build high-converting websites and systems for businesses ready to grow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6">Explore</h3>
              <ul className="space-y-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-accent-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li><Link to="/why-choose-us" className="text-gray-400 hover:text-accent-400">Why Choose Us</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-accent-400">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6">Services</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="text-gray-400 hover:text-accent-400">Business Websites</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-accent-400">Ecommerce Stores</Link></li>
                <li><Link to="/landing-page-services" className="text-gray-400 hover:text-accent-400">Landing Pages</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-accent-400">Portfolio Website</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent-400 mt-0.5" />
                  <span>Balangir,<br />Odisha, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent-400" />
                  <a href="https://wa.me/917008010914" className="hover:text-white">+91 7008010914</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent-400" />
                  <a href="mailto:growmarq@gmail.com" className="hover:text-white">growmarq@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-800 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Grow Marq Agency. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};