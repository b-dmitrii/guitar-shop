import { combineReducers } from "redux";
import { NameSpace } from "../const";
import {reducer as GuitarReduser} from "./cards/cards";

const reducer = combineReducers({
  [NameSpace.GUITARS]: GuitarReduser,
});

export default reducer;
