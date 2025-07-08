import React from 'react';
import { Building, MapPin, Calendar, Award, ChevronRight } from 'lucide-react';
import { experience, education } from '../data/personalData';

const Experience = () => {
  const ExperienceCard = ({ exp }) => (
    <div className="glass-card rounded-xl p-8 hover:bg-secondary-800/50 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <div className="flex items-center space-x-4 text-secondary-400">
                <div className="flex items-center space-x-1">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">{exp.company}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
              <Calendar className="w-4 h-4 text-secondary-400" />
              <span className="text-sm text-secondary-400">{exp.duration}</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                {exp.type}
              </span>
            </div>
          </div>
          
          <p className="text-secondary-300 mb-6 leading-relaxed">
            {exp.description}
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
            <div className="space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <div key={achIndex} className="flex items-start space-x-2">
                  <ChevronRight className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EducationCard = ({ edu }) => (
    <div className="glass-card rounded-xl p-8 hover:bg-secondary-800/50 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <div className="flex items-center space-x-1 text-secondary-400">
                <Building className="w-4 h-4" />
                <span className="text-sm">{edu.institution}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
              <Calendar className="w-4 h-4 text-secondary-400" />
              <span className="text-sm text-secondary-400">{edu.duration}</span>
            </div>
          </div>
          
          <p className="text-secondary-300 mb-6 leading-relaxed">
            {edu.description}
          </p>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Highlights</h4>
            <div className="space-y-2">
              {edu.achievements.map((achievement, achIndex) => (
                <div key={achIndex} className="flex items-start space-x-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Experience & </span>
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          
          <div className="space-y-8">
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-600 to-purple-600"></div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Career Timeline</h3>
            <div className="space-y-8">
              {[
                { year: '2021', event: 'Started B.Tech in Information Technology', color: 'from-emerald-600 to-teal-600' },
                { year: '2024', event: 'Graduated with B.Tech degree', color: 'from-emerald-600 to-teal-600' },
                { year: '2024', event: 'Joined Precise Medication Research as Full-Stack DevOps Developer', color: 'from-primary-600 to-purple-600' },
                { year: '2025', event: 'Continuing to innovate and build scalable solutions', color: 'from-primary-600 to-purple-600' }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full border-4 border-secondary-900`}></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                      <div className="glass-card rounded-lg p-4 inline-block">
                        <div className="text-2xl font-bold gradient-text mb-1">{item.year}</div>
                        <div className="text-secondary-300 text-sm">{item.event}</div>
                      </div>
                    </div>
                    <div className={`${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
