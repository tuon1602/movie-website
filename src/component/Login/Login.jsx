import React from "react";
import {Form,Button,Input,Checkbox} from 'antd'
import "./Login.scss"

const Login = () => {
  return (
    <>
      <Form>
        <Form.Item
          label="Username"
          name="username"
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
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
        //   wrapperCol={{
        //     offset: 8,
        //     span: 16,
        //   }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
        //   wrapperCol={{
        //     offset: 8,
        //     span: 16,
        //   }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
