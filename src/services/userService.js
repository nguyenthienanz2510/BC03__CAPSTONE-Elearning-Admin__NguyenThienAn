import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";
import { localStorageService } from "./localStorageService";

export const userService = {
  // https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap
  getUserList: () => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },

  createUser: (data) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyNguoiDung/ThemNguoiDung`,
      data: data,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization:
          "Bearer " + localStorageService.getUserInfo()?.accessToken,
      },
    });
  },
  deleteUser: (taiKhoan) => {
    return axios({
      method: "DELETE",
      url: `${BASE_URL}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization:
          "Bearer " + localStorageService.getUserInfo()?.accessToken,
      },
    });
  },
  postLogin: (dataLogin) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      data: dataLogin,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  postRegister: (dataRegister) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
      data: dataRegister,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  postUserInfo: () => {
    return axios.post(
      `${BASE_URL}/api/QuanLyNguoiDung/ThongTinNguoiDung`,
      null,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
          Authorization:
            "Bearer " + localStorageService.getUserInfo()?.accessToken,
        },
      }
    );
  },
};
