import React from "react";

function TabList({ toggle, filteredList, deleteList }) {
  return (
    <div>
      {filteredList.map((el, index) => {
        if (toggle) {
          if (el.id % 2 !== 0) {
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
  );
}

export default TabList;
