import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";
import { localStorageService } from "./localStorageService";

export const courseService = {
  getCourses: () => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getSearchListCourses: (input) => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${input}&MaNhom=GP01`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getCategoryCourse: () => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getCourseDetail: (maKhoaHoc) => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getCourseByCategory: (maDanhMuc) => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  postRegisterCourse: (data) => {
    return axios.post(`${BASE_URL}/api/QuanLyKhoaHoc/DangKyKhoaHoc`, data, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization:
          "Bearer " + localStorageService.getUserInfo()?.accessToken,
      },
    });
  },
  postCancelRegisterCourse: (data) => {
    return axios.post(`${BASE_URL}/api/QuanLyKhoaHoc/HuyGhiDanh`, data, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization:
          "Bearer " + localStorageService.getUserInfo()?.accessToken,
      },
    });
  },
};
