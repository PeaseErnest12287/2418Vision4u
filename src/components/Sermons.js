import React, { useState } from 'react';
import './css/Sermons.css';

const Sermons = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const sermonSeries = [
    { 
      id: 1, 
      title: "Finding Purpose", 
      speaker: "Pastor John", 
      date: "May 15, 2023",
      description: "Discover how to align your life with God's purpose and find true fulfillment in your daily walk.",
      series: "Life Foundations",
      duration: "42:18",
      thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      id: 2, 
      title: "Faith in Action", 
      speaker: "Minister Sarah", 
      date: "April 23, 2023",
      description: "Learn practical ways to put your faith into action and make a difference in your community.",
      series: "Practical Christianity",
      duration: "38:45",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      id: 3, 
      title: "The Power of Community", 
      speaker: "Elder Michael", 
      date: "March 12, 2023",
      description: "Explore how authentic Christian community can transform lives and strengthen your spiritual journey.",
      series: "Building Together",
      duration: "45:30",
      thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      id: 4, 
      title: "Overcoming Fear", 
      speaker: "Pastor John", 
      date: "June 4, 2023",
      description: "Biblical strategies to conquer fear and walk in the confidence of God's promises.",
      series: "Life Foundations",
      duration: "39:22",
      thumbnail: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      id: 5, 
      title: "Generous Living", 
      speaker: "Minister Sarah", 
      date: "July 9, 2023",
      description: "How cultivating a generous spirit can transform your life and bless those around you.",
      series: "Practical Christianity",
      duration: "41:15",
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      id: 6, 
      title: "Prayer That Moves Mountains", 
      speaker: "Elder Michael", 
      date: "August 20, 2023",
      description: "Discover the power of persistent prayer and how to pray with faith that changes circumstances.",
      series: "Building Together",
      duration: "47:08",
      thumbnail: "https://images.unsplash.com/photo-1503764654157-72d97966e930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
    }
  ];

  const speakers = [...new Set(sermonSeries.map(sermon => sermon.speaker))];
  const seriesList = [...new Set(sermonSeries.map(sermon => sermon.series))];

  const filteredSermons = sermonSeries.filter(sermon => {
    const matchesFilter = activeFilter === 'all' || 
                         sermon.speaker === activeFilter || 
                         sermon.series === activeFilter;
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleFavorite = (id) => {
    // In a real app, this would update state or make an API call
    console.log(`Sermon ${id} favorited`);
  };

  const handleShare = (sermon) => {
    // In a real app, this would open share dialog
    console.log(`Sharing: ${sermon.title}`);
  };

  return (
    <div className="sermons-container">
      <div className="sermons-header">
        <h1>Sermon Archive</h1>
        <p className="page-description">Explore our collection of inspiring messages to strengthen your faith journey.</p>
        
        <div className="sermons-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search sermons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="filter-container">
            <select 
              value={activeFilter} 
              onChange={(e) => setActiveFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Sermons</option>
              <optgroup label="Speakers">
                {speakers.map(speaker => (
                  <option key={speaker} value={speaker}>{speaker}</option>
                ))}
              </optgroup>
              <optgroup label="Series">
                {seriesList.map(series => (
                  <option key={series} value={series}>{series}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      <div className="sermon-grid">
        {filteredSermons.length > 0 ? (
          filteredSermons.map(sermon => (
            <div key={sermon.id} className="sermon-card">
              <div className="card-thumbnail" style={{ backgroundImage: `url(${sermon.thumbnail})` }}>
                <div className="duration-badge">{sermon.duration}</div>
              </div>
              
              <div className="card-content">
                <div className="series-tag">{sermon.series}</div>
                <h3>{sermon.title}</h3>
                <p className="sermon-description">{sermon.description}</p>
                
                <div className="sermon-meta">
                  <div className="meta-item">
                    <span className="meta-icon">🎤</span>
                    <span>{sermon.speaker}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span>{sermon.date}</span>
                  </div>
                </div>
                
                <div className="card-actions">
                  <button className="listen-btn">
                    <span className="play-icon">▶</span> Listen Now
                  </button>
                  
                  <div className="action-buttons">
                    <button 
                      className="action-btn favorite-btn"
                      onClick={() => handleFavorite(sermon.id)}
                      aria-label="Add to favorites"
                    >
                      ♡
                    </button>
                    <button 
                      className="action-btn share-btn"
                      onClick={() => handleShare(sermon)}
                      aria-label="Share this sermon"
                    >
                      ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No sermons found matching your criteria.</p>
          </div>
        )}
      </div>

      <div className="pagination">
        <button className="pagination-btn" disabled>Previous</button>
        <span className="page-info">Page 1 of 2</span>
        <button className="pagination-btn">Next</button>
      </div>
    </div>
  );
};

export default Sermons;
// done