import React, { useState } from 'react';
import './css/Applications.css';

const Applications = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleApplyClick = (program) => {
    setSelectedProgram(program);
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
    setSelectedProgram('');
  };

  const renderForm = () => {
    switch (selectedProgram) {
      case 'Youth Program':
        return (
          <div className="form-container">
            <h3>Youth Program Application</h3>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
              <label>Age:</label>
              <input type="number" placeholder="Enter your age" />
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </form>
            <button className="back-btn" onClick={handleBackClick}>Back</button>
          </div>
        );
      case 'Adult Program':
        return (
          <div className="form-container">
            <h3>Adult Program Application</h3>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
              <label>Age:</label>
              <input type="number" placeholder="Enter your age" />
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </form>
            <button className="back-btn" onClick={handleBackClick}>Back</button>
          </div>
        );
      case 'Volunteer':
        return (
          <div className="form-container">
            <h3>Volunteer Application</h3>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
              <label>Why do you want to volunteer?</label>
              <textarea placeholder="Share your motivation"></textarea>
              <button type="submit">Submit</button>
            </form>
            <button className="back-btn" onClick={handleBackClick}>Back</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="applications-container">
      <h2>Choose Your Path to Purpose</h2>
      <p className="subtitle">Join a community that empowers, inspires, and transforms lives.</p>
      <div className="application-types">
        <div className="app-card" onClick={() => handleApplyClick('Youth Program')}>
          <div className="card-content">
            <h3>Youth Program</h3>
            <p className="description">Empowering tomorrow’s leaders with mentorship, life skills, and purpose-driven experiences.</p>
            <p className="details">Ages 13-18 | 6-Month Program | Weekly Sessions</p>
            <button className="app-btn">Join the Youth Tribe</button>
          </div>
        </div>
        <div className="app-card" onClick={() => handleApplyClick('Adult Program')}>
          <div className="card-content">
            <h3>Adult Program</h3>
            <p className="description">Helping adults rediscover passion, grow in faith, and lead in their communities.</p>
            <p className="details">Ages 19+ | 3-Month Program | Bi-Weekly Sessions</p>
            <button className="app-btn">Step into Purpose</button>
          </div>
        </div>
        <div className="app-card" onClick={() => handleApplyClick('Volunteer')}>
          <div className="card-content">
            <h3>Volunteer</h3>
            <p className="description">Be the hands and heart behind the mission. Lend your time, change a life.</p>
            <p className="details">Flexible Commitment | Training Provided | Make an Impact</p>
            <button className="app-btn">Start Volunteering</button>
          </div>
        </div>
      </div>
      <div className="progress-counter">
        <p>🎉 Over 800 successful applicants in 2024 — your journey starts here.</p>
      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            {renderForm()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
// done