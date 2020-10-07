import React, { useEffect, useState } from "react";

const MovieDetail = (props) => {
  const id = props.match.params.id;
  const [movie, setMovie] = useState({
    id: "",
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);
      });
  }, [id]);

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function updateMovie(e) {
    e.preventDefault();
    fetch("http://10.100.102.2:8000/api/movie/" + movie.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("ok");
        }
      });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
          placeholder="제목"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="rating"
          value={movie.rating}
          placeholder="평점"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="summary"
          value={movie.summary}
          placeholder="줄거리"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="medium_cover_image"
          value={movie.medium_cover_image}
          placeholder="사진"
        />
        <br />
        <button onClick={updateMovie}>수정</button>
      </form>
    </div>
  );
};

export default MovieDetail;
