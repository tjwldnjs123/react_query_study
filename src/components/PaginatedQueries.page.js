import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const fetchColors = (pageNum) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNum}`);
};

function PaginatedQueriesPage() {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["colors", pageNum],
    () => fetchColors(pageNum),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Pagination Colors</h2>

      {data?.data.map((color) => {
        return <div key={color.id}>{color.label}</div>;
      })}
      <div>
        <button
          onClick={() => setPageNum((page) => page - 1)}
          disabled={pageNum === 1}
        >
          Prev page
        </button>
        <button
          onClick={() => setPageNum((page) => page + 1)}
          disabled={pageNum === 4}
        >
          Next page
        </button>
      </div>
      {isFetching && <div>Loading...</div>}
    </>
  );
}

export default PaginatedQueriesPage;
