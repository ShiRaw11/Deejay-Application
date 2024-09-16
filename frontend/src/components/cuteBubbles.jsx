import React from 'react';

const Bubble = ({ size, left, animationDelay, color }) => {
  return (
    <div
      className={`absolute bottom-0 rounded-full opacity-75 animate-float`}
      style={{
        width: size,
        height: size,
        left: left,
        animationDelay: animationDelay,
        backgroundColor: color,
      }}
    />
  );
};

export default Bubble;

