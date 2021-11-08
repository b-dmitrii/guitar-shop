import React from "react";

import { Operation } from "../../store/cards/cards";
import closeButton from "../../assets/images/icon_cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { NameSpace } from "../../const";
import { Link } from "react-router-dom";

const AlternateModal = () => {
  const dispatch = useDispatch();
  const { isAlternateModalOpen } = useSelector(
    (state) => state[NameSpace.CART]
  );  

  return (
    isAlternateModalOpen && (
      <div className="alternate-modal">
        <div
          className="alternate-modal__overlay"
          onClick={() => dispatch(Operation.isAlternateModalClose())}
        >
          <div className="alternate-modal__content">
            <button
              className="alternate-modal__close"
              onClick={() => dispatch(Operation.isAlternateModalClose())}
            >
              <img src={closeButton} alt="кнопка закрытия модального окна" />
            </button>
            <h1 className="alternate-modal-title">
              Товар успешно добавлен в корзину
            </h1>
            <div className="alternate-modal-buttons-area">
              <div className="alternate-modal-buttons">
                <Link to="/cart">Перейти в корзину</Link>
                <button type="button">Продолжить покупки</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AlternateModal;
