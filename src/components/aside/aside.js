import React from "react";
import { useDispatch } from "react-redux";

import { Operation } from "../../store/cards/cards";
import { TypeGuitars } from "../../const";

import { CountString } from "../../const";
import { NameSpaceGuitar } from "../../const";

const Aside = ({
  onChangeValueToArray,
  typeGuitarsArr,
  onChangeValueToArray1,
  firstPrice,
  lastPrice,
}) => {
  const dispatch = useDispatch();

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
  console.log(`firstPrice ---  `, firstPrice);
  console.log(`lastPrice ---- `, lastPrice);
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

                if (
                  !!lastPrice.length &&
                  e.target.value.length >= lastPrice.length &&
                  e.target.value > lastPrice
                ) {
                  setTimeout(() => {
                    dispatch(Operation.changeFirstPrice(lastPrice));
                  }, 2500);
                } else {
                  return null;
                }
              }}
              // onBlur={() => {
              //   return !!lastPrice.length &&
              //     firstPrice.length >= lastPrice.length &&
              //     firstPrice > lastPrice
              //     ? dispatch(Operation.changeFirstPrice(lastPrice))
              //     : null;
              // }}
            />
            <span>-</span>
            <input
              className="aside__form-price-input"
              type="number"
              placeholder="30 000"
              value={lastPrice < 0 ? "" : lastPrice}
              onChange={(e) => {
                dispatch(Operation.changeLastPrice(e.target.value));

                if (
                  !!firstPrice.length &&
                  e.target.value.length <= firstPrice.length &&
                  firstPrice > e.target.value
                ) {
                  setTimeout(() => {
                    dispatch(Operation.changeLastPrice(firstPrice));
                  }, 2500);
                } else {
                  return null;
                }
              }}
              // onBlur={() => {
              //   return lastPrice.length <= firstPrice.length &&
              //     firstPrice > lastPrice
              //     ? dispatch(Operation.changeLastPrice(firstPrice))
              //     : null;
              // }}
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
                  onChange={(e) => onChangeValueToArray(e)}
                  onClick={(e) =>
                    dispatch(Operation.changeInputTypeValue(e.target.value))
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
                  type="checkbox"
                  id={item.name}
                  value={String(item.count)}
                  disabled={allString ? !allString.includes(item.count) : false}
                  onChange={(e) => onChangeValueToArray1(e)}
                  onClick={(e) =>
                    dispatch(Operation.changeInputStringValue(e.target.value))
                  }
                />
                <label htmlFor={item.name}>{item.count}</label>
              </div>
            );
          })}
        </fieldset>
        <button
          type="button"
          className="aside__button"
          onClick={() => dispatch(Operation.setCheckedButton(true))}
        >
          показать
        </button>
      </form>
    </div>
  );
};
export default Aside;
