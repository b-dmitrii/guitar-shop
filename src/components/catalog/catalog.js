import React, {useEffect, useMemo} from "react";
import Aside from "../aside/aside";
import GuitarList from "../guitar-list/guitar-list";
import {NameSpace} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {Operation} from "../../store/cards/cards";
import Pagination from "../pagination/pagination";
import {filters} from "../../selectors/filters";

const Catalog = () => {
  const dispatch = useDispatch();
  const {
    guitars,
    firstPrice,
    lastPrice,
    isInputChecked,
    currentPage,
    innerGuitarsPerPage,
  } = useSelector((state) => state[NameSpace.GUITARS]);

  const memoized = useMemo(filters, []);

  const filterArr = useSelector((state) => memoized(state[NameSpace.GUITARS]));

  const lastInnerGuitarsIndex = currentPage * innerGuitarsPerPage;
  const firstInnerGuitarsIndex = lastInnerGuitarsIndex - innerGuitarsPerPage;
  const currentInnerGuitars =
    filterArr === undefined
      ? []
      : filterArr.slice(firstInnerGuitarsIndex, lastInnerGuitarsIndex);

  useEffect(() => {
    dispatch(Operation.createCopyGuitarsArr(guitars));
  }, [guitars, dispatch]);

  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог гитар</h1>

      <ul className="catalog__navigation">
        <li className="catalog__navigation-item">Главная</li>
        <li className="catalog__navigation-item">Каталог</li>
      </ul>

      <div className="catalog__content">
        <Aside
          firstPrice={firstPrice}
          lastPrice={lastPrice}
          isInputChecked={isInputChecked}
          guitars={guitars}
        />
        <GuitarList
          innerGuitars={filterArr}
          currentInnerGuitars={currentInnerGuitars}
          currentPage={currentPage}
        />
      </div>
      <Pagination
        innerGuitarsPerPage={innerGuitarsPerPage}
        totalGuitars={filterArr.length}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Catalog;
