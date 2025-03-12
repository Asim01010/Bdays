import React, { useState } from "react";
import Singlebd from "./Singlebd";
import { data } from "./data";

const Test3 = () => {
  const [user, setUser] = useState(data);
  const btnHandle = () => {
    if (user.length == 0) {
      setUser(data);
    } else {
      setUser([]);
    }
  };
  const remove = (number) => {
    let sngR = user?.filter((item, index) => {
      return item.id !== number;
    });
    setUser(sngR);
  };

  return (
    <>
      <div className="container w-[50%] mx-auto p-5 shadow-lg text-center">
        <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to to-cyan-400">
          Here are some Birthdays of {user.length} members
        </h1>

        {user?.map((item, index) => {
          return <Singlebd key={index} {...item} remove={remove} />;
        })}

        <button
          onClick={btnHandle}
          className={` w-[80px] h-[80px] outline-4 outline-cyan-600  rounded-full transition-all text-teal-600 mt-8 ${
            user.length == 0 ? "hover:bg-amber-500" : "hover:bg-cyan-400"
          }`}
        >
          {user.length == 0 ? "Refresh" : "Remove"}
        </button>
      </div>
    </>
  );
};

export default Test3;
