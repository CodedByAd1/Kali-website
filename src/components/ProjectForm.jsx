import React, { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', description: '', status: '', techStack: '', members: '', links: '', image: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      ...formData,
      techStack: formData.techStack.split(',').map(s => s.trim()),
      members: formData.members.split(',').map(s => s.trim()),
      links: JSON.parse(formData.links || '{}'),
    };
    onSubmit(payload);
    setFormData({ name: '', description: '', status: '', techStack: '', members: '', links: '', image: '' });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onCancel}>&times;</button>
        <form onSubmit={handleSubmit} className="add-project-form">
          <h2 className="modal-title">Add New Project</h2>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <input name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
          <input name="techStack" placeholder="Tech Stack (comma separated)" value={formData.techStack} onChange={handleChange} />
          <input name="members" placeholder="Members (comma separated)" value={formData.members} onChange={handleChange} />
          <input name="links" placeholder='Links (JSON: {"github":"#"})' value={formData.links} onChange={handleChange} />
          <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
          <div className="form-button-group">
            <button type="submit">Add Project</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
