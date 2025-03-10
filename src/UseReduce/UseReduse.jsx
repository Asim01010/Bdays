import React, { useReducer, useState } from "react";

const UseReduse = () => {
  const [name, setName] = useState("");

  const reducer = (state, action) => {
    if (action.type == "EMPTY_VALUE") {
      return {
        ...state,
        error: true,
        success: false,
        message: "Please enter a value",
      };
    }

    if (action.type == "REST") {
      return {
        ...state,
        error: false,
        succeess: true,
        message: "",
      };
    }
  };

  const initialsatate = {
    data: [],
    error: false,
    success: false,
    message: "",
  };

  const [state, dispatch] = useReducer(reducer, initialsatate);
  const btnHandler = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "EMPTY_VALUE" });
    }

    setTimeout(() => {
      dispatch({ type: "REST" });
    }, 3000);
  };

  return (
    <>
      <div className="container mx-auto md:w-full ">
        <form>
          <label htmlFor="">Type</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-0 border border-gray-400 py-4 my-3"
          />
          {state.error && <p className="text-red-500">{state.message}</p>}
          <button
            onClick={btnHandler}
            className="bg-stone-500 text-white p-3 rounded-2xl w-full my-3"
          >
            click it
          </button>
        </form>
      </div>
    </>
  );
};

export default UseReduse;
