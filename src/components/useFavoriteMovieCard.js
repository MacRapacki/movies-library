import { useDispatch } from "react-redux";
import { addToMyLibrary } from "../store/myLibrarySlice";

const useFavoriteMovieCard = () => {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return { ratings };
};

export default useFavoriteMovieCard;
