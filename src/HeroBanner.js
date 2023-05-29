import React from 'react';

function HeroBanner({ name, image, desc }) {
  return (
    <div className="hero-banner-container">
    <div className='img-container'>
        <img src={image} alt={name} />
    </div>
    <div className="banner-details">
        <h2>{name}</h2>
        <p>{desc}</p>
    </div>
    </div>
  );
}

export default HeroBanner;
