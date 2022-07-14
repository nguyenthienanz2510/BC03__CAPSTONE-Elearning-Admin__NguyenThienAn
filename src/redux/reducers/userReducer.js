import { localStorageService } from "../../services/localStorageService";
import { SET_USER_INFO } from "../constants/constants";

let initialState = {
  userInfo: localStorageService.getUserInfo(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      state.userInfo = action.payload;
      // console.log("userReducer: ", action.payload);
      localStorageService.setUserInfo(action.payload);
      break;
    }
    default:
      return state;
  }
};
