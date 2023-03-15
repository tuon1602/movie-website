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
import SearchMovie from "./SearchMovie/SearchMovie";
import Login from "./Login/Login";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
  const navigateCollectionPage = () => {
    navigate("/collection");
  };
  return (
    <Space style={Header_Style}>
      <Space direction="horizontal" align="center" size="large">
        <Link to="/">
          <Title level={3} style={text_white}>
            NextPhim
          </Title>
        </Link>
        <SearchMovie />
        {/* <Link to="/hot" style={text_white}>
          Phim Hot
        </Link>
        <Link to="/new" style={text_white}>
          Phim Mới
        </Link> */}
        <Link to="/movie" style={text_white}>
          Movies
        </Link>
        <Link to="/tv " style={text_white}>
          TvSeries
        </Link>
      </Space>
      <Space>
        <Button type="primary" onClick={navigateCollectionPage}>
          My Collection
        </Button>
        <Button type="primary" onClick={showLoginModal}>
          Login
        </Button>
        <Modal
          title="login"
          open={openLogin}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <Button key="back" onClick={handleCancel}>
              Close
            </Button>
          }
          width={450}
        >
          <Login />
        </Modal>
      </Space>
    </Space>
  );
};

export default Header;
