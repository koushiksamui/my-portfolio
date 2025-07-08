import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { personalInfo, aboutMe, experience, education, techStack, certifications } from '../data/personalData';
import { projects } from '../data/projectsData';

export const generateModernResumePDF = async () => {
  try {
    // Validate required data
    if (!personalInfo.name || !personalInfo.email) {
      throw new Error('Missing required personal information');
    }

    // Get featured projects (top 3)
    const featuredProjects = projects.slice(0, 3);
    
    // Create a temporary div to render the resume with proper A4 dimensions
    const resumeElement = document.createElement('div');
    resumeElement.style.position = 'absolute';
    resumeElement.style.left = '-9999px';
    resumeElement.style.top = '-9999px';
    resumeElement.style.width = '210mm'; // A4 width
    resumeElement.style.height = '297mm'; // A4 height
    resumeElement.style.backgroundColor = '#ffffff';
    resumeElement.style.fontFamily = '"Segoe UI", "Roboto", "Open Sans", "Helvetica Neue", Arial, sans-serif';
    resumeElement.style.fontSize = '12px';
    resumeElement.style.lineHeight = '1.4';
    resumeElement.style.color = '#2d3748';
    resumeElement.style.padding = '0';
    resumeElement.style.margin = '0';
    resumeElement.style.boxSizing = 'border-box';
    resumeElement.style.overflow = 'hidden';
    
    // Generate modern resume HTML content with proper A4 layout and centering
    resumeElement.innerHTML = `
      <div style="width: 210mm; height: 297mm; background: white; position: relative; padding: 12mm; box-sizing: border-box; margin: 0 auto; display: flex;">
        <!-- Left Sidebar -->
        <div style="width: 65mm; height: 100%; background: linear-gradient(180deg, #1a202c 0%, #2d3748 100%); color: white; border-radius: 6px; overflow: hidden; margin-right: 6mm; flex-shrink: 0;">
          <!-- Profile Section -->
          <div style="padding: 15px 12px 12px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4299e1, #667eea); border-radius: 50%; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: white; border: 2px solid rgba(255,255,255,0.2);">
              ${personalInfo.name.charAt(0)}
            </div>
            <h1 style="font-size: 12px; font-weight: 700; margin: 0 0 3px 0; line-height: 1.2;">${personalInfo.name}</h1>
            <p style="font-size: 9px; font-weight: 500; margin: 0 0 6px 0; color: #90cdf4;">${personalInfo.role}</p>
            <div style="background: rgba(255,255,255,0.1); padding: 5px; border-radius: 3px; font-size: 7px; line-height: 1.2;">
              ${personalInfo.tagline}
            </div>
          </div>

          <!-- Contact Information -->
          <div style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <h3 style="font-size: 9px; font-weight: 600; margin: 0 0 8px 0; color: #90cdf4; text-transform: uppercase; letter-spacing: 0.5px;">Contact</h3>
            <div>
              <div style="display: flex; align-items: flex-start; margin-bottom: 6px; font-size: 7px; line-height: 1.2;">
                <div style="width: 12px; height: 12px; background: #4299e1; border-radius: 2px; display: flex; align-items: center; justify-content: center; margin-right: 6px; flex-shrink: 0; margin-top: 1px; font-size: 7px;">📧</div>
                <span style="word-break: break-all; flex: 1;">${personalInfo.email}</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 6px; font-size: 7px;">
                <div style="width: 12px; height: 12px; background: #4299e1; border-radius: 2px; display: flex; align-items: center; justify-content: center; margin-right: 6px; flex-shrink: 0; font-size: 7px;">📞</div>
                <span>${personalInfo.phone}</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 6px; font-size: 7px;">
                <div style="width: 12px; height: 12px; background: #4299e1; border-radius: 2px; display: flex; align-items: center; justify-content: center; margin-right: 6px; flex-shrink: 0; font-size: 7px;">📍</div>
                <span>${personalInfo.location}</span>
              </div>
              <div style="display: flex; align-items: flex-start; margin-bottom: 3px; font-size: 7px; line-height: 1.2;">
                <div style="width: 12px; height: 12px; background: #4299e1; border-radius: 2px; display: flex; align-items: center; justify-content: center; margin-right: 6px; flex-shrink: 0; margin-top: 1px; font-size: 7px;">🌐</div>
                <span style="word-break: break-all; flex: 1;">${personalInfo.website}</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <h3 style="font-size: 9px; font-weight: 600; margin: 0 0 8px 0; color: #90cdf4; text-transform: uppercase; letter-spacing: 0.5px;">Social</h3>
            <div>
              <div style="display: flex; align-items: flex-start; margin-bottom: 6px; font-size: 7px; line-height: 1.2;">
                <div style="width: 12px; height: 12px; background: #4299e1; border-radius: 2px; display: flex; align-items: center; justify-content: center; margin-right: 6px; flex-shrink: 0; margin-top: 1px; font-size: 7px;">🔗</div>
                <span style="word-break: break-all; flex: 1;">${personalInfo.github.replace('https://', '').replace('http://', '')}</span>
              </div>
              <div style="display: flex; align-items: flex-start; margin-bottom: 3px; font-size: 7px; line-height: 1.2;">
                <div style="width: 12px; height: 12px; background: #4299e1; border-radius: 2px; display: flex; align-items: center; justify-content: center; margin-right: 6px; flex-shrink: 0; margin-top: 1px; font-size: 7px;">💼</div>
                <span style="word-break: break-all; flex: 1;">${personalInfo.linkedin.replace('https://', '').replace('http://', '')}</span>
              </div>
            </div>
          </div>

          <!-- Skills Section -->
          <div style="padding: 12px;">
            <h3 style="font-size: 9px; font-weight: 600; margin: 0 0 8px 0; color: #90cdf4; text-transform: uppercase; letter-spacing: 0.5px;">Skills</h3>
            
            <!-- Frontend Skills -->
            <div style="margin-bottom: 8px;">
              <h4 style="font-size: 8px; font-weight: 600; margin: 0 0 6px 0; color: #e2e8f0;">Frontend & Mobile</h4>
              ${techStack.frontend.slice(0, 3).map(skill => `
                <div style="margin-bottom: 6px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                    <span style="font-size: 7px; font-weight: 500;">${skill.name}</span>
                    <span style="font-size: 6px; color: #90cdf4;">${skill.level}%</span>
                  </div>
                  <div style="width: 100%; height: 3px; background: rgba(255,255,255,0.2); border-radius: 2px; overflow: hidden;">
                    <div style="height: 100%; background: linear-gradient(90deg, #4299e1, #667eea); width: ${skill.level}%; border-radius: 2px;"></div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Backend Skills -->
            <div style="margin-bottom: 0;">
              <h4 style="font-size: 8px; font-weight: 600; margin: 0 0 6px 0; color: #e2e8f0;">Backend & DevOps</h4>
              ${[...techStack.backend.slice(0, 2), ...techStack.devops.slice(0, 2)].map(skill => `
                <div style="margin-bottom: 6px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                    <span style="font-size: 7px; font-weight: 500;">${skill.name}</span>
                    <span style="font-size: 6px; color: #90cdf4;">${skill.level}%</span>
                  </div>
                  <div style="width: 100%; height: 3px; background: rgba(255,255,255,0.2); border-radius: 2px; overflow: hidden;">
                    <div style="height: 100%; background: linear-gradient(90deg, #38b2ac, #4fd1c7); width: ${skill.level}%; border-radius: 2px;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Main Content Area -->
        <div style="flex: 1; height: 100%; overflow: hidden;">
          
          <!-- Professional Summary -->
          <section style="margin-bottom: 15px;">
            <h2 style="font-size: 12px; font-weight: 700; color: #2d3748; margin: 0 0 3px 0;">
              <span style="background: linear-gradient(90deg, #4299e1, #667eea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Professional Summary</span>
              <div style="width: 30px; height: 2px; background: linear-gradient(90deg, #4299e1, #667eea); margin-top: 2px; border-radius: 1px;"></div>
            </h2>
            <p style="font-size: 8px; line-height: 1.4; color: #4a5568; margin: 8px 0; text-align: justify;">${aboutMe.intro}</p>
            <div style="margin-top: 6px;">
              ${aboutMe.highlights.slice(0, 4).map(highlight => `
                <div style="display: flex; align-items: flex-start; margin-bottom: 3px;">
                  <div style="width: 2px; height: 2px; background: #4299e1; border-radius: 50%; margin: 3px 4px 0 0; flex-shrink: 0;"></div>
                  <span style="font-size: 7px; line-height: 1.3; color: #4a5568;">${highlight}</span>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Professional Experience -->
          <section style="margin-bottom: 15px;">
            <h2 style="font-size: 12px; font-weight: 700; color: #2d3748; margin: 0 0 3px 0;">
              <span style="background: linear-gradient(90deg, #4299e1, #667eea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Professional Experience</span>
              <div style="width: 30px; height: 2px; background: linear-gradient(90deg, #4299e1, #667eea); margin-top: 2px; border-radius: 1px;"></div>
            </h2>
            ${experience.slice(0, 1).map(job => `
              <div style="margin: 8px 0; padding: 8px; background: #f7fafc; border-left: 2px solid #4299e1; border-radius: 0 3px 3px 0;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
                  <div style="flex: 1;">
                    <h3 style="font-size: 10px; font-weight: 600; color: #2d3748; margin: 0 0 1px 0;">${job.role}</h3>
                    <p style="font-size: 8px; font-weight: 500; color: #4299e1; margin: 0 0 1px 0;">${job.company}</p>
                    <p style="font-size: 7px; color: #718096; margin: 0;">${job.location}</p>
                  </div>
                  <div style="background: #4299e1; color: white; padding: 1px 4px; border-radius: 6px; font-size: 6px; font-weight: 500;">
                    ${job.duration}
                  </div>
                </div>
                <p style="font-size: 7px; line-height: 1.3; color: #4a5568; margin: 4px 0 6px 0;">${job.description}</p>
                
                <div style="margin-bottom: 6px;">
                  <h4 style="font-size: 8px; font-weight: 600; color: #2d3748; margin: 0 0 3px 0;">Key Achievements:</h4>
                  ${job.achievements.slice(0, 2).map(achievement => `
                    <div style="display: flex; align-items: flex-start; margin-bottom: 2px;">
                      <span style="color: #38a169; font-weight: bold; margin-right: 3px; margin-top: 1px; font-size: 7px;">✓</span>
                      <span style="font-size: 7px; line-height: 1.3; color: #4a5568;">${achievement}</span>
                    </div>
                  `).join('')}
                </div>

                <div>
                  <h4 style="font-size: 8px; font-weight: 600; color: #2d3748; margin: 0 0 3px 0;">Technologies:</h4>
                  <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                    ${job.technologies.slice(0, 6).map(tech => `
                      <span style="background: white; color: #4299e1; padding: 1px 3px; border-radius: 4px; font-size: 5px; font-weight: 500; border: 1px solid #bee3f8;">${tech}</span>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </section>

          <!-- Education -->
          <section style="margin-bottom: 12px;">
            <h2 style="font-size: 12px; font-weight: 700; color: #2d3748; margin: 0 0 3px 0;">
              <span style="background: linear-gradient(90deg, #4299e1, #667eea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Education</span>
              <div style="width: 30px; height: 2px; background: linear-gradient(90deg, #4299e1, #667eea); margin-top: 2px; border-radius: 1px;"></div>
            </h2>
            ${education.slice(0, 1).map(edu => `
              <div style="margin: 6px 0; padding: 8px; background: #f7fafc; border-left: 2px solid #667eea; border-radius: 0 3px 3px 0;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3px;">
                  <div>
                    <h3 style="font-size: 9px; font-weight: 600; color: #2d3748; margin: 0 0 1px 0;">${edu.degree}</h3>
                    <p style="font-size: 8px; font-weight: 500; color: #667eea; margin: 0;">${edu.institution}</p>
                  </div>
                  <div style="background: #667eea; color: white; padding: 1px 3px; border-radius: 4px; font-size: 5px; font-weight: 500;">
                    ${edu.duration}
                  </div>
                </div>
                <p style="font-size: 7px; line-height: 1.3; color: #4a5568; margin: 3px 0;">${edu.description}</p>
              </div>
            `).join('')}
          </section>

          <!-- Featured Projects -->
          <section style="margin-bottom: 12px;">
            <h2 style="font-size: 12px; font-weight: 700; color: #2d3748; margin: 0 0 3px 0;">
              <span style="background: linear-gradient(90deg, #4299e1, #667eea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Featured Projects</span>
              <div style="width: 30px; height: 2px; background: linear-gradient(90deg, #4299e1, #667eea); margin-top: 2px; border-radius: 1px;"></div>
            </h2>
            ${featuredProjects.slice(0, 2).map((project, index) => `
              <div style="margin: 6px 0; padding: 8px; background: #f7fafc; border-left: 2px solid ${index === 0 ? '#38a169' : '#ed8936'}; border-radius: 0 3px 3px 0;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3px;">
                  <h3 style="font-size: 9px; font-weight: 600; color: #2d3748; margin: 0;">${project.title}</h3>
                  <span style="background: ${index === 0 ? '#38a169' : '#ed8936'}; color: white; padding: 1px 3px; border-radius: 4px; font-size: 5px; font-weight: 500;">
                    ${project.category}
                  </span>
                </div>
                <p style="font-size: 7px; line-height: 1.3; color: #4a5568; margin: 3px 0 4px 0;">${project.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                  ${project.technologies.slice(0, 5).map(tech => `
                    <span style="background: white; color: ${index === 0 ? '#38a169' : '#ed8936'}; padding: 1px 2px; border-radius: 3px; font-size: 5px; font-weight: 500; border: 1px solid ${index === 0 ? '#c6f6d5' : '#fbd38d'};">${tech}</span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </section>

          <!-- Certifications -->
          <section style="margin-bottom: 8px;">
            <h2 style="font-size: 12px; font-weight: 700; color: #2d3748; margin: 0 0 3px 0;">
              <span style="background: linear-gradient(90deg, #4299e1, #667eea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Certifications</span>
              <div style="width: 30px; height: 2px; background: linear-gradient(90deg, #4299e1, #667eea); margin-top: 2px; border-radius: 1px;"></div>
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-top: 6px;">
              ${certifications.slice(0, 4).map(cert => `
                <div style="padding: 6px; background: #f7fafc; border-radius: 3px; border: 1px solid #e2e8f0;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px;">
                    <h4 style="font-size: 7px; font-weight: 600; color: #2d3748; margin: 0; flex: 1; line-height: 1.2;">${cert.name}</h4>
                    <span style="padding: 1px 2px; border-radius: 3px; font-size: 5px; font-weight: 600; margin-left: 2px; ${
                      cert.status === 'completed' ? 'background: #c6f6d5; color: #22543d;' :
                      cert.status === 'in-progress' ? 'background: #fbd38d; color: #744210;' :
                      'background: #e2e8f0; color: #4a5568;'
                    }">
                      ${cert.status === 'completed' ? 'Done' : 
                        cert.status === 'in-progress' ? 'WIP' : 'Plan'}
                    </span>
                  </div>
                  <p style="font-size: 6px; color: #4299e1; margin: 0 0 1px 0; font-weight: 500;">${cert.issuer}</p>
                  <p style="font-size: 5px; color: #718096; margin: 0;">${cert.date}</p>
                </div>
              `).join('')}
            </div>
          </section>
            </div>
          </section>

        </div>
      </div>
    `;
    
    // Add to DOM temporarily
    document.body.appendChild(resumeElement);
    
    // Generate canvas with optimized settings for A4
    const canvas = await html2canvas(resumeElement, {
      scale: 2, // Reduced scale for better performance while maintaining quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: resumeElement.offsetWidth,
      height: resumeElement.offsetHeight,
      logging: false,
      scrollX: 0,
      scrollY: 0,
    });
    
    // Remove temporary element
    document.body.removeChild(resumeElement);
    
    // Create PDF with A4 dimensions
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });
    
    // A4 dimensions in mm
    const pdfWidth = 210;
    const pdfHeight = 297;
    
    // Calculate scaling to fit A4 exactly
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / (imgWidth / 2), pdfHeight / (imgHeight / 2)); // Divide by 2 due to scale
    
    const scaledWidth = (imgWidth / 2) * ratio;
    const scaledHeight = (imgHeight / 2) * ratio;
    
    // Center the content on the page
    const offsetX = (pdfWidth - scaledWidth) / 2;
    const offsetY = (pdfHeight - scaledHeight) / 2;
    
    // Add image to PDF centered
    pdf.addImage(imgData, 'PNG', offsetX, offsetY, scaledWidth, scaledHeight);
    
    // Save PDF
    pdf.save(`${personalInfo.name.replace(/\s+/g, '_')}_Modern_Resume.pdf`);
    
    return true;
  } catch (error) {
    console.error('Error generating modern PDF:', error);
    return false;
  }
};
