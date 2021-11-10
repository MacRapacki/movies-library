const SearchBar = ({
  setSearchedTitle,
  findMovies,
  searchedTitle,
  tooShort,
}) => {
  return (
    <div className="searchBar_wrapper">
      {tooShort && (
        <p className="alert" style={{ color: "red" }}>
          At least 3 characters are required.
        </p>
      )}
      <input
        className="searchBar"
        type="text"
        placeholder="search movie..."
        minLength={3}
        style={tooShort ? { border: "2px solid red" } : {}}
        onChange={(e) => setSearchedTitle(e.target.value)}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            findMovies(searchedTitle);
          }
        }}
      />
      <button
        type="button"
        className="searchBtn"
        onClick={() => findMovies(searchedTitle)}
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
