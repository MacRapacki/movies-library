import { useState } from "react";

import { Link } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

import useHomeContainer from "./useHomeContainer";

const Home = () => {
  const {
    findMovies,
    setSearchedTitle,
    searchedTitle,
    tooShort,
    searchedMovies,
  } = useHomeContainer();

  console.log(searchedMovies);
  return (
    <>
      <h1 className="title_header">Movies Library</h1>
      <Link to="/mylibrary" className="routeLink">
        {" "}
        My Library
      </Link>
      <SearchBar
        setSearchedTitle={setSearchedTitle}
        findMovies={findMovies}
        searchedTitle={searchedTitle}
        tooShort={tooShort}
      />
      <div className="moviesWrapper">
        {!searchedMovies && (
          <p>Sorry, we couldn't find this in our library. Please try again.</p>
        )}

        {searchedMovies?.map((movie, index) => {
          return (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              key={index}
              id={movie.imdbID}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
