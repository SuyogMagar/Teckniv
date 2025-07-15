import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{siteConfig.siteName}</h3>
                  <p className="text-sm text-gray-400">Engineering Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Teckniv Engineers Pvt. Ltd. – Engineering Excellence. Global Impact. Your trusted partner for end-to-end industrial solutions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={siteConfig.social.linkedin} 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={siteConfig.social.twitter} 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={siteConfig.social.facebook} 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={siteConfig.social.instagram} 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {siteConfig.footer.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors group"
                    >
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {siteConfig.footer.services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors group"
                    >
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteConfig.siteName}. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 