import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { personalInfo, aboutMe, experience, education, techStack, certifications } from '../data/personalData';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Download } from 'lucide-react';

const Resume = () => {
  const resumeRef = useRef(null);

  const generatePDF = async () => {
    try {
      const element = resumeRef.current;
      if (!element) return;

      // Show loading state
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

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
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <div className="text-center mb-8">
          <button
            onClick={generatePDF}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume PDF
          </button>
        </div>

        {/* Resume Container */}
        <div
          ref={resumeRef}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
              <p className="text-xl mb-4">{personalInfo.role}</p>
              <p className="text-lg opacity-90">{personalInfo.tagline}</p>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{personalInfo.website}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Github className="w-4 h-4" />
                <span>{personalInfo.github}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Linkedin className="w-4 h-4" />
                <span>{personalInfo.linkedin}</span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{aboutMe.intro}</p>
              <ul className="space-y-2">
                {aboutMe.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-700 flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
                Professional Experience
              </h2>
              {experience.map((job) => (
                <div key={job.id} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
                      <p className="text-lg text-primary-600 font-medium">{job.company}</p>
                      <p className="text-gray-600">{job.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 font-medium">{job.duration}</p>
                      <p className="text-gray-500 text-sm">{job.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{job.description}</p>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-700 flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-lg text-primary-600 font-medium">{edu.institution}</p>
                    </div>
                    <p className="text-gray-600 font-medium">{edu.duration}</p>
                  </div>
                  <p className="text-gray-700 mb-2">{edu.description}</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700 flex items-start gap-2">
                        <span className="text-primary-600 font-bold">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend & Mobile</h3>
                  <div className="space-y-2">
                    {techStack.frontend.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend & Database</h3>
                  <div className="space-y-2">
                    {techStack.backend.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DevOps Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">DevOps & Cloud</h3>
                  <div className="space-y-2">
                    {techStack.devops.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Tools & Platforms</h3>
                  <div className="space-y-2">
                    {techStack.tools.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cert.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : cert.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {cert.status === 'completed' ? 'Completed' : 
                         cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm mb-2">{cert.date}</p>
                    <p className="text-gray-700 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
