import React from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Detail from "../component/Detail/Detail";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Detail movieFetchData={location.state}/>
        <Footer/>
      </Layout>
    </Space>
  );
};

export default DetailPage;
