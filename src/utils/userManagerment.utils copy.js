import { Button, message, Tag } from "antd";
import { userService } from "../services/userService";

export const headerTableUser = [
  {
    title: "Tài Khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    render: (userName) => {
      return <span className="text-blue-500">{userName}</span>;
    },
  },
  {
    title: "Mật khẩu",
    dataIndex: "matKhau",
    key: "matKhau",
  },
  {
    title: "Họ tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDT",
    key: "soDT",
  },
  {
    title: "Loại người dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (type) => {
      if (type === "QuanTri") {
        return <Tag color="lime">Quản trị</Tag>;
      } else {
        return <Tag color="blue">Khách hàng</Tag>;
      }
    },
  },

  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
    render: ({ onDelete }, record) => {
      // render nhan vao hai tham so: du lieu cua dataIndex va du lieu cua ca Row trong table
      // console.log(taiKhoan);
      return (
        <div>
          <Button type="primary">Sửa</Button>
          <Button
            onClick={() => {
              userService
                .deleteUser(record.taiKhoan)
                .then((res) => {
                  message.success("Đã xóa người dùng");
                  // window.location.href = "/";
                  onDelete();
                  console.log(res);
                })
                .catch((err) => {
                  message.error(
                    "co bien roi dai vuong oi:",
                    err.response.data.content
                  );
                  console.log("co bien roi dai vuong oi", err);
                });
            }}
            type="primary"
            danger
          >
            Xóa
          </Button>
        </div>
      );
    },
  },
];

// {
//     "taiKhoan": "abc123",
//     "hoTen": "Hoang Minh",
//     "email": "khongco@gmail.com",
//     "soDT": "090909090933",
//     "matKhau": "123456",
//     "maLoaiNguoiDung": "KhachHang"
// }
