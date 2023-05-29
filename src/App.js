import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import Slider from './Slider';
import data from './data';

const lastIndex = data.length - 1;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isSlideshowActive) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === lastIndex ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isSlideshowActive]);

  const startSlideshow = () => {
    setIsSlideshowActive(true);
  };

  const stopSlideshow = () => {
    setIsSlideshowActive(false);
  };

  const nextBanner = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === lastIndex ? 0 : prevIndex + 1
    );
    stopSlideshow();
  };

  const prevBanner = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex : prevIndex - 1
    );
    stopSlideshow();
  };

  const selectBanner = (index) => {
    setActiveIndex(index);
    stopSlideshow();
  };

  return (
    <div className='main-container'>
      <main>
        <HeroBanner {...data[activeIndex]} />
        <Slider
          data={data}
          activeIndex={activeIndex}
          nextBanner={nextBanner}
          prevBanner={prevBanner}
          selectBanner={selectBanner}
          startSlideshow={startSlideshow}
          stopSlideshow={stopSlideshow}
          isSlideshowActive={isSlideshowActive}
        />
      </main>
    </div>
  );
}

export default App;
