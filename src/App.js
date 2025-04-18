import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Partner from './components/Partner';
import Donate from './components/Donate';
import Applications from './components/Applications';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Sermons from './components/Sermons';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('Events');

  const renderComponent = () => {
    switch(activeComponent) {
      case 'Partner': return <Partner />;
      case 'Donate': return <Donate />;
      case 'Applications': return <Applications />;
      case 'AboutUs': return <AboutUs />;
      case 'Register': return <Register />;
      case 'Events': return <Events />;
      case 'Gallery': return <Gallery />;
      case 'Sermons': return <Sermons />;
      default: return <Events />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent} defaultActiveTab="Events" />
      <main className="main-content">
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;