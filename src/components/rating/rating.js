import React from "react";

const PERCENT_PER_RATE = 20;

const Rating = ({ value, popularity }) => {
  return (
    <div className="rating">
      <span className="rating__stars">
        <span style={{ width: `${PERCENT_PER_RATE * value}%` }}></span>        
      </span>
      <span className="rating__popularity">{popularity}</span> 
    </div>
  );
};

export default Rating;
