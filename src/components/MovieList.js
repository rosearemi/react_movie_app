import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const CardBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies(res);
      });
  }, []);

  function deleteById(id) {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("성공");
          setMovies(movies.filter((movie) => movie.id !== id));
        }
      });
  }

  return (
    <CardBox>
      {movies.map((movie) => (
        <MovieItem movie={movie} deleteById={deleteById} />
      ))}
    </CardBox>
  );
};

export default MovieList;
