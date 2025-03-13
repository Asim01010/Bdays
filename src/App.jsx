import React from "react";
import "./globals.css";

import Compnent from "./bdays/Compnent.jsx";
import Object from "./objectState/Object.jsx";
import MultiInputs from "./objectState/MultiInputs.jsx";
import UseReduse from "./UseReduce/UseReduse.jsx";
import Useref from "./UseReduce/UseRef/Useref.jsx";
import Test from "./UseReduce/UseRef/Test.jsx";
import Test2 from "./UseReduce/UseRef/Test2.jsx";
import Test3 from "./UseReduce/UseRef/Test3.jsx";
import Singlebd from "./UseReduce/UseRef/Singlebd.jsx";
import Fetch from "./UseReduce/UseRef/Fetch.jsx";
import Test4 from "./UseReduce/UseRef/Test4.jsx";
import { Toaster } from "react-hot-toast";

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
      {/* <Useref /> */}
      {/* <Test /> */}
      {/* <Test2 /> */}
      {/* <Test3 /> */}
      {/* <Fetch /> */}
      <Test4 />
      <Toaster />
    </>
  );
};

export default App;
