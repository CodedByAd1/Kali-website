import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Projects.css';
import ProjectForm from './ProjectForm';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setProjects([]);
        setLoading(false);
      });
  }, []);

  const handleAddProject = () => setShowForm(true);

  if (loading) {
    return (
      <div className="projects-page">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: 'white' }}>
          Loading projects...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: 'red' }}>
          Error loading projects: {error}
        </div>
      </div>
    );
  }

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
            {projects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.name} className="project-img" />
                  <div className="project-overlay">
                    <div className={`project-status${project.status === 'Completed' ? ' completed' : project.status === 'Planning' ? ' planning' : ''}`}>{project.status}</div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.techStack?.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-members">
                    <h4 className="members-title">Team Members</h4>
                    <div className="members-list">
                      {project.members?.map((member, idx) => (
                        <div className="member-avatar-small" key={idx}>
                          <span>{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="project-links">
                    {project.links?.github && (
                      <a href={project.links.github} className="project-link github-link"><span>� GitHub</span></a>
                    )}
                    {project.links?.demo && (
                      <a href={project.links.demo} className="project-link demo-link"><span>🚀 Live Demo</span></a>
                    )}
                    {project.links?.docs && (
                      <a href={project.links.docs} className="project-link docs-link"><span>📄 Documentation</span></a>
                    )}
                    {project.links?.paper && (
                      <a href={project.links.paper} className="project-link paper-link"><span>📑 Research Paper</span></a>
                    )}
                    {project.links?.proposal && (
                      <a href={project.links.proposal} className="project-link proposal-link"><span>📋 Proposal</span></a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* Add New Project Card */}
            <div className="project-card add-project-card">
              <div className="add-project-content">
                <div className="add-project-icon">➕</div>
                <h3 className="add-project-title">Add New Project</h3>
                <p className="add-project-description">
                  Have an innovative AI/ML project idea? Submit your project proposal and showcase your work!
                </p>
                <button className="add-project-btn" onClick={handleAddProject}>
                  <span>Submit Project</span>
                </button>
                {showForm && (
                  <ProjectForm
                    onSubmit={async (payload) => {
                      await axios.post('/api/projects', payload);
                      setShowForm(false);
                      const res = await axios.get('/api/projects');
                      setProjects(res.data);
                    }}
                    onCancel={() => setShowForm(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
