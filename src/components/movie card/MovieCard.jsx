import useMovieCardContainer from "./useMovieCardContainer";

const MovieCard = ({ title, poster, id }) => {
  const { addMovieToLibrary } = useMovieCardContainer();

  return (
    <div className="card">
      <img className="poster" src={poster} alt="movie poster" />
      <h2>{title}</h2>
      <button
        className="searchBtn addBtn"
        onClick={() => addMovieToLibrary(title, poster, id)}
      >
        Add to My Library
      </button>
    </div>
  );
};

export default MovieCard;
