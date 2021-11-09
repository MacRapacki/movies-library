import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyLibrary from "./pages/MyLibrary";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mylibrary" element={<MyLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
