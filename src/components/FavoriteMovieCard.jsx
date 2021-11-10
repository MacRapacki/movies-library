import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleIsWatched,
  removeFromLibrary,
  rateMovie,
} from "../store/myLibrarySlice";

const FavoriteMovieCard = ({ poster, title, index, isWatched, rating }) => {
  const [currentRatting, setCurrentRating] = useState(rating);
  const dispatch = useDispatch();
  return (
    <div className="card favorite">
      <img className="poster" src={poster} alt="movie poster" />
      <h2>{title}</h2>
      <div className="checkWrapper">
        <input
          className="isWatchedCheckbox"
          type="checkbox"
          name="isWatched"
          id={index}
          checked={isWatched}
          onChange={() => dispatch(toggleIsWatched(index))}
        />{" "}
        <label htmlFor={index} className="isWatchedLabel">
          {isWatched ? "Watched" : "To watched"}
        </label>
      </div>
      {rating === 0 ? (
        <div className="checkWrapper">
          <p className="rating">Rate movie</p>
          <select
            defaultValue={5}
            className="ratingSelect"
            onChange={(e) => setCurrentRating(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          <button
            className="ratingBtn"
            onClick={() =>
              dispatch(rateMovie({ rate: currentRatting, index: index }))
            }
          >
            ok
          </button>
        </div>
      ) : (
        <p className="rating">
          Your rating:{" "}
          <span
            className="rating-bold"
            style={{
              color: `${rating < 4 ? "red" : rating > 6 ? "green" : ""}`,
            }}
          >
            {rating}
          </span>{" "}
        </p>
      )}
      <button
        className="searchBtn addBtn"
        onClick={() => dispatch(removeFromLibrary(index))}
      >
        remove from my library
      </button>
    </div>
  );
};

export default FavoriteMovieCard;
