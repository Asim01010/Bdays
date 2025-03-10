import React, { useState } from "react";

const [name, setName] = useState("this is");
const UseStateBasics = (name) => {
  const pressB = () => {
    setName("12");
  };

  return (
    <>
      <div className="text-center mx-auto py-5">
        <p className="text-8xl bg-gradient-to-r from-blue-700 to-yellow-500 bg-clip-text text-transparent mx-auto ">
          {name}
        </p>

        <button
          onClick={() => pressB}
          className="bg-green-500 border-amber-100 border-2 mx-2 py-3 px-6 rounded-full"
        >
          Forward
        </button>
        <button
          onClick={() => pressB}
          className="bg-red-500  border-amber-100 border-2 mx-2 py-3 px-6 rounded-full"
        >
          reset
        </button>
        <button
          onClick={() => pressB}
          className="bg-amber-500  border-amber-100 border-2 mx-2 py-3 px-6 rounded-full"
        >
          reverse
        </button>
      </div>
    </>
  );
};

export default UseStateBasics;
