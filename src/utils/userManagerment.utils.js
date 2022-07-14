import { Button, Tag } from "antd";

export const headerTableUser = [
  {
    title: "Tài Khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    render: (userName) => {
      return <span className="">{userName}</span>;
    },
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
    dataIndex: "soDt",
    key: "soDt",
  },
  {
    title: "Loại người dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (type) => {
      if (type === "GV") {
        return <Tag color="green">Giáo vụ</Tag>;
      } else {
        return <Tag color="blue">Học viên</Tag>;
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
        <div className="min-w-[120px]">
          <Button type="primary" ghost className="mr-1 ">
            Sửa
          </Button>
          <Button
            onClick={() => {
              onDelete();
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
//   "taiKhoan": "123",
//   "hoTen": "taikhoangiaovu",
//   "email": "asdfasdf@gmail.com",
//   "soDt": "0921251792",
//   "maLoaiNguoiDung": "GV"
// },
