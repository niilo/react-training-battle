import { combineReducers } from "redux";
import battleReducer from "./battle/reducer";

const rootReducer = combineReducers({
  battle: battleReducer
});

export default rootReducer;
