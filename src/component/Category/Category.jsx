import React, { useState, useEffect } from "react";
import { Select, Row, Col, Typography } from "antd";
import axios from "axios";
import "./Category.scss";
import Years from "../../data/year";
import { useNavigate } from "react-router-dom";
import {useMyStore} from "../../store/store";
const { Title } = Typography;
const { Option } = Select;


const white_text = {
  color: "white",
};

const Category = (props) => {
  //another libary
  const navigate = useNavigate()
  //zustand
  const globalCategoryStore = useMyStore((state) => state.categoryValue);
  const globalYearStore  = useMyStore((state)=>state.yearValue)
  const setGlobalCategoryStore = useMyStore((state) => state.setCategoryValue);
  const setGlobalYearStore = useMyStore((state) => state.setYearValue);

  //state
  const [categoryData, setCategoryData] = useState([]);
  //fetching data
  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${props.api}`);
      setCategoryData(res.data.genres);
    } catch (error) {
      console.error(error);
    }
  };
  //onchange, onclick event
  const handleCategoryChange = (value) => {
    const findCategoryName = categoryData.find(category=>category.id === value)
    setGlobalCategoryStore(value)
    if(value === undefined){
      navigate("/")
    }else{
      navigate(`/category/${findCategoryName.name}`)

    }
  };
  const handleYearChange =  (value) => {
   setGlobalYearStore(value)
   if(value === undefined){
    navigate("/")
  }else{
    navigate(`/year/${value}`)

  }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <Row
      style={{
        backgroundColor: "#04284e",
        padding: "0 10rem",
        justifyContent: "center",
      }}
    >
      <Col
        style={{
          backgroundColor: "#0e2740",
          marginTop: "5rem",
          span: 5,
        }}
      >
        <Row style={{margin:"1rem 0"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 2rem",
            }}
          >
            <Title level={2} style={{ color: "#b1a21e" }}>
              Thể loại
            </Title>
            <Select
              onChange={handleCategoryChange}
              allowClear
              bordered
              style={{ width: 240 }}
              defaultValue="Select category"
            >
              {categoryData.map((category) => (
                <Option key={category.id} value={category.id}>{category.name}</Option>
              ))}
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 2rem",
            }}
          >
            <Title level={2} style={{ color: "#b1a21e" }}>
              Năm phát hành
            </Title>
            <Select
              onChange={handleYearChange}
              allowClear
              bordered
              style={{ width: 240 }}
              defaultValue="Select year"
            >
              {Years.map((year) => (
                <Option value={year.label}>{year.label}</Option>
              ))}
            </Select>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Category;
