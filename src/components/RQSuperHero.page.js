import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

function RQSuperHeroPage() {
  const params = useParams();

  const { isLoading, data } = useSuperHeroData(params.heroId);
  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <div>{data?.data.name}</div>;
}

export default RQSuperHeroPage;
