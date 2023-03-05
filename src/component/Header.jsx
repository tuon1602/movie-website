import React from "react";
import { useState } from "react";
import "antd/dist/reset.css";
import {
  Layout,
  Divider,
  Typography,
  Space,
  Input,
  Button,
  Modal,
  Form,
  Checkbox,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Header_Style = {
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  width: "100%",
  left: 0,
  top: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: "#02172d",
  borderBottom: "1px solid #808080",
};
const text_white = {
  color: "white",
};

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const showLoginModal = () => {
    setOpenLogin(true);
  };
  const handleOk = () => {
    setOpenLogin(false);
  };
  const handleCancel = () => {
    setOpenLogin(false);
  };
  return (
    <Space style={Header_Style}>
      <Space direction="horizontal" align="center" size="large">
        <Link to="/">
          <Title level={3} style={text_white}>
            NextPhim
          </Title>
        </Link>
        <Input
          placeholder="Search movie"
          size="middle"
          prefix={<SearchOutlined />}
        />
        {/* <Link to="/hot" style={text_white}>
          Phim Hot
        </Link>
        <Link to="/new" style={text_white}>
          Phim Mới
        </Link> */}
        <Link to="/movie" style={text_white}>
          Phim Lẻ
        </Link>
        <Link to="/tv " style={text_white}>
          Phim Bộ
        </Link>
      </Space>
      <Space>
        <Button type="primary" onClick={showLoginModal}>
          Đăng nhập
        </Button>
        <Modal
          title="Đăng nhập"
          open={openLogin}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <Button key="back" onClick={handleCancel}>Close</Button>
          }
        >
          <Form>
            <Form.Item
              label="Tài khoản"
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
              label="Mật khẩu"
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
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </Space>
  );
};

export default Header;
