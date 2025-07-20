import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  MapPin, 
  Clock, 
  DollarSign,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Award,
  Globe,
  Heart
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Remove the jobs array and all references to it (job listings, job cards, etc.)
  // In the job listing section, show a placeholder message:
  const trainingPrograms = [
    {
      id: 1,
      title: "AutoCAD & PDMS Training",
      duration: "4 weeks",
      level: "Beginner to Intermediate",
      description: "Comprehensive training in AutoCAD and PDMS for piping design and 3D modeling.",
      topics: [
        "AutoCAD fundamentals and advanced features",
        "PDMS 3D modeling and design",
        "Piping isometrics and GA drawings",
        "Project workflow and best practices"
      ]
    },
    {
      id: 2,
      title: "Process Engineering Fundamentals",
      duration: "6 weeks",
      level: "Intermediate",
      description: "Learn the fundamentals of process engineering and design principles.",
      topics: [
        "Process flow diagrams (PFDs)",
        "Piping and instrumentation diagrams (P&IDs)",
        "Process calculations and simulations",
        "Equipment sizing and selection"
      ]
    },
    {
      id: 3,
      title: "Project Management Professional",
      duration: "8 weeks",
      level: "Advanced",
      description: "Prepare for PMP certification with comprehensive project management training.",
      topics: [
        "Project integration management",
        "Scope, time, and cost management",
        "Quality and risk management",
        "Stakeholder and communication management"
      ]
    },
    {
      id: 4,
      title: "FEA Analysis & CAESAR II",
      duration: "5 weeks",
      level: "Intermediate to Advanced",
      description: "Advanced training in Finite Element Analysis and pipe stress analysis.",
      topics: [
        "FEA fundamentals and applications",
        "CAESAR II pipe stress analysis",
        "Structural analysis and design",
        "Code compliance and standards"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Diverse Project Exposure",
      description: "Work on challenging EPC and engineering projects across Oil & Gas, Power, Infrastructure, and Industrial sectors."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "A supportive work environment that encourages teamwork, innovation, and continuous learning."
    },
    {
      icon: Heart,
      title: "Individual Learning & Career Growth",
      description: "Personalized development paths that support your technical and leadership journey."
    },
    {
      icon: BookOpen,
      title: "Training & Certification Assistance",
      description: "Financial and logistical support for relevant technical certifications and upskilling programs."
    },
    {
      icon: Globe,
      title: "Overseas Career Opportunities",
      description: "International project exposure and long-term global assignments."
    },
    {
      icon: CheckCircle,
      title: "Provident Fund & Group Insurance Plans",
      description: "Secure your future with company-supported financial and health benefits."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "We value wellness and provide a flexible and respectful workplace."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-driven recognition with clear paths to advancement."
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Application data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              Join Our Team
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Build your career with us and be part of innovative engineering solutions that shape the future of industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'jobs'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Briefcase className="inline mr-2" size={20} />
              Job Openings
            </button>
            <button
              onClick={() => setActiveTab('training')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'training'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <GraduationCap className="inline mr-2" size={20} />
              Training Programs
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'apply'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Send className="inline mr-2" size={20} />
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Job Openings */}
          {activeTab === 'jobs' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Current Openings
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore exciting career opportunities with our growing team of engineering professionals.
                </p>
              </div>

              <div className="space-y-8">
                <div className="card p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Job Openings Available</h3>
                  <p className="text-gray-600">
                    We are currently reviewing applications and will post new job openings soon.
                    Please check back later or submit your application for future opportunities.
                  </p>
                    </div>
              </div>
            </motion.div>
          )}

          {/* Training Programs */}
          {activeTab === 'training' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Training Programs
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Enhance your skills with our specialized training programs designed for engineering professionals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trainingPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-primary-600" size={24} />
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                        {program.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{program.duration}</span>
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <ul className="space-y-1">
                        {program.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="text-primary-500" size={16} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn-primary w-full">
                      Enroll Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Application Form */}
          {activeTab === 'apply' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Apply for a Position
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Submit your application and join our team of engineering professionals.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          {...register('firstName', { required: 'First name is required' })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          {...register('lastName', { required: 'Last name is required' })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Position Applied For *
                      </label>
                      <select
                        {...register('position', { required: 'Please select a position' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.position ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select a position</option>
                        {/* The jobs array was removed, so this loop will not render options */}
                      </select>
                      {errors.position && (
                        <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <select
                        {...register('experience', { required: 'Please select experience level' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.experience ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select experience level</option>
                        {/* The jobs array was removed, so this loop will not render options */}
                      </select>
                      {errors.experience && (
                        <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter *
                      </label>
                      <textarea
                        {...register('coverLetter', { required: 'Cover letter is required' })}
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.coverLetter ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us why you're interested in this position..."
                      />
                      {errors.coverLetter && (
                        <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>
                      )}
                    </div>

                    {/* Submit Status */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                        <CheckCircle size={20} />
                        <span>Thank you! Your application has been submitted successfully.</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                        <AlertCircle size={20} />
                        <span>Sorry, there was an error submitting your application. Please try again.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Work With Us?
                  </h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="flex items-start space-x-4"
                        >
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-primary-600" size={24} />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers; 