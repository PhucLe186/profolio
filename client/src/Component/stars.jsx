import React from "react";

const generateStars = (count) => {
  return Array.from({ length: count }, (_, index) => {
    const size = Math.random() * 1.5 + 0.5;   
    const left = Math.random() * 100;         
    const top = Math.random() * 100;         
    const duration = Math.random() * 3 + 1;  
    const delay = Math.random() * 5;       

    return (
      <div
        key={index}
        className="absolute bg-white rounded-full opacity-80 animate-twinkle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${delay}s`,
          "--duration": `${duration}s`,
        }}
      />
    );
  });
};

const Stars = ({ count = 300 }) => {
  return (
    <div className=" fixed left-0 -z-10 inset-0 overflow-hidden pointer-events-none">
      {generateStars(count)}
    </div>
  );
};

export default Stars;