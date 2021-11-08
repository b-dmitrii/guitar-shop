import { combineReducers } from "redux";
import { NameSpace } from "../const";
import {reducer as GuitarReduser} from "./cards/cards";
import { reducer as CartReduser } from "./cart/cart";

const reducer = combineReducers({
  [NameSpace.GUITARS]: GuitarReduser,
  [NameSpace.CART]: CartReduser
});

export default reducer;
