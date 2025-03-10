import React, { useState } from "react";

const Object = () => {
  const [user, setUser] = useState({
    name: "Asim",
    age: 27,
    email: "masim@gmail.com",
  });

  const { name, age, email } = user;

  const btnHandler = () => {
    setUser({ ...user, name: "Ahmed" });
  };

  return (
    <>
      <h1 className="text-center text-7xl">{age}</h1>
      <h1 className="text-center text-7xl">{name}</h1>
      <h1 className="text-center text-7xl">{email}</h1>
      <button
        onClick={btnHandler}
        className="block mx-auto bg-stone-500 my-5 py-4 rounded-2xl cursor-pointer"
      >
        change
      </button>
    </>
  );
};

export default Object;
