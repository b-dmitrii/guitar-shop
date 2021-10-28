import React, { useEffect } from "react";

import { formatNumberToString } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { NameSpace } from "../../const";
import { Operation } from "../../store/cards/cards";
import closeButton from "../../assets/images/icon_cross.svg";

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
  const { itemId } = useSelector((state) => state[NameSpace.GUITARS]);
  
  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dispatch(Operation.isModalClose());
      }
    });
  }, [dispatch]);

  return (
    isModalOpen &&
    itemId == id && (
      <div className="modal">
        <div
          className="modal__overlay"
          onClick={() => dispatch(Operation.isModalClose())}
        >
          <div className="modal__content">
            <h1>Добавить товар в корзину</h1>
            <button
              className="modal__close"
              onClick={() => dispatch(Operation.isModalClose())}
            >
              <img src={closeButton} />
            </button>
            <div className="modal__content-wrapper">
              <div className="modal__content-description">
                <img src={image} />
                <div className="modal__content-description-wrapper">
                  <h3 className="modal__content-description-title">
                    {`${value} ${name}`}
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
                  onClick={() => dispatch(Operation.guitarAddedToCart(id))}
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

export default ModalBuy;
