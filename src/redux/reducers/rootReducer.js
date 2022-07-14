import { combineReducers } from "redux";
import { spinnerComponentReducer } from "./spinnerComponentReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  spinnerComponentReducer: spinnerComponentReducer,
  userReducer: userReducer,
});
