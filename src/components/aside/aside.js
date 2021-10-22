import React from "react";

const Aside = () => {
  return (
    <div className='aside'>
    <h2 className='aside__title'>Фильтр</h2>
    <form className="aside__form">
      <fieldset>
        <legend>Цена, ₽</legend>
        <div className="aside__form-price-area">
          <input type="text" placeholder='1 000'/>
          <span>-</span>
          <input type="text" placeholder='30 000' />
        </div>
      </fieldset>
      <fieldset>
        <legend>Тип гитар</legend>
        <div>
          <input type="checkbox" id="acustic" />
          <label htmlFor="acustic">Акустические гитары</label>
        </div>
        <div>
          <input type="checkbox" id="electro" />
          <label htmlFor="electro">Электрогитары</label>
        </div>
        <div>
          <input type="checkbox" id="ukulele" />
          <label htmlFor="ukulele">Укулеле</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Количество струн</legend>
        <div>
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
          <input type="checkbox" id="twelve" disabled />
          <label htmlFor="twelve">12</label>
        </div>
      </fieldset>
      <button type='button' className='aside__button'>показать</button>
    </form>
    </div>

    
    
  );
};

export default Aside;
