import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import Slider from './Slider';
import data from './data';

const lastIndex = data.length - 1;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  let interval;

  useEffect(() => {
    if (isSlideshowActive) {
      interval = setInterval(() => {
        const newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, isSlideshowActive]);

  const startSlideshow = () => {
    setIsSlideshowActive(true);
  };

  const stopSlideshow = () => {
    setIsSlideshowActive(false);
  };

  const nextBanner = () => {
    const newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    stopSlideshow();
  };

  const prevBanner = () => {
    const newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    setActiveIndex(newIndex);
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
