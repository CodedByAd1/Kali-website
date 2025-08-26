import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Team.css';
import TeamForm from './TeamForm';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [showTeamForm, setShowTeamForm] = useState(false);

  useEffect(() => {
    axios.get('/api/team')
      .then(res => setTeam(res.data))
      .catch(() => setTeam([]));
  }, []);

  const handleAddTeam = () => setShowTeamForm(true);

  // Group team members by role for display
  const chief = team.find(m => m.role && m.role.includes('Chief'));
  const architects = team.filter(m => m.role && m.role.includes('Architect'));
  const neurons = team.filter(m => m.role && m.role.includes('Neuron'));
  const parameters = team.filter(m => m.role && m.role.includes('Parameter'));

  return (
    <div className="team-page">
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
            <li><Link to="/team" className="nav-link active">TEAM</Link></li>
            <li><Link to="/blogs" className="nav-link">BLOGS</Link></li>
            <li><Link to="/join-us" className="nav-link">JOIN US</Link></li>
          </ul>
        </div>
      </nav>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <button onClick={handleAddTeam} className="add-team-btn" style={{marginBottom:'20px',padding:'10px 20px',background:'#007bff',color:'#fff',border:'none',borderRadius:'4px'}}>Add Team Member</button>
          <div className="section-header">
            <h1 className="team-main-title">Our Team</h1>
            <div className="section-divider"></div>
            <p className="team-subtitle">
              Meet the brilliant minds driving innovation in AI and Machine Learning
            </p>
          </div>

          {/* Chief Optimizer - Center Top */}
          {chief && (
            <div className="chief-optimizer-section">
              <div className="chief-card">
                <div className="member-avatar chief-avatar">
                  <div className="avatar-placeholder">{chief.avatar}</div>
                </div>
                <h2 className="member-name chief-name">{chief.name}</h2>
                <h3 className="member-role chief-role">{chief.role}</h3>
                <p className="member-details">{chief.details}</p>
                <div className="member-description">{chief.description}</div>
              </div>
            </div>
          )}

          {/* Architects */}
          <div className="architects-section">
            <h3 className="section-title">Architects</h3>
            <div className="architects-grid">
              {architects.map((member, idx) => (
                <div className="member-card architect-card" key={idx}>
                  <div className="member-avatar">
                    <div className="avatar-placeholder">{member.avatar}</div>
                  </div>
                  <h4 className="member-name">{member.name}</h4>
                  <h5 className="member-role">{member.role}</h5>
                  <p className="member-details">{member.details}</p>
                  <div className="member-description">{member.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Neurons */}
          <div className="neurons-section">
            <h3 className="section-title">Neurons</h3>
            <div className="neurons-grid">
              {neurons.map((member, idx) => (
                <div className="member-card neuron-card" key={idx}>
                  <div className="member-avatar neuron-avatar">
                    <div className="avatar-placeholder">{member.avatar}</div>
                  </div>
                  <h4 className="member-name">{member.name}</h4>
                  <h5 className="member-role">{member.role}</h5>
                  <div className="member-description">{member.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Parameters Section - Placeholder for future members */}
          <div className="parameters-section">
            <h3 className="section-title">Parameters</h3>
            <div className="parameters-grid">
              {parameters.length > 0 ? parameters.map((member, idx) => (
                <div className="member-card parameter-card" key={idx}>
                  <div className="member-avatar parameter-avatar">
                    <div className="avatar-placeholder">{member.avatar}</div>
                  </div>
                  <h4 className="member-name">{member.name}</h4>
                  <h5 className="member-role">{member.role}</h5>
                  <div className="member-description">{member.description}</div>
                </div>
              )) : (
                <div className="member-card parameter-card">
                  <div className="member-avatar parameter-avatar">
                    <div className="avatar-placeholder">+</div>
                  </div>
                  <h4 className="member-name">Join Our Team</h4>
                  <h5 className="member-role">Parameter Position</h5>
                  <div className="member-description">
                    Ready to contribute to AI/ML innovation? Join our growing team of parameters!
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Add Team Member Form */}
          <div className="add-team-member-section">
            {showTeamForm && (
              <TeamForm
                onSubmit={async (payload) => {
                  await axios.post('/api/team', payload);
                  setShowTeamForm(false);
                  const res = await axios.get('/api/team');
                  setTeam(res.data);
                }}
                onCancel={() => setShowTeamForm(false)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
