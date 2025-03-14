import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const Fetch = () => {
  const [user, setUser] = useState([]);
  const api = "https://dummyjson.com/products";

  const getData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setUser(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-5 shadow-xl">
        {user.map((item, index) => (
          <SingleUser key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Fetch;
