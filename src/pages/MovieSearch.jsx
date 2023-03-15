import React,{useContext} from "react";
import Header from "../component/Header";
import { Space, Layout } from "antd";
import Footer from "../component/Footer";
import Content from "../component/Content/Content";
import {MySearchContext} from "../Context/Context"
import { useLocation } from "react-router-dom";

const MovieSearch = () => {
    const location= useLocation()
    const queryValue = location.state.query
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Content title="Search" api={`https://api.themoviedb.org/3/search/multi?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US&include_adult=false&query=${queryValue}&page=`}/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default MovieSearch;
