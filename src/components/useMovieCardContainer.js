import { useDispatch, useSelector } from "react-redux";
import { addToMyLibrary } from "../store/myLibrarySlice";

const useMovieCardContainer = () => {
  const dispatch = useDispatch();
  const listOfMyMovies = useSelector((state) => state.myLibrary.myLibrary);

  const addMovieToLibrary = (title, poster, id) => {
    const movie = {
      title: title,
      poster: poster,
      id: id,
      isWatched: false,
      rating: 0,
    };
    if (listOfMyMovies.some((movie) => movie.id === id)) {
      alert("This is already in Your library");
    } else {
      dispatch(addToMyLibrary(movie));
    }
  };

  return { addMovieToLibrary };
};

export default useMovieCardContainer;
