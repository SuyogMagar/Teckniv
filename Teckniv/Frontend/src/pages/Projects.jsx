import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 1,
      title: "Oil Refinery Expansion Project",
      category: "Oil & Gas",
      description: "Comprehensive expansion project for a major oil refinery including piping design, 3D modeling, and stress analysis.",
      image: "/images/projects/refinery.jpg",
      location: "Mumbai, India",
      duration: "18 months",
      team: "25 engineers",
      technologies: ["AutoCAD", "PDMS", "CAESAR II"],
      features: ["Piping Design", "3D Modeling", "Stress Analysis", "Project Management"]
    },
    {
      id: 2,
      title: "Petrochemical Plant Design",
      category: "Petrochemicals",
      description: "Complete design and engineering services for a new petrochemical plant with advanced process optimization.",
      image: "/images/projects/petrochemical.jpg",
      location: "Gujarat, India",
      duration: "24 months",
      team: "40 engineers",
      technologies: ["SmartPlant", "AVEVA", "Aspen Plus"],
      features: ["Process Design", "Equipment Design", "Safety Systems", "Control Systems"]
    },
    {
      id: 3,
      title: "Power Plant Modernization",
      category: "Power Generation",
      description: "Modernization project for a thermal power plant including efficiency improvements and emission control systems.",
      image: "/images/projects/power-plant.jpg",
      location: "Karnataka, India",
      duration: "12 months",
      team: "20 engineers",
      technologies: ["Revit", "ETAP", "AutoCAD"],
      features: ["Electrical Design", "Instrumentation", "Efficiency Analysis", "Emission Control"]
    },
    {
      id: 4,
      title: "Fertilizer Plant Optimization",
      category: "Fertilizers",
      description: "Process optimization and capacity expansion for a fertilizer manufacturing facility.",
      image: "/images/projects/fertilizer.jpg",
      location: "Tamil Nadu, India",
      duration: "15 months",
      team: "30 engineers",
      technologies: ["PDMS", "HYSYS", "AutoCAD"],
      features: ["Process Optimization", "Capacity Expansion", "Safety Analysis", "Quality Control"]
    },
    {
      id: 5,
      title: "Water Treatment Facility",
      category: "Water/Wastewater",
      description: "Design and construction of a large-scale water treatment facility with advanced filtration systems.",
      image: "/images/projects/water-treatment.jpg",
      location: "Maharashtra, India",
      duration: "20 months",
      team: "35 engineers",
      technologies: ["AutoCAD", "Revit", "EPANET"],
      features: ["Treatment Design", "Piping Systems", "Control Systems", "Quality Monitoring"]
    },
    {
      id: 6,
      title: "Hydrogen Production Plant",
      category: "Hydrogen",
      description: "Green hydrogen production facility design with renewable energy integration and storage systems.",
      image: "/images/projects/hydrogen.jpg",
      location: "Rajasthan, India",
      duration: "22 months",
      team: "45 engineers",
      technologies: ["AVEVA", "HYSYS", "AutoCAD"],
      features: ["Process Design", "Renewable Integration", "Storage Systems", "Safety Design"]
    }
  ];

  const categories = ['all', ...siteConfig.industries.map(industry => industry.toLowerCase())];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);

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
              Our Projects
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful engineering projects across Chemicals, Agrochemicals, Pharmaceuticals, Petrochemicals, Oil & Gas, Industrial Manufacturing, Power & Energy, Food & Beverage, Water Treatment, and Commercial Infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-600" size={20} />
              <span className="font-medium text-gray-900">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card overflow-hidden hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <ExternalLink size={24} />
                      </div>
                      <p className="text-sm">Project Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users size={16} />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1">
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <ExternalLink size={24} />
                        </div>
                        <p className="text-sm">Project Image</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar size={16} />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users size={16} />
                          <span>{project.team}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1">
                        <span>View Details</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              Let's discuss how we can help bring your engineering vision to life with our expertise and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View More Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 