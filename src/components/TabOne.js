import React, { useState } from "react";
import { useForm } from "react-hook-form";
import _ from "lodash";
import Swal from "sweetalert2";

//Components
import AddList from "./tab-one/AddList";
import Search from "./tab-one/Search";
import Toggle from "./tab-one/Toggle";
import TabList from "./TabList";

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
      Swal.fire({
        title: "Error",
        text: "Element already exists",
        icon: "error",
      });
    } else {
      setElementList([
        ...elementList,
        { id: elementList.length + 1, name: data.name },
      ]);
      Swal.fire({
        title: "Success",
        text: "Element successfully added",
        icon: "success",
      });
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
          />
          <Search searchFilter={searchFilter} />
          <Toggle toggle={toggle} toggleHandle={toggleHandle} />
        </div>

        {/* Show List */}
        <div>
          <TabList
            toggle={toggle}
            filteredList={filteredList}
            deleteList={deleteList}
          />
        </div>
      </div>
    </>
  );
}

export default TabOne;
