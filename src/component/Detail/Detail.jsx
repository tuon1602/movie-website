import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import "./Detail.scss";
import ErrorPage from "../../pages/ErrorPage";
import { Image, Row, Col, Typography, Button, Link, Card, Layout } from "antd";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import { useNavigate, Outlet } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const white_text = {
  color: "white",
};
const gray_text = {
  color: "#b5b5b5",
};

const Detail = (props) => {
  const [movieFetchData, setMovieFetchData] = useState(props.movieFetchData);
  const navigate = useNavigate();
  const [detailData, setDetailData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [productionContries, setProductionContries] = useState([]);
  const [video, setVideo] = useState([]);
  const [similarMovieData, setSimilarMovieData] = useState([]);
  //import youtube into react
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
    onReady: (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    },
  };

  // const ArrayDetailData = Array.from(detailData)
  const getDetailData = async () => {
    try {
      if (movieFetchData.type === "/movie" || movieFetchData.type === "movie") {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieFetchData.movieId}?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec`
        );
        const trailerData = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieFetchData.movieId}/videos?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US`
        );
        const getSimilarMovieData = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieFetchData.movieId}/recommendations?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US&page=1`
        );
        setDetailData(res.data);
        setGenres(res.data.genres);
        setProductionContries(res.data.production_countries[0].name);
        setVideo(
          trailerData.data.results.find((video) => video.type === "Trailer") ||
            trailerData.data.results[0]
        );
        setSimilarMovieData(getSimilarMovieData.data.results.slice(0, 5));
      } else if (
        movieFetchData.type === "/tv" ||
        movieFetchData.type === "tv"
      ) {
        const res = await axios.get(
          `https://api.themoviedb.org/3/tv/${movieFetchData.movieId}?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec`
        );
        const trailerData = await axios.get(
          `https://api.themoviedb.org/3/tv/${movieFetchData.movieId}/videos?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US`
        );
        const getSimilarMovieData = await axios.get(
          `https://api.themoviedb.org/3/tv/${movieFetchData.movieId}/recommendations?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec&language=en-US&page=1`
        );
        setDetailData(res.data);
        setGenres(res.data.genres);
        setProductionContries(res.data.production_countries[0].name);
        setVideo(
          trailerData.data.results.find((video) => video.type === "Trailer") ||
            trailerData.data.results[0] ||
            trailerData.data.results
        );
        setSimilarMovieData(getSimilarMovieData.data.results.slice(0, 5));
      }
    } catch (error) {
      console.error(error);
      return <ErrorPage />;
    }
  };
  const handleNavigateSimilarDetail = (id, type) => {
    try {
      navigate(`/detail/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMovieFetchData({ movieId: id, type: type });
    } catch (error) {
      console.error(error);
      return <ErrorPage />;
    }
  };
  // const getDetailByImdbId = async ()=>{
  //   try{
  //     const res = await axios.get("")
  //   }
  // }
  useEffect(() => {
    getDetailData();
  }, [movieFetchData]);

  return (
    <>
      <section>
        <LazyLoad offset={300}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${detailData.backdrop_path}`}
            width={"100%"}
            height={500}
            style={{ filter: "brightness(0.3)", zIndex: "-1" }}
            preview={false}
          />
        </LazyLoad>
      </section>
      <section style={{ backgroundColor: "#04284e" }}>
        <LazyLoad offset={300}>
          <Row
            style={{ padding: "0 10rem", position: "relative", bottom: 300 }}
          >
            <Col span={6}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${detailData.poster_path}`}
                width={286}
                height={429}
              />
            </Col>
            <Col span={18} style={{ marginTop: "1rem" }}>
              <Title style={white_text}>
                {" "}
                {detailData.name || detailData.title}
              </Title>
              <Title style={gray_text} level={3}>
                Release Date:{" "}
                {detailData.release_date || detailData.first_air_date}
              </Title>
              <Title style={gray_text} level={4}>
                Running time: {detailData.runtime || <span>Unknown</span>}{" "}
                minute
              </Title>
              <Title style={white_text} level={4}>
                <StarFilled style={{ color: "yellow" }} />{" "}
                {detailData.vote_average}
              </Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Button
                    danger
                    type="primary"
                    size="large"
                    style={{ marginRight: "1rem" }}
                  >
                    Watch Now
                  </Button>
                  <Button
                    icon={<PlusOutlined />}
                    type="primary"
                    ghost
                    size="large"
                  >
                    Collection
                  </Button>
                </div>

                <div>
                  {genres.map((genre) => (
                    <a href="/">
                      <Button
                        size="large"
                        style={{ margin: "0 0.5rem" }}
                        type="primary"
                      >
                        {genre.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
              <Title style={{ color: "white", marginTop: "2rem" }} level={4}>
                Country: {productionContries}
              </Title>
              <Title style={white_text} level={4}>
                Status:{" "}
                <span style={{ color: "b5b5b5" }}>{detailData.status}</span>
              </Title>
              <Paragraph style={{ color: "#b5b5b5", marginTop: "2rem" }}>
                {detailData.overview}
              </Paragraph>
              <div style={{ marginTop: "2rem" }}>
                <Title level={4} style={white_text}>
                  Trailer
                </Title>
                {video === [] ? (
                  <YouTube disabled />
                ) : (
                  <YouTube videoId={video.key} opts={opts} />
                )}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Title style={white_text} level={4}>
                  You may also like
                </Title>
                <div style={{ display: "flex", gap: 20 }}>
                  {similarMovieData.map((item, index) => (
                    <Card
                      hoverable
                      style={{ width: "171px" }}
                      cover={
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                          preview={false}
                        />
                      }
                      onClick={() =>
                        handleNavigateSimilarDetail(
                          item.id,
                          movieFetchData.type
                        )
                      }
                    >
                      <Meta title={item.original_title || item.name} />
                    </Card>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </LazyLoad>
      </section>
    </>
  );
};

export default Detail;
