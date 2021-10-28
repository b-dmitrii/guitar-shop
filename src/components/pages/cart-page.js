import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NameSpace } from "../../const";
import closeButton from "../../assets/images/icon_cross.svg";
import { Operation } from "../../store/cards/cards";
import { formatNumberToString } from "../../utils";
import ModalDelete from "../modal-delete/modal-delete";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [inputCoupon, setInputCoupon] = useState("");
  const { cartItems, isModalOpen } = useSelector(
    (state) => state[NameSpace.GUITARS]
  );
  console.log(isModalOpen);

  const dispatch = useDispatch();

  const inputChangedHandler = (e) => {
    return e.target.value;
  };

  const changeInputCouponHandler = (e) => {
    setInputCoupon(e.target.value);
  };

  const changeTotalPriceHandler = (value) => {
    if (value === "GITARAHIT") {
      setTotalPrice(totalPrice - totalPrice * 0.1);
    }

    if (value === "SUPERGITARA") {
      setTotalPrice(totalPrice - 700);
    }

    if (value === "GITARA2020") {
      if (totalPrice > 10000) {
        setTotalPrice(totalPrice - 3000);
      } else setTotalPrice(totalPrice - totalPrice * 0.3);
    }
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setTotalPrice("0");
    } else if (cartItems.length === 1) {
      setTotalPrice(cartItems[0].total);
    } else if (cartItems.length > 1) {
      const initialValue = 0;
      setTotalPrice(
        cartItems.reduce(
          (prev, cur) => parseInt(prev) + parseInt(cur.total),
          initialValue
        )
      );
    }
  }, [cartItems]);

  const deleteItem = (count, id, stateId) => {
    if (count > 1) {
      dispatch(Operation.guitarRemoveToCard(stateId));
    }

    if (count === 1) {
      dispatch(Operation.isModalOpen(id + 1));
    }
  };

  return (
    <main className="cart">
      <div className="container">
        <h2 className="cart__title">Корзина</h2>

        <ul className="cart__navigation">
          <li className="cart__navigation-item">Главная</li>
          <li className="cart__navigation-item">Каталог</li>
          <li className="cart__navigation-item">Оформляем</li>
        </ul>

        <ul className="cart__list">
          {cartItems.length === 0 ? (
            <li className="cart__list-empty">Корзина пуста</li>
          ) : (
            ""
          )}
          {cartItems.map((item, id) => {
            return (
              <li className="cart__list-item">
                <button
                  className="cart__list-item-delete"
                  onClick={() => dispatch(Operation.isModalOpen(id + 1))}
                >
                  <img src={closeButton} />
                </button>
                <img src={item.image} className="cart__list-img" />
                <div className="cart-description__list">
                  <div className="cart-description__list-item">
                    <h3 className="cart-description__list-title">
                      {`${item.type} ${item.name}`}
                    </h3>
                    <p className="cart-description__list-setnumber">{`Артикул: ${item.setNumber}`}</p>
                    <p className="cart-description__list-count">
                      {`${item.type}, ${item.countString} струнная`}
                    </p>
                  </div>
                </div>
                <span className="cart__list-item-price">{`${formatNumberToString(
                  item.price
                )} ₽`}</span>
                <div className="cart__list-item-counter">
                  <button
                    className="cart__list-item-decrement"
                    onClick={() => deleteItem(item.count, id, item.id)}
                  >
                    -
                  </button>
                  <input
                    value={item.count}
                    type="number"
                    onChange={(e) => inputChangedHandler(e)}
                  />
                  <button
                    className="cart__list-item-increment"
                    onClick={() =>
                      dispatch(Operation.guitarAddedToCart(item.id))
                    }
                  >
                    +
                  </button>
                </div>
                <span className="cart__list-item-totalprice">{`${formatNumberToString(
                  item.total
                )} ₽`}</span>
                <ModalDelete
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  setNumber={item.setNumber}
                  value={item.type}
                  countString={item.countString}
                  price={item.price}
                  count={item.count}
                  isModalOpen={isModalOpen}
                />
              </li>
            );
          })}
        </ul>
        <div className="cart__menu">
          <div className="cart__promocode">
            <h3 className="cart__promocode-title">Промокод на скидку</h3>
            <span>Введите свой промокод, если он у вас есть.</span>
            <div className="cart__promocode-wrapper">
              <input
                className="cart__promocode-input"
                type="text"
                placeholder="Введите промокод"
                onChange={(e) => changeInputCouponHandler(e)}
              />
              <button
                type="button"
                onClick={() => changeTotalPriceHandler(inputCoupon)}
              >
                Применить купон
              </button>
            </div>
          </div>
          <div className="cart__totalprice">
            <div className="cart__totalprice-wrapper">
              <span>Всего:</span>
              <span>{`${formatNumberToString(totalPrice)} ₽`}</span>
            </div>
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;