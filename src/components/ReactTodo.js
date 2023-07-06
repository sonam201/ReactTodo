import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from "react";
const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  // add the items function
  const addItem = () => {
    if (!inputdata) {
      alert("Please Fill the data");
    } else {
      // to get the unique id for each
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };
  //delete item
  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItem);
  };

  //remove all the elements
  const removeAll = () => {
    setItems([]);
  };

  return (
    <div className="text-center  bg-black">
      <h1 className="text-white font-bold text-[30px]">Sonam's Todo List</h1>
      <div className="mt-[50px]">
        <figure>
          <img
            src="./todo.jpg"
            className="h-[100px] w-[auto] ml-auto mr-auto "
            alt="todologo"
          />
          <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className="flex gap-4 justify-center">
          <input
            type="text"
            placeholder="📝 Add Items"
            className="bg-white rounded-lg outline-none "
            value={inputdata}
            onChange={(event) => setInputData(event.target.value)}
          />
          <i>
            <AiOutlinePlus
              className="ml-auto mr-auto text-white mt-1"
              onClick={addItem}
            />
          </i>
        </div>
        {/* show our items */}
        <div className="mt-2">
          {items.map((curElem, index) => {
            return (
              <div className="flex justify-center gap-3 " key={index}>
                <h3 className="text-white ">{curElem.name}</h3>
                <AiFillEdit className="text-white mt-1" />
                <BsFillTrash3Fill
                  className="text-white mt-1"
                  onClick={() => deleteItem(curElem.id)}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-5 ">
          <button className="px-5 py-1 rounded-2xl bg hover:bg-orange-600  bg-white">
            Check List
          </button>
          <button
            className="px-5 py-1 rounded-2xl bg hover:bg-orange-600  bg-white"
            onClick={removeAll}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
