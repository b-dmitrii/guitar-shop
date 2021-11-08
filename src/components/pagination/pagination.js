import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Operation } from "../../store/cards/cards";
import { useDispatch } from "react-redux";

const Pagination = ({
  innerGuitarsPerPage,
  totalGuitars,  
  currentPage,
}) => {
  const dispatch = useDispatch()
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGuitars / innerGuitarsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul className="pagination__list">
      {currentPage === 1 ? (
          ""
        ) : (
          <li className="pagination__item-prev">
            <Link to="/" onClick={() => dispatch(Operation.changePageNumber(currentPage - 1))}>
              Назад
            </Link>
          </li>
        )}
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`${
              currentPage === num ? `pagination__item--active` : ""
            } pagination__item`}
          >
            <Link to="/" onClick={() => dispatch(Operation.changePageNumber(num))}>
              {num}
            </Link>
          </li>
        ))}
        {pageNumbers.length === 1 || currentPage === pageNumbers.length || pageNumbers.length === 0 ? (
          ""
        ) : (
          <li className="pagination__item-next">
            <Link to="/" onClick={() => dispatch(Operation.changePageNumber(currentPage + 1))}>
              Далее
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  innerGuitarsPerPage: PropTypes.number,
  totalGuitars: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
}

export default Pagination;
