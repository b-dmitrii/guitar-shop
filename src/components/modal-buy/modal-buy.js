import React, {useEffect} from "react";

import {formatNumberToString} from "../../utils";
import {useDispatch, useSelector} from "react-redux";
import {NameSpace} from "../../const";
import {Operation as CartOperation} from "../../store/cart/cart";
import closeButton from "../../assets/images/icon_cross.svg";
import PropTypes from "prop-types";

const ModalBuy = ({
  image,
  name,
  setNumber,
  value,
  countString,
  price,
  isModalOpen,
  id,
}) => {
  const dispatch = useDispatch();
  const {itemId} = useSelector((state) => state[NameSpace.CART]);

  useEffect(() => {
    document.addEventListener(`keydown`, function (e) {
      if (e.key === `Escape`) {
        dispatch(CartOperation.isAlternateModalClose());
      }
    });
    const body = document.querySelector(`body`);
    body.style.overflow = isModalOpen ? `hidden` : `auto`;
  }, [dispatch, isModalOpen]);
  return (
    isModalOpen &&
    itemId === id && (
      <div className="modal">
        <div
          className="modal__overlay"
          onClick={() => dispatch(CartOperation.isModalClose())}
        >
          <div
            className="modal__content"
          >
            <h1>Добавить товар в корзину</h1>
            <button
              className="modal__close"
              onClick={() => dispatch(CartOperation.isModalClose())}
            >
              <img src={closeButton} alt="кнопка закрытия модального окна" />
            </button>
            <div className="modal__content-wrapper">
              <div className="modal__content-description">
                <img src={image} alt="изображение гитары" />
                <div className="modal__content-description-wrapper">
                  <h3 className="modal__content-description-title">
                    {`Гитара ${name}`}
                  </h3>
                  <p className="modal__content-description-setnumber">{`Артикул: ${setNumber}`}</p>
                  <p className="modal__content-description-count">
                    {`${value}, ${countString} струнная`}
                  </p>
                  <p className="modal__content-description-price">{`Цена: ${formatNumberToString(
                      price
                  )} ₽`}</p>
                </div>
              </div>
              <div>
                <button
                  className="modal__button"
                  onClick={() => dispatch(CartOperation.guitarAddedToCart(id))}
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

ModalBuy.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  setNumber: PropTypes.string,
  value: PropTypes.string,
  countString: PropTypes.number,
  price: PropTypes.number,
  isModalOpen: PropTypes.bool,
  id: PropTypes.number,
};

export default ModalBuy;
