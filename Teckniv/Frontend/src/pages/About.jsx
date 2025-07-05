import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Shield,
  Heart,
  Zap
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge engineering solutions"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Maintaining the highest standards in all our deliverables"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through honest and transparent relationships"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Striving for perfection in every project we undertake"
    }
  ];

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      experience: "20+ years",
      image: "/images/team/john-smith.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Technical Director",
      experience: "15+ years",
      image: "/images/team/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      position: "Head of Engineering",
      experience: "12+ years",
      image: "/images/team/michael-chen.jpg"
    },
    {
      name: "Emily Davis",
      position: "Project Manager",
      experience: "10+ years",
      image: "/images/team/emily-davis.jpg"
    }
  ];

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
              About {siteConfig.siteName}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.about.description}
            </p>
          </motion.div>
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

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To deliver innovative engineering solutions that drive progress and create sustainable value for our clients across the globe. We are committed to excellence, safety, and environmental responsibility in everything we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={24} />
                  <span className="font-medium">Deliver innovative solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={24} />
                  <span className="font-medium">Ensure safety and quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={24} />
                  <span className="font-medium">Promote sustainability</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be the leading engineering services provider, recognized globally for our technical expertise, innovative solutions, and commitment to sustainable development. We envision a future where our engineering excellence contributes to a better world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={24} />
                  <span className="font-medium">Global leadership in engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={24} />
                  <span className="font-medium">Innovation and excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={24} />
                  <span className="font-medium">Sustainable development</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our success and lead our company towards excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:transform hover:scale-105"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-gray-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-1">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.experience} Experience
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose {siteConfig.siteName}?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team consists of highly qualified engineers with decades of combined experience in various industries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Certified</h3>
                    <p className="text-gray-600">We maintain the highest quality standards and are certified to international quality management systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
                    <p className="text-gray-600">We serve clients across multiple countries and have successfully completed projects worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Focus</h3>
                    <p className="text-gray-600">We are committed to delivering projects on time, within budget, and exceeding expectations.</p>
                  </div>
                </div>
              </div>
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
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Ready to work with us?</h4>
                  <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 