// src/SpeakerIcon.js
import React from 'react';

const SpeakerIcon = ({animationClass}) => {
  return (
    <div className={`relative w-16 h-16 ${animationClass}`}>
       <img
        src='https://cdn.vectorstock.com/i/500p/80/36/audio-speaker-icon-vector-378036.jpg'
        alt="Speaker"
        className="w-full h-full animate-blast rounded-[30%]"
      />
      <div className="absolute w-6 h-6 bg-red-500 rounded-full top-0 left-0 animate-pulse"></div>
      <div className="absolute w-6 h-6 bg-red-500 rounded-full top-0 right-0 animate-pulse"></div>
    </div>
  );
};

export default SpeakerIcon;
