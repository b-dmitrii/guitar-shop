import React, { useState, useEffect, useCallback } from "react";
import Aside from "../aside/aside";
import GuitarList from "../guitar-list/guitar-list";
import { NameSpace } from "../../const";
import { useDispatch, useSelector } from "react-redux";
import { Operation } from "../../store/cards/cards";

const Catalog = () => {
  const dispatch = useDispatch();
  const {
    guitars,
    firstPrice,
    lastPrice,
    isCheckedButtonShow,
    isInputChecked,
    isInputStringChecked,
    
  } = useSelector((state) => state[NameSpace.GUITARS]);

  const [typeGuitarsArr, setTypeGuitarsArr] = useState([]);
  const [countStringArr, setCountStringArr] = useState([]);

  const [innerGuitars, setInnerGuitars] = useState([]);

  useEffect(() => {
    setInnerGuitars(guitars);
  }, [guitars]);

  const filterByPrice = (item) =>
    parseInt(item.price) >= parseInt(firstPrice) &&
    parseInt(item.price) <= parseInt(lastPrice);

  const filterByType = (item) => typeGuitarsArr.includes(item.type.name);

  const filterByString = (item) => countStringArr.includes(item.countString);

  const filter = () => {
    if (firstPrice && lastPrice && isInputChecked && isInputStringChecked) {
      setInnerGuitars(
        innerGuitars.filter((item) => {
          return (
            filterByPrice(item) && filterByType(item) && filterByString(item)
          );
        })
      );
    } else if (firstPrice && lastPrice && isInputChecked) {
      setInnerGuitars(
        innerGuitars.filter((item) => {
          return filterByPrice(item) && filterByType(item);
        })
      );
    } else if (firstPrice && lastPrice && isInputStringChecked) {
      setInnerGuitars(
        innerGuitars.filter((item) => {
          return filterByPrice(item) && filterByString(item);
        })
      );
    } else if (firstPrice && lastPrice) {
      setInnerGuitars(
        innerGuitars.filter((item) => {
          return filterByPrice(item);
        })
      );
    } else if (isInputChecked && isInputStringChecked) {
      setInnerGuitars(
        innerGuitars.filter((item) => {
          return filterByType(item) && filterByString(item);
        })
      );
    } else if (isInputChecked) {
      setInnerGuitars(
        innerGuitars.filter((item) => {
          return filterByType(item);
        })
      );
    } else if (isInputStringChecked)
      setInnerGuitars(
        innerGuitars.filter((item) => {
          return filterByString(item);
        })
      );

    if (
      !firstPrice &&
      !lastPrice &&
      typeGuitarsArr.length === 0 &&
      countStringArr.length === 0
    ) {
      setInnerGuitars(guitars);
    }
  };

  useEffect(() => {
    isCheckedButtonShow && filter();

    dispatch(Operation.setCheckedButton(false));
  }, [isCheckedButtonShow]);

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
      <h2 className="catalog__title">Каталог</h2>

      <ul className='catalog__navigation'>
        <li className='catalog__navigation-item'>Главная</li>
        <li className='catalog__navigation-item'>Каталог</li>
      </ul>

      <div className="catalog__content">
        <Aside
          onChangeValueToArray={onChangeValueToArray}
          onChangeValueToArray1={onChangeValueToArray1}
          typeGuitarsArr={typeGuitarsArr}
          firstPrice={firstPrice}
          lastPrice={lastPrice}
        />
        <GuitarList innerGuitars={innerGuitars} />
      </div>
    </div>
  );
};

export default Catalog;
