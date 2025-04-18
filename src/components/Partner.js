import React, { useState } from 'react';
import './css/Partner.css';

const Partner = () => {
  const [activeForm, setActiveForm] = useState(null);

  const partnerTypes = [
    { id: 'corporate', title: 'Corporate Partnership', desc: 'Join us as a corporate sponsor and make a lasting impact.', color: '#003366', icon: 'briefcase' },
    { id: 'community', title: 'Community Partner', desc: 'Collaborate with us on local initiatives and events.', color: '#4CAF50', icon: 'handshake' }
  ];

  const handleFormClick = (id) => {
    setActiveForm(id);
  };

  const handleBackClick = () => {
    setActiveForm(null);
  };

  return (
    <div className="partner-container">
      <h2>Together, we can do what none of us can do alone.</h2>
      <p className="subtitle">Partner with purpose. Impact with intention.</p>
      
      {/* Video/Testimonial Section */}
      <div className="video-section">
        <video controls>
          <source src="partner-testimonial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>“94% of our partners renew every year.”</p>
      </div>

      {/* Cards for each partner */}
      <div className="partner-cards">
        {partnerTypes.map((partner) => (
          <div key={partner.id} className="partner-card" style={{ backgroundColor: partner.color }}>
            <h3>{partner.title}</h3>
            <p>{partner.desc}</p>
            <button 
              className="partner-btn" 
              onClick={() => handleFormClick(partner.id)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      
      {/* Conditionally render forms */}
      {activeForm && (
        <div className="partner-form">
          <div className="form-header">
            <button onClick={handleBackClick} className="back-btn">←</button>
            <h3>{activeForm === 'corporate' ? 'Corporate Partnership Form' : 'Community Partnership Form'}</h3>
          </div>
          <form>
            <label>
              What’s your name, friend?
              <input type="text" name="name" required />
            </label>
            <label>
              Where can we reach you with good news?
              <input type="email" name="email" required />
            </label>
            {/* Other form fields specific to the partner */}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      
      {/* Highlight Outcomes */}
      <div className="outcomes">
        <p>Your partnership helps us do X.</p>
        <p>Because of our partners, we’ve reached 12,000 lives in 3 years.</p>
      </div>
    </div>
  );
};

export default Partner;