import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/action/spinnerComponentAction";
import { userService } from "../../services/userService";
import MyCourseItem from "./MyCourseItem";

export default function UserPage() {
  const [userDetail, setUserDetail] = useState({});
  console.log(userDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(handleStartSpinner());
    userService
      .postUserInfo()
      .then((res) => {
        // console.log(res);
        setUserDetail(res.data);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  }, []);

  return (
    <div className="min-h-screen pt-20 container mx-auto">
      <div className="border-b py-5 mb-5">
        <h2 className="text-xl font-bold">Thông tin cá nhân</h2>
        <ul className="my-5 text-base font-base">
          <li className="leading-8">
            <span className="w-32 inline-block">Họ tên: </span>
            <span>{userDetail.hoTen}</span>
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Số điện thoại: </span>
            <span>{userDetail.soDT}</span>
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Email: </span>
            <span>{userDetail.email}</span>
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Tài khoản: </span>
            <span>{userDetail.taiKhoan}</span>
          </li>
          <li className="leading-8">
            <span className="w-32 inline-block">Mật khẩu: </span>
            <span>{userDetail.matKhau}</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold">Khóa học của tôi</h2>
        <div className="flex flex-wrap py-6">
          {userDetail.chiTietKhoaHocGhiDanh ? (
            userDetail.chiTietKhoaHocGhiDanh.map((course, index) => {
              return <MyCourseItem key={index} course={course} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
