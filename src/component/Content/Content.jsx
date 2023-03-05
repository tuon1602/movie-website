import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card, Col, Row, Divider, Space, Typography } from "antd";
import { Pagination } from "antd";
import { useNavigate,Outlet } from "react-router-dom"; 
import "./Content.scss"

const { Meta } = Card;
const { Title } = Typography;

const Content = (props) => {
  const type = props.type
  const navigate = useNavigate()
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  const handleNavigateDetail = (movieId)=>{
    navigate(`/detail/${movieId}`,{state:{movieId:movieId,type:type}})
  }
  const getMovie = async () => {
    try {
      const res = await axios.get(
        `${props.api}${currentPage}`
      )
      setMovieData(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, [currentPage]);
  return (
    <main style={{ paddingTop: "4rem", backgroundColor: "#04284e" }}>
      <Row justify="center">
        <Col>
          <Title style={{ color: "#b1a21e" }}>{props.title}</Title>
        </Col>
      </Row>
      <Row justify="center">
        {movieData.map((movie) => (
          <Col span={5}>
            <Card
              key={movie.id}
              hoverable
              style={{ width: "256px", marginTop: "2rem" }}
              cover={
                <img
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              }
              onClick={()=>handleNavigateDetail(movie.id)}
            >
              <Meta title={movie.title || movie.name} />
            </Card>
          </Col>
        ))}
          <Pagination
          style={{marginTop:"2rem"}}
            total={500}
            current={currentPage}
            onChange={onChangePage}
          />
      </Row>
    </main>
  );
};

export default Content;
