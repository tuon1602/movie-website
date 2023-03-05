import React from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Content from "../component/Content/Content";

const Main = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Content title="Phim mới hay" api="https://api.themoviedb.org/3/movie/popular?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&page=" type='movie'/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default Main;
