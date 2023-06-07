import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (err) => {
    console.log("Perform side effect after encountering error", err);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>fetch heroes</button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
}

export default RQSuperHeroesPage;
