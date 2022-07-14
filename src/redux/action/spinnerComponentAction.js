import { END_SPINNER, START_SPINNER } from "../constants/constants";

export const handleStartSpinner = () => {
  return {
    type: START_SPINNER,
  };
};

export const handleEndSpinner = () => {
  return {
    type: END_SPINNER,
  };
};
