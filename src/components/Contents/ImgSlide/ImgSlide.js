import React, { useState } from 'react';
import './ImgSlide.scss';

const ImgSlide = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevSlide = () => {
      const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
    };
  
    const nextSlide = () => {
      const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
    };
  
    return (
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="slide-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={index === currentImageIndex ? 'slide active' : 'slide'}
              src={image}
              alt={`slide-${index}`}
            />
          ))}
        </div>
      </div>
    );
};

export default ImgSlide;