import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/kali-logo.png" alt="KALI Club" className="logo" />
            <span className="logo-text">KALI</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link active">HOME</a></li>
            <li><a href="#about" className="nav-link">ABOUT</a></li>
            <li><a href="#activities" className="nav-link">ACTIVITIES</a></li>
            <li><Link to="/projects" className="nav-link">PROJECTS</Link></li>
            <li><Link to="/team" className="nav-link">TEAM</Link></li>
            <li><Link to="/blogs" className="nav-link">BLOGS</Link></li>
            <li><Link to="/join-us" className="nav-link">JOIN US</Link></li>
            <li><a href="#contact" className="nav-link">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          {/* Main Title */}
          <h1 className="main-title">KALI</h1>

          {/* Subtitle */}
          <h2 className="subtitle">
            Knowledge in AI and Learning Innovation
          </h2>

          {/* Institution */}
          <p className="institution">
            An AI/ML Group at NIT Raipur
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn btn-primary">
              <span>Explore Our Group</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">About KALI</h2>
            <div className="section-divider"></div>
          </div>

          {/* Vision */}
          <div className="vision-section">
            <div className="vision-content">
              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">
                "To cultivate a vibrant and innovative community that positions our institution as a center of excellence in Artificial Intelligence and Machine Learning"
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mission-section">
            <div className="mission-content">
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                Empowering students with cutting-edge knowledge in AI and ML technologies, fostering research and innovation, 
                and creating a collaborative ecosystem that bridges academia with industry to solve real-world challenges 
                through intelligent solutions.
              </p>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="objectives-section">
            <h3 className="objectives-title">Core Objectives</h3>
            <div className="objectives-grid">
              <div className="objective-card">
                <div className="objective-icon">🧠</div>
                <h4 className="objective-heading">Knowledge Excellence</h4>
                <p className="objective-description">
                  Advance understanding in AI/ML through comprehensive learning programs and cutting-edge research initiatives.
                </p>
              </div>

              <div className="objective-card">
                <div className="objective-icon">🚀</div>
                <h4 className="objective-heading">Innovation Hub</h4>
                <p className="objective-description">
                  Foster creativity and innovation by encouraging students to develop groundbreaking AI solutions and technologies.
                </p>
              </div>

              <div className="objective-card">
                <div className="objective-icon">🤝</div>
                <h4 className="objective-heading">Industry Collaboration</h4>
                <p className="objective-description">
                  Bridge the gap between academia and industry through partnerships, internships, and real-world project implementations.
                </p>
              </div>

              <div className="objective-card">
                <div className="objective-icon">🌟</div>
                <h4 className="objective-heading">Community Building</h4>
                <p className="objective-description">
                  Create a vibrant community of AI enthusiasts, researchers, and practitioners working together towards common goals.
                </p>
              </div>
            </div>
          </div>

          {/* Relevance */}
          <div className="relevance-section">
            <h3 className="relevance-title">Why AI/ML Education Matters</h3>
            <div className="relevance-content">
              <div className="relevance-text">
                <p>
                  In today's rapidly evolving technological landscape, Artificial Intelligence and Machine Learning have become 
                  the cornerstone of innovation across all industries. From healthcare and finance to transportation and entertainment, 
                  AI/ML technologies are revolutionizing how we solve complex problems and create value.
                </p>
                <p>
                  Our students need comprehensive exposure to these transformative technologies to remain competitive in the global 
                  job market and to contribute meaningfully to society's technological advancement. The KALI club serves as a 
                  crucial platform for bridging theoretical knowledge with practical application.
                </p>
              </div>
              <div className="relevance-stats">
                <div className="stat-item">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Job Growth in AI/ML</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$150K+</div>
                  <div className="stat-label">Average AI Engineer Salary</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2030</div>
                  <div className="stat-label">AI Market Size: $1.8T</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities" id="activities">
        <div className="activities-container">
          <div className="section-header">
            <h2 className="section-title">Our Activities</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Explore our diverse range of AI/ML activities designed to enhance learning and foster innovation
            </p>
          </div>

          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">📚</div>
              <h3 className="activity-title">Weekly Reading Groups</h3>
              <p className="activity-description">
                Collaborative sessions exploring cutting-edge research papers, AI breakthroughs, and emerging trends in machine learning.
              </p>
              <div className="activity-tags">
                <span className="tag">Research</span>
                <span className="tag">Discussion</span>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎓</div>
              <h3 className="activity-title">In-house ML Foundation Lectures</h3>
              <p className="activity-description">
                Comprehensive lecture series covering fundamental ML concepts, algorithms, and practical implementations from basics to advanced topics.
              </p>
              <div className="activity-tags">
                <span className="tag">Education</span>
                <span className="tag">Foundation</span>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🛠️</div>
              <h3 className="activity-title">Specialized Workshops</h3>
              <p className="activity-description">
                Hands-on workshops on specific AI/ML tools, frameworks, and technologies including TensorFlow, PyTorch, and cloud platforms.
              </p>
              <div className="activity-tags">
                <span className="tag">Hands-on</span>
                <span className="tag">Tools</span>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🏆</div>
              <h3 className="activity-title">Data Forming Competitions</h3>
              <p className="activity-description">
                Competitive events focused on data preprocessing, feature engineering, and model optimization to solve real-world challenges.
              </p>
              <div className="activity-tags">
                <span className="tag">Competition</span>
                <span className="tag">Data Science</span>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🥇</div>
              <h3 className="activity-title">Mini Kaggle Challenges</h3>
              <p className="activity-description">
                Internal competitions mimicking Kaggle-style challenges to build practical ML skills and encourage healthy competition.
              </p>
              <div className="activity-tags">
                <span className="tag">Kaggle</span>
                <span className="tag">Challenge</span>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🔬</div>
              <h3 className="activity-title">Research Incubation Program</h3>
              <p className="activity-description">
                Mentorship program supporting student research projects from ideation to publication, fostering innovation and academic excellence.
              </p>
              <div className="activity-tags">
                <span className="tag">Research</span>
                <span className="tag">Mentorship</span>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">⚔️</div>
              <h3 className="activity-title">ML Coding Battles</h3>
              <p className="activity-description">
                Fast-paced coding competitions focusing on algorithm implementation, optimization, and problem-solving in machine learning contexts.
              </p>
              <div className="activity-tags">
                <span className="tag">Coding</span>
                <span className="tag">Speed</span>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">📰</div>
              <h3 className="activity-title">Newsletters and Blogs</h3>
              <p className="activity-description">
                Regular publications sharing insights, tutorials, member achievements, and the latest developments in AI/ML community.
              </p>
              <div className="activity-tags">
                <span className="tag">Content</span>
                <span className="tag">Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
