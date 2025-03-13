import React from "react";
import { FaTrash } from "react-icons/fa";

const SingleCard = ({ id, todo, remove }) => {
  return (
    <div className="my-5 shadow-xl ">
      <div className="flex justify-between items-center">
        <h5 className="text-4xl">{todo}</h5>
        <FaTrash size={25} onClick={() => remove(id)} />
      </div>
    </div>
  );
};

export default SingleCard;
