import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Blogs.css';
import BlogsForm from './BlogsForm';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [blogForm, setBlogForm] = useState({ title: '', excerpt: '', author: '', date: '', readTime: '', category: '', tags: '', image: '', content: '' });

  useEffect(() => {
    axios.get('/api/blogs')
      .then(res => setBlogPosts(res.data))
      .catch(() => setBlogPosts([]));
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setShowBlogModal(true);
  };

  const closeBlogModal = () => {
    setShowBlogModal(false);
    setSelectedBlog(null);
  };

  const handleAddBlog = () => setShowBlogForm(true);
  const handleBlogChange = e => setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
  const handleBlogSubmit = async e => {
    e.preventDefault();
    const payload = {
      ...blogForm,
      tags: blogForm.tags.split(',').map(s => s.trim()),
    };
    await axios.post('/api/blogs', payload);
    setShowBlogForm(false);
    setBlogForm({ title: '', excerpt: '', author: '', date: '', readTime: '', category: '', tags: '', image: '', content: '' });
    // Refresh blogs
    const res = await axios.get('/api/blogs');
    setBlogPosts(res.data);
  };

  return (
    <div className="blogs-page">
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
            <li><Link to="/blogs" className="nav-link active">BLOGS</Link></li>
            <li><Link to="/join-us" className="nav-link">JOIN US</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="blogs-hero-content">
          <h1 className="blogs-main-title">KALI BLOGS</h1>
          <div className="section-divider"></div>
          <p className="blogs-subtitle">
            Explore cutting-edge research, insights, and discoveries in AI/ML from our community
          </p>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs-section">
        <div className="blogs-container">
          <button onClick={handleAddBlog} className="add-blog-btn" style={{marginBottom:'20px',padding:'10px 20px',background:'#007bff',color:'#fff',border:'none',borderRadius:'4px'}}>Add Blog</button>
          <div className="section-header">
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-description">
              Deep dives into machine learning concepts, research breakthroughs, and technical insights
            </p>
          </div>
          
          <div className="blogs-list">
            {blogPosts.map((blog) => (
              <article 
                key={blog.id} 
                className="blog-card"
                onClick={() => handleBlogClick(blog)}
              >
                <div className="blog-image">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJyZ2JhKDI1NSwgNjksIDAsIDAuMSkiLz4KPHN2ZyB4PSI0MCIgeT0iNDAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMzIwIDEyMCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNjAgNjBMMTIwIDEwMEgyMDBMMTYwIDYwWiIgZmlsbD0icmdiYSgyNTUsIDY5LCAwLCAwLjMpIi8+CjxjaXJjbGUgY3g9IjEyNSIgY3k9IjQwIiByPSI4IiBmaWxsPSJyZ2JhKDI1NSwgNjksIDAsIDAuNSkiLz4KPC9zdmc+Cjx0ZXh0IHg9IjIwMCIgeT0iMTA1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9InJnYmEoMjU1LCA2OSwgMCwgMC43KSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmxvZyBJbWFnZTwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                  <div className="blog-category">{blog.category}</div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-author">{blog.author}</span>
                    <span className="blog-date">{blog.date}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                  
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  
                  <div className="blog-tags">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="blog-actions">
                    <button className="read-more-btn">
                      Read Full Article
                      <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Coming Soon */}
          <div className="coming-soon-section">
            <h3 className="coming-soon-title">More Articles Coming Soon</h3>
            <p className="coming-soon-description">
              Our team is constantly researching and writing about the latest developments in AI/ML. 
              Stay tuned for more insights and technical deep-dives.
            </p>
            <div className="coming-soon-topics">
              <span className="topic-tag">Transformer Architecture</span>
              <span className="topic-tag">Graph Neural Networks</span>
              <span className="topic-tag">Reinforcement Learning</span>
              <span className="topic-tag">Computer Vision</span>
              <span className="topic-tag">Natural Language Processing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {showBlogModal && selectedBlog && (
        <div className="blog-modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-meta">
                <span className="modal-category">{selectedBlog.category}</span>
                <span className="modal-date">{selectedBlog.date}</span>
                <span className="modal-read-time">{selectedBlog.readTime}</span>
              </div>
              <button className="close-btn" onClick={closeBlogModal}>×</button>
            </div>
            
            <div className="modal-body">
              <div 
                className="blog-content-full"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
              
              <div className="blog-footer">
                <div className="blog-author-info">
                  <span className="author-label">Written by:</span>
                  <span className="author-name">{selectedBlog.author}</span>
                </div>
                
                <div className="blog-tags-full">
                  {selectedBlog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag-full">{tag}</span>
                  ))}
                </div>
                
                <div className="blog-share">
                  <span className="share-label">Share this article:</span>
                  <div className="share-buttons">
                    <button className="share-btn twitter">Twitter</button>
                    <button className="share-btn linkedin">LinkedIn</button>
                    <button className="share-btn copy">Copy Link</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Blog Form */}
      <div className="add-blog-container">
        <button onClick={handleAddBlog} className="add-blog-btn">Add Blog</button>
        {showBlogForm && (
          <BlogsForm
            onSubmit={async (payload) => {
              await axios.post('/api/blogs', payload);
              setShowBlogForm(false);
              const res = await axios.get('/api/blogs');
              setBlogPosts(res.data);
            }}
            onCancel={() => setShowBlogForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Blogs;
