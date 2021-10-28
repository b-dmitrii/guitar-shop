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

 

  return (
    <div className="aside">
      <h2 className="aside__title">Фильтр</h2>
      <form className="aside__form">
        <fieldset>
          <legend>Цена, ₽</legend>
          <div className="aside__form-price-area">
            <input
              type="text"
              placeholder="1 000"
              min="1000"
              value={firstPrice < 1000 ? firstPrice: firstPrice === 1000}
              onChange={(e) =>
                dispatch(Operation.changeFirstPrice(e.target.value))
              }
            />
            <span>-</span>
            <input
              type="text"
              placeholder="30 000"
              onChange={(e) =>
                dispatch(Operation.changeLastPrice(e.target.value))
              }
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Тип гитар</legend>
          {TypeGuitars.map((item) => {
            return (
              <div>
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
