import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleIsWatched,
  removeFromLibrary,
  rateMovie,
} from "../../store/myLibrarySlice";
import useFavoriteMovieCard from "./useFavoriteMovieCard";

const FavoriteMovieCard = ({ poster, title, index, isWatched, rating }) => {
  const [currentRatting, setCurrentRating] = useState(5);
  const dispatch = useDispatch();
  const { ratings } = useFavoriteMovieCard();

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
            {ratings.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
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
