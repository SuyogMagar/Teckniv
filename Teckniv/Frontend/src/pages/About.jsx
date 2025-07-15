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
  // Replace values and team with new content if needed
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We bring together innovation, precision, and deep industry expertise to support complex projects."
    },
    {
      icon: Shield,
      title: "Accountability",
      description: "Solving complex challenges with clarity, innovation, and accountability."
    },
    {
      icon: Heart,
      title: "Growth",
      description: "Supporting individual learning, career growth, and global opportunities."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Delivering high-quality projects with a focus on safety, efficiency, and reliability."
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
              About Teckniv Engineers Pvt. Ltd.
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Teckniv Engineers Pvt. Ltd. is a leading engineering consultancy focused on delivering end-to-end solutions for Greenfield and Brownfield industrial projects across India and international markets. We bring together innovation, precision, and deep industry expertise to support complex projects in Chemicals, Agrochemicals, Pharmaceuticals, Petrochemicals, Oil & Gas, and Industrial Manufacturing.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Update stats as per new config */}
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
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From our founding, Teckniv Engineers set out to raise the bar in engineering consulting. Today, we are a trusted partner to Fortune 500 companies as well as emerging businesses, delivering high-quality projects with a focus on safety, efficiency, and reliability. Backed by a team of experienced engineers, we take pride in solving complex challenges with clarity, innovation, and accountability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Teckniv?
              </h2>
              <ul className="text-lg text-gray-600 mb-6 leading-relaxed list-disc pl-6">
                <li>Industry-specific engineering expertise</li>
                <li>Proven track record with global and domestic clients</li>
                <li>Timely, cost-effective project delivery</li>
                <li>Custom solutions for every scale and complexity</li>
              </ul>
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
      {/* Industries Section */}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                  {industry}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 