import React from 'react';
import './shimmer.css'
const Shimmer = () => {
  return (
    <>
        <input type={"text"} className={"shimmer-input-text"}/>
      <div className="shimmer-container">
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="shimmer-card"></div>
      ))}
    </div>
    </>
  );
};

export default Shimmer;
