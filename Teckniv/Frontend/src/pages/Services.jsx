import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Box, 
  Target, 
  Activity, 
  Zap, 
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const iconMap = {
    Settings,
    Box,
    Target,
    Activity,
    Zap,
    GraduationCap
  };

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Teckniv Engineers Pvt. Ltd. provides comprehensive engineering services tailored to meet the technical, operational, and regulatory demands of industrial infrastructure.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in the design, execution, and project management of industrial facilities—from concept development to commissioning. Our solutions are tailored to meet each client’s technical, operational, and sustainability goals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isExpanded = expandedService === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t pt-4"
                    >
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="text-primary-500" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  {!isExpanded && (
                    <button
                      onClick={() => toggleService(service.id)}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <ChevronDown size={16} />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Details
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of engineering services in detail.
            </p>
          </motion.div>
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-16 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="text-primary-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="text-primary-600" size={20} />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-gray-100 rounded-2xl p-8 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="text-white" size={48} />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Why Choose {service.title}?
                      </h4>
                      <ul className="space-y-3 text-left">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="text-primary-600 mt-1" size={20} />
                          <span>Expert team with specialized knowledge</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="text-primary-600 mt-1" size={20} />
                          <span>Proven track record of successful projects</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="text-primary-600 mt-1" size={20} />
                          <span>Latest technology and industry standards</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="text-primary-600 mt-1" size={20} />
                          <span>Comprehensive project management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We support complex projects in:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {siteConfig.industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-primary-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how our engineering services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Request Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 