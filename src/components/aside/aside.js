import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NameSpace } from "../../const";
import { Operation } from "../../store/cards/cards";
import { TypeGuitars } from "../../const";
import { NameSpaceGuitar } from "../../const";
import { CountString } from "../../const";

const Aside = () => {
  const [firstPrice, setFirstPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [typeGuitar, setTypeGuitar] = useState([]);
  const dispatch = useDispatch();
  const { guitars } = useSelector((state) => state[NameSpace.GUITARS]);
  const [filterGuitars, setFilterGuitars] = useState([]);

  const filterByPrice = guitars.filter((item) => {
    return (
      parseInt(item.price.replace(/\s+/g, "")) >= parseInt(firstPrice) &&
      parseInt(item.price.replace(/\s+/g, "")) <= parseInt(lastPrice)
    );
  });

  const filterByType = guitars.filter((item) => {
    const filterByType = typeGuitar.includes(item.type);

    return filterByType;
  });

  const onBlaBla = (e) => {
    const value = e.target.value;
    setTypeGuitar(value);
    const idx = typeGuitar.findIndex((item) => item === value);

    if (idx >= 0) {
      setTypeGuitar(() => {
        return [...typeGuitar.slice(0, idx), ...typeGuitar.slice(idx + 1)];
      });
    } else if (idx < 0) {
      setTypeGuitar(() => {
        return [...typeGuitar, value];
      });
    }
  };

  const onFilterGuitars = () => {
    dispatch(Operation.setFilterGuitars(filterByPrice));
  
  };

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
              onChange={(e) => setFirstPrice(e.target.value)}
            />
            <span>-</span>
            <input
              type="text"
              placeholder="30 000"
              onChange={(e) => setLastPrice(e.target.value)}
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
                  onClick={onBlaBla}
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
                <input type="checkbox" id={item.name} />
                <label htmlFor={item.name}>{item.count}</label>
              </div>
            );
          })}
          {/* <div>
            <input type="checkbox" id="four" />
            <label htmlFor="four">4</label>
          </div>
          <div>
            <input type="checkbox" id="six" />
            <label htmlFor="six">6</label>
          </div>
          <div>
            <input type="checkbox" id="seven" />
            <label htmlFor="seven">7</label>
          </div>
          <div>
            <input type="checkbox" id="twelve" />
            <label htmlFor="twelve">12</label>
          </div> */}
        </fieldset>
        <button
          type="button"
          className="aside__button"
          onClick={onFilterGuitars}
        >
          показать
        </button>
      </form>
    </div>
  );
};
export default Aside;
