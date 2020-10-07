import React, { useState } from "react";

function App() {
  const [movie, setMovie] = useState({
    id: "",
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  let jsonMovie = JSON.stringify(movie);
  console.log(jsonMovie);

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function submitMovie(e) {
    e.preventDefault();
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: jsonMovie,
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
        <button onClick={submitMovie}>전송</button>
      </form>
    </div>
  );
}

export default App;
