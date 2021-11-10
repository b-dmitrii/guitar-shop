import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NameSpace} from "../../const";
import closeButton from "../../assets/images/icon_cross.svg";
import {Operation} from "../../store/cards/cards";
import {Operation as CartOperation} from "../../store/cart/cart";
import {formatNumberToString} from "../../utils";
import ModalDelete from "../modal-delete/modal-delete";
import {Link} from "react-router-dom";

const CartPage = () => {
  const [price, setPrice] = useState(``);
  useEffect(() => {
    setTotalPrice(price);
  }, [price]);
  const [totalPrice, setTotalPrice] = useState(``);
  const [inputCoupon, setInputCoupon] = useState(``);
  const {cartItems, isModalOpen} = useSelector(
      (state) => state[NameSpace.CART]
  );

  const dispatch = useDispatch();

  const inputChangedHandler = (e) => {
    return e.target.value;
  };

  const changeInputCouponHandler = (e) => {
    setInputCoupon(e.target.value);
  };

  const changeTotalPriceHandler = (value) => {
    if (value === `GITARAHIT`) {
      setTotalPrice(price - price * 0.1);
    } else if (value === `SUPERGITARA`) {
      setTotalPrice(price - 700);
    } else if (value === `GITARA2020`) {
      if (price > 10000) {
        setTotalPrice(price - 3000);
      } else {
        setTotalPrice(price - price * 0.3);
      }
    }
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setPrice(`0`);
    } else if (cartItems.length === 1) {
      setPrice(cartItems[0].total);
    } else if (cartItems.length > 1) {
      const initialValue = 0;
      setPrice(
          cartItems.reduce(
              (prev, cur) => parseInt(prev, 10) + parseInt(cur.total, 10),
              initialValue
          )
      );
    }
  }, [cartItems]);

  const deleteItem = (count, stateId) => {
    if (count > 1) {
      dispatch(CartOperation.guitarRemoveToCard(stateId));
    }

    if (count === 1) {
      dispatch(Operation.isModalOpen(stateId));
    }
  };

  return (
    <main className="cart">
      <div className="container">
        <h1 className="cart__title">Корзина</h1>

        <ul className="cart__navigation">
          <li className="cart__navigation-item">Главная</li>
          <li className="cart__navigation-item">Каталог</li>
          <li className="cart__navigation-item">Оформляем</li>
        </ul>

        <ul className="cart__list">
          {cartItems.length === 0 ? (
            <li className="cart__list-empty">Корзина пуста</li>
          ) : (
            ``
          )}
          {cartItems.map((item, idx) => {
            return (
              <li key={item + idx} className="cart__list-item">
                <button
                  className="cart__list-item-delete"
                  onClick={() => dispatch(Operation.isModalOpen(item.id))}
                >
                  <img src={closeButton} alt="кнопка удаления элемента" />
                </button>
                <img
                  src={item.image}
                  className="cart__list-img"
                  alt="изображение гитары"
                  width='48px'
                  height='124px'
                />
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
                    onClick={() => deleteItem(item.count, item.id)}
                  >

                  </button>
                  <input
                    value={item.count}
                    type="number"
                    onChange={(e) => inputChangedHandler(e)}
                  />
                  <button
                    className="cart__list-item-increment"
                    onClick={() =>
                      dispatch(CartOperation.guitarAddedToCart(item.id))
                    }
                  >

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
            <Link to='/'>Оформить заказ</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
