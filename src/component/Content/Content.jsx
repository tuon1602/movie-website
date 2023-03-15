import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Divider, Space, Typography, Image } from "antd";
import { Pagination, Skeleton } from "antd";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./Content.scss";
import LazyLoad from "react-lazy-load";
import {useMyStore} from "../../store/store";

const { Meta } = Card;
const { Title } = Typography;

const Content = (props) => {
  //react router
  const location = useLocation();
  const newPathName = location.pathname.split("/")[1];
  //zustand
  const globalCategoryStore = useMyStore((state) => state.categoryValue);
  const globalYearStore = useMyStore((state) => state.yearValue);
  //props and react hooks
  const type = props.type;
  // const updatedType = type.split("/")[1]
  // console.log(updatedType)
  // console.log(type)
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const onChangePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNavigateDetail = (movieId, media_type) => {
    navigate(`/detail/${movieId}`, {
      state: { movieId: movieId, type: media_type },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const getMovie = async () => {
    try {
      const res = await axios.get(`${props.api}${currentPage}`);
      setMovieData(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, [currentPage]);
  return (
    <main style={{ paddingTop: "2rem", backgroundColor: "#04284e" }}>
      <Row justify="center">
        <Col>
          <Title style={{ color: "#b1a21e" }}>{props.title}</Title>
        </Col>
      </Row>
      <LazyLoad offset={300}>
        <Row justify="center">
          {newPathName === "category"
            ? movieData
                .filter((movie) =>
                  movie.genre_ids.includes(globalCategoryStore)
                )
                .map((movie, index) => (
                  <Col span={5}>
                    <Skeleton loading={movieData.length === 0} active>
                      <Card
                        key={index}
                        hoverable
                        style={{ width: "256px", marginTop: "2rem" }}
                        cover={
                          <Image
                            alt={movie.original_title}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            height={400}
                            preview={false}
                          />
                        }
                        onClick={() =>
                          handleNavigateDetail(movie.id, movie.media_type)
                        }
                      >
                        <Meta title={movie.title || movie.name} />
                      </Card>
                    </Skeleton>
                  </Col>
                ))
            : newPathName === "year"
            ? movieData
                .filter(
                  (movie) =>
                    movie.release_date &&
                    movie.release_date.includes(globalYearStore)
                )
                .map((movie, index) => (
                  <Col span={5}>
                    <Skeleton loading={movieData.length === 0} active>
                      <Card
                        key={index}
                        hoverable
                        style={{ width: "256px", marginTop: "2rem" }}
                        cover={
                          <Image
                            alt={movie.original_title}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            height={400}
                            preview={false}
                          />
                        }
                        onClick={() =>
                          handleNavigateDetail(movie.id, movie.media_type)
                        }
                      >
                        <Meta title={movie.title || movie.name} />
                      </Card>
                    </Skeleton>
                  </Col>
                ))
            : movieData.map((movie, index) => (
                <Col span={5}>
                  <Skeleton loading={movieData.length === 0} active>
                    <Card
                      key={index}
                      hoverable
                      style={{ width: "256px", marginTop: "2rem" }}
                      cover={
                        <Image
                          alt={movie.original_title}
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          height={400}
                          preview={false}
                        />
                      }
                      onClick={() =>
                        handleNavigateDetail(movie.id, movie.media_type)
                      }
                    >
                      <Meta title={movie.title || movie.name} />
                    </Card>
                  </Skeleton>
                </Col>
              ))}
        </Row>
      </LazyLoad>
      <Row justify="center">
        <Col span={7}>
          <Pagination
            style={{ marginTop: "2rem" }}
            total={500}
            current={currentPage}
            onChange={onChangePage}
          />
        </Col>
      </Row>
    </main>
  );
};

export default Content;
