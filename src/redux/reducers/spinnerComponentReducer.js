import { END_SPINNER, START_SPINNER } from "../constants/constants";

let initialState = {
  isLoading: false,
};
export const spinnerComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SPINNER: {
      // console.log("START_SPINNER");
      state.isLoading = true;
      return { ...state };
    }
    case END_SPINNER: {
      // console.log("END_SPINNER");
      state.isLoading = false;
      return { ...state };
    }
    default:
      return state;
  }
};
