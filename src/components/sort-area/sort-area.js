import React from "react";

const SortArea = () => {
  return (
    <div className="sort-area">
      
      <div className='sort-area__wrapper'>
      <h2 className='sort-area__title'>Сортировать:</h2>
      <ul className='sort-area__list-text'>
        <li className='sort-area__list-text-item'>
          <span>по цене</span>
        </li>
        <li className='sort-area__list-text-item'>
          <span >по популярности</span>
        </li>
      </ul>
      <ul className='sort-area__list-svg'>
        <li className='sort-area__list-svg-item'>
          <span>
            <svg>
              <use xlinkHref="#arrow-icon" />
            </svg>
          </span>
        </li>
        <li className='sort-area__list-svg-item sort-area__list-svg-item--reverse'>
          <span>
            <svg>
              <use xlinkHref="#arrow-icon"/>
            </svg>
          </span>
        </li>
      </ul>
      </div>
      
    </div>
  );
};

export default SortArea
