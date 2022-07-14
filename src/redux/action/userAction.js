import { message } from "antd";
import { userService } from "../../services/userService";
import { SET_USER_INFO } from "../constants/constants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFO,
    payload: user,
  };
};

export const setUserInfoActionService = (
  dataLogin,
  handleSuccess = () => {},
  handleFail = () => {}
) => {
  return (dispatch) => {
    userService
      .postLogin(dataLogin)
      .then((res) => {
        handleSuccess();
        console.log(res);
        dispatch({
          type: SET_USER_INFO,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        handleFail(err.response.data);
      });
  };
};

export const setUserRegisterActionService = (
  dataRegister,
  handleSuccess = () => {},
  handleFail = () => {}
) => {
  return (dispatch) => {
    dataRegister.maNhom = "GP04";
    console.log(dataRegister);
    userService
      .postRegister(dataRegister)
      .then((res) => {
        handleSuccess();
        console.log("postRegister", res);
        dispatch({
          type: SET_USER_INFO,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
        handleFail(err.response.data);
      });
  };
};
