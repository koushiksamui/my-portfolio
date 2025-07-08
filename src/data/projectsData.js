// Projects Data
export const projects = [
  {
    id: 1,
    title: "Healthcare Analytics Platform",
    description: "A comprehensive React Native mobile application for pain analysis and healthcare monitoring, featuring real-time data visualization, crash monitoring, and push notifications.",
    longDescription: "Developed a full-stack healthcare platform that enables patients to track their pain levels and receive personalized insights. The application includes a React Native mobile app with interactive charts, a Node.js backend with MongoDB for data storage, and comprehensive DevOps infrastructure on AWS.",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase FCM", "Sentry", "AWS", "Docker", "GitHub Actions"],
    category: "Full-Stack",
    status: "completed",
    demoUrl: "", // Add actual demo URL
    githubUrl: "", // Add actual GitHub URL
    imageUrl: "/images/projects/healthcare-app.jpg", // Placeholder
    features: [
      "Real-time pain level tracking with interactive charts",
      "Push notifications for medication reminders",
      "Crash monitoring and error tracking with Sentry",
      "Cloud-based data synchronization",
      "Responsive design for multiple device sizes"
    ],
    challenges: [
      "Implementing real-time data synchronization across devices",
      "Optimizing chart performance for large datasets",
      "Setting up comprehensive error tracking and monitoring"
    ],
    date: "2025"
  },
  {
    id: 2,
    title: "DevOps CI/CD Pipeline",
    description: "Automated deployment pipeline using GitHub Actions, Docker, and AWS EC2 for seamless application delivery from development to production.",
    longDescription: "Designed and implemented a complete CI/CD pipeline that automates the entire deployment process. The pipeline includes automated testing, containerization, security scanning, and zero-downtime deployment to AWS infrastructure.",
    technologies: ["GitHub Actions", "Docker", "AWS EC2", "Shell Scripting"],
    category: "DevOps",
    status: "completed",
    demoUrl: "",
    githubUrl: "https://github.com/TellYouDoc/test_ci_cd_with_docker.git",
    imageUrl: "/images/projects/ci_cd_docker.png",
    features: [
      "Automated testing and code quality checks",
      "Docker containerization for consistent deployments",
      "Zero-downtime deployment strategies",
      "Automated rollback mechanisms",
      "Integration with monitoring systems"
    ],
    challenges: [
      "Implementing zero-downtime deployment strategies",
      "Managing environment-specific configurations",
      "Setting up comprehensive monitoring and alerting"
    ],
    date: "2025"
  },
  {
    id: 3,
    title: "Microservices Monitoring System",
    description: "Comprehensive monitoring solution using Prometheus and Grafana for tracking application performance, system metrics, and business KPIs.",
    longDescription: "Built a complete monitoring stack that provides real-time insights into application performance, infrastructure health, and business metrics. The system includes custom dashboards, alerting rules, and automated reporting.",
    technologies: ["Prometheus", "Grafana", "Node.js", "Docker", "AWS CloudWatch", "Redis"],
    category: "DevOps",
    status: "completed",
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/images/projects/monitoring-system.jpg",
    features: [
      "Real-time application and infrastructure monitoring",
      "Custom Grafana dashboards for different stakeholders",
      "Automated alerting for critical issues",
      "Performance trend analysis and reporting",
      "Integration with existing AWS infrastructure"
    ],
    challenges: [
      "Designing meaningful metrics and KPIs",
      "Optimizing query performance for large datasets",
      "Creating intuitive dashboards for non-technical users"
    ],
    date: "2024"
  },
  {
    id: 4,
    title: "Redis-Cached Backend API",
    description: "High-performance REST API with Redis caching, background job processing, and comprehensive error handling for improved scalability.",
    longDescription: "Developed a robust backend API system that handles high-traffic loads through strategic caching, background job processing, and optimized database queries. The system includes rate limiting, authentication, and comprehensive logging.",
    technologies: ["Node.js", "Express.js", "Redis", "MongoDB", "JWT", "Bull Queue"],
    category: "Backend",
    status: "completed",
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/images/projects/backend-api.jpg",
    features: [
      "Redis caching for improved response times",
      "Background job processing with Bull Queue",
      "JWT-based authentication and authorization",
      "Rate limiting and request throttling",
      "Comprehensive API documentation"
    ],
    challenges: [
      "Implementing efficient caching strategies",
      "Managing background job reliability",
      "Optimizing database queries for performance"
    ],
    date: "2024"
  },
  {
    id: 5,
    title: "React Native Expo App",
    description: "Cross-platform mobile application built with React Native and Expo, featuring offline capabilities, push notifications, and smooth animations.",
    longDescription: "Created a feature-rich mobile application that works seamlessly across iOS and Android platforms. The app includes offline functionality, real-time features, and a polished user interface with smooth animations.",
    technologies: ["React Native", "Expo", "Firebase", "AsyncStorage", "React Navigation", "Reanimated"],
    category: "Mobile",
    status: "completed",
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/images/projects/expo-app.jpg",
    features: [
      "Cross-platform compatibility (iOS/Android)",
      "Offline data synchronization",
      "Push notifications with Firebase FCM",
      "Smooth animations and transitions",
      "Intuitive navigation and UX"
    ],
    challenges: [
      "Implementing reliable offline functionality",
      "Optimizing performance across different devices",
      "Managing state synchronization between online/offline modes"
    ],
    date: "2024"
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with React.js and Tailwind CSS, featuring smooth animations and optimized performance.",
    longDescription: "Designed and developed this very portfolio website using modern web technologies. The site features responsive design, smooth animations, SEO optimization, and fast loading times.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "EmailJS", "Framer Motion"],
    category: "Frontend",
    status: "completed",
    demoUrl: "https://my-portfolio-alpha-sand-23.vercel.app/", 
    githubUrl: "https://github.com/koushiksamui/my-portfolio.git", 
    imageUrl: "/images/projects/portfolio.png",
    features: [
      "Fully responsive design",
      "Modern UI with smooth animations",
      "SEO optimized",
      "Fast loading times with Vite",
      "Contact form with EmailJS integration"
    ],
    challenges: [
      "Creating smooth animations without performance impact",
      "Ensuring perfect responsiveness across all devices",
      "Optimizing for search engines and accessibility"
    ],
    date: "2025"
  }
];

// Project categories for filtering
export const projectCategories = [
  { id: "all", name: "All Projects", count: projects.length },
  { id: "full-stack", name: "Full-Stack", count: projects.filter(p => p.category === "Full-Stack").length },
  { id: "devops", name: "DevOps", count: projects.filter(p => p.category === "DevOps").length },
  { id: "backend", name: "Backend", count: projects.filter(p => p.category === "Backend").length },
  { id: "mobile", name: "Mobile", count: projects.filter(p => p.category === "Mobile").length },
  { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "Frontend").length }
];

export default {
  projects,
  projectCategories
};
