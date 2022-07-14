import { Button, Form, Input, message, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../../redux/action/spinnerComponentAction";
import { courseService } from "../../../services/courseService";
import { userService } from "../../../services/userService";
import "./FormCreateCourse.scss";

const FormCreateCourse = ({ setIsModalVisible }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const addValues = {
      maNhom: "GP01",
      luotXem: 0,
      danhGia: 0,
      ngayTao: `${day}/${month}/${year}`,
      taiKhoanNguoiTao: "anz",
    };
    let newCourse = { ...values, ...addValues };
    console.log(newCourse);
    dispatch(handleStartSpinner());
    courseService
      .createCourse(newCourse)
      .then((res) => {
        console.log(res);
        message.success("Tạo khóa học thành công");
        setIsModalVisible(false);
        window.location.reload();
        history.push("/");
        history.push("/user-management");
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        message.warning(err.response.data);
        dispatch(handleEndSpinner());
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="0">+84</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      className="px-5 md:px-20 w-full"
      layout="vertical"
      form={form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        prefix: "+84",
        hoTen: "Please",
        email: "email test",
      }}
      scrollToFirstError
    >
      <Form.Item
        label="Mã khóa học"
        name="maKhoaHoc"
        rules={[
          {
            required: true,
            message: "Bạn chưa nhập dữ liệu",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tên khóa học"
        name="tenKhoaHoc"
        rules={[
          {
            required: true,
            message: "Bạn chưa nhập dữ liệu",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Bí danh"
        name="biDanh"
        rules={[
          {
            required: true,
            message: "Bạn chưa nhập dữ liệu",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mô tả"
        name="moTa"
        rules={[
          {
            required: true,
            message: "Bạn chưa nhập dữ liệu",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Hình ảnh"
        name="hinhAnh"
        rules={[
          {
            required: true,
            message: "Bạn chưa nhập dữ liệu",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mã danh mục"
        name="maDanhMucKhoaHoc"
        rules={[
          {
            required: true,
            message: "Bạn chưa nhập dữ liệu",
          },
        ]}
      >
        <Select>
          <Select.Option value="FrontEnd">Lập trình Front end</Select.Option>
          <Select.Option value="BackEnd">Lập trình Backend</Select.Option>
          <Select.Option value="FullStack">Lập trình Full Stack</Select.Option>
          <Select.Option value="DiDong">Lập trình di động</Select.Option>
          <Select.Option value="Design">Thiết kế Web</Select.Option>
          <Select.Option value="TuDuy">Tư duy lập trình</Select.Option>
        </Select>
      </Form.Item>

      <div className="text-center">
        <Button
          className="hover:text-white hover:bg-color-primary rounded text-color-primary bg-white px-5 hover:border-color-primary border-color-primary"
          htmlType="submit"
        >
          Thêm khóa học
        </Button>
      </div>
    </Form>
  );
};

export default FormCreateCourse;

// {
//   "maKhoaHoc": "string",1
//   "biDanh": "string",2
//   "tenKhoaHoc": "string",3
//   "moTa": "string",4
//   "hinhAnh": "string",5
//   "maDanhMucKhoaHoc": "string",6
//   "luotXem": 0,
//   "danhGia": 0,
//   "maNhom": "string",
//   "ngayTao": "string",
//   "taiKhoanNguoiTao": "string"
// }
