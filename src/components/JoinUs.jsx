import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JoinUs.css';

const JoinUs = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const roles = [
    {
      id: 'architect',
      title: 'ARCHITECT',
      subtitle: 'Core Team Members',
      description: 'Lead projects, mentor junior members, and shape the technical direction of KALI. Architects are responsible for major decision-making and project oversight.',
      requirements: [
        'Strong programming skills in Python/JavaScript',
        'Experience with AI/ML frameworks',
        'Leadership and mentoring abilities',
        'Previous project experience',
        'Good communication skills'
      ],
      responsibilities: [
        'Lead and manage project teams',
        'Mentor Neurons and Parameters',
        'Design system architecture',
        'Review code and provide guidance',
        'Represent KALI in competitions'
      ],
      commitment: 'High - 15-20 hours per week',
      benefits: [
        'Technical leadership experience',
        'Industry networking opportunities',
        'Priority access to workshops',
        'Mentorship from faculty',
        'Letter of recommendation'
      ]
    },
    {
      id: 'neuron',
      title: 'NEURON',
      subtitle: 'Active Contributors',
      description: 'The backbone of KALI, actively contributing to projects and learning advanced AI/ML concepts. Neurons work closely with Architects on various initiatives.',
      requirements: [
        'Basic programming knowledge',
        'Interest in AI/ML technologies',
        'Willingness to learn and collaborate',
        'Regular availability for meetings',
        'Academic standing in good condition'
      ],
      responsibilities: [
        'Contribute to ongoing projects',
        'Participate in workshops and seminars',
        'Collaborate with team members',
        'Learn new technologies',
        'Share knowledge with Parameters'
      ],
      commitment: 'Medium - 8-12 hours per week',
      benefits: [
        'Hands-on project experience',
        'Skill development workshops',
        'Peer learning opportunities',
        'Industry exposure',
        'Networking with seniors'
      ]
    },
    {
      id: 'parameter',
      title: 'PARAMETER',
      subtitle: 'Learning Members',
      description: 'Entry-level members beginning their AI/ML journey. Parameters focus on building foundational skills and contributing to smaller projects.',
      requirements: [
        'Basic computer science knowledge',
        'Enthusiasm for AI/ML',
        'Regular attendance at meetings',
        'Willingness to learn from scratch',
        'Commitment to improvement'
      ],
      responsibilities: [
        'Attend learning sessions',
        'Complete assigned tutorials',
        'Participate in beginner projects',
        'Support club activities',
        'Build foundational skills'
      ],
      commitment: 'Low - 5-8 hours per week',
      benefits: [
        'Structured learning path',
        'Mentorship from seniors',
        'Access to learning resources',
        'Project participation',
        'Community support'
      ]
    }
  ];

  const membershipProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Fill out the online application form with your details, interests, and preferred role.'
    },
    {
      step: 2,
      title: 'Technical Assessment',
      description: 'Complete a role-specific technical assessment to evaluate your current skill level.'
    },
    {
      step: 3,
      title: 'Interview Round',
      description: 'Participate in a brief interview with current team members to discuss your goals and fit.'
    },
    {
      step: 4,
      title: 'Onboarding',
      description: 'Join orientation sessions and get integrated into your assigned team and projects.'
    }
  ];

  const generalBenefits = [
    {
      icon: '🎓',
      title: 'Skill Development',
      description: 'Learn cutting-edge AI/ML technologies through hands-on projects and workshops.'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with like-minded peers, alumni, and industry professionals.'
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Participate in national and international AI/ML competitions and hackathons.'
    },
    {
      icon: '💼',
      title: 'Industry Exposure',
      description: 'Get insights into industry trends and job opportunities through guest lectures.'
    },
    {
      icon: '📚',
      title: 'Learning Resources',
      description: 'Access to premium courses, research papers, and learning materials.'
    },
    {
      icon: '🌟',
      title: 'Recognition',
      description: 'Gain recognition for your contributions and build a strong portfolio.'
    }
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleApplyNow = () => {
    setShowApplicationForm(true);
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
  };

  return (
    <div className="join-us-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/kali-logo.png" alt="KALI Club" className="logo" />
            <span className="logo-text">KALI</span>
          </div>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/projects" className="nav-link">PROJECTS</Link></li>
            <li><Link to="/team" className="nav-link">TEAM</Link></li>
            <li><Link to="/blogs" className="nav-link">BLOGS</Link></li>
            <li><Link to="/join-us" className="nav-link active">JOIN US</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="join-hero">
        <div className="join-hero-content">
          <h1 className="join-main-title">JOIN KALI</h1>
          <div className="section-divider"></div>
          <p className="join-subtitle">
            Become part of NIT Raipur's premier AI/ML community and shape the future of technology
          </p>
        </div>
      </section>

      {/* Membership Process */}
      <section className="membership-process">
        <div className="process-container">
          <h2 className="section-title">Membership Process</h2>
          <div className="process-steps">
            {membershipProcess.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < membershipProcess.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="available-roles">
        <div className="roles-container">
          <h2 className="section-title">Choose Your Path</h2>
          <p className="roles-subtitle">
            Select a role that matches your current skill level and career goals
          </p>
          
          <div className="roles-grid">
            {roles.map((role) => (
              <div 
                key={role.id} 
                className={`role-card ${selectedRole?.id === role.id ? 'selected' : ''}`}
                onClick={() => handleRoleSelect(role)}
              >
                <div className="role-header">
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-subtitle">{role.subtitle}</p>
                </div>
                
                <p className="role-description">{role.description}</p>
                
                <div className="role-details">
                  <div className="role-section">
                    <h4>Requirements</h4>
                    <ul>
                      {role.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="role-section">
                    <h4>Responsibilities</h4>
                    <ul>
                      {role.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="role-commitment">
                    <strong>Commitment: </strong>{role.commitment}
                  </div>
                </div>
                
                <button 
                  className="apply-role-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApplyNow();
                  }}
                >
                  Apply for {role.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="section-title">Why Join KALI?</h2>
          <div className="benefits-grid">
            {generalBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Begin Your Journey?</h2>
          <p className="cta-description">
            Join hundreds of students who have transformed their careers through KALI
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={handleApplyNow}>
              Apply Now
            </button>
            <button className="cta-btn secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="application-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Application Form</h2>
              <button className="close-btn" onClick={closeApplicationForm}>×</button>
            </div>
            
            <form className="application-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required />
              </div>
              
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" required />
              </div>
              
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" required />
              </div>
              
              <div className="form-group">
                <label>Branch & Year *</label>
                <select required>
                  <option value="">Select Branch & Year</option>
                  <option value="cse-1">CSE - 1st Year</option>
                  <option value="cse-2">CSE - 2nd Year</option>
                  <option value="cse-3">CSE - 3rd Year</option>
                  <option value="ece-1">ECE - 1st Year</option>
                  <option value="ece-2">ECE - 2nd Year</option>
                  <option value="ece-3">ECE - 3rd Year</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Preferred Role *</label>
                <select required>
                  <option value="">Select Role</option>
                  <option value="architect">Architect</option>
                  <option value="neuron">Neuron</option>
                  <option value="parameter">Parameter</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Programming Experience</label>
                <textarea placeholder="Describe your programming background and any projects you've worked on..."></textarea>
              </div>
              
              <div className="form-group">
                <label>Why do you want to join KALI?</label>
                <textarea placeholder="Tell us about your motivation and goals..."></textarea>
              </div>
              
              <div className="form-group">
                <label>Portfolio/GitHub Link</label>
                <input type="url" placeholder="https://github.com/yourusername" />
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeApplicationForm}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinUs;
