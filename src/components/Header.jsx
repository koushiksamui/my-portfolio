import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { generateModernResumePDF } from '../utils/modernResumeGenerator';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = async () => {
    try {
      setIsGeneratingPDF(true);
      toast.loading('Generating your resume PDF...', { id: 'resume-generation-header' });
      
      const success = await generateModernResumePDF();
      
      if (success) {
        toast.success('Resume PDF generated and downloaded successfully!', { id: 'resume-generation-header' });
      } else {
        toast.error('Failed to generate resume PDF. Please try again.', { id: 'resume-generation-header' });
      }
    } catch (error) {
      console.error('Error generating resume:', error);
      toast.error('An error occurred while generating the resume. Please try again.', { id: 'resume-generation-header' });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              KS
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-secondary-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleDownloadResume}
              disabled={isGeneratingPDF}
              className={`flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 ${
                isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isGeneratingPDF ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Resume</span>
                </>
              )}
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="flex items-center space-x-2 px-4 py-2 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-secondary-300 hover:text-white hover:bg-secondary-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-3 py-2 text-secondary-300 hover:text-white hover:bg-secondary-800 rounded-md transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <button
                onClick={handleDownloadResume}
                disabled={isGeneratingPDF}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 ${
                  isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isGeneratingPDF ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    <span>Download Resume</span>
                  </>
                )}
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
