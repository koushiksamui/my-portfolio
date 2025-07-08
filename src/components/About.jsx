import React from 'react';
import { Code, Database, Cloud, Wrench, CheckCircle } from 'lucide-react';
import { aboutMe, techStack } from '../data/personalData';

const About = () => {
  const skillCategories = [
    { 
      name: 'Frontend', 
      icon: <Code className="w-6 h-6" />, 
      skills: techStack.frontend,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Backend', 
      icon: <Database className="w-6 h-6" />, 
      skills: techStack.backend,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'DevOps & Cloud', 
      icon: <Cloud className="w-6 h-6" />, 
      skills: techStack.devops,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Tools', 
      icon: <Wrench className="w-6 h-6" />, 
      skills: techStack.tools,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-secondary-300">{skill.name}</span>
        <span className="text-xs text-secondary-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-secondary-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
            Get to know more about my journey, expertise, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <p className="text-secondary-300 leading-relaxed mb-6">
                {aboutMe.intro}
              </p>
              
              <div className="space-y-3">
                {aboutMe.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-secondary-400 text-sm">Years Experience</div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-secondary-400 text-sm">Projects Completed</div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-secondary-400 text-sm">Technologies</div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-secondary-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{category.name}</h4>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ...techStack.frontend,
              ...techStack.backend,
              ...techStack.devops,
              ...techStack.tools
            ].map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
