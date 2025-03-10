import React from "react";
import { IoTrashBin } from "react-icons/io5";

const Bata = ({ id, name, age, image, remove }) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="right flex justify-center items-center gap-3">
          <img src={image} height="50px" width="50px" alt="" />
          <div className="felx flex-col">
            <h4 className="">{name}</h4>
            <p className="">{age}</p>
          </div>
        </div>
        <div className="left flex justify-center items-center">
          <div
            onClick={() => remove(id)}
            className="h-[60px] w-[60px] bg-gradient-to-r text-white flex justify-center items-center text-3xl from-red-900 to-red-500 rounded-full"
          >
            <IoTrashBin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bata;
