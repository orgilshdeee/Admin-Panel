import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import "../style/login.css";
import { userService } from "../services/userService";
export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
    userService
      .loginUser(values)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row className="container">
        <Col span={12} className="login-left"></Col>
        <Col span={12} className="login-right"></Col>
        <Form
          span={12}
          offset={6}
          className="loginForm"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="И-мэйл"
            name="email"
            rules={[
              {
                required: true,
                message: "И-мэйл хаяг дутуу байна!",
              },
            ]}
          >
            <Input placeholder="И-мэйл хаягаа оруулна уу." />
          </Form.Item>

          <Form.Item
            label="Нууц үг"
            name="password"
            rules={[
              {
                required: true,
                message: "Нууц үг дутуу байна!",
              },
            ]}
          >
            <Input.Password placeholder="Нууц үгээ оруулна уу." />
          </Form.Item>

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Нэвтрэх
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
}
