import { personalInfo, aboutMe, experience, education, techStack, certifications } from '../data/personalData';
import { projects } from '../data/projectsData';

// Function to generate a text preview of the resume content
export const generateResumePreview = () => {
  const featuredProjects = projects.slice(0, 3);
  
  return `
=== KOUSHIK SAMUI - RESUME PREVIEW ===

PERSONAL INFORMATION:
• Name: ${personalInfo.name}
• Role: ${personalInfo.role}
• Email: ${personalInfo.email}
• Phone: ${personalInfo.phone}
• Location: ${personalInfo.location}
• LinkedIn: ${personalInfo.linkedin}
• GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY:
${aboutMe.intro}

KEY HIGHLIGHTS:
${aboutMe.highlights.map(highlight => `• ${highlight}`).join('\n')}

PROFESSIONAL EXPERIENCE:
${experience.map(job => `
• ${job.role} at ${job.company} (${job.duration})
  Location: ${job.location}
  ${job.description}
  
  Key Achievements:
  ${job.achievements.map(achievement => `  - ${achievement}`).join('\n')}
  
  Technologies: ${job.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${education.map(edu => `
• ${edu.degree} - ${edu.institution} (${edu.duration})
  ${edu.description}
`).join('\n')}

FEATURED PROJECTS:
${featuredProjects.map(project => `
• ${project.title} (${project.category})
  ${project.description}
  Technologies: ${project.technologies.join(', ')}
`).join('\n')}

CERTIFICATIONS:
${certifications.map(cert => `
• ${cert.name} - ${cert.issuer} (${cert.status})
  Date: ${cert.date}
`).join('\n')}

TECHNICAL SKILLS:
Frontend: ${techStack.frontend.map(skill => `${skill.name} (${skill.level}%)`).join(', ')}
Backend: ${techStack.backend.map(skill => `${skill.name} (${skill.level}%)`).join(', ')}
DevOps: ${techStack.devops.map(skill => `${skill.name} (${skill.level}%)`).join(', ')}
Mobile: ${techStack.mobile.map(skill => `${skill.name} (${skill.level}%)`).join(', ')}
Database: ${techStack.database.map(skill => `${skill.name} (${skill.level}%)`).join(', ')}

=== END OF RESUME PREVIEW ===
  `;
};

// Function to validate resume data completeness
export const validateResumeData = () => {
  const issues = [];
  
  // Check personal info
  if (!personalInfo.name || personalInfo.name.includes('Your')) {
    issues.push('Personal name needs to be updated');
  }
  
  if (!personalInfo.email || personalInfo.email.includes('example.com')) {
    issues.push('Email address needs to be updated');
  }
  
  if (!personalInfo.phone || personalInfo.phone.includes('XXXXXXXXXX')) {
    issues.push('Phone number needs to be updated');
  }
  
  if (!personalInfo.linkedin || personalInfo.linkedin.includes('your-profile')) {
    issues.push('LinkedIn URL needs to be updated');
  }
  
  if (!personalInfo.github || personalInfo.github.includes('your-username')) {
    issues.push('GitHub URL needs to be updated');
  }
  
  // Check if experience is populated
  if (!experience || experience.length === 0) {
    issues.push('Experience section is empty');
  }
  
  // Check if education is populated
  if (!education || education.length === 0) {
    issues.push('Education section is empty');
  }
  
  // Check if projects are populated
  if (!projects || projects.length === 0) {
    issues.push('Projects section is empty');
  }
  
  return {
    isValid: issues.length === 0,
    issues: issues
  };
};
