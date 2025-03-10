import React, { useState } from "react";
import Bata from "./Bata";
import { data } from "./bdays";

const Compnent = () => {
  const [myData, setMyData] = useState(data);

  const removeData = (my) => {
    const new_entry = myData.filter((item, index) => {
      return item.id !== my;
    });

    setMyData(new_entry);
  };

  return (
    <>
      <div className="mx-auto w-[50%] shadow shadow-amber-200 p-2 my-1">
        <h1 className="text-center text-7xl">
          {" "}
          {myData.length} People Birthday
        </h1>
        {myData.map((item, index) => {
          return <Bata {...item} key={index} remove={removeData} />;
        })}

        <div
          onClick={
            myData.length == 0 ? () => setMyData(data) : () => setMyData([])
          }
          className={`h-[70px] w-[70px] flex items-center justify-center text-white font-semibold bg-gradient-to-r mx-auto rounded-full cursor-pointer ${
            myData.length == 0
              ? " from-yellow-900 to-yellow-500"
              : " from-green-900 to-green-500 "
          }`}
        >
          {myData.length == 0 ? "refresh" : "remove"}
        </div>
      </div>
    </>
  );
};

export default Compnent;
