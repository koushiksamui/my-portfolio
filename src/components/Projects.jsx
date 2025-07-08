import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Filter, Eye, Code } from 'lucide-react';
import { projects, projectCategories } from '../data/projectsData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().replace('-', '-') === selectedCategory);

  const ProjectCard = ({ project }) => (
    <div className="glass-card rounded-xl p-6 hover:bg-secondary-800/50 transition-all duration-300 group">
      <div className="relative mb-4">
        <div className="w-full h-48 bg-gradient-to-br from-primary-600/20 to-purple-600/20 rounded-lg flex items-center justify-center overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full flex items-center justify-center text-6xl gradient-text hidden">
            <Code />
          </div>
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center space-x-1 text-secondary-400">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{project.date}</span>
        </div>
      </div>

      <p className="text-secondary-300 mb-4 line-clamp-3 leading-relaxed">
        {project.description}
      </p>

      <div className="flex items-center space-x-2 mb-4">
        <Tag className="w-4 h-4 text-secondary-400" />
        <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs">
          {project.category}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span key={index} className="tech-badge text-xs">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="tech-badge text-xs">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSelectedProject(project)}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 flex-1"
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </button>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary-800 text-secondary-300 rounded-lg hover:bg-secondary-700 hover:text-white transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary-800 text-secondary-300 rounded-lg hover:bg-secondary-700 hover:text-white transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-secondary-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors"
          >
            <span className="text-white text-xl">×</span>
          </button>

          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-secondary-400 text-lg">{project.longDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span className="text-secondary-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Challenges & Solutions</h4>
              <ul className="space-y-2 mb-6">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-secondary-300">{challenge}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-secondary-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
            A showcase of my work spanning full-stack development, DevOps, and cloud solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2 bg-secondary-800 rounded-lg p-1">
            <Filter className="w-4 h-4 text-secondary-400 mx-2" />
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:text-white hover:bg-secondary-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl text-secondary-600 mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-secondary-400">Try selecting a different category</p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
