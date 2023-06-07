import axios from "axios";
import React, { useEffect, useState } from "react";

function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:4000/superheroes");
      console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
}

export default SuperHeroesPage;
