import React, { useState } from 'react';
import './TeamForm.css';

const TeamForm = ({ onSubmit, onCancel }) => {
  const [teamForm, setTeamForm] = useState({ name: '', role: '', details: '', description: '', avatar: '' });

  const handleChange = e => setTeamForm({ ...teamForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(teamForm);
    setTeamForm({ name: '', role: '', details: '', description: '', avatar: '' });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onCancel}>&times;</button>
        <form onSubmit={handleSubmit} className="add-team-form">
          <h2 className="modal-title">Add Team Member</h2>
          <input name="name" placeholder="Name" value={teamForm.name} onChange={handleChange} required className="form-input" />
          <input name="role" placeholder="Role" value={teamForm.role} onChange={handleChange} required className="form-input" />
          <input name="details" placeholder="Details" value={teamForm.details} onChange={handleChange} className="form-input" />
          <input name="description" placeholder="Description" value={teamForm.description} onChange={handleChange} className="form-input" />
          <input name="avatar" placeholder="Avatar" value={teamForm.avatar} onChange={handleChange} className="form-input" />
          <div className="button-group">
            <button type="submit" className="submit-button">Add Member</button>
            <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
