import React, { useState } from 'react';
import './css/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: 'image1.jpg', caption: "Community Service Day 2023: Volunteers making a difference in the heart of the city." },
    { id: 2, src: 'image2.jpg', caption: "Youth Leadership Camp: Empowering the next generation of leaders." },
    { id: 3, src: 'image3.jpg', caption: "Annual Gala Dinner: Celebrating our achievements and looking ahead." },
    { id: 4, src: 'image4.jpg', caption: "Volunteer Appreciation: Honoring those who give their time and energy." }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2>Photo Gallery</h2>
      <p className="subtitle">A visual journey through our events and impact.</p>
      <div className="image-grid">
        {galleryImages.map(image => (
          <div 
            key={image.id} 
            className="gallery-item" 
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.caption} className="gallery-image" />
            <div className="image-overlay">
              <p className="image-caption">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;