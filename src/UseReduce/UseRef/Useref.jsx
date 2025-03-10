import React, { useRef } from "react";

const Useref = () => {
  const heading = useRef();

  const btnHandle = () => {};

  return (
    <div className="mx-auto text-center container">
      <h1 ref={heading} className="text-5xl text-amber-300">
        asd
      </h1>
      <button
        onClick={btnHandle}
        className="p-3 bg-gradient-to-b from-cyan-400 to-stone-500"
      >
        Generate
      </button>
    </div>
  );
};

export default Useref;
