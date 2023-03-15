import React from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Content from "../component/Content/Content";
import { useLocation } from "react-router-dom";
import Category from "../component/Category/Category";
import {useMyStore} from "../store/store";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const categoryFormPathName = useParams()
    // console.log(categoryFormPathName.categoryQuery)
    const globalCategoryStore = useMyStore((state) => state.categoryValue);
    // console.log(globalCategoryStore)
    const location = useLocation()
  const pathname = location.pathname
  // console.log(pathname)
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Category api="https://api.themoviedb.org/3/genre/movie/list?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US"/>
        <Content title={`Category: ${categoryFormPathName.categoryQuery}`} type={pathname} api="https://api.themoviedb.org/3/trending/movie/week?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&page="/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default CategoryPage;


