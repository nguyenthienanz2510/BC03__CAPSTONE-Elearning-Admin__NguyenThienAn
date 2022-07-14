import { Button, Tag } from "antd";

export const headerTableCourse = [
  // {
  //   title: "Số TT",
  //   dataIndex: "maKhoaHoc",
  //   // key: "maKhoaHoc",
  //   render: (maKhoaHoc) => {
  //     return <span className="">{maKhoaHoc.index}</span>;
  //   },
  // },
  {
    title: "Mã khóa học",
    dataIndex: "maKhoaHoc",
    key: "maKhoaHoc",
    render: (maKhoaHoc) => {
      return <span className="">{maKhoaHoc}</span>;
    },
  },
  {
    title: "Tên khóa học",
    dataIndex: "tenKhoaHoc",
    key: "tenKhoaHoc",
    render: (tenKhoaHoc) => {
      return <span className="">{tenKhoaHoc}</span>;
    },
  },
  {
    title: "Lượt xem",
    dataIndex: "luotXem",
    key: "luotXem",
  },
  {
    title: "Người tạo",
    dataIndex: "nguoiTao",
    key: "nguoiTao",

    render: (nguoiTao) => {
      return <span className="">{nguoiTao.taiKhoan}</span>;
    },
  },
  {
    title: "Ngày tạo",
    dataIndex: "ngayTao",
    key: "ngayTao",
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
//   "maKhoaHoc": "ITEC2109",
//   "biDanh": "machine-learning",
//   "tenKhoaHoc": "Machine Learning",
//   "moTa": "Học máy (tiếng Anh: machine learning) là một lĩnh vực của trí tuệ nhân tạo liên quan đến việc nghiên cứu và xây dựng các kĩ thuật cho phép các hệ thống \"học\" tự động từ dữ liệu để giải quyết những vấn đề cụ thể. Ví dụ như các máy có thể \"học\" cách phân loại thư điện tử xem có phải thư rác (spam) hay không và tự động xếp thư vào thư mục tương ứng. Học máy rất gần với suy diễn thống kê (statistical inference) tuy có khác nhau về thuật ngữ.\n\nHọc máy có liên quan lớn đến thống kê, vì cả hai lĩnh vực đều nghiên cứu việc phân tích dữ liệu, nhưng khác với thống kê, học máy tập trung vào sự phức tạp của các giải thuật trong việc thực thi tính toán. Nhiều bài toán suy luận được xếp vào loại bài toán NP-khó, vì thế một phần của học máy là nghiên cứu sự phát triển các giải thuật suy luận xấp xỉ mà có thể xử lý được.\n\nHọc máy có hiện nay được áp dụng rộng rãi bao gồm máy truy tìm dữ liệu, chẩn đoán y khoa, phát hiện thẻ tín dụng giả, phân tích thị trường chứng khoán, phân loại các chuỗi DNA, nhận dạng tiếng nói và chữ viết, dịch tự động, chơi trò chơi và cử động rô-bốt (robot locomotion).",
//   "luotXem": 100,
//   "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/machine-learning.jpg",
//   "maNhom": "GP01",
//   "ngayTao": "19/08/2021",
//   "soLuongHocVien": 0,
//   "nguoiTao": {
//       "taiKhoan": "dpnguyen",
//       "hoTen": "le quang anh ",
//       "maLoaiNguoiDung": "GV",
//       "tenLoaiNguoiDung": "Giáo vụ"
//   },
//   "danhMucKhoaHoc": {
//       "maDanhMucKhoahoc": "TuDuy",
//       "tenDanhMucKhoaHoc": "Tư duy lập trình"
//   }
// }
