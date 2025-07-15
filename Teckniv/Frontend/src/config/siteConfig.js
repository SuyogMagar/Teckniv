// Site Configuration - Easy to modify for different content
export const siteConfig = {
  // Basic Site Info
  siteName: "Teckniv Engineers Pvt. Ltd.",
  siteDescription: "Engineering Excellence. Global Impact.",
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
    title: "Engineering Excellence. Global Impact.",
    subtitle: "Teckniv Engineers Pvt. Ltd. is a leading engineering consultancy focused on delivering end-to-end solutions for Greenfield and Brownfield industrial projects across India and international markets.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    backgroundImage: "/images/hero-bg.jpg"
  },
  
  // About Section
  about: {
    title: "About Teckniv Engineers Pvt. Ltd.",
    description: "Teckniv Engineers Pvt. Ltd. is a leading engineering consultancy focused on delivering end-to-end solutions for Greenfield and Brownfield industrial projects across India and international markets. We bring together innovation, precision, and deep industry expertise to support complex projects in Chemicals, Agrochemicals, Pharmaceuticals, Petrochemicals, Oil & Gas, and Industrial Manufacturing.",
    stats: [
      { number: "100", label: "Projects Delivered" },
      { number: "50", label: "Clients Served" },
      { number: "10", label: "Countries" },
      { number: "15", label: "Industries" }
    ]
  },
  
  // Services
  services: [
    {
      id: 1,
      title: "Detailed Engineering",
      description: "End-to-End Multidisciplinary Design Solutions for Industrial Projects.",
      icon: "Settings",
      features: [
        "Process Engineering",
        "Piping Engineering",
        "Equipment Engineering",
        "Civil & Structural Engineering",
        "Instrumentation Engineering",
        "Electrical Engineering"
      ]
    },
    {
      id: 2,
      title: "Pre-Bid Engineering Services",
      description: "Feasibility, technical assessment, and bid documentation for Greenfield & Brownfield projects.",
      icon: "Box",
      features: [
        "Feasibility & Technical Assessment",
        "Cost Estimation & BOQ",
        "Preliminary Engineering Deliverables",
        "Bid Documentation Support",
        "Risk & Constructability Review"
      ]
    },
    {
      id: 3,
      title: "Pipeline Engineering Services",
      description: "Complete lifecycle support for pipeline projects: routing, stress analysis, and construction.",
      icon: "Target",
      features: [
        "Route Selection & Alignment Studies",
        "Hydraulic & Stress Analysis",
        "Mechanical & Material Specification",
        "Detailed Design & Drafting",
        "Construction & Field Engineering Support"
      ]
    },
    {
      id: 4,
      title: "3D Modeling Services",
      description: "Intelligent 3D model development, clash detection, and visualization for plant projects.",
      icon: "Activity",
      features: [
        "Intelligent 3D Model Development",
        "Clash Detection & Coordination",
        "Visualization & Walkthroughs",
        "Deliverables & Outputs"
      ]
    },
    {
      id: 5,
      title: "2D CAD Services",
      description: "Multi-discipline drafting, drawing conversion, and compliance for all project stages.",
      icon: "Zap",
      features: [
        "Multi-Discipline Drafting Expertise",
        "Technical Drawing Capabilities",
        "Drawing Conversion & Compliance",
        "CAD Software Platforms Used"
      ]
    },
    {
      id: 6,
      title: "Specialized Engineering Services",
      description: "Advanced analysis, brownfield revamp, material & corrosion, and digital integration.",
      icon: "GraduationCap",
      features: [
        "Advanced Engineering Analysis",
        "Brownfield Engineering & Revamp Projects",
        "Material & Corrosion Engineering",
        "Engineering Technology Integration"
      ]
    }
  ],
  
  // Industries
  industries: [
    "Chemicals & Specialty Chemicals",
    "Agrochemicals",
    "Pharmaceuticals",
    "Petrochemicals",
    "Oil & Gas (Upstream, Midstream, Downstream)",
    "Industrial Manufacturing",
    "Power & Energy Plants",
    "Food & Beverage",
    "Water Treatment & Utilities",
    "Commercial Infrastructure"
  ],
  
  // Footer
  footer: {
    description: "Teckniv Engineers Pvt. Ltd. – Engineering Excellence. Global Impact. Your trusted partner for end-to-end industrial solutions.",
    quickLinks: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" }
    ],
    services: [
      "Detailed Engineering",
      "Pre-Bid Engineering Services",
      "Pipeline Engineering Services",
      "3D Modeling Services",
      "2D CAD Services",
      "Specialized Engineering Services"
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