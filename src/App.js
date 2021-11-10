import "./App.css";
import { Routes, Route } from "react-router-dom";

import MyLibrary from "./pages/MyLibrary";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLocalStorage } from "./store/myLibrarySlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLocalStorage());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylibrary" element={<MyLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
