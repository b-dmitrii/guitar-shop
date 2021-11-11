import React from "react";
import {Link} from "react-router-dom";
import {FooterLinks} from "../../links";
import LogoFooter from "../../assets/images/logo-footer.svg";
import iconPhone from '../../assets/images/icon_phone.svg';
import iconClock from '../../assets/images/icon_clock.svg';
import { useDispatch } from "react-redux";
import {Operation as CartOperation} from "../../store/cart/cart";

const ShopFooter = () => {
  const dispatch = useDispatch();
  return (
    <div className="shop-footer">
      <div className="shop-footer__background"></div>
      <div className="shop-footer__wrapper">
        <div className="container">
          <div className="shop-footer__social">
            <Link to="/" className="shop-footer__logo" onClick={() => dispatch(CartOperation.isAlternateModalClose())}>
              <img src={LogoFooter} alt="Логотип магазина" />
            </Link>
            <ul className="shop-footer__social-list">
              <li>
                <Link to="/" className="shop-footer__social-link">
                  <svg width="24" height="24">
                    <use xlinkHref="#fb-icon"></use>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/" className="shop-footer__social-link">
                  <svg width="24" height="24">
                    <use xlinkHref="#inst-icon"></use>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/" className="shop-footer__social-link">
                  <svg width="24" height="24">
                    <use xlinkHref="#twit-icon"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="shop-footer__about-us">
            <h2>О нас</h2>
            <ul className="shop-footer__about-us-list">
              {FooterLinks.ABOUT_US.map((item, idx) => {
                return (
                  <li key={item + idx} className="shop-footer__about-us-item">
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="shop-footer__catalog">
            <h2>Каталог</h2>
            <ul className="shop-footer__catalog-list">
              {FooterLinks.catalog.map((item, idx) => {
                return (
                  <li key={item + idx} className="shop-footer__catalog-item">
                    <Link to='/'>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="shop-footer__information">
            <h2>Информация</h2>
            <ul className="shop-footer__information-list">
              {FooterLinks.information.map((item, idx) => {
                return (
                  <li
                    key={item + idx}
                    className="shop-footer__information-item"
                  >
                    <Link to='/'>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="shop-footer__contacts">
            <h2>Контакты</h2>
            <ul className="shop-footer__contacts-list">
              <li className="shop-footer__contacts-item">
                <p>
                  г. Санкт-Петербург, <br />
                  м. Невский проспект, <br />
                  ул. Казанская 6.<br />
                  <img src={iconPhone} alt='иконка телефона'/>
                  <a href='tel:8-812-500-50-50'>8-812-500-50-50</a>
                  <br />
                </p>

              </li>
              <li className="shop-footer__contacts-item">
                <p>
                  Режим работы: <br />
                  <img src={iconClock} alt='иконка часов'/>
                  <span>с 11:00 до 20:00</span>, <br />
                  без выходных.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFooter;
