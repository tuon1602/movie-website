import React from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Content from "../component/Content/Content";
import Category from "../component/Category/Category";

const Main = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Category api="https://api.themoviedb.org/3/genre/movie/list?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US"/>
        <Content title="Hot Movies" api="https://api.themoviedb.org/3/trending/all/week?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&page="/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default Main;
