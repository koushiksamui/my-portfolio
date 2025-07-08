// Personal Information Data
export const personalInfo = {
  name: "Koushik Samui",
  role: "Full-Stack DevOps Developer",
  tagline: "Delivering scalable systems from code to cloud.",
  location: "India",
  avatar: "/images/avatar.jpg", // Placeholder - replace with actual image
  email: "koushiksamui.dev@gmail.com", // Replace with actual email
  phone: "+91 7557031037", // Replace with actual phone
  linkedin: "https://www.linkedin.com/in/koushik-samui-3b56a4223/", 
  github: "https://github.com/koushiksamui", 
  website: "https://my-portfolio-alpha-sand-23.vercel.app/", 
  availability: "Open to full-time/remote DevOps and full-stack roles or freelance opportunities"
};

// About Me Data
export const aboutMe = {
  intro: "I'm a passionate Full-Stack DevOps Developer currently working at Precise Medication Research Pvt. Ltd. @ IIIT Guwahati, Assam. I specialize in building scalable web applications, implementing robust CI/CD pipelines, and managing cloud infrastructure. My expertise spans across the entire development lifecycle - from crafting responsive frontends to orchestrating complex backend systems and deploying them on cloud platforms.",
  highlights: [
    "🚀 3+ years of experience in Full-Stack Development",
    "☁️ Expertise in AWS cloud infrastructure and DevOps practices",
    "🔧 Proficient in Docker, CI/CD, and monitoring systems",
    "📱 React Native mobile app development",
    "🎯 Strong background in API development and database optimization"
  ]
};

// Experience Data
export const experience = [
  {
    id: 1,
    company: "Precise Medication Research Pvt. Ltd.",
    location: "IIIT Guwahati, Assam",
    role: "Full-Stack DevOps Developer",
    duration: "2024 - Present",
    type: "Full-time",
    description: "Leading the development and deployment of scalable healthcare applications with a focus on DevOps automation and cloud infrastructure.",
    achievements: [
      "Designed and implemented AWS cloud infrastructure for production applications",
      "Built comprehensive CI/CD pipelines using GitHub Actions for automated testing and deployment",
      "Dockerized backend services and implemented container orchestration",
      "Developed React Native mobile applications with real-time features",
      "Integrated crash monitoring and analytics using Sentry for proactive error tracking",
      "Implemented real-time push notifications using Firebase Cloud Messaging (FCM)",
      "Set up monitoring and alerting systems using Prometheus and Grafana"
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "React Native", "Node.js", "MongoDB", "Firebase", "Sentry", "Prometheus", "Grafana"]
  }
];

// Education Data
export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "University of Kalyani",
    duration: "2021 - 2024",
    description: "Specialized in software development, database management, and computer networks. Active in coding competitions and technical workshops.",
    achievements: [
      "Completed projects in web development and mobile app development",
      "Participated in various hackathons and coding competitions",
      "Maintained strong academic performance with focus on practical applications"
    ]
  }
];

// Tech Stack Data
export const techStack = {
  frontend: [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "React Native", level: 85, category: "Mobile" },
    { name: "Tailwind CSS", level: 88, category: "Styling" },
    { name: "JavaScript", level: 92, category: "Language" },
    { name: "HTML/CSS", level: 95, category: "Frontend" }
  ],
  backend: [
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express.js", level: 88, category: "Framework" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "Redis", level: 82, category: "Cache" },
    { name: "REST APIs", level: 92, category: "API" }
  ],
  devops: [
    { name: "AWS", level: 85, category: "Cloud" },
    { name: "Docker", level: 88, category: "Container" },
    { name: "GitHub Actions", level: 90, category: "CI/CD" },
    { name: "PM2", level: 85, category: "Process Manager" },
    { name: "NGINX", level: 80, category: "Web Server" },
    { name: "Prometheus", level: 75, category: "Monitoring" },
    { name: "Grafana", level: 75, category: "Visualization" }
  ],
  tools: [
    { name: "Git", level: 95, category: "Version Control" },
    { name: "VS Code", level: 92, category: "IDE" },
    { name: "Postman", level: 90, category: "API Testing" },
    { name: "Firebase", level: 85, category: "Backend Service" },
    { name: "Sentry", level: 80, category: "Error Tracking" }
  ]
};

// Certifications Data (placeholder for future certifications)
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "In Progress",
    status: "in-progress",
    credentialId: "",
    description: "Comprehensive certification covering AWS services, deployment, and security best practices."
  },
  {
    id: 2,
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "Planned",
    status: "planned",
    credentialId: "",
    description: "Certification focusing on containerization, orchestration, and Docker best practices."
  },
  {
    id: 3,
    name: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "Planned",
    status: "planned",
    credentialId: "",
    description: "Hands-on certification for Kubernetes cluster administration and management."
  }
];

export default {
  personalInfo,
  aboutMe,
  experience,
  education,
  techStack,
  certifications
};
