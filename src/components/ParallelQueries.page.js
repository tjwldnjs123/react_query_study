import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFreinds = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQueriesPage() {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFreinds);
  return <div>ParallelQueriesPage</div>;
}

export default ParallelQueriesPage;
