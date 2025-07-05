import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  UserPlus, 
  Building, 
  FileText, 
  Upload,
  CheckCircle,
  AlertCircle,
  Send,
  Shield,
  Users,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const VendorRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const benefits = [
    {
      icon: Shield,
      title: "Secure Partnership",
      description: "Join our trusted network of vendors with secure business relationships"
    },
    {
      icon: Users,
      title: "Network Access",
      description: "Connect with industry professionals and expand your business network"
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Maintain high quality standards and get recognized for excellence"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access international projects and expand your market reach"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Grow your business with regular project opportunities"
    }
  ];

  const organizationTypes = [
    "Proprietorship",
    "Partnership", 
    "LLP",
    "Private Limited",
    "Public Limited",
    "HUF"
  ];

  const genderOptions = ["Male", "Female"];
  const casteCategories = ["General", "OBC", "SC", "ST"];

  const handleFileChange = (field, files) => {
    setSelectedFiles(prev => ({
      ...prev,
      [field]: files[0]?.name || null
    }));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Vendor registration data:', data);
      console.log('Selected files:', selectedFiles);
      setSubmitStatus('success');
      reset();
      setSelectedFiles({});
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
              Vendor Registration
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join our network of trusted vendors and partners. Register with us to access exciting business opportunities and grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Register as a Vendor?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Become part of our growing network and enjoy exclusive benefits designed for our valued partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vendor Registration Form
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below to register as a vendor. All fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Organization Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Organization Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        {...register('orgName', { required: 'Organization name is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.orgName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter organization name"
                      />
                      {errors.orgName && (
                        <p className="text-red-500 text-sm mt-1">{errors.orgName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nature of Organization *
                      </label>
                      <select
                        {...register('orgType', { required: 'Please select organization type' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.orgType ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select organization type</option>
                        {organizationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.orgType && (
                        <p className="text-red-500 text-sm mt-1">{errors.orgType.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <select
                        {...register('gender', { required: 'Please select gender' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.gender ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select gender</option>
                        {genderOptions.map((gender) => (
                          <option key={gender} value={gender}>{gender}</option>
                        ))}
                      </select>
                      {errors.gender && (
                        <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Caste Category
                      </label>
                      <select
                        {...register('casteCategory')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select caste category</option>
                        {casteCategories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correspondence Address *
                    </label>
                    <textarea
                      {...register('address', { required: 'Address is required' })}
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter complete correspondence address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        MSME Status
                      </label>
                      <select
                        {...register('msmeStatus')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select MSME status</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Person Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Authorized/Contact Person Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Salutation *
                      </label>
                      <select
                        {...register('salutation', { required: 'Please select salutation' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.salutation ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select salutation</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                      </select>
                      {errors.salutation && (
                        <p className="text-red-500 text-sm mt-1">{errors.salutation.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Authorized Person Mobile *
                      </label>
                      <input
                        type="tel"
                        {...register('mobile', { required: 'Mobile number is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.mobile ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter mobile number"
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Document Upload */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Document Upload
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        MSME Certificate
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange('msmeCertificate', e.target.files)}
                          className="hidden"
                          id="msmeCertificate"
                        />
                        <label
                          htmlFor="msmeCertificate"
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <Upload size={20} />
                          <span>Choose File</span>
                        </label>
                        <span className="text-sm text-gray-600">
                          {selectedFiles.msmeCertificate || 'No file chosen'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        PAN Document
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange('panDocument', e.target.files)}
                          className="hidden"
                          id="panDocument"
                        />
                        <label
                          htmlFor="panDocument"
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <Upload size={20} />
                          <span>Choose File</span>
                        </label>
                        <span className="text-sm text-gray-600">
                          {selectedFiles.panDocument || 'No file chosen'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GST Document
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange('gstDocument', e.target.files)}
                          className="hidden"
                          id="gstDocument"
                        />
                        <label
                          htmlFor="gstDocument"
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <Upload size={20} />
                          <span>Choose File</span>
                        </label>
                        <span className="text-sm text-gray-600">
                          {selectedFiles.gstDocument || 'No file chosen'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Registration Certificate
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange('registrationCertificate', e.target.files)}
                          className="hidden"
                          id="registrationCertificate"
                        />
                        <label
                          htmlFor="registrationCertificate"
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <Upload size={20} />
                          <span>Choose File</span>
                        </label>
                        <span className="text-sm text-gray-600">
                          {selectedFiles.registrationCertificate || 'No file chosen'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Document
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          onChange={(e) => handleFileChange('bankDocument', e.target.files)}
                          className="hidden"
                          id="bankDocument"
                        />
                        <label
                          htmlFor="bankDocument"
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <Upload size={20} />
                          <span>Choose File</span>
                        </label>
                        <span className="text-sm text-gray-600">
                          {selectedFiles.bankDocument || 'No file chosen'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle size={20} />
                    <span>Thank you! Your vendor registration has been submitted successfully. We'll review and get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle size={20} />
                    <span>Sorry, there was an error submitting your registration. Please try again.</span>
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
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus size={20} />
                      <span>Submit Registration</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Registration Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Submit Application</h4>
                      <p className="text-primary-100">Complete the registration form with all required information and documents.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Review Process</h4>
                      <p className="text-primary-100">Our team will review your application and verify all submitted documents.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Approval & Onboarding</h4>
                      <p className="text-primary-100">Upon approval, you'll receive access to our vendor portal and project opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Support</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Need help with registration? Contact our vendor support team:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Building size={20} className="text-primary-600" />
                      <span className="text-gray-700">{siteConfig.siteName}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText size={20} className="text-primary-600" />
                      <span className="text-gray-700">vendor@teckniv.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorRegistration; 