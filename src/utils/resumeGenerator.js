import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { personalInfo, aboutMe, experience, education, techStack, certifications } from '../data/personalData';
import { projects } from '../data/projectsData';

export const generateResumePDF = async () => {
  try {
    // Get featured projects (top 3)
    const featuredProjects = projects.slice(0, 3);
    
    // Create a temporary div to render the resume
    const resumeElement = document.createElement('div');
    resumeElement.style.position = 'absolute';
    resumeElement.style.left = '-9999px';
    resumeElement.style.top = '-9999px';
    resumeElement.style.width = '714px'; // A4 width minus margins (794 - 80px margins)
    resumeElement.style.backgroundColor = '#ffffff';
    resumeElement.style.fontFamily = 'Arial, sans-serif';
    resumeElement.style.fontSize = '12px';
    resumeElement.style.lineHeight = '1.4';
    resumeElement.style.color = '#333333';
    resumeElement.style.border = '2px solid #e5e7eb';
    resumeElement.style.borderRadius = '8px';
    resumeElement.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    
    // Generate resume HTML content
    resumeElement.innerHTML = `
      <div style="padding: 30px; max-width: 714px; margin: 0; background: white; border-radius: 6px;">
        <!-- Header Section with border -->
        <div style="text-align: center; margin-bottom: 25px; background: linear-gradient(135deg, #2563eb, #9333ea); color: white; padding: 25px; border-radius: 8px; border: 2px solid #1d4ed8;">
          <h1 style="font-size: 28px; margin: 0 0 8px 0; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">${personalInfo.name}</h1>
          <p style="font-size: 16px; margin: 0 0 8px 0; opacity: 0.95; font-weight: 500;">${personalInfo.role}</p>
          <p style="font-size: 13px; margin: 0 0 18px 0; opacity: 0.85;">${personalInfo.tagline}</p>
          
          <!-- Contact info with subtle borders -->
          <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; font-size: 11px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);">
            <div style="display: flex; align-items: center; gap: 4px; padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 4px;">
              <span>📧</span> <span>${personalInfo.email}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px; padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 4px;">
              <span>📞</span> <span>${personalInfo.phone}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px; padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 4px;">
              <span>📍</span> <span>${personalInfo.location}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px; padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 4px;">
              <span>🌐</span> <span>${personalInfo.website}</span>
            </div>
          </div>
          
          <!-- Social links with borders -->
          <div style="display: flex; justify-content: center; gap: 15px; margin-top: 12px; font-size: 11px;">
            <div style="display: flex; align-items: center; gap: 4px; padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 4px; border: 1px solid rgba(255,255,255,0.2);">
              <span>🔗</span> <span>${personalInfo.github}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px; padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 4px; border: 1px solid rgba(255,255,255,0.2);">
              <span>💼</span> <span>${personalInfo.linkedin}</span>
            </div>
          </div>
        </div>

        <!-- Professional Summary with border -->
        <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 18px; background: #f8fafc;">
          <h2 style="font-size: 18px; font-weight: bold; color: #2563eb; margin: 0 0 12px 0; border-bottom: 2px solid #2563eb; padding-bottom: 4px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">📋</span>
            Professional Summary
          </h2>
          <p style="margin: 0 0 12px 0; text-align: justify; line-height: 1.5; color: #374151;">${aboutMe.intro}</p>
          <ul style="margin: 0; padding-left: 20px; list-style: none;">
            ${aboutMe.highlights.map(highlight => `
              <li style="margin-bottom: 4px; position: relative; padding-left: 15px; background: white; padding: 6px 6px 6px 20px; border-radius: 4px; border-left: 3px solid #2563eb; margin-bottom: 6px;">
                <span style="position: absolute; left: 6px; color: #2563eb; font-weight: bold;">•</span>
                ${highlight}
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Professional Experience with border -->
        <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 18px; background: #f8fafc;">
          <h2 style="font-size: 18px; font-weight: bold; color: #2563eb; margin: 0 0 12px 0; border-bottom: 2px solid #2563eb; padding-bottom: 4px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">💼</span>
            Professional Experience
          </h2>
          ${experience.map(job => `
            <div style="margin-bottom: 16px; background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px;">
                <div>
                  <h3 style="font-size: 15px; font-weight: bold; margin: 0 0 4px 0; color: #333;">${job.role}</h3>
                  <p style="font-size: 13px; font-weight: 600; color: #2563eb; margin: 0 0 2px 0;">${job.company}</p>
                  <p style="font-size: 11px; color: #666; margin: 0;">${job.location}</p>
                </div>
                <div style="text-align: right; background: #f1f5f9; padding: 6px 10px; border-radius: 4px; border: 1px solid #e5e7eb;">
                  <p style="font-size: 11px; font-weight: 600; color: #666; margin: 0;">${job.duration}</p>
                  <p style="font-size: 10px; color: #888; margin: 0;">${job.type}</p>
                </div>
              </div>
              <p style="margin: 0 0 10px 0; color: #555; line-height: 1.4; font-size: 11px;">${job.description}</p>
              <div style="margin-bottom: 10px;">
                <h4 style="font-size: 12px; font-weight: bold; margin: 0 0 6px 0; color: #333; padding: 4px 0; border-bottom: 1px solid #e5e7eb;">Key Achievements:</h4>
                <ul style="margin: 0; padding-left: 20px; list-style: none;">
                  ${job.achievements.map(achievement => `
                    <li style="margin-bottom: 3px; position: relative; padding-left: 15px; font-size: 11px; line-height: 1.4; background: #f8fafc; padding: 4px 4px 4px 18px; border-radius: 3px; border-left: 2px solid #10b981; margin-bottom: 4px;">
                      <span style="position: absolute; left: 4px; color: #10b981; font-weight: bold;">✓</span>
                      ${achievement}
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div>
                <h4 style="font-size: 12px; font-weight: bold; margin: 0 0 6px 0; color: #333; padding: 4px 0; border-bottom: 1px solid #e5e7eb;">Technologies:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  ${job.technologies.map(tech => `
                    <span style="background: #dbeafe; color: #1e40af; padding: 3px 6px; border-radius: 8px; font-size: 10px; font-weight: 500; border: 1px solid #bfdbfe;">${tech}</span>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Education with border -->
        <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 18px; background: #f8fafc;">
          <h2 style="font-size: 18px; font-weight: bold; color: #2563eb; margin: 0 0 12px 0; border-bottom: 2px solid #2563eb; padding-bottom: 4px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">🎓</span>
            Education
          </h2>
          ${education.map(edu => `
            <div style="margin-bottom: 12px; background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px;">
                <div>
                  <h3 style="font-size: 15px; font-weight: bold; margin: 0 0 4px 0; color: #333;">${edu.degree}</h3>
                  <p style="font-size: 13px; font-weight: 600; color: #2563eb; margin: 0;">${edu.institution}</p>
                </div>
                <div style="background: #f1f5f9; padding: 6px 10px; border-radius: 4px; border: 1px solid #e5e7eb;">
                  <p style="font-size: 11px; font-weight: 600; color: #666; margin: 0;">${edu.duration}</p>
                </div>
              </div>
              <p style="margin: 0 0 6px 0; color: #555; line-height: 1.4; font-size: 11px;">${edu.description}</p>
              <ul style="margin: 0; padding-left: 20px; list-style: none;">
                ${edu.achievements.map(achievement => `
                  <li style="margin-bottom: 3px; position: relative; padding-left: 15px; font-size: 11px; line-height: 1.4; background: #f8fafc; padding: 4px 4px 4px 18px; border-radius: 3px; border-left: 2px solid #8b5cf6; margin-bottom: 4px;">
                    <span style="position: absolute; left: 4px; color: #8b5cf6; font-weight: bold;">★</span>
                    ${achievement}
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Technical Skills with border -->
        <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 18px; background: #f8fafc;">
          <h2 style="font-size: 18px; font-weight: bold; color: #2563eb; margin: 0 0 12px 0; border-bottom: 2px solid #2563eb; padding-bottom: 4px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">⚡</span>
            Technical Skills
          </h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb;">
              <h3 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; color: #333; padding: 6px; background: #dbeafe; border-radius: 4px; text-align: center; border: 1px solid #bfdbfe;">Frontend & Mobile</h3>
              ${techStack.frontend.map(skill => `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; padding: 4px; background: #f8fafc; border-radius: 3px; border: 1px solid #f1f5f9;">
                  <span style="font-size: 11px; color: #555; font-weight: 500;">${skill.name}</span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <div style="width: 50px; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden; border: 1px solid #d1d5db;">
                      <div style="height: 100%; background: linear-gradient(to right, #2563eb, #3b82f6); width: ${skill.level}%; border-radius: 2px;"></div>
                    </div>
                    <span style="font-size: 9px; color: #666; min-width: 24px; font-weight: 600;">${skill.level}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
            <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb;">
              <h3 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; color: #333; padding: 6px; background: #dcfce7; border-radius: 4px; text-align: center; border: 1px solid #bbf7d0;">Backend & Database</h3>
              ${techStack.backend.map(skill => `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; padding: 4px; background: #f8fafc; border-radius: 3px; border: 1px solid #f1f5f9;">
                  <span style="font-size: 11px; color: #555; font-weight: 500;">${skill.name}</span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <div style="width: 50px; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden; border: 1px solid #d1d5db;">
                      <div style="height: 100%; background: linear-gradient(to right, #10b981, #34d399); width: ${skill.level}%; border-radius: 2px;"></div>
                    </div>
                    <span style="font-size: 9px; color: #666; min-width: 24px; font-weight: 600;">${skill.level}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 12px;">
            <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb;">
              <h3 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; color: #333; padding: 6px; background: #fef3c7; border-radius: 4px; text-align: center; border: 1px solid #fde68a;">DevOps & Cloud</h3>
              ${techStack.devops.map(skill => `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; padding: 4px; background: #f8fafc; border-radius: 3px; border: 1px solid #f1f5f9;">
                  <span style="font-size: 11px; color: #555; font-weight: 500;">${skill.name}</span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <div style="width: 50px; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden; border: 1px solid #d1d5db;">
                      <div style="height: 100%; background: linear-gradient(to right, #f59e0b, #fbbf24); width: ${skill.level}%; border-radius: 2px;"></div>
                    </div>
                    <span style="font-size: 9px; color: #666; min-width: 24px; font-weight: 600;">${skill.level}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
            <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb;">
              <h3 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; color: #333; padding: 6px; background: #fce7f3; border-radius: 4px; text-align: center; border: 1px solid #fbcfe8;">Tools & Platforms</h3>
              ${techStack.tools.map(skill => `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; padding: 4px; background: #f8fafc; border-radius: 3px; border: 1px solid #f1f5f9;">
                  <span style="font-size: 11px; color: #555; font-weight: 500;">${skill.name}</span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <div style="width: 50px; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden; border: 1px solid #d1d5db;">
                      <div style="height: 100%; background: linear-gradient(to right, #ec4899, #f472b6); width: ${skill.level}%; border-radius: 2px;"></div>
                    </div>
                    <span style="font-size: 9px; color: #666; min-width: 24px; font-weight: 600;">${skill.level}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Certifications with border -->
        <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 18px; background: #f8fafc;">
          <h2 style="font-size: 18px; font-weight: bold; color: #2563eb; margin: 0 0 12px 0; border-bottom: 2px solid #2563eb; padding-bottom: 4px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">🏆</span>
            Certifications
          </h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            ${certifications.map(cert => `
              <div style="border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 6px;">
                  <h3 style="font-size: 13px; font-weight: bold; margin: 0; color: #333; line-height: 1.2;">${cert.name}</h3>
                  <span style="padding: 3px 6px; border-radius: 8px; font-size: 9px; font-weight: 600; border: 1px solid; ${
                    cert.status === 'completed' ? 'background: #dcfce7; color: #166534; border-color: #16a34a;' :
                    cert.status === 'in-progress' ? 'background: #fef3c7; color: #92400e; border-color: #f59e0b;' :
                    'background: #f3f4f6; color: #374151; border-color: #9ca3af;'
                  }">
                    ${cert.status === 'completed' ? '✓ Completed' : 
                      cert.status === 'in-progress' ? '⏳ In Progress' : '📅 Planned'}
                  </span>
                </div>
                <p style="font-size: 11px; font-weight: 600; color: #2563eb; margin: 0 0 3px 0; padding: 2px 6px; background: #dbeafe; border-radius: 3px; border: 1px solid #bfdbfe; display: inline-block;">${cert.issuer}</p>
                <p style="font-size: 10px; color: #666; margin: 0 0 4px 0; font-weight: 500;">${cert.date}</p>
                <p style="font-size: 10px; color: #555; margin: 0; line-height: 1.3; background: #f8fafc; padding: 6px; border-radius: 3px; border: 1px solid #f1f5f9;">${cert.description}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Featured Projects with border -->
        <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 18px; background: #f8fafc;">
          <h2 style="font-size: 18px; font-weight: bold; color: #2563eb; margin: 0 0 12px 0; border-bottom: 2px solid #2563eb; padding-bottom: 4px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">🚀</span>
            Featured Projects
          </h2>
          ${featuredProjects.map((project, index) => `
            <div style="margin-bottom: 16px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 15px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); ${index === 0 ? 'border-left: 4px solid #2563eb;' : index === 1 ? 'border-left: 4px solid #10b981;' : 'border-left: 4px solid #8b5cf6;'}">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px;">
                <h3 style="font-size: 15px; font-weight: bold; margin: 0; color: #333;">${project.title}</h3>
                <span style="padding: 3px 8px; background: #f0f9ff; color: #0369a1; border-radius: 8px; font-size: 10px; font-weight: 600; border: 1px solid #bae6fd;">
                  ${project.category}
                </span>
              </div>
              <p style="margin: 0 0 10px 0; color: #555; line-height: 1.4; font-size: 11px; background: #f8fafc; padding: 8px; border-radius: 4px; border: 1px solid #f1f5f9;">${project.description}</p>
              <div style="margin-bottom: 10px;">
                <h4 style="font-size: 12px; font-weight: bold; margin: 0 0 6px 0; color: #333; padding: 4px 0; border-bottom: 1px solid #e5e7eb;">Key Features:</h4>
                <ul style="margin: 0; padding-left: 20px; list-style: none;">
                  ${project.features?.slice(0, 3).map(feature => `
                    <li style="margin-bottom: 3px; position: relative; padding-left: 15px; font-size: 11px; line-height: 1.4; background: #f0fdf4; padding: 4px 4px 4px 18px; border-radius: 3px; border-left: 2px solid #22c55e; margin-bottom: 4px;">
                      <span style="position: absolute; left: 4px; color: #22c55e; font-weight: bold;">▶</span>
                      ${feature}
                    </li>
                  `).join('') || ''}
                </ul>
              </div>
              <div>
                <h4 style="font-size: 12px; font-weight: bold; margin: 0 0 6px 0; color: #333; padding: 4px 0; border-bottom: 1px solid #e5e7eb;">Technologies:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  ${project.technologies.map(tech => `
                    <span style="background: linear-gradient(135deg, #dbeafe, #e0f2fe); color: #1e40af; padding: 3px 6px; border-radius: 8px; font-size: 10px; font-weight: 500; border: 1px solid #bfdbfe; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">${tech}</span>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    // Add to DOM temporarily
    document.body.appendChild(resumeElement);
    
    // Generate canvas
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 714, // Adjusted width for content
      height: resumeElement.scrollHeight,
    });
    
    // Remove temporary element
    document.body.removeChild(resumeElement);
    
    // Create PDF with margins
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Calculate margins (20mm on all sides)
    const marginLeft = 20;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 20;
    const contentWidth = pdfWidth - marginLeft - marginRight;
    const contentHeight = pdfHeight - marginTop - marginBottom;
    
    const ratio = contentWidth / (imgWidth / 2); // Divide by 2 because of scale: 2
    const scaledHeight = (imgHeight / 2) * ratio;
    
    if (scaledHeight <= contentHeight) {
      // Single page - add margins
      pdf.addImage(imgData, 'PNG', marginLeft, marginTop, contentWidth, scaledHeight);
    } else {
      // Multiple pages - add margins to each page
      let remainingHeight = scaledHeight;
      let yPosition = 0;
      let pageNumber = 0;
      
      while (remainingHeight > 0) {
        const pageHeight = Math.min(remainingHeight, contentHeight);
        const cropYPosition = yPosition * (imgHeight / scaledHeight);
        const cropHeight = pageHeight * (imgHeight / scaledHeight);
        
        // Create a new canvas for this page
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = imgWidth;
        pageCanvas.height = cropHeight;
        const pageCtx = pageCanvas.getContext('2d');
        
        // Draw the cropped portion
        pageCtx.drawImage(
          canvas,
          0, cropYPosition, imgWidth, cropHeight,
          0, 0, imgWidth, cropHeight
        );
        
        if (pageNumber > 0) {
          pdf.addPage();
        }
        
        const pageImgData = pageCanvas.toDataURL('image/png');
        pdf.addImage(pageImgData, 'PNG', marginLeft, marginTop, contentWidth, pageHeight);
        
        remainingHeight -= pageHeight;
        yPosition += pageHeight;
        pageNumber++;
      }
    }
    
    // Save PDF
    pdf.save(`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};
