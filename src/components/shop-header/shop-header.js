import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import {HeaderLinks} from "../../links";
import {useDispatch, useSelector} from "react-redux";
import {NameSpace} from "../../const";
import {Operation as CartOperation} from "../../store/cart/cart";

const ShopHeader = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state[NameSpace.CART]);
  return (
    <header className='header'>
      <div className="shop-header">
        <div className="container">
          <Link to="/" className="shop-header__logo" onClick={() => dispatch(CartOperation.isAlternateModalClose())}>
            <img src={Logo} alt="Логотип магазина" />
          </Link>
          <nav className="shop-header__nav">
            <ul className="shop-header__nav-list">
              {HeaderLinks.map((link, idx) => {
                return (
                  <li className="shop-header__nav-item" key={link + idx}>
                    <Link to="/" className="shop-header__nav-link" onClick={() => dispatch(CartOperation.isAlternateModalClose())}>
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="shop-header__menu">
            <ul className="shop-header__menu-list">
              <li className="shop-header__menu-item">
                <Link
                  to="/"
                  className="shop-header__menu-link shop-header__menu-link--hover"
                >
                  <svg width="14" height="17" stroke="black">
                    <use xlinkHref="#icon-point"></use>
                  </svg>
                </Link>
              </li>
              <li className="shop-header__menu-item">
                <Link to="/" className="shop-header__menu-link">
                  <svg width="14" height="14">
                    <use xlinkHref="#icon-search"></use>
                  </svg>
                </Link>
              </li>
              <li className="shop-header__menu-item">
                <Link to="/cart" className="shop-header__menu-link shop-header__menu-link-cart">
                  <svg width="16" height="19">
                    <use xlinkHref="#icon-cart"></use>
                  </svg>
                  <span className="counter">
                    {cartItems.length === 0 ? `` : cartItems.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__background"></div>
    </header>
  );
};

export default ShopHeader;
