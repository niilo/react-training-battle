import { combineReducers } from "redux";
import battleReducer from "./battle/reducer";
import resultsReducer from "./results/reducer";

const rootReducer = combineReducers({
  battle: battleReducer,
  results: resultsReducer
});

export default rootReducer;
