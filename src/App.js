import { Route, Routes } from "react-router-dom";

import "./styles.css";
import SearchPage from "./Pages/searchPage/searchPage";
import MainPage from "./Pages/MainPage/MainPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
