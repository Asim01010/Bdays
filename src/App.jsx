import React from "react";
import "./globals.css";

import Compnent from "./bdays/Compnent.jsx";
import Object from "./objectState/Object.jsx";
import MultiInputs from "./objectState/MultiInputs.jsx";
import UseReduse from "./UseReduce/UseReduse.jsx";
import Useref from "./UseReduce/UseRef/Useref.jsx";

// import UseStateBasics from "./UseStateBasics/UseStateBasics";
// import Counter from "./Counter/Counter";
// import Circuits from "./ShortCircuits/Circuits";
const App = () => {
  return (
    <>
      {/* <UseStateBasics /> */}
      {/* <Counter /> */}
      {/* <Circuits /> */}
      {/* <Bdays /> */}
      {/* <Compnent /> */}
      {/* <Object /> */}
      {/* <MultiInputs /> */}
      {/* <UseReduse /> */}
      <Useref />
    </>
  );
};

export default App;
