import { useState } from "react";

import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchedTitle, setSearchedTitle] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [tooShort, setTooShort] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const findMovies = async (title) => {
    if (title.length < 3) {
      setTooShort(true);
    } else {
      try {
        setTooShort(false);
        const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${title}`;
        const res = await fetch(url);
        const data = await res.json();
        setSearchedMovies(data.Search);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h1 className="title_header">Movies Library</h1>
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

        {searchedMovies?.map((movie) => {
          return (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              key={movie.imdbID}
              id={movie.imdbID}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
