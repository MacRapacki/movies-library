import { useDispatch } from "react-redux";
import { addToMyLibrary } from "../store/myLibrarySlice";

const useMovieCardContainer = () => {
  const dispatch = useDispatch();
  const addMovieToLibrary = (title, poster, id) => {
    const movie = {
      title: title,
      poster: poster,
      id: id,
      isWatched: false,
      rating: 0,
    };
    dispatch(addToMyLibrary(movie));
  };

  return { addMovieToLibrary };
};

export default useMovieCardContainer;
