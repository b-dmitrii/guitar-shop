import React, {useEffect} from "react";
import ShopHeader from "../shop-header/shop-header";
import ShopFooter from "../shop-footer/shop-footer";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import {useDispatch} from "react-redux";
import {GuitarshopService} from "../../services/guitarshop-service";
import {Operation} from "../../store/cards/cards";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operation.loadGuitars(GuitarshopService));
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <ShopHeader />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
        </Switch>

        <ShopFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
