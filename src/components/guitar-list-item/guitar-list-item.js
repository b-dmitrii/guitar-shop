import React from "react";

import Rating from "../rating/rating";
import cartSvg from "../../assets/images/cart.svg";
import {useDispatch, useSelector} from "react-redux";
import {Operation as CartOperation} from "../../store/cart/cart";
import {formatNumberToString} from "../../utils";
import ModalBuy from "../modal-buy/modal-buy";

import {NameSpace} from "../../const";
import PropTypes from 'prop-types';

const GuitarListItem = ({guitar, itemId}) => {
  const {isModalOpen} = useSelector((state) => state[NameSpace.CART]);
  const {
    id,
    image,
    name,
    raiting,
    popularity,
    price,
    type,
    setNumber,
    countString,
  } = guitar;
  const dispatch = useDispatch();
  return (
    <div className="guitar-list__item">
      <img
        src={image}
        width="68"
        height="190"
        className="guitar-list__item-img"
        alt="изображение гитары"
      />
      <Rating value={raiting} popularity={popularity} />
      <div className="guitar-list__item-description-block">
        <span>{name}</span>
        <span>{`${formatNumberToString(price)} ₽`}</span>
      </div>
      <div className="guitar-list__item-buttons-block">
        <button
          type="button"
          className="guitar-list__item-button guitar-list__item-button--grey"
        >
          Подробнее
        </button>
        <button
          type="button"
          className="guitar-list__item-button guitar-list__item-button--brown"
          onClick={() => dispatch(CartOperation.isModalOpen(itemId))}
        >
          <img src={cartSvg} alt="cart icon" />
          Купить
        </button>
      </div>
      <ModalBuy
        id={id}
        image={type.image}
        name={name}
        setNumber={setNumber}
        value={type.value}
        countString={countString}
        price={price}
        isModalOpen={isModalOpen}
      />

    </div>
  );
};

GuitarListItem.propTypes = {
  guitar: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    raiting: PropTypes.number,
    type: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      image: PropTypes.string,
    }),
    popularity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    countString: PropTypes.number,
    setNumber: PropTypes.string,
  }),
  itemId: PropTypes.number
};

export default GuitarListItem;
