import React from "react";

const Circuits = () => {
  let text = "asd";

  let fonts = text && "soloman";
  let fontsa = text || "solomanooo";

  return (
    <>
      <div className="text-9xl text-center container">
        {text ? "salam" : "Walikum Salama"}
      </div>
    </>
  );
};

export default Circuits;
