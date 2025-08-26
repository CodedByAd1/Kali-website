import React, { useState } from 'react';
import './BlogsForm.css';

const BlogsForm = ({ onSubmit, onCancel }) => {
  const [blogForm, setBlogForm] = useState({ title: '', excerpt: '', author: '', date: '', readTime: '', category: '', tags: '', image: '', content: '' });

  const handleChange = e => setBlogForm({ ...blogForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      ...blogForm,
      tags: blogForm.tags.split(',').map(s => s.trim()),
    };
    onSubmit(payload);
    setBlogForm({ title: '', excerpt: '', author: '', date: '', readTime: '', category: '', tags: '', image: '', content: '' });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onCancel}>&times;</button>
        <form onSubmit={handleSubmit} className="add-blog-form">
          <h2 className="modal-title">Add New Blog</h2>
          <input name="title" placeholder="Title" value={blogForm.title} onChange={handleChange} required className="form-input" />
          <input name="excerpt" placeholder="Excerpt" value={blogForm.excerpt} onChange={handleChange} className="form-input" />
          <input name="author" placeholder="Author" value={blogForm.author} onChange={handleChange} className="form-input" />
          <input name="date" placeholder="Date" value={blogForm.date} onChange={handleChange} className="form-input" />
          <input name="readTime" placeholder="Read Time" value={blogForm.readTime} onChange={handleChange} className="form-input" />
          <input name="category" placeholder="Category" value={blogForm.category} onChange={handleChange} className="form-input" />
          <input name="tags" placeholder="Tags (comma separated)" value={blogForm.tags} onChange={handleChange} className="form-input" />
          <input name="image" placeholder="Image URL" value={blogForm.image} onChange={handleChange} className="form-input" />
          <textarea name="content" placeholder="Content (HTML allowed)" value={blogForm.content} onChange={handleChange} className="form-textarea" />
          <div className="form-actions">
            <button type="submit" className="btn-submit">Add Blog</button>
            <button type="button" onClick={onCancel} className="btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogsForm;
