import React, { useEffect } from "react";

import { formatNumberToString } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { NameSpace } from "../../const";
import { Operation } from "../../store/cards/cards";
import closeButton from "../../assets/images/icon_cross.svg";

const ModalDelete = ({
  image,
  name,
  setNumber,
  value,
  countString,
  count,
  price,
  isModalOpen,
  id,
}) => {
  const dispatch = useDispatch();
  const { itemId } = useSelector((state) => state[NameSpace.GUITARS]);

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dispatch(Operation.isAlternateModalClose());
      }
    });
  }, [dispatch]);

  return (
    isModalOpen &&
    itemId === id && (
      <div className="modal-delete">
        <div
          className="modal-delete__overlay"
          onClick={() => dispatch(Operation.isAlternateModalClose())}
        >
          <div className="modal-delete__content">
            <h1>Удалить этот товар?</h1>
            <button
              className="modal-delete__close"
              onClick={() => dispatch(Operation.isAlternateModalClose())}
            >
              <img src={closeButton} alt="кнопка закрытия модального окна" />
            </button>
            <div className="modal-delete__content-wrapper">
              <div className="modal-delete__content-description">
                <img src={image} alt="изображение гитары" />
                <div className="modal-delete__content-description-wrapper">
                  <h3 className="modal-delete__content-description-title">
                    {`${value} ${name}`}
                  </h3>
                  <p className="modal-delete__content-description-setnumber">{`Артикул: ${setNumber}`}</p>
                  <p className="modal-delete__content-description-count">
                    {`${value}, ${countString} струнная`}
                  </p>
                  <p className="modal-delete__content-description-price">{`Цена: ${formatNumberToString(
                    price
                  )} ₽`}</p>
                </div>
              </div>
              <div className='modal-delete__button-area'>
                <button
                  className="modal-delete__button-delete"
                  onClick={() => dispatch(Operation.allGuitarsRemoveToCard(id))}
                >
                  Удалить товар
                </button>
                <button
                  className="modal-delete__button-processed"
                  onClick={() => dispatch(Operation.isModalClose())}
                >
                  Продолжить покупки
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalDelete;
