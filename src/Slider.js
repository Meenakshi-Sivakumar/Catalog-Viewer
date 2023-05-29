import React from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import SlideShow from './SlideShow';

function Slider({ data, activeIndex, nextBanner, prevBanner, selectBanner, startSlideshow, stopSlideshow, isSlideshowActive }) {
  return (
    <div className="slider-main-container">
      <div className="slider-container">
        <button className="nav-btn" onClick={prevBanner}>
          <IoMdArrowDropleft className="react-icon" />
        </button>
        {data.map((banner, index) => (
          <a key={banner.id} onClick={() => selectBanner(index)}>
            <img
              src={banner.image}
              alt={banner.name}
              style={{
                filter: index === activeIndex ? 'grayscale(0)' : 'grayscale(100%)',
                transition: 'all 0.3s ease-in-out'
              }}
            />
          </a>
        ))}
        <button className="nav-btn" onClick={nextBanner}>
          <IoMdArrowDropright className="react-icon" />
        </button>
      </div>
      <SlideShow startSlideshow={startSlideshow} stopSlideshow={stopSlideshow} isSlideshowActive={isSlideshowActive} />
    </div>
  );
}

export default Slider;
