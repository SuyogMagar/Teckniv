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

  const jobs = [
    {
      id: 1,
      title: "Senior Piping Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "8-12 years",
      salary: "Competitive",
      description: "We are looking for an experienced Piping Engineer to lead complex projects and mentor junior engineers.",
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "8+ years of experience in piping design",
        "Proficiency in AutoCAD, PDMS, CAESAR II",
        "Experience in Oil & Gas industry",
        "Strong leadership and communication skills"
      ],
      responsibilities: [
        "Lead piping design projects",
        "Review and approve engineering drawings",
        "Mentor junior engineers",
        "Coordinate with other disciplines",
        "Ensure compliance with codes and standards"
      ]
    },
    {
      id: 2,
      title: "Process Engineer",
      department: "Process Engineering",
      location: "Gujarat, India",
      type: "Full-time",
      experience: "5-8 years",
      salary: "Competitive",
      description: "Join our process engineering team to work on innovative projects in the petrochemical industry.",
      requirements: [
        "Bachelor's degree in Chemical Engineering",
        "5+ years of process engineering experience",
        "Knowledge of process simulation software",
        "Experience in petrochemical industry",
        "Strong analytical skills"
      ],
      responsibilities: [
        "Develop process designs and specifications",
        "Perform process calculations and simulations",
        "Prepare PFDs and P&IDs",
        "Support project execution",
        "Conduct feasibility studies"
      ]
    },
    {
      id: 3,
      title: "Electrical Engineer",
      department: "Electrical Engineering",
      location: "Karnataka, India",
      type: "Full-time",
      experience: "6-10 years",
      salary: "Competitive",
      description: "We need an Electrical Engineer to design and implement electrical systems for industrial projects.",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "6+ years of electrical design experience",
        "Knowledge of electrical codes and standards",
        "Experience with ETAP or similar software",
        "Project management skills"
      ],
      responsibilities: [
        "Design electrical systems and equipment",
        "Prepare electrical drawings and specifications",
        "Perform load calculations and analysis",
        "Coordinate with other engineering disciplines",
        "Ensure safety and compliance"
      ]
    },
    {
      id: 4,
      title: "Project Manager",
      department: "Project Management",
      location: "Maharashtra, India",
      type: "Full-time",
      experience: "10-15 years",
      salary: "Competitive",
      description: "Lead multidisciplinary engineering projects and ensure successful delivery within scope, time, and budget.",
      requirements: [
        "Bachelor's degree in Engineering",
        "10+ years of project management experience",
        "PMP certification preferred",
        "Experience in EPC projects",
        "Strong leadership and communication skills"
      ],
      responsibilities: [
        "Manage project scope, schedule, and budget",
        "Lead project teams and stakeholders",
        "Ensure quality and safety standards",
        "Risk management and mitigation",
        "Client communication and reporting"
      ]
    }
  ];

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
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement"
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Work on international projects and travel opportunities"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative work culture with experienced professionals"
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
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card p-8"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Briefcase size={16} />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock size={16} />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Users size={16} />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <DollarSign size={16} />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <button className="btn-primary mt-4 lg:mt-0">
                        Apply Now
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="text-primary-500 mt-1" size={16} />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="text-primary-500 mt-1" size={16} />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                        {jobs.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
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
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
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