import { useState } from "react";

const useHomeContainer = () => {
  const [searchedTitle, setSearchedTitle] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [tooShort, setTooShort] = useState(false);

  const findMovies = async (title) => {
    if (title.length < 3) {
      setTooShort(true);
    } else {
      try {
        setTooShort(false);
        const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${title}&plot=full`;
        const res = await fetch(url);
        const data = await res.json();
        setSearchedMovies(data.Search);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return {
    findMovies,
    setSearchedTitle,
    searchedTitle,
    tooShort,
    searchedMovies,
  };
};

export default useHomeContainer;
