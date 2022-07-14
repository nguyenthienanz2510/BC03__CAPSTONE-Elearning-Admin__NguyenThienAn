import { Button, Form, Input, message, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../../redux/action/spinnerComponentAction";
import { userService } from "../../../services/userService";
import "./FormCreateUser.scss";

const FormCreateUser = ({ setIsModalVisible }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    values.maNhom = "GP01";
    console.log(values);
    dispatch(handleStartSpinner());
    userService
      .createUser(values)
      .then((res) => {
        console.log(res);
        message.success("Tạo người dùng thành công");
        setIsModalVisible(false);
        // window.location.reload();
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
      }}
      scrollToFirstError
    >
      <Form.Item
        label="Họ tên"
        name="hoTen"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="soDT"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        label="Loại người dùng"
        name="maLoaiNguoiDung"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="HV">Học viên</Select.Option>
          <Select.Option value="GV">Giáo vụ</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Tài khoản"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="matKhau"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="NhapLaiMatKhau"
        label="Nhập lại mật khẩu"
        dependencies={["matKhau"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("matKhau") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="text-center">
        <Button
          className="hover:text-white hover:bg-color-primary rounded text-color-primary bg-white px-5 hover:border-color-primary border-color-primary"
          htmlType="submit"
        >
          Thêm người dùng
        </Button>
      </div>
    </Form>
  );
};

export default FormCreateUser;

// {
//     "taiKhoan": "string",
//     "matKhau": "string",
//     "hoTen": "string",
//     "soDT": "string",
//     "maLoaiNguoiDung": "string",
//     "maNhom": "string",
//     "email": "string"
//   }
//       Ghi chú:
//           LoaiNguoiDung: chỉ có 2 hằng số
//               GV
//               HV
