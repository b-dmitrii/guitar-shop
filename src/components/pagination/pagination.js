import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  innerGuitarsPerPage,
  totalGuitars,
  paginate,
  currentPage,
}) => {
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
            <Link to="/" onClick={() => paginate(currentPage - 1)}>
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
            <Link to="/" onClick={() => paginate(num)}>
              {num}
            </Link>
          </li>
        ))}
        {pageNumbers.length === 1 || currentPage === pageNumbers.length ? (
          ""
        ) : (
          <li className="pagination__item-next">
            <Link to="/" onClick={() => paginate(currentPage + 1)}>
              Далее
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
