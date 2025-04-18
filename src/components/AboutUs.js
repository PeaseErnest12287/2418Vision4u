import React from 'react';
import './css/AboutUs.css';

const AboutUs = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Vision 4 U gave me hope when I thought all was lost. I'm now studying to become a nurse.",
      author: "Janet, 26",
      location: "Nairobi"
    },
    {
      id: 2,
      quote: "Because of the youth program, I found purpose and a community that supports my dreams.",
      author: "David, 19",
      location: "Kampala"
    },
    {
      id: 3,
      quote: "The spiritual guidance I received transformed my family relationships completely.",
      author: "Grace, 42",
      location: "Johannesburg"
    }
  ];

  const timeline = [
    { year: "2010", event: "Founded from a single prayer in a small community" },
    { year: "2013", event: "Launched our first youth empowerment program" },
    { year: "2017", event: "Expanded to serve 3 regions across East Africa" },
    { year: "2020", event: "Adapted programs to support communities during pandemic" },
    { year: "2024", event: "Global outreach initiative launched" }
  ];

  const teamMembers = [
    { name: "Pastor Michael", role: "Founder & Spiritual Leader", bio: "With 20 years of ministry experience..." },
    { name: "Dr. Sarah", role: "Education Director", bio: "PhD in Community Development..." },
    { name: "James", role: "Youth Programs Coordinator", bio: "Former beneficiary now leading..." }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Born From a Prayer, Built With Love</h1>
          <p className="hero-text">
            What began as a single prayer in 2010 has become a beacon of hope for thousands. 
            Vision 4 U is more than an organization - we're a family united by faith and purpose.
          </p>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Sacred Calling</h2>
          <p className="mission-statement">
            We exist to awaken purpose, nurture spirits, and rebuild communities through 
            <span className="highlight"> education</span>, 
            <span className="highlight"> empowerment</span>, and 
            <span className="highlight"> enduring love</span>.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <h2>Our Journey of Faith</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-event">{item.event}</div>
              <div className="timeline-connector"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Message */}
      <section className="video-section">
        <div className="video-container">
          <div className="video-placeholder">
            <div className="play-button">▶</div>
            <p>Message from Our Founder</p>
          </div>
          <div className="video-caption">
            Hear Pastor Michael share the heart behind Vision 4 U
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>The Hearts Behind the Mission</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-photo"></div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>Lives Transformed</h2>
        <div className="testimonials-carousel">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-location">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Impact */}
      <section className="impact-section">
        <h2>Our Global Family</h2>
        <div className="impact-map">
          <div className="map-marker" style={{ top: '30%', left: '45%' }}>Kenya</div>
          <div className="map-marker" style={{ top: '40%', left: '50%' }}>Uganda</div>
          <div className="map-marker" style={{ top: '60%', left: '55%' }}>South Africa</div>
          <div className="map-marker" style={{ top: '25%', left: '20%' }}>USA</div>
          <div className="map-marker" style={{ top: '35%', left: '75%' }}>India</div>
        </div>
        <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Lives Impacted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Nations Reached</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Volunteers</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Your Story Starts Here</h2>
        <p className="cta-text">
          Whether you're seeking support or feel called to serve, 
          you belong in the Vision 4 U family.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">Join Our Community</button>
          <button className="cta-button secondary">Partner With Us</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
// done