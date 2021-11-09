const MovieCard = ({ title, poster, id }) => {
  return (
    <div className="card">
      <img className="poster" src={poster} alt="movie poster" />
      <h2>{title}</h2>
      <button className="searchBtn addBtn">Add to My Library</button>
    </div>
  );
};

export default MovieCard;
