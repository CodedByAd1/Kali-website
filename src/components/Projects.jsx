import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/kali-logo.png" alt="KALI Club" className="logo" />
            <span className="logo-text">KALI</span>
          </div>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/projects" className="nav-link active">PROJECTS</Link></li>
            <li><Link to="/team" className="nav-link">TEAM</Link></li>
            <li><Link to="/blogs" className="nav-link">BLOGS</Link></li>
            <li><Link to="/join-us" className="nav-link">JOIN US</Link></li>
          </ul>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h1 className="projects-main-title">Our Projects</h1>
            <div className="section-divider"></div>
            <p className="projects-subtitle">
              Innovative AI/ML solutions developed by our talented team members
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            
            {/* Sample Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/project-placeholder.jpg" alt="AI Vision System" className="project-img" />
                <div className="project-overlay">
                  <div className="project-status">In Progress</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">AI Vision System</h3>
                <p className="project-description">
                  Advanced computer vision system for real-time object detection and classification using deep learning models. 
                  Implements state-of-the-art YOLO architecture with custom dataset training.
                </p>
                
                <div className="project-tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">OpenCV</span>
                  <span className="tech-tag">YOLO</span>
                </div>
                
                <div className="project-members">
                  <h4 className="members-title">Team Members</h4>
                  <div className="members-list">
                    <div className="member-avatar-small">
                      <span>CG</span>
                    </div>
                    <div className="member-avatar-small">
                      <span>SS</span>
                    </div>
                    <div className="member-avatar-small">
                      <span>BK</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-links">
                  <a href="#" className="project-link github-link">
                    <span>🔗 GitHub</span>
                  </a>
                  <a href="#" className="project-link demo-link">
                    <span>🚀 Live Demo</span>
                  </a>
                  <a href="#" className="project-link docs-link">
                    <span>📄 Documentation</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sample Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/project-placeholder.jpg" alt="NLP Chatbot" className="project-img" />
                <div className="project-overlay">
                  <div className="project-status completed">Completed</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">Intelligent Chatbot</h3>
                <p className="project-description">
                  Natural Language Processing chatbot with contextual understanding and multi-domain knowledge. 
                  Features sentiment analysis and personalized response generation.
                </p>
                
                <div className="project-tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">NLTK</span>
                  <span className="tech-tag">Transformers</span>
                  <span className="tech-tag">Flask</span>
                </div>
                
                <div className="project-members">
                  <h4 className="members-title">Team Members</h4>
                  <div className="members-list">
                    <div className="member-avatar-small">
                      <span>SR</span>
                    </div>
                    <div className="member-avatar-small">
                      <span>RS</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-links">
                  <a href="#" className="project-link github-link">
                    <span>🔗 GitHub</span>
                  </a>
                  <a href="#" className="project-link demo-link">
                    <span>🚀 Live Demo</span>
                  </a>
                  <a href="#" className="project-link paper-link">
                    <span>📑 Research Paper</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sample Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/project-placeholder.jpg" alt="ML Analytics Platform" className="project-img" />
                <div className="project-overlay">
                  <div className="project-status planning">Planning</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">ML Analytics Platform</h3>
                <p className="project-description">
                  Comprehensive machine learning analytics platform for data visualization, model training, 
                  and performance monitoring with interactive dashboards.
                </p>
                
                <div className="project-tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Scikit-learn</span>
                </div>
                
                <div className="project-members">
                  <h4 className="members-title">Team Members</h4>
                  <div className="members-list">
                    <div className="member-avatar-small">
                      <span>AS</span>
                    </div>
                    <div className="member-avatar-small">
                      <span>CG</span>
                    </div>
                    <div className="member-avatar-small">
                      <span>SR</span>
                    </div>
                    <div className="member-avatar-small">
                      <span>BK</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-links">
                  <a href="#" className="project-link github-link">
                    <span>🔗 GitHub</span>
                  </a>
                  <a href="#" className="project-link proposal-link">
                    <span>📋 Proposal</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Add New Project Card */}
            <div className="project-card add-project-card">
              <div className="add-project-content">
                <div className="add-project-icon">➕</div>
                <h3 className="add-project-title">Add New Project</h3>
                <p className="add-project-description">
                  Have an innovative AI/ML project idea? Submit your project proposal and showcase your work!
                </p>
                <button className="add-project-btn">
                  <span>Submit Project</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
