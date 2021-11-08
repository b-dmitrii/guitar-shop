import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Operation } from "../../store/cards/cards";
import { TypeGuitars } from "../../const";

import { CountString } from "../../const";
import { NameSpaceGuitar } from "../../const";
import { NameSpace } from "../../const";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Aside = ({ firstPrice, lastPrice }) => {
  const dispatch = useDispatch();
  const {
    typeGuitarsArr,
    inputStringValue,
    inputTypeValue,
    countStringArr,
    isInputStringChecked,
    // isInputChecked,
    isDisabled,
  } = useSelector((state) => state[NameSpace.GUITARS]);

  let allString = [4, 6, 7, 12];

  for (let i = 0; i < typeGuitarsArr.length; i++) {
    allString = Array.from(
      new Set(
        NameSpaceGuitar[typeGuitarsArr[0]]
          .concat(NameSpaceGuitar[typeGuitarsArr[1]])
          .concat(NameSpaceGuitar[typeGuitarsArr[2]])
      )
    );
  }

 

  return (
    <div className="aside">
      <h1 className="aside__title">Фильтр</h1>
      <form className="aside__form">
        <fieldset>
          <legend>Цена, ₽</legend>
          <div className="aside__form-price-area">
            <input
              className="aside__form-price-input"
              type="number"
              placeholder="1 000"
              value={firstPrice < 0 ? "" : firstPrice}
              onChange={(e) => {
                dispatch(Operation.changeFirstPrice(e.target.value));
              }}
              onBlur={() => {
                return !!lastPrice.length &&
                  lastPrice.length <= firstPrice.length &&
                  firstPrice > lastPrice
                  ? dispatch(Operation.changeLastPrice(firstPrice))
                  : null;
              }}
            />
            <input
              className="aside__form-price-input"
              type="number"
              placeholder="30 000"
              value={lastPrice < 0 ? "" : lastPrice}
              onChange={(e) => {
                dispatch(Operation.changeLastPrice(e.target.value));
              }}
              onBlur={() => {
                return !!firstPrice.length &&
                  firstPrice.length >= lastPrice.length &&
                  firstPrice > lastPrice
                  ? dispatch(Operation.changeFirstPrice(lastPrice))
                  : null;
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Тип гитар</legend>
          {TypeGuitars.map((item, idx) => {
            return (
              <div key={item + idx}>
                <input
                  type="checkbox"
                  id={item.type}
                  value={item.type}
                  onClick={(e) =>
                    dispatch(Operation.changeTypeArray(e.target.value))
                  }
                 
                />
                <label htmlFor={item.type}>{item.name}</label>
              </div>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Количество струн</legend>
          {CountString.map((item) => {
            return (
              <div>
                <input
                  className="string"
                  type="checkbox"
                  id={item.name}
                  value={item.count}
                  disabled={allString ? !allString.includes(item.count) : ""}
                  onClick={(e) =>
                    dispatch(Operation.changeCountStringArray(e.target.value))
                  }
                />
                <label htmlFor={item.name}>{item.count}</label>
              </div>
            );
          })}
        </fieldset>
      </form>
    </div>
  );
};

Aside.propTypes = {
  firstPrice: PropTypes.string,
  lastPrice: PropTypes.string,
};

export default Aside;
