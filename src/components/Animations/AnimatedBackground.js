// components/AnimatedBackground.js

import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 bg-gray-900 overflow-hidden">
        <div className="w-[40%] h-[30%] bg-gradient-to-br from-pink-500 to-purple-600 " style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }}></div>
    </div>
  );
};

export default AnimatedBackground;
