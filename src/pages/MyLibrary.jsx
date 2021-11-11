import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import FavoriteMovieCard from "../components/FavoriteMovieCard";

const MyLibrary = () => {
  const listOfMyMovies = useSelector((state) => state.myLibrary.myLibrary);

  return (
    <>
      <h2 className="title_header">My Library</h2>
      <Link to="/" className="routeLink">
        Back to search
      </Link>
      <div className="moviesWrapper">
        {" "}
        {listOfMyMovies?.map((movie, index) => {
          return (
            <FavoriteMovieCard
              poster={movie.poster}
              title={movie.title}
              key={index}
              index={index}
              rating={movie.rating}
              isWatched={movie.isWatched}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyLibrary;
