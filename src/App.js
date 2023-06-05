import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";

function App() {
  return (
    <BrowserRouter>
      <ul className="header">
        <li className="header-list">
          <Link to="/">Home</Link>
        </li>
        <li className="header-list">
          <Link to="/super-heroes">Traditional Super Heroes</Link>
        </li>
        <li className="header-list">
          <Link to="/rq-super-heroes">RQ Super Heroes</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
