import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalData';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: personalInfo.github,
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-secondary-400 text-sm">{personalInfo.role}</p>
              </div>
            </div>
            <p className="text-secondary-300 leading-relaxed mb-6 max-w-md">
              Passionate about building scalable systems and delivering exceptional user experiences. 
              Always ready to tackle new challenges and contribute to innovative projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary-400" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-green-400 text-sm">Available for Work</span>
              </div>
              <div className="text-secondary-400 text-sm">
                {personalInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-400 text-sm">
              <span>© 2025 {personalInfo.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-4 text-secondary-400 text-sm">
              <span className="flex items-center space-x-1">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>using React.js & Tailwind CSS</span>
              </span>
              <a
                href="https://github.com/koushik-samui/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-primary-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Source</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl z-40"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
