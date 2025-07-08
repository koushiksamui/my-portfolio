# Copilot Instructions for Koushik Samui's Portfolio

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern, responsive personal portfolio website built with React.js and Tailwind CSS for Koushik Samui, a Full-Stack DevOps Developer.

## Technology Stack
- **Frontend**: React.js, Tailwind CSS, Lucide React (icons)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom utilities
- **Email Service**: EmailJS for contact form
- **Deployment**: Ready for Netlify, Vercel, or GitHub Pages

## Code Style Guidelines
- Use functional components with React hooks
- Follow ES6+ syntax and modern JavaScript practices
- Use Tailwind CSS utility classes for styling
- Implement responsive design with mobile-first approach
- Use semantic HTML elements for accessibility
- Follow consistent naming conventions (camelCase for variables, PascalCase for components)

## Component Structure
- Each section is a separate component (Hero, About, Experience, etc.)
- Data is centralized in `/src/data/` directory
- Reusable components are in `/src/components/`
- Use consistent props structure and prop types

## Design Principles
- Dark theme with gradient accents
- Glass-morphism effects for cards
- Smooth animations and transitions
- Accessibility-first approach
- SEO optimized
- Performance optimized

## Data Management
- Personal information, projects, blog posts, and other data are stored in separate files in `/src/data/`
- Easy to update content without touching component logic
- Structured data for easy maintenance

## Key Features
- Responsive navigation with mobile menu
- Smooth scrolling between sections
- Project filtering and modal views
- Blog post categorization
- Contact form with EmailJS integration
- Social media links and resume download
- Certification tracking with status indicators

## Customization Notes
- Update personal information in `/src/data/personalData.js`
- Add new projects in `/src/data/projectsData.js`
- Modify blog posts in `/src/data/blogData.js`
- Replace placeholder images with actual images
- Configure EmailJS with actual service credentials
- Update social media links and resume download functionality

## Development Guidelines
- Test responsiveness across different screen sizes
- Ensure all animations are smooth and performant
- Validate all forms and implement proper error handling
- Optimize images and assets for web performance
- Use proper semantic HTML for SEO and accessibility
- Implement proper meta tags and structured data

## When making changes:
1. Maintain the existing design system and color scheme
2. Keep components modular and reusable
3. Update data files rather than hardcoding content
4. Test across different devices and browsers
5. Ensure accessibility standards are met
6. Keep the codebase clean and well-documented
