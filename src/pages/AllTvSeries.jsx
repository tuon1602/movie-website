import React from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Content from "../component/Content/Content";
import { useLocation } from "react-router-dom";

const AllTvSeries = () => {
    const location = useLocation()
  const pathname = location.pathname
  console.log(pathname)
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Content title="Phim bộ" type={pathname} api="https://api.themoviedb.org/3/discover/tv?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&sort_by=popularity.desc&page="/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default AllTvSeries;


