import React from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Content from "../component/Content/Content";
import { useLocation } from "react-router-dom";

const AllMovie = () => {
  const location = useLocation()
  const pathname = location.pathname
  console.log(location.pathname)
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Content title="Phim lẻ" type={pathname} api="https://api.themoviedb.org/3/movie/popular?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&page="/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default AllMovie;
