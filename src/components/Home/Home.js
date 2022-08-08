import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch} from "react-redux"
import {addMovies}from "../../reduxcode/movies/movieSlice"

function Home() {

  const movieText = "Harry ";
  
  const dispatch= useDispatch();

  const fetchData = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=50f13f84&s=${movieText}&type=movie`
    );
    const data = await response.json().catch((err) => {
      console.log("Err :", err);
    });
  
    dispatch(addMovies(data))
    console.log(data)
  };
  useEffect(() => {
    fetchData();
  }, );

  return (
    <div>
      <div className="banner-img"> </div>
      <MovieListing />
    </div>
  );
}

export default Home;
