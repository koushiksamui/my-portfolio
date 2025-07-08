# Koushik Samui - Portfolio Website

A modern, responsive personal portfolio website built with React.js and Tailwind CSS, showcasing the work and expertise of Koushik Samui, a Full-Stack DevOps Developer.

## 🚀 Live Demo

[Visit the live website](https://koushik-samui.dev) *(Replace with actual URL)*

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎨 Design
- Modern, clean, and professional design
- Dark theme with gradient accents
- Glass-morphism effects
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Accessibility-first approach

### 🧩 Sections
- **Hero Section**: Personal introduction with call-to-action buttons
- **About**: Professional background and technical skills
- **Experience**: Work history and achievements
- **Projects**: Portfolio of completed projects with filtering
- **Certifications**: Professional certifications and learning path
- **Blog**: Technical articles and insights
- **Contact**: Contact form with EmailJS integration

### 🔧 Functionality
- Smooth scrolling navigation
- Project filtering by category
- Modal views for detailed project information
- Blog post categorization and filtering
- Contact form with real-time validation
- Social media integration
- Resume download functionality
- SEO optimized with meta tags

### 📄 Resume Generator
- **Modern PDF Generator**: Beautiful, professional resume generation
- **Dynamic Content**: Automatically pulls data from your profile
- **Professional Layout**: Sidebar design with modern typography
- **High Quality**: Vector-based PDF with proper margins and formatting
- **Real-time Generation**: Instant PDF creation and download
- **Data Validation**: Ensures all required information is present

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Netlify/Vercel ready

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/koushik-samui/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── images/           # Static images
│   └── favicon.ico       # Favicon
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/            # Data files
│   │   ├── personalData.js
│   │   ├── projectsData.js
│   │   └── blogData.js
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .github/
│   └── copilot-instructions.md
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 🎯 Customization

### Personal Information
Update your personal details in `src/data/personalData.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects
Add your projects in `src/data/projectsData.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    technologies: ["React", "Node.js"],
    // ... other details
  }
];
```

### Blog Posts
Add your blog posts in `src/data/blogData.js`:
```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Post Title",
    excerpt: "Post excerpt",
    content: "Full content",
    // ... other details
  }
];
```

### EmailJS Configuration
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in `src/components/Contact.jsx`:
```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  // ... parameters
  'YOUR_PUBLIC_KEY'
);
```

### Images
Replace placeholder images in the `public/images/` directory:
- Profile photo
- Project screenshots
- Blog post thumbnails
- Social media preview image

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```
3. Build and deploy: `npm run build && npm run deploy`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide React](https://lucide.dev/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service

## 📧 Contact

Koushik Samui - [koushik.samui@example.com](mailto:koushik.samui@example.com)

Project Link: [https://github.com/koushik-samui/portfolio](https://github.com/koushik-samui/portfolio)

---

⭐ Star this repository if you found it helpful!
