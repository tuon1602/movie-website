import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Detail.scss";

const Detail = (props) => {
  const movieFetchData = props.movieFetchData;
  const [detailData, setDetailData] = useState([]);
  const getDetailData = async () => {
    try {
      if (movieFetchData.type === "/movie" || movieFetchData.type === "movie") {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieFetchData.movieId}?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec`
        );
        console.log(res);
      } else if (movieFetchData.type === "/tv") {
        const res = await axios.get(
          `https://api.themoviedb.org/3/tv/${movieFetchData.movieId}?api_key=1b7cb11f1769ba91d4e314f6ce6f60ec`
        );
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDetailData();
  }, []);
  return <div style={{ paddingTop: "5rem" }}></div>;
};

export default Detail;
