import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handelCount = (e) => {
    let text = e.target.innerHTML;
    if (text == "Decrease") {
      setCount(count - 1);
    } else if (text == "Increase") {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <div className="container mx-auto text-center p-5 shadow-lg rounded-5 w-full lg:w-1/3 md:w-1/3">
        <h1
          className={`bg-gradient-to-r  text-9xl w-max mx-auto bg-clip-text text-transparent ${
            count < 0 ? "bg-red-500 animate-bounce" : "from-red-600 to-blue-800"
          }`}
        >
          {count}
        </h1>

        <div className="flex gap-3 items-center justify-center py-10">
          <button
            onClick={handelCount}
            className="px-5 py-3 outline-0 shadow-md shadow-red-300 rounded-full bg-gradient-to-r from-red-600 text-white font-semibold to-red-400 hover:bg-gradient-to-l cursor-pointer transition-all"
          >
            Decrease
          </button>
          <button
            onClick={handelCount}
            className="px-5 py-3 outline-0 shadow-md shadow-yellow-300 rounded-full bg-gradient-to-r from-yellow-600 text-white font-semibold to-yellow-400 hover:bg-gradient-to-br cursor-pointer transition-all"
          >
            Reset
          </button>
          <button
            onClick={handelCount}
            className="px-5 py-3 outline-0 shadow-md shadow-green-300 rounded-full bg-gradient-to-r from-green-600 text-white font-semibold to-green-400 hover:bg-gradient-to-l cursor-pointer transition-all"
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
