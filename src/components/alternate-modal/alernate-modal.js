import React, {useEffect} from "react";

import {Operation as CartOperation} from "../../store/cart/cart";
import closeButton from "../../assets/images/icon_cross.svg";
import {useDispatch, useSelector} from "react-redux";
import {NameSpace} from "../../const";
import {Link} from "react-router-dom";

const AlternateModal = () => {
  const dispatch = useDispatch();
  const {isAlternateModalOpen} = useSelector(
      (state) => state[NameSpace.CART]
  );

  useEffect(() => {
    const body = document.querySelector(`body`);
    body.style.overflow = isAlternateModalOpen ? `hidden` : `auto`;
  }, [isAlternateModalOpen]);

  return (
    isAlternateModalOpen && (
      <div className="alternate-modal">
        <div
          className="alternate-modal__overlay"
          onClick={() => dispatch(CartOperation.isAlternateModalClose())}
        >
          <div
            className="alternate-modal__content"
          >
            <button
              className="alternate-modal__close"
              onClick={() => dispatch(CartOperation.isAlternateModalClose())}
            >
              <img src={closeButton} alt="кнопка закрытия модального окна" />
            </button>
            <h1 className="alternate-modal-title">
              Товар успешно добавлен в корзину
            </h1>
            <div className="alternate-modal-buttons-area">
              <div className="alternate-modal-buttons">
                <Link to="/cart" onClick={() => dispatch(CartOperation.isAlternateModalClose())}>Перейти в корзину</Link>
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
