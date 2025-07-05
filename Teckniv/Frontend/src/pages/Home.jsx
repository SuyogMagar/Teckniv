import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Box, 
  Target, 
  Activity, 
  Zap, 
  GraduationCap,
  Play,
  Users,
  Award,
  Globe
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Home = () => {
  const iconMap = {
    Settings,
    Box,
    Target,
    Activity,
    Zap,
    GraduationCap
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative py-20 lg:py-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {siteConfig.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {siteConfig.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to={siteConfig.hero.ctaLink} className="btn-primary text-lg px-8 py-4">
                    {siteConfig.hero.ctaText}
                  </Link>
                  <button className="flex items-center justify-center space-x-2 text-white hover:text-primary-200 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Play size={20} className="ml-1" />
                    </div>
                    <span>Watch Our Story</span>
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md w-full">
                  <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-300 flex-shrink-0" size={24} />
                      <span>Expert Engineering Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-300 flex-shrink-0" size={24} />
                      <span>Global Industry Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-300 flex-shrink-0" size={24} />
                      <span>Quality & Innovation Focus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-300 flex-shrink-0" size={24} />
                      <span>Timely Project Delivery</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}+
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {siteConfig.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {siteConfig.about.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="text-primary-600" size={24} />
                  <span className="font-medium">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-primary-600" size={24} />
                  <span className="font-medium">Quality Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-primary-600" size={24} />
                  <span className="font-medium">Global Reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="text-primary-600" size={24} />
                  <span className="font-medium">Project Focus</span>
                </div>
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Our Industries</h3>
                <div className="grid grid-cols-2 gap-4">
                  {siteConfig.industries.map((industry) => (
                    <div key={industry} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive engineering solutions across multiple disciplines to meet your project requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.slice(0, 6).map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="text-primary-500" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/services" 
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your engineering vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Get Free Quote
              </Link>
              <Link to="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 