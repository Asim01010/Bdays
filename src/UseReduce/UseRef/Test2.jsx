import React, { useEffect, useState } from "react";

const Test2 = () => {
  const [count, setCount] = useState(0);
  const [blli, setBlli] = useState(0);

  const btn = (e) => {
    let text = e.target.innerHTML;
    if (text == "Decrease") {
      setCount(count - 1);
    } else if (text == "Rest") {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setBlli(blli + 1);
  }, [count]);

  return (
    <div className="text-center mx-auto">
      <p
        className={`text-9xl bg-clip-text text-transparent bg-gradient-to-tl ${
          count < 0 ? "bg-red-500  " : "from-teal-300 to-cyan-300"
        }`}
      >
        {count}
      </p>
      <button
        onClick={btn}
        className={`bg-gradient-to-bl  py-2 px-4 cursor-pointer ${
          count == 0 ? "bg-amber-400" : "bg-gray-600"
        }`}
      >
        Decrease
      </button>
      <button
        onClick={btn}
        className="  mx-5 py-2 px-4 cursor-pointer outline-2 outline-amber-500 bg-transparent"
      >
        Rest
      </button>
      <button
        onClick={btn}
        className="bg-gradient-to-tl from-purple-600 to-cyan-600 py-2 px-3"
      >
        Increase
      </button>
      <p className="text-9xl text-blue-950 my-6">{blli}</p>
    </div>
  );
};

export default Test2;
