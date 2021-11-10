import React from "react";
import PropTypes from "prop-types";

const PERCENT_PER_RATE = 20;

const Rating = ({value, popularity}) => {
  return (
    <div className="rating">
      <span className="rating__stars">
        <span style={{width: `${PERCENT_PER_RATE * value}%`}}></span>
      </span>
      <span className="rating__popularity">{popularity}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  popularity: PropTypes.number,
};

export default Rating;
