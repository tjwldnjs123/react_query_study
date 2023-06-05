import axios from "axios";
import React, { useEffect, useState } from "react";

function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await axios.get("http://localhost:4000/superheroes");
    console.log(res);
  }, []);
  return <div>SuperheroesPage</div>;
}

export default SuperHeroesPage;
