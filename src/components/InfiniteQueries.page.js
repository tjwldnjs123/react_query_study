import axios from "axios";
import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

function InfiniteQueriesPage() {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log(data);
  return (
    <>
      <h2>Pagination Colors</h2>

      {data?.pages.map((group, idx) => {
        console.log(group);
        return (
          <div key={idx}>
            {group?.data.map((color) => {
              return <h2 key={color.id}>{color.label}</h2>;
            })}
          </div>
        );
      })}
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

export default InfiniteQueriesPage;
