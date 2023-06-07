import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
          <Route
            path="/rq-super-heroes/:heroId"
            element={<RQSuperHeroPage />}
          />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
          <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
