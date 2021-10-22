import React from "react";

import Rating from "../rating/rating";
import cartSvg from '../../assets/images/cart.svg'


const GuitarListItem = ({guitar}) => {
   
    const { image, name, raiting, popularity, price} = guitar;
    return (
        <div className='guitar-list__item'>
            <img  src={image} width='68' height='190' className='guitar-list__item-img' alt='изображение гитары'/>
            <Rating value={raiting} popularity={popularity}/>
            <div className='guitar-list__item-description-block'>
            <span>{name}</span>
            <span>{`${price} ₽`}</span>
            </div>
            <div className='guitar-list__item-buttons-block'>
                <button type='button' className='guitar-list__item-button guitar-list__item-button--grey'>Подробнее</button>
                <button type='button' className='guitar-list__item-button guitar-list__item-button--brown'><img src={cartSvg} alt='cart icon'/>Купить</button>
            </div>
            
            
        </div>
    )
}

export default GuitarListItem;