import React, { useState } from "react";

const MultiInputs = () => {
  const [formF, setformF] = useState({
    name: "",
    age: "",
    email: "",
    adress: "",
  });
  const { name, age, email, adress } = formF;
  const btnH = (e) => {
    e.preventDefault();
  };
  const inputHandle = (e) => {
    setformF({
      ...formF,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className=" md:w-1/3 w-full mx-auto">
        <form>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={inputHandle}
            className="w-full  border-gray-200 border p-2 my-3 outline-0 focus:border-cyan-300"
          />
          <label htmlFor="age">age</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={inputHandle}
            className="w-full border-gray-200 border p-2 my-3 outline-0 focus:border-cyan-300"
          />
          <label htmlFor="emial">email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={inputHandle}
            className="w-full border-gray-200 border p-2 my-3 outline-0 focus:border-cyan-300"
          />

          <label htmlFor="adress">Adress</label>
          <input
            type="text"
            name="adress"
            value={adress}
            onChange={inputHandle}
            className="w-full border-gray-200 border p-2 my-3 outline-0 focus:border-cyan-300"
          />

          <button
            onClick={btnH}
            className="bg-teal-300 block mx-auto text-white hover:bg-teal-500 px-4 py-2 rounded-full"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MultiInputs;
