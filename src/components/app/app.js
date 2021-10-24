import React, { useEffect } from "react";
import ShopHeader from "../shop-header/shop-header";
import ShopFooter from "../shop-footer/shop-footer";
import Main from "../main/main";
import { useDispatch } from "react-redux";
import {GuitarshopService} from '../../services/guitarshop-service'
import { Operation } from "../../store/cards/cards";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operation.loadGuitars(GuitarshopService))
  },[dispatch])

  return (
    <div>
      <ShopHeader />
      <Main />
      <ShopFooter />
    </div>
  );
};

export default App;
