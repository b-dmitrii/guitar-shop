import React, { useState, useEffect } from "react";
import Aside from "../aside/aside";
import GuitarList from "../guitar-list/guitar-list";
import { NameSpace } from "../../const";
import { useDispatch, useSelector } from "react-redux";
import { Operation } from "../../store/cards/cards";
import Pagination from "../pagination/pagination";

const Catalog = () => {
  const dispatch = useDispatch();
  const { guitars, firstPrice, lastPrice, isCheckedButtonShow } =
    useSelector((state) => state[NameSpace.GUITARS]);

  const [typeGuitarsArr, setTypeGuitarsArr] = useState([]);
  const [countStringArr, setCountStringArr] = useState([]);
  const [innerGuitars, setInnerGuitars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [innerGuitarsPerPage] = useState(9);

  const lastInnerGuitarsIndex = currentPage * innerGuitarsPerPage;
  const firstInnerGuitarsIndex = lastInnerGuitarsIndex - innerGuitarsPerPage;
  const currentInnerGuitars = innerGuitars.slice(
    firstInnerGuitarsIndex,
    lastInnerGuitarsIndex
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setInnerGuitars(guitars);
  }, [guitars]);

  const filterByPrice = (item) =>
    parseInt(item.price) >= parseInt(firstPrice) &&
    parseInt(item.price) <= parseInt(lastPrice);

  const filterByType = (item) => typeGuitarsArr.includes(item.type.name);

  const filterByString = (item) =>
    countStringArr.includes(item.countString.toString());

  const filter = () => {
    if (
      !firstPrice &&
      !lastPrice &&
      typeGuitarsArr.length === 0 &&
      countStringArr.length === 0
    ) {
      setInnerGuitars(guitars);
    }
    if (
      !firstPrice &&
      !lastPrice &&
      typeGuitarsArr.length !== 0 &&
      countStringArr.length !== 0
    ) {
      setInnerGuitars(
        guitars.filter((item) => {
          return filterByType(item) && filterByString(item);
        })
      );
    }

    if (
      !firstPrice &&
      !lastPrice &&
      typeGuitarsArr.length !== 0 &&
      countStringArr.length === 0
    ) {
      setInnerGuitars(
        guitars.filter((item) => {
          return filterByType(item);
        })
      );
    }

    if (
      !firstPrice &&
      !lastPrice &&
      typeGuitarsArr.length === 0 &&
      countStringArr.length !== 0
    ) {
      setInnerGuitars(
        guitars.filter((item) => {
          return filterByString(item);
        })
      );
    }
    if (
      firstPrice &&
      lastPrice &&
      typeGuitarsArr.length === 0 &&
      countStringArr.length !== 0
    ) {
      setInnerGuitars(
        guitars.filter((item) => {
          return filterByPrice(item) && filterByString(item);
        })
      );
    }
    if (
      firstPrice &&
      lastPrice &&
      typeGuitarsArr.length !== 0 &&
      countStringArr.length === 0
    ) {
      setInnerGuitars(
        guitars.filter((item) => {
          return filterByPrice(item) && filterByType(item);
        })
      );
    }
    if (
      firstPrice &&
      lastPrice &&
      typeGuitarsArr.length === 0 &&
      countStringArr.length === 0
    ) {
      setInnerGuitars(
        guitars.filter((item) => {
          return filterByPrice(item);
        })
      );
    }

    if (
      firstPrice &&
      lastPrice &&
      typeGuitarsArr.length !== 0 &&
      countStringArr.length !== 0
    ) {
      setInnerGuitars(
        guitars.filter((item) => {
          return (
            filterByPrice(item) && filterByType(item) && filterByString(item)
          );
        })
      );
    }
    paginate(1)
  };

  useEffect(() => {
    isCheckedButtonShow  && filter();   
    dispatch(Operation.setCheckedButton(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckedButtonShow, dispatch]);

  const onChangeValueToArray = (e) => {
    const value = e.target.value;
    setTypeGuitarsArr(value);
    const idx = typeGuitarsArr.findIndex((item) => item === value);

    if (idx >= 0) {
      setTypeGuitarsArr(() => {
        return [
          ...typeGuitarsArr.slice(0, idx),
          ...typeGuitarsArr.slice(idx + 1),
        ];
      });
    }
    if (idx < 0) {
      setTypeGuitarsArr(() => {
        return [...typeGuitarsArr, value];
      });
    }
  };

  const onChangeValueToArray1 = (e) => {
    const value = e.target.value;
    setCountStringArr(value);
    const idx = countStringArr.findIndex((item) => item === value);

    if (idx >= 0) {
      setCountStringArr(() => {
        return [
          ...countStringArr.slice(0, idx),
          ...countStringArr.slice(idx + 1),
        ];
      });
    }
    if (idx < 0) {
      setCountStringArr(() => {
        return [...countStringArr, value];
      });
    }
  };

  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог</h1>

      <ul className="catalog__navigation">
        <li className="catalog__navigation-item">Главная</li>
        <li className="catalog__navigation-item">Каталог</li>
      </ul>

      <div className="catalog__content">
        <Aside
          onChangeValueToArray={onChangeValueToArray}
          onChangeValueToArray1={onChangeValueToArray1}
          typeGuitarsArr={typeGuitarsArr}
          firstPrice={firstPrice}
          lastPrice={lastPrice}
        />
        <GuitarList
          innerGuitars={innerGuitars}
          currentInnerGuitars={currentInnerGuitars}
          currentPage={currentPage}
        />
      </div>
      <Pagination
        innerGuitarsPerPage={innerGuitarsPerPage}
        totalGuitars={innerGuitars.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Catalog;
