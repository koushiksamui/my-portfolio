import React from 'react';
import { Award, Calendar, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { certifications } from '../data/personalData';

const Certifications = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Calendar className="w-5 h-5 text-secondary-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-500';
      case 'in-progress':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-secondary-600 to-secondary-700';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Planned';
    }
  };

  const CertificationCard = ({ cert }) => (
    <div className="glass-card rounded-xl p-8 hover:bg-secondary-800/50 transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 bg-gradient-to-br ${getStatusColor(cert.status)} rounded-lg flex items-center justify-center`}>
            <Award className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-secondary-400 font-medium">{cert.issuer}</p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(cert.status)}
              <span className={`text-sm font-medium ${
                cert.status === 'completed' ? 'text-green-400' : 
                cert.status === 'in-progress' ? 'text-yellow-400' : 
                'text-secondary-400'
              }`}>
                {getStatusText(cert.status)}
              </span>
            </div>
          </div>
          
          <p className="text-secondary-300 mb-4 leading-relaxed">
            {cert.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-secondary-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{cert.date}</span>
            </div>
            
            {cert.credentialId && (
              <div className="flex items-center space-x-2">
                <span className="text-xs text-secondary-500">ID: {cert.credentialId}</span>
                <a
                  href="#"
                  className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Verify</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const completedCerts = certifications.filter(cert => cert.status === 'completed');
  const inProgressCerts = certifications.filter(cert => cert.status === 'in-progress');
  const plannedCerts = certifications.filter(cert => cert.status === 'planned');

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Certifications & </span>
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">{completedCerts.length}</div>
            <div className="text-secondary-400">Completed</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">{inProgressCerts.length}</div>
            <div className="text-secondary-400">In Progress</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">{plannedCerts.length}</div>
            <div className="text-secondary-400">Planned</div>
          </div>
        </div>

        {/* Certifications Sections */}
        <div className="space-y-16">
          {/* Completed Certifications */}
          {completedCerts.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Completed Certifications</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {completedCerts.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          )}

          {/* In Progress Certifications */}
          {inProgressCerts.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Currently Pursuing</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {inProgressCerts.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          )}

          {/* Planned Certifications */}
          {plannedCerts.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Planned Certifications</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {plannedCerts.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 glass-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning Philosophy</h3>
          <p className="text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            In the rapidly evolving tech landscape, I believe in continuous learning and staying updated with the latest technologies. 
            These certifications represent my commitment to maintaining expertise in cloud computing, containerization, and DevOps practices. 
            Each certification not only validates my skills but also ensures I can deliver the most current and effective solutions to real-world challenges.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want to Verify My Credentials?</h3>
          <p className="text-secondary-400 mb-8 max-w-2xl mx-auto">
            All my certifications are publicly verifiable. Click on any certificate above to view the credential details and verify authenticity.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <Award className="w-5 h-5" />
            <span>Discuss My Qualifications</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
