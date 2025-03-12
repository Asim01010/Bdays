import React, { useEffect, useState } from "react";
import { data } from "./data";
import SingleUser from "./SingleUser";

const Fetch = () => {
  const [users, setUser] = useState([]);

  const api = "https://dummyjson.com/products";

  const setData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setUser(data);
    console.log(data);
  };
  useEffect(() => {
    setData();
  }, []);

  console.log(users);
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 shadow-xl">
        {users.map((item, index) => {
          return <SingleUser key={index} />;
        })}
      </div>
    </>
  );
};

export default Fetch;
