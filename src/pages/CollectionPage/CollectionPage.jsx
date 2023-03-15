import React,{useContext,lazy, Suspense} from "react";
import Header from "../../component/Header";
import { Space, Layout } from "antd";
import Footer from "../../component/Footer";
import Content from "../../component/Content/Content";
import { useLocation } from "react-router-dom";
  import MySearchContext from "../../Context/Context"
import Category from "../../component/Category/Category";
import Collection from "../../component/Collection/Collection";
import "./CollectionPage.scss"

const CollectionPage = () => {
  // const value = useContext(MySearchContext)
  // console.log(value)
  const location = useLocation()
  const pathname = location.pathname
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header />
        <Collection title="My Collection"/>
        <Footer />
      </Layout>
    </Space>
  );
};

export default CollectionPage;
