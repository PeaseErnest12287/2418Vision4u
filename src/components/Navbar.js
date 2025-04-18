import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ setActiveComponent, defaultActiveTab = 'Events' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveComponent(tab);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.menu-icon')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleTabClick('Events')}>
          <span className="logo-text">V2418 Vision 4 U</span>
          <span className="leaf-icon">🌿</span>
        </div>

        {/* Hamburger Menu */}
        <button 
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {['Partner', 'Donate', 'Applications', 'AboutUs', 'Register', 'Events', 'Gallery', 'Sermons'].map((tab) => (
            <li key={tab} className="nav-item">
              <a
                href={`#${tab.toLowerCase()}`}
                className={`nav-links ${activeTab === tab ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab);
                }}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;