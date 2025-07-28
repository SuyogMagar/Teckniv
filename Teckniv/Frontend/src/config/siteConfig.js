// Site Configuration - Easy to modify for different content
export const siteConfig = {
  // Basic Site Info
  siteName: "Teckniv Engineers Pvt. Ltd.",
  siteDescription: "Engineering Excellence. Global Impact.",
  siteUrl: "https://teckniv.com",

  // API Configuration
  api: {
    baseUrl: "http://localhost:8080/api",
  },
  
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
      ],
      details: {
        intro: `Teckniv Engineers Pvt. Ltd. provides comprehensive detailed engineering services tailored to meet the technical, operational, and regulatory demands of industrial infrastructure. We ensure precision and reliability across every domain—delivering designs that are construction-ready, efficient, and compliant.`,
        sections: [
          {
            title: "Process Engineering",
            content: [
              {
                subtitle: "Process Design & Development",
                points: [
                  "Preparation of Process Flow Diagrams (PFDs) and Piping & Instrumentation Diagrams (P&IDs)",
                  "Development of mass and energy balances, utility consumption, and heat integration",
                  "Process route evaluation and technology selection"
                ]
              },
              {
                subtitle: "Equipment Sizing & Specification",
                points: [
                  "Sizing of heat exchangers, reactors, pumps, vessels, and separators",
                  "Preparation of equipment datasheets and process specifications",
                  "Support for custom design requirements and vendor coordination"
                ]
              },
              {
                subtitle: "Process Simulation & Optimization",
                points: [
                  "Dynamic and steady-state simulations using Aspen HYSYS, Aspen Plus, CHEMCAD, PRO/II",
                  "Debottlenecking studies and throughput improvement",
                  "Sensitivity analysis and optimization of key operating parameters"
                ]
              },
              {
                subtitle: "Safety, Compliance & Risk Management",
                points: [
                  "HAZOP, SIL, and What-If studies facilitation and documentation",
                  "Relief system design and flare load calculations",
                  "Compliance with ASME, API, OSHA, and environmental standards"
                ]
              },
              {
                subtitle: "Operational Support",
                points: [
                  "Troubleshooting of existing process units and operational performance audits",
                  "Process validation, commissioning support, and SOP development",
                  "Revamp, retrofit, and energy-saving solution studies"
                ]
              }
            ],
            industries: [
              "Chemicals & Petrochemicals",
              "Oil & Gas (Upstream, Midstream, Downstream)",
              "Pharmaceuticals & Biotech",
              "Food & Beverage",
              "Water Treatment & Utilities"
            ]
          },
          {
            title: "Piping Engineering",
            content: [
              {
                subtitle: "Piping Design & Layout",
                points: [
                  "Development of P&IDs, GA drawings, and isometric drawings",
                  "Efficient pipe routing that ensures accessibility, safety, and minimal interference",
                  "3D modeling with clash detection and coordination across disciplines"
                ]
              },
              {
                subtitle: "Pipe Stress & Flexibility Analysis",
                points: [
                  "Detailed analysis of thermal expansion, vibrations, wind, seismic, and support loads",
                  "Expertise in CAESAR II, Rohr2",
                  "Compliance with international codes like ASME B31.1, ASME B31.3, API, and IS standards"
                ]
              },
              {
                subtitle: "Material Specification & Selection",
                points: [
                  "Material selection based on service conditions and process requirements",
                  "Preparation of piping material specifications (PMS) and material take-offs (MTO)"
                ]
              },
              {
                subtitle: "3D Modeling & Drafting",
                points: [
                  "Plant layout and piping design using industry-standard software: AutoCAD Plant 3D, AVEVA PDMS / E3D, Intergraph SmartPlant 3D (SP3D), Bentley OpenPlant",
                  "Preparation of orthographic drawings, spool drawings, and as-built documentation"
                ]
              },
              {
                subtitle: "Pipe Support Engineering",
                points: [
                  "Design and detailing of pipe supports: rigid, spring, and dynamic",
                  "Load calculations and support standardization",
                  "Integration of support systems with structural elements"
                ]
              },
              {
                subtitle: "Construction & Field Engineering",
                points: [
                  "Site supervision during installation and fabrication",
                  "Support during hydro testing, commissioning, and documentation",
                  "Coordination for vendor data and red-line markups"
                ]
              }
            ],
            industries: [
              "Oil & Gas (Onshore / Offshore)",
              "Petrochemical & Refinery",
              "Chemical & Fertilizer Plants",
              "Power Plants (Thermal, Nuclear, Renewable)",
              "Water Treatment & Utility Systems",
              "Food & Beverage Processing",
              "Pharmaceuticals & Biotech"
            ]
          },
          {
            title: "Equipment Engineering",
            content: [
              {
                subtitle: "Equipment Sizing & Selection",
                points: [
                  "Equipment sizing for process, piping, and civil works",
                  "Selection of equipment based on technical and economic criteria",
                  "Preparation of equipment datasheets and specifications"
                ]
              },
              {
                subtitle: "3D Modeling & Drafting",
                points: [
                  "Equipment layout and 3D modeling using AutoCAD Plant 3D, AVEVA PDMS / E3D, Intergraph SmartPlant 3D (SP3D), Bentley OpenPlant",
                  "Preparation of isometric drawings, assembly drawings, and as-built documentation"
                ]
              },
              {
                subtitle: "Material & Corrosion Engineering",
                points: [
                  "Material selection and specification for all equipment types",
                  "Corrosion analysis and mitigation strategies",
                  "Specification of corrosion-resistant materials"
                ]
              },
              {
                subtitle: "Construction & Field Engineering",
                points: [
                  "Site supervision during equipment procurement and installation",
                  "Support during commissioning and documentation",
                  "Coordination for vendor data and red-line markups"
                ]
              }
            ],
            industries: [
              "Chemicals & Petrochemicals",
              "Oil & Gas (Upstream, Midstream, Downstream)",
              "Pharmaceuticals & Biotech",
              "Food & Beverage",
              "Water Treatment & Utilities"
            ]
          },
          {
            title: "Civil & Structural Engineering",
            content: [
              {
                subtitle: "Site Layout & Master Planning",
                points: [
                  "Detailed site layout and master planning for industrial facilities",
                  "Landscape design, road networks, and utility layouts",
                  "Coordination with municipal authorities and regulatory bodies"
                ]
              },
              {
                subtitle: "Structural Design",
                points: [
                  "Design of foundations, columns, beams, and slabs for process and support structures",
                  "Load calculations and structural analysis using SAP2000, ETABS, STAAD.Pro",
                  "Compliance with international codes (IS 800, IS 1893, IS 13920)"
                ]
              },
              {
                subtitle: "Site Development & Infrastructure",
                points: [
                  "Civil works (earthworks, drainage, water supply, sewage, fire protection)",
                  "Utility systems (power, telecom, water, gas, steam)",
                  "Site access roads and parking areas"
                ]
              },
              {
                subtitle: "Construction & Field Engineering",
                points: [
                  "Site supervision during civil works and infrastructure development",
                  "Support during commissioning and documentation",
                  "Coordination for vendor data and red-line markups"
                ]
              }
            ],
            industries: [
              "Chemicals & Petrochemicals",
              "Oil & Gas (Upstream, Midstream, Downstream)",
              "Pharmaceuticals & Biotech",
              "Food & Beverage",
              "Water Treatment & Utilities"
            ]
          },
          {
            title: "Instrumentation Engineering",
            content: [
              {
                subtitle: "Instrumentation Planning & Design",
                points: [
                  "Development of Instrumentation & Control (I&C) Schemes",
                  "Selection of instruments, actuators, and controllers",
                  "Layout of instrument rooms and control panels"
                ]
              },
              {
                subtitle: "3D Modeling & Drafting",
                points: [
                  "3D modeling of instrument layouts and control panels using AutoCAD Plant 3D, AVEVA PDMS / E3D, Intergraph SmartPlant 3D (SP3D), Bentley OpenPlant",
                  "Preparation of isometric drawings, as-built documentation"
                ]
              },
              {
                subtitle: "Material & Specification",
                points: [
                  "Selection of instrumentation materials and specifications",
                  "Specification of field devices, valves, actuators, and controllers"
                ]
              },
              {
                subtitle: "Construction & Field Engineering",
                points: [
                  "Site supervision during instrumentation installation and commissioning",
                  "Support during commissioning and documentation",
                  "Coordination for vendor data and red-line markups"
                ]
              }
            ],
            industries: [
              "Chemicals & Petrochemicals",
              "Oil & Gas (Upstream, Midstream, Downstream)",
              "Pharmaceuticals & Biotech",
              "Food & Beverage",
              "Water Treatment & Utilities"
            ]
          },
          {
            title: "Electrical Engineering",
            content: [
              {
                subtitle: "Power System Design",
                points: [
                  "Design of power distribution systems (3-phase, single-phase, DC)",
                  "Selection of transformers, switchgear, and MCC panels",
                  "Load calculations and coordination with utility providers"
                ]
              },
              {
                subtitle: "Instrumentation & Control Systems",
                points: [
                  "Design of I&C systems, including SCADA, PLC, and DCS",
                  "Specification of control panels, cabinets, and wiring",
                  "Integration with other engineering disciplines"
                ]
              },
              {
                subtitle: "Lighting & Lighting Control",
                points: [
                  "Design of lighting layouts and control systems",
                  "Selection of lighting fixtures and controls",
                  "Compliance with safety standards (IS 800, IS 1000)"
                ]
              },
              {
                subtitle: "Fire Alarm & Detection Systems",
                points: [
                  "Design of fire alarm and detection systems",
                  "Specification of fire alarm devices and equipment",
                  "Compliance with safety standards (IS 1000)"
                ]
              },
              {
                subtitle: "Construction & Field Engineering",
                points: [
                  "Site supervision during electrical works and commissioning",
                  "Support during commissioning and documentation",
                  "Coordination for vendor data and red-line markups"
                ]
              }
            ],
            industries: [
              "Chemicals & Petrochemicals",
              "Oil & Gas (Upstream, Midstream, Downstream)",
              "Pharmaceuticals & Biotech",
              "Food & Beverage",
              "Water Treatment & Utilities"
            ]
          }
        ]
      }
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