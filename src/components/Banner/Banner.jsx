import React, { useState, useEffect } from 'react';
import './Banner.css'; // Importa los estilos

const Banner = ({ img = [], interval = 3000 }) => {
    if (!img || img.length === 0) {
      return <div>No images available</div>;
    }
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
      }, interval);
  
      return () => clearInterval(timer); // Limpia el intervalo al desmontar
    }, [img.length, interval]);
  
    return (
      <div className="banner-container">
        {img.map((imagePath, index) => (
          <div
            key={index}
            className={`image-container ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={imagePath} alt={`Slide ${index}`} className="banner-image" />
          </div>
        ))}
      </div>
    );
  };

export default Banner;
