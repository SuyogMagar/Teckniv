import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Settings, 
  FolderOpen, 
  Briefcase, 
  UserPlus, 
  Mail, 
  Menu, 
  X,
  Phone,
  Mail as MailIcon
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

const iconMap = {
  Home,
  Users,
  Settings,
  FolderOpen,
  Briefcase,
  UserPlus,
  Mail
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(() => {
    // Try to load user from localStorage
    const stored = localStorage.getItem('tk_user');
    return stored ? JSON.parse(stored) : null;
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'tk_user') {
        const stored = localStorage.getItem('tk_user');
        setUser(stored ? JSON.parse(stored) : null);
      }
    };
    window.addEventListener('storage', handleStorage);
    // Also listen for custom event in same tab
    const handleCustom = () => {
      const stored = localStorage.getItem('tk_user');
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener('tk_user_changed', handleCustom);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('tk_user_changed', handleCustom);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('tk_user');
    setUser(null);
  };

  // Admin links (Careerfy-style)
  const adminLinks = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Post New Job', path: '/admin/post-job' },
    { name: 'Manage Jobs', path: '/admin/manage-jobs' },
    { name: 'View Applicants', path: '/admin/applicants' },
    { name: 'Employer Profile', path: '/admin/profile' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span className="hidden sm:inline">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailIcon size={14} />
                <span className="hidden sm:inline">{siteConfig.contact.email}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>{siteConfig.contact.workingHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-3">
        <div className="container-custom">
          <div className="grid grid-cols-[2fr_1fr_auto] items-center">
            {/* Left: Logo + Site Name */}
            <div className="flex items-center justify-self-start pl-8">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div className="ml-2 flex flex-col justify-center">
                  <h1 className="text-base font-bold text-gray-900 leading-tight">{siteConfig.siteName}</h1>
                  <p className="text-xs text-gray-600 hidden xl:block leading-tight">Engineering Excellence</p>
                </div>
              </Link>
            </div>
            {/* Right-shifted Main Navigation */}
            <div className="flex justify-end items-center space-x-3 min-w-0 pr-4">
              {user && user.role === 'admin' ? (
                // Admin navigation (Careerfy style)
                <>
                  {adminLinks.map(link => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center space-x-2 px-2 py-2 rounded-lg transition-all duration-300 font-medium whitespace-nowrap ${
                        location.pathname === link.path
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </>
              ) : (
                // Regular user navigation
                <>
                  {siteConfig.navigation
                    .filter(item => [
                      'Services',
                      'Projects',
                      'Careers',
                      'Vendor Registration',
                      'Contact'
                    ].includes(item.name))
                    .map((item) => {
                      const Icon = iconMap[item.icon];
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`flex items-center space-x-2 px-2 py-2 rounded-lg transition-all duration-300 font-medium whitespace-nowrap ${
                            isActive
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                          }`}
                        >
                          {Icon && <Icon size={18} />}
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                </>
              )}
            </div>
            {/* Right: Auth Button or User Name */}
            <div className="flex justify-end items-center justify-self-end pr-8">
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary-600">{user.name}</span>
                  <button
                    className="btn-secondary px-3 py-1 text-sm"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="btn-primary px-4 py-2 text-base"
                >
                  Register / Sign In
                </Link>
              )}
            </div>
          </div>
          {/* Mobile Layout (unchanged except auth button) */}
          <div className="flex items-center justify-between lg:hidden">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 leading-tight">{siteConfig.siteName}</h1>
                <p className="text-xs text-gray-600">Engineering Excellence</p>
              </div>
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-t"
      >
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-3">
            {siteConfig.navigation.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            {/* Admin Links (mobile) */}
            {user && user.role === 'admin' && adminLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  location.pathname === link.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              {user ? (
                <div className="flex items-center gap-2 px-4">
                  <span className="font-semibold text-primary-600">{user.name}</span>
                  <button
                    className="btn-secondary px-3 py-1 text-sm"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsOpen(false)}
                >
                  Register / Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 