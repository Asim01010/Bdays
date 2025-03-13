import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleCard from "./SingleCard";

const Test4 = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const btnHandle = (e) => {
    e.preventDefault();

    if (!todo) {
      setError(true);
      toast.error("PLease enter the Value");
    } else if (!isNaN(todo)) {
      toast.error("name should ba a number");
    } else {
      setError(false);
      setTodo("");
      toast.success("value Added");
      setData([...data, { todo, id: Date.now() }]);
    }
  };

  setTimeout(() => {
    setError(false);
  }, 5000);

  const remove = (number) => {
    let newData = data?.filter((item, index) => {
      return item?.id !== number;
    });

    setData(newData);
  };
  return (
    <div>
      <div className="container mx-auto shadow-xl xl:w-1/3">
        <form>
          <div className="flex justify-between items-center">
            <label htmlFor="">type Here</label>
            <h5 className="text-green-400">({data?.length})names present</h5>
          </div>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className={`w-full p-4 my-3 border outline-0 ${
              error ? "border-red-500" : "border-r-gray-400"
            }`}
          />
          {error && <p className="text-red-500 "> Put some value</p>}
          <button
            onClick={btnHandle}
            className="bg-gradient-to-tl from-cyan-500 to-rose-500 py-4 w-full text-4xl hover:bg-gradient-to-tr transition-all duration-200 cursor-pointer"
          >
            submit
          </button>
        </form>
      </div>

      <div className="container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {data?.map((item, index) => {
          return <SingleCard key={index} {...item} remove={remove} />;
        })}
      </div>
    </div>
  );
};

export default Test4;
