import React from "react";
import PropTypes from "prop-types";
import { NameSpace } from "../../const";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Operation } from "../../store/cards/cards";

const SortArea = ({
  sortByPrice,
  sortByPopularity,
  sortByPriceRev,
  sortByPopularityRev,
  selectedValue,
}) => {
  const dispatch = useDispatch();

  const {
    isSortPriceActive,
    isSortPopularityActive,
    isArrowUpActive,
    isArrowDownActive,
  } = useSelector((state) => state[NameSpace.GUITARS]);
  return (
    <div className="sort-area">
      <div className="sort-area__wrapper">
        <h2 className="sort-area__title">Сортировать:</h2>
        <ul className="sort-area__list-text">
          <li className="sort-area__list-text-item">
            <span
              className={`${
                isSortPriceActive ? `sort-area__item--active` : ``
              } `}
              onClick={() => sortByPrice()}
            >
              по цене
            </span>
          </li>
          <li className="sort-area__list-text-item">
            <span
              className={`${
                isSortPopularityActive ? `sort-area__item--active` : ``
              } `}
              onClick={() => sortByPopularity()}
            >
              по популярности
            </span>
          </li>
        </ul>
        <ul className="sort-area__list-svg">
          <li className="sort-area__list-svg-item">
            <span
              onClick={
                selectedValue === `price` || selectedValue === ``
                  ? () => sortByPrice()
                  : () => sortByPopularity()
              }
            >
              <svg
                className={`${isArrowUpActive ? `sort-area__item-svg` : ``}`}
                onClick={() => dispatch(Operation.changeStateUpArrow(true))}
              >
                <use xlinkHref="#arrow-icon" />
              </svg>
            </span>
          </li>
          <li className="sort-area__list-svg-item sort-area__list-svg-item--reverse">
            <span
              onClick={
                selectedValue === `price` || selectedValue === ``
                  ? () => sortByPriceRev()
                  : () => sortByPopularityRev()
              }
            >
              <svg
                className={`${isArrowDownActive ? `sort-area__item-svg` : ``}`}
                onClick={() => dispatch(Operation.changeStateDownArrow(true))}
              >
                <use xlinkHref="#arrow-icon" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

SortArea.propTypes = {
  sortByPrice: PropTypes.func,
  sortByPopularity: PropTypes.func,
  sortByPriceRev: PropTypes.func,
  sortByPopularityRev: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default SortArea;
