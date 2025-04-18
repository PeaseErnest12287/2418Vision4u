import React, { useState } from 'react';
import './css/Events.css';

const Events = () => {
  const [activeForm, setActiveForm] = useState(null); // Track which event's form is active
  const [formData, setFormData] = useState({ name: '', email: '', people: 1 }); // Form data

  const upcomingEvents = [
    { id: 1, title: "Community Picnic", date: "June 15, 2023", location: "Central Park" },
    { id: 2, title: "Youth Workshop", date: "June 22, 2023", location: "Main Campus" },
    { id: 3, title: "Fundraiser Gala", date: "July 5, 2023", location: "Grand Ballroom" }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Confirmed for ${formData.name} at ${activeForm.title}`);
    setActiveForm(null); // Close the form after submitting
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {upcomingEvents.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <div className="event-details">
              <div className="event-icon">
                <span role="img" aria-label="calendar">📅</span> {event.date}
              </div>
              <div className="event-icon">
                <span role="img" aria-label="location">📍</span> {event.location}
              </div>
            </div>
            <button 
              className="rsvp-btn" 
              onClick={() => setActiveForm(event)} // Set the active form to the clicked event
            >
              Save My Spot
            </button>
          </div>
        ))}
      </div>

      {/* Conditionally render the reservation form on top */}
      {activeForm && (
        <div className="reservation-form-overlay">
          <div className="reservation-form">
            <h3>Reserve your spot for {activeForm.title}</h3>
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </label>
              <label>
                Number of People:
                <input 
                  type="number" 
                  name="people" 
                  value={formData.people} 
                  onChange={handleInputChange} 
                  min="1" 
                  required 
                />
              </label>
              <button type="submit">Reserve Spot</button>
            </form>
            <button className="close-btn" onClick={() => setActiveForm(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
