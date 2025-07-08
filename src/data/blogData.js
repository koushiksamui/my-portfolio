// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    title: "Deploying Node.js App to EC2 with Docker & PM2",
    excerpt: "A comprehensive guide to deploying Node.js applications on AWS EC2 using Docker containers and PM2 process manager for production-ready deployments.",
    content: "In this article, I'll walk you through the complete process of deploying a Node.js application to AWS EC2 using Docker containers and PM2 process manager. We'll cover everything from setting up the EC2 instance to configuring NGINX as a reverse proxy and implementing automated deployment strategies.",
    author: "Koushik Samui",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "DevOps",
    tags: ["Node.js", "Docker", "AWS", "EC2", "PM2", "NGINX", "Deployment"],
    imageUrl: "/images/blog/nodejs-deployment.jpg",
    slug: "deploying-nodejs-app-ec2-docker-pm2",
    featured: true,
    status: "published"
  },
  {
    id: 2,
    title: "Using GitHub Actions for CI/CD with Expo",
    excerpt: "Learn how to set up automated CI/CD pipelines for React Native Expo applications using GitHub Actions, including testing, building, and deployment automation.",
    content: "GitHub Actions provides a powerful platform for automating your React Native Expo app deployment workflow. In this tutorial, we'll create a complete CI/CD pipeline that automatically tests, builds, and deploys your Expo app whenever you push changes to your repository.",
    author: "Koushik Samui",
    date: "2024-11-28",
    readTime: "10 min read",
    category: "Mobile Development",
    tags: ["React Native", "Expo", "GitHub Actions", "CI/CD", "Automation"],
    imageUrl: "/images/blog/github-actions-expo.jpg",
    slug: "github-actions-cicd-expo",
    featured: true,
    status: "published"
  },
  {
    id: 3,
    title: "Handling Background Jobs with Redis Queue",
    excerpt: "Implement scalable background job processing in Node.js applications using Redis and Bull Queue for handling time-consuming tasks efficiently.",
    content: "Background job processing is crucial for building scalable web applications. In this article, we'll explore how to implement robust background job processing using Redis and Bull Queue in Node.js applications, covering job scheduling, retry mechanisms, and monitoring.",
    author: "Koushik Samui",
    date: "2024-11-10",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Node.js", "Redis", "Bull Queue", "Background Jobs", "Scalability"],
    imageUrl: "/images/blog/redis-queue.jpg",
    slug: "handling-background-jobs-redis-queue",
    featured: true,
    status: "published"
  },
  {
    id: 4,
    title: "Setting up Prometheus and Grafana for Application Monitoring",
    excerpt: "A complete guide to implementing comprehensive monitoring for your applications using Prometheus for metrics collection and Grafana for visualization.",
    content: "Monitoring is essential for maintaining healthy production applications. This comprehensive guide covers setting up Prometheus for metrics collection and Grafana for creating beautiful dashboards to visualize your application's performance and health metrics.",
    author: "Koushik Samui",
    date: "2024-10-22",
    readTime: "15 min read",
    category: "DevOps",
    tags: ["Prometheus", "Grafana", "Monitoring", "Observability", "Metrics"],
    imageUrl: "/images/blog/prometheus-grafana.jpg",
    slug: "prometheus-grafana-monitoring",
    featured: false,
    status: "published"
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js and MongoDB",
    excerpt: "Best practices for designing and implementing scalable REST APIs using Node.js and MongoDB, including performance optimization and security considerations.",
    content: "Building scalable APIs requires careful consideration of architecture, database design, and performance optimization. This article covers best practices for creating robust and scalable REST APIs using Node.js and MongoDB.",
    author: "Koushik Samui",
    date: "2024-10-05",
    readTime: "11 min read",
    category: "Backend",
    tags: ["Node.js", "MongoDB", "REST API", "Scalability", "Performance"],
    imageUrl: "/images/blog/nodejs-mongodb-api.jpg",
    slug: "scalable-apis-nodejs-mongodb",
    featured: false,
    status: "published"
  },
  {
    id: 6,
    title: "React Native Performance Optimization Techniques",
    excerpt: "Discover advanced techniques for optimizing React Native app performance, including bundle size reduction, memory management, and rendering optimization.",
    content: "React Native app performance can make or break user experience. This article explores advanced optimization techniques including bundle size reduction, memory management, lazy loading, and rendering optimization to create smooth, fast mobile applications.",
    author: "Koushik Samui",
    date: "2024-09-18",
    readTime: "9 min read",
    category: "Mobile Development",
    tags: ["React Native", "Performance", "Optimization", "Mobile Development"],
    imageUrl: "/images/blog/react-native-performance.jpg",
    slug: "react-native-performance-optimization",
    featured: false,
    status: "published"
  },
  {
    id: 7,
    title: "Implementing Real-time Features with WebSockets",
    excerpt: "Learn how to implement real-time features in web applications using WebSockets, including chat systems, live updates, and collaborative features.",
    content: "Real-time features are becoming increasingly important in modern web applications. This tutorial covers implementing WebSocket connections, handling real-time data synchronization, and building features like live chat and collaborative editing.",
    author: "Koushik Samui",
    date: "2024-09-02",
    readTime: "13 min read",
    category: "Full-Stack",
    tags: ["WebSockets", "Real-time", "Node.js", "Socket.io"],
    imageUrl: "/images/blog/websockets-realtime.jpg",
    slug: "implementing-realtime-features-websockets",
    featured: false,
    status: "draft"
  },
  {
    id: 8,
    title: "AWS Security Best Practices for Developers",
    excerpt: "Essential security practices every developer should follow when working with AWS services, including IAM, VPC configuration, and data encryption.",
    content: "Security should be a top priority when working with cloud services. This guide covers essential AWS security best practices including IAM policies, VPC configuration, data encryption, and security monitoring for developers.",
    author: "Koushik Samui",
    date: "2024-08-15",
    readTime: "14 min read",
    category: "Cloud",
    tags: ["AWS", "Security", "IAM", "Cloud Security", "Best Practices"],
    imageUrl: "/images/blog/aws-security.jpg",
    slug: "aws-security-best-practices",
    featured: false,
    status: "draft"
  }
];

// Blog categories for filtering
export const blogCategories = [
  { id: "all", name: "All Posts", count: blogPosts.filter(post => post.status === "published").length },
  { id: "devops", name: "DevOps", count: blogPosts.filter(post => post.category === "DevOps" && post.status === "published").length },
  { id: "backend", name: "Backend", count: blogPosts.filter(post => post.category === "Backend" && post.status === "published").length },
  { id: "mobile-development", name: "Mobile Development", count: blogPosts.filter(post => post.category === "Mobile Development" && post.status === "published").length },
  { id: "full-stack", name: "Full-Stack", count: blogPosts.filter(post => post.category === "Full-Stack" && post.status === "published").length },
  { id: "cloud", name: "Cloud", count: blogPosts.filter(post => post.category === "Cloud" && post.status === "published").length }
];

// Featured blog posts
export const featuredPosts = blogPosts.filter(post => post.featured && post.status === "published");

export default {
  blogPosts,
  blogCategories,
  featuredPosts
};
