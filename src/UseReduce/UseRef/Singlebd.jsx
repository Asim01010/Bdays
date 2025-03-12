import React from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";

const Singlebd = ({ id, name, age, image, remove }) => {
  return (
    <>
      <div className="flex items-center justify-between px-1 my-1 shadow-2xl py-7">
        <div className="flex items-center justify-center">
          <img src={image} alt="Profile Icons" height={60} width={60} />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl text-emerald-900 my-0">{name}</h1>
            <h2 className="text-2xl text-gray-400 my-0">{age}</h2>
          </div>
        </div>
        <div
          onClick={() => remove(id)}
          className="bg-gradient-to-b text-white cursor-pointer from-teal-300 to-teal-500 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:text-black"
        >
          <FaTrashRestoreAlt size={25} />
        </div>
      </div>
    </>
  );
};

export default Singlebd;
