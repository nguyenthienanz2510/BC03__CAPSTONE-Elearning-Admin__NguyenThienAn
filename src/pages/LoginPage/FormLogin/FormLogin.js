import React from "react";
import { Button, Form, Input, message } from "antd";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfoActionService } from "../../../redux/action/userAction";

export default function FormLogin() {
  // xet thanh dieu huong URL
  let history = useHistory();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    let onSuccess = () => {
      message.success("Đăng nhập thành công");
      setTimeout(() => {
        history.push("/");
      }, 1500);
    };
    let onFail = (sms) => {
      message.warning(sms);
    };
    dispatch(setUserInfoActionService(values, onSuccess, onFail));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("LoginFailed:", errorInfo);
  };
  return (
    <Form
      className="px-5 md:px-20 w-full"
      name="basic"
      layout="vertical"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
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
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <div className="text-center">
        <NavLink to="/register">
          <a className="text-color-secondary mr-5 hover:underline">Đăng ký</a>
        </NavLink>

        <Button
          className="hover:text-white hover:bg-color-primary rounded text-color-primary bg-white px-5 hover:border-color-primary border-color-primary"
          htmlType="submit"
        >
          Đăng nhập
        </Button>
      </div>
    </Form>
  );
}
