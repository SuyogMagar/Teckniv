// Site Configuration - Easy to modify for different content
export const siteConfig = {
  // Basic Site Info
  siteName: "Teckniv Engineers",
  siteDescription: "Empowering Global Engineering with Quality, Innovation, and Precision",
  siteUrl: "https://teckniv.com",
  
  // Contact Information
  contact: {
    email: "info@teckniv.com",
    phone: "+91-7045327675",
    address: "F -203, Alishan Park-1, Chikanghar Highway, Kalyan West, 421301, Thane, Maharashtra, India.",
    workingHours: "Mon - Sat 10:00 - 17:30, Sunday - CLOSED"
  },
  
  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/company/teckniv",
    twitter: "https://twitter.com/teckniv",
    facebook: "https://facebook.com/teckniv",
    instagram: "https://instagram.com/teckniv"
  },
  
  // Navigation Menu
  navigation: [
    { name: "Home", path: "/", icon: "Home" },
    { name: "About Us", path: "/about", icon: "Users" },
    { name: "Services", path: "/services", icon: "Settings" },
    { name: "Projects", path: "/projects", icon: "FolderOpen" },
    { name: "Careers", path: "/careers", icon: "Briefcase" },
    { name: "Vendor Registration", path: "/vendor-registration", icon: "UserPlus" },
    { name: "Contact", path: "/contact", icon: "Mail" }
  ],
  
  // Hero Section
  hero: {
    title: "Powering Progress in Oil & Gas, Petrochemicals, Power, Hydrogen, and Beyond",
    subtitle: "Expert Engineering Solutions for Optimal Efficiency, Safety, and Reliability",
    ctaText: "Get Started",
    ctaLink: "/contact",
    backgroundImage: "/images/hero-bg.jpg"
  },
  
  // About Section
  about: {
    title: "Empowering Global Engineering with Quality, Innovation, and Precision",
    description: "Teckniv Engineers is a multi-discipline engineering services company. We offer high quality engineering support solutions to EPC contractors, PMC Consultant and directly to client operating in Oil & Gas, Petrochemicals, Power, Fertilizers and Water/ Wastewater industries in global market.",
    stats: [
      { number: "70", label: "Projects Done" },
      { number: "70", label: "Happy Clients" },
      { number: "70", label: "Completed Co." },
      { number: "70", label: "Country Cover" }
    ]
  },
  
  // Services
  services: [
    {
      id: 1,
      title: "Design & Detail Engineering",
      description: "Comprehensive engineering design services for complex industrial projects",
      icon: "Settings",
      features: [
        "Piping Engineering",
        "Pipeline Engineering", 
        "Process Engineering",
        "Electrical Engineering",
        "Instrumentation Engineering"
      ]
    },
    {
      id: 2,
      title: "3D Modelling / Drafting",
      description: "Advanced 3D modeling and CAD drafting services for precise project visualization",
      icon: "Box",
      features: [
        "3D Plant Modeling",
        "Equipment Modeling",
        "Piping Isometrics",
        "General Arrangement Drawings"
      ]
    },
    {
      id: 3,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality control",
      icon: "Target",
      features: [
        "Project Planning",
        "Resource Management",
        "Risk Assessment",
        "Quality Control"
      ]
    },
    {
      id: 4,
      title: "FEA Analysis",
      description: "Finite Element Analysis for structural integrity and performance optimization",
      icon: "Activity",
      features: [
        "Structural Analysis",
        "Thermal Analysis",
        "Vibration Analysis",
        "Fatigue Analysis"
      ]
    },
    {
      id: 5,
      title: "Pipe Stress Analysis",
      description: "Comprehensive pipe stress analysis for safety and compliance",
      icon: "Zap",
      features: [
        "Static Analysis",
        "Dynamic Analysis",
        "Thermal Expansion",
        "Code Compliance"
      ]
    },
    {
      id: 6,
      title: "Professional Training",
      description: "Specialized training programs for engineering professionals",
      icon: "GraduationCap",
      features: [
        "Software Training",
        "Technical Workshops",
        "Certification Programs",
        "Industry Best Practices"
      ]
    }
  ],
  
  // Industries
  industries: [
    "Oil & Gas",
    "Petrochemicals", 
    "Power Generation",
    "Fertilizers",
    "Water/Wastewater",
    "Hydrogen",
    "Renewable Energy"
  ],
  
  // Footer
  footer: {
    description: "Teckniv Engineers - Your trusted partner for engineering excellence from concept to completion.",
    quickLinks: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" }
    ],
    services: [
      "Design & Detail Engineering",
      "3D Modelling / Drafting",
      "Project Management",
      "FEA Analysis",
      "Professional Training"
    ]
  }
};

// Theme Configuration
export const themeConfig = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    }
  },
  fonts: {
    primary: 'Inter, sans-serif',
    secondary: 'Poppins, sans-serif'
  }
}; 