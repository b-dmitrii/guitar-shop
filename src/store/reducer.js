import { combineReducers } from "redux";
import {reducer as GuitarReduser} from "./cards/cards";

const reducer = combineReducers({
  guitars: GuitarReduser,
});

export default reducer;
