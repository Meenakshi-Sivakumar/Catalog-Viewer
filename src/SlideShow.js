import React from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

function SlideShow({ startSlideshow, stopSlideshow, isSlideshowActive }) {
  return (
    <div className="slide-show-btn-container">
      {isSlideshowActive ? (
        <AiFillPauseCircle className="slide-show-btn" onClick={() => stopSlideshow()} />
      ) : (
        <AiFillPlayCircle className="slide-show-btn" onClick={() => startSlideshow()} />
      )}
    </div>
  );
}

export default SlideShow;
