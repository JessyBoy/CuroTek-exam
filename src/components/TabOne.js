import React, { useState } from "react";

//Components
import AddList from "./tab-one/AddList";
import Search from "./tab-one/Search";
import Toggle from "./tab-one/Toggle";
import { useForm } from "react-hook-form";
import _ from "lodash";

function TabOne() {
  const { register, handleSubmit, errors } = useForm();
  const [elementList, setElementList] = useState([
    {
      id: 1,
      name: "playing",
    },
    {
      id: 2,
      name: "sleeping",
    },
    {
      id: 3,
      name: "reading",
    },
    {
      id: 4,
      name: "planting",
    },
    {
      id: 5,
      name: "coding",
    },
  ]);
  const [searchList, setSearchList] = useState("");
  const [message, setMessage] = useState({});
  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };

  const searchFilter = (e) => {
    setSearchList(e.target.value);
  };

  const filteredList = elementList.filter((list) => {
    return list.name.toLowerCase().includes(searchList.toLowerCase());
  });

  const deleteList = (id) => {
    setElementList(elementList.filter((list) => list.id !== id));
  };

  const onSubmit = (data, e) => {
    if (_.find(elementList, { name: data.name })) {
      setMessage({ message: "Element already exists", type: "error" });
    } else {
      setElementList([
        ...elementList,
        { id: elementList.length + 1, name: data.name },
      ]);
      setMessage({ message: "Element successfully added", type: "success" });
    }
    e.target.reset();
  };
  return (
    <>
      <div>
        <div className="flex justify-between py-2">
          <div className="font-semibold text-red-500">Enter message</div>
          <div className="font-semibold text-gray-500">Hide odd toggle</div>
        </div>
        <div className="flex justify-between">
          <AddList
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            message={message}
          />
          <Search searchFilter={searchFilter} />
          <Toggle toggle={toggle} toggleHandle={toggleHandle} />
        </div>

        {/* Show List */}
        <div>
          {filteredList.map((el, index) => {
            if (toggle) {
              if (el.id % 2 === 0) {
                return null;
              }
            }
            return (
              <div className="my-6 border-2 border-black" key={index}>
                <div className="flex items-center justify-between p-5">
                  <div className="text-2xl">
                    <p>
                      {el.id}. {el.name}
                    </p>
                  </div>
                  <div className="px-1 duration-150 ease-in transform border-2 border-black rounded-full hover:border-red-400 hover:bg-red-400 hover:text-white">
                    <button
                      onClick={() => deleteList(el.id)}
                      className="p-2 focus:outline-none"
                    >
                      <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TabOne;
