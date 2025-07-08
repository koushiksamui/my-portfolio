import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import { personalInfo } from '../data/personalData';
import { generateModernResumePDF } from '../utils/modernResumeGenerator';

const Hero = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadResume = async () => {
    try {
      setIsGeneratingPDF(true);
      toast.loading('Generating your resume PDF...', { id: 'resume-generation' });
      
      const success = await generateModernResumePDF();
      
      if (success) {
        toast.success('Resume PDF generated and downloaded successfully!', { id: 'resume-generation' });
      } else {
        toast.error('Failed to generate resume PDF. Please try again.', { id: 'resume-generation' });
      }
    } catch (error) {
      console.error('Error generating resume:', error);
      toast.error('An error occurred while generating the resume. Please try again.', { id: 'resume-generation' });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-secondary-900 flex items-center justify-center">
                  <img 
                    src={personalInfo.avatar} 
                    alt={personalInfo.name}
                    className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold hidden">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-secondary-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-300 mb-6">
            {personalInfo.role}
          </h2>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin size={20} className="text-primary-400" />
            <span className="text-secondary-400">{personalInfo.location}</span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-secondary-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Availability Status */}
          <div className="mb-12 p-4 bg-secondary-800/50 rounded-lg border border-secondary-700 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Available for Work</span>
            </div>
            <p className="text-secondary-300 text-sm">
              {personalInfo.availability}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={handleDownloadResume}
              disabled={isGeneratingPDF}
              className={`flex items-center space-x-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 shadow-lg ${
                isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isGeneratingPDF ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-medium">Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download size={20} />
                  <span className="font-medium">Download Resume</span>
                </>
              )}
            </button>
            <button
              onClick={handleScrollToContact}
              className="flex items-center space-x-2 px-8 py-4 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Mail size={20} />
              <span className="font-medium">Let's Work Together</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors duration-200 hover:scale-110"
            >
              <Github size={24} className="text-secondary-300 hover:text-white" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors duration-200 hover:scale-110"
            >
              <Linkedin size={24} className="text-secondary-300 hover:text-white" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors duration-200 hover:scale-110"
            >
              <Mail size={24} className="text-secondary-300 hover:text-white" />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={handleScrollToAbout}
              className="p-2 text-secondary-400 hover:text-white transition-colors duration-200"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
