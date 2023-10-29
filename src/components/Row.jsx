import React, { useState, useEffect } from "react";
import axios from "../axios";
import classes from "./Row.module.css"

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargePoster }) => {
  const [movies, setMovies] = useState([]);

  // snippet of code that runs on a specific condition/variable
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className={classes.row} >
      <h2>{title}</h2>

      <div className={classes.row__posters} >
        {/* container => posters */}
        {movies.map((movie) => (
          <img
            className={`${classes.row__poster} ${isLargePoster && classes.row_posterLarge}`}
            key={movie.id}
            src={`${baseUrl}${isLargePoster ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}

      </div>
    </div>
  );
};

export default Row;
