import React from "react";

const SortArea = ({
  sortByPrice,
  sortByPopularity,
  sortByPriceRev,
  sortByPopularityRev,
  selectedValue,
}) => {
  return (
    <div className="sort-area">
      <div className="sort-area__wrapper">
        <h2 className="sort-area__title">Сортировать:</h2>
        <ul className="sort-area__list-text">
          <li className="sort-area__list-text-item">
            <span onClick={() => sortByPrice()}>по цене</span>
          </li>
          <li className="sort-area__list-text-item">
            <span onClick={() => sortByPopularity()}>по популярности</span>
          </li>
        </ul>
        <ul className="sort-area__list-svg">
          <li className="sort-area__list-svg-item">
            <span onClick={selectedValue === "price" ? () => sortByPrice() : () => sortByPopularity()}>
              <svg>
                <use xlinkHref="#arrow-icon" />
              </svg>
            </span>
          </li>
          <li className="sort-area__list-svg-item sort-area__list-svg-item--reverse">
            <span
              onClick={selectedValue === "price" ? () => sortByPriceRev() : () => sortByPopularityRev() }
            >
              <svg>
                <use xlinkHref="#arrow-icon" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortArea;
