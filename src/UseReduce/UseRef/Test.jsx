import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=" mx-auto text-center shadow-xl">
      <p className="text-9xl my-6 bg-clip-text text-transparent bg-gradient-to-b from-cyan-600 to-stone-600">
        {count}
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-gradient-to-b from-teal-300 to-teal-900 px-3 "
      >
        click
      </button>
    </div>
  );
};

export default Test;
