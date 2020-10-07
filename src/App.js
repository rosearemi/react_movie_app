import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <div>
      <Header />
      <Route path="/Movie" exact={true} component={Movie}></Route>
      <Route path="/MovieList" exact={true} component={MovieList} />
      <Route path="/MovieDetail/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
