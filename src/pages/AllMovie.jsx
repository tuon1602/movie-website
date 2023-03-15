import React,{useContext,lazy, Suspense} from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Content from "../component/Content/Content";
import { useLocation } from "react-router-dom";
  import MySearchContext from "../Context/Context"
import Category from "../component/Category/Category";

const AllMovie = () => {
  // const value = useContext(MySearchContext)
  // console.log(value)
  const location = useLocation()
  const pathname = location.pathname
  console.log(location.pathname)
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Category api="https://api.themoviedb.org/3/genre/movie/list?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US"/>
        <Content title="Movies" type={pathname} api="https://api.themoviedb.org/3/trending/movie/week?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&page="/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default AllMovie;
