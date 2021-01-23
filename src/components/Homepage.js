import React, { useState } from "react";
import _ from "lodash";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

//Components
import Search from "./tab-one/Search";
import Toggle from "./tab-one/Toggle";
import TabList from "./TabList";

function HomePage() {

  const [searchList, setSearchList] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [toggle, setToggle] = useState(false);
  const [elementList, setElementList] = useState([
    {
      id: 1,
      name: "playing",
      description: "playing is awesome",
      date: "January 20 2021, 10:24 pm",
    },
    {
      id: 2,
      name: "reading",
      description: "reading is helpful to maintain lack of knowledge",
      date: "Decemer 20 2020 9:24 pm",
    },
    {
      id: 3,
      name: "coding",
      description: "experience comes from trial and errors",
      date: "November 20 2020 8:24 pm",
    },
  ]);

  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };

  const searchFilter = (e) => {
    setSearchList(e.target.value);
  };

  const searchDateFilter = (e) => {
    setSearchDate(e.target.value);
  };

  const filteredList = elementList.filter((list) => {
    if (searchList) {
      return list.name.toLowerCase().includes(searchList.toLowerCase());
    } else if (searchDate) {
      return list.date.toString().toLowerCase().indexOf(searchDate) > -1;
    }

    return elementList;
  });

  const deleteList = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Swal.fire("Post Deleted", {
          icon: "success",
        });
        setElementList(elementList.filter((list) => list.id !== id));
      }
    });
  };


  return (
    <>
      <div className="my-8 border border-black">
        <p className="w-full p-5 text-2xl text-center">Post Lists</p>
      </div>
      <div>
        <div className="flex justify-end py-2">
          <div className="font-semibold text-gray-500">Hide odd toggle</div>
        </div>
        <div className="flex justify-between">
          <Link to="/add">
            <button className="px-5 py-2 font-semibold text-blue-400 duration-150 ease-in transform border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white focus:outline-none">
              <i class="fa fa-plus" aria-hidden="true"></i> Add New Post
            </button>
          </Link>
          <Search searchFilter={searchFilter} searchDate={searchDateFilter} />
          <Toggle toggle={toggle} toggleHandle={toggleHandle} />
        </div>
        <br />
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

export default HomePage;
