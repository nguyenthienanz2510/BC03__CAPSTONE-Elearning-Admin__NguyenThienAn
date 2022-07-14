import { message } from "antd";
import { info } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/action/spinnerComponentAction";
import { userService } from "../../services/userService";
import ModalCreateUser from "./ModalCreateUser/ModalCreateUser";
import TableUserManagementPage from "./TableUserManagementPage/TableUserManagementPage";

export default function UserManagementPage() {
  const [UserList, setUserList] = useState([]);
  const dispatch = useDispatch();
  let fetchUserList = () => {
    dispatch(handleStartSpinner());

    userService
      .getUserList()
      .then((res) => {
        let dataRaw = res.data.map((user) => {
          return {
            ...user,
            action: {
              onDelete: () => {
                dispatch(handleStartSpinner());
                console.log("yes");
                userService
                  .deleteUser(user.taiKhoan)
                  .then((res) => {
                    // console.log(res);
                    message.success("Đã xóa người dùng");
                    // window.location.href = "/";
                    fetchUserList();
                    dispatch(handleEndSpinner());
                  })
                  .catch((err) => {
                    err.response.data
                      ? message.error(err.response.data)
                      : message.error(
                          "Bạn chưa đăng nhập, vui lòng đăng nhập để thực hiện thao tác"
                        );

                    console.log(err);
                    dispatch(handleEndSpinner());
                  });
              },
              onEdit: () => {},
            },
          };
        });
        setUserList(dataRaw);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserList();
  }, []);
  return (
    <div className="min-h-screen p-5 ">
      <h2 className="text-3xl font-bold my-5 text-center text-color-primary">
        DANH SÁCH NGƯỜI DÙNG
      </h2>
      <div>
        <ModalCreateUser />
      </div>
      <div className="container mx-auto">
        <TableUserManagementPage UserList={UserList} />
      </div>
    </div>
  );
}
