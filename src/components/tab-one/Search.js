import React from "react";

function Search({ searchFilter, searchDate }) {
  return (
    <div className="flex w-1/2">
      <div className="w-full">
        <input
          onChange={(e) => searchFilter(e)}
          className="relative w-full px-2 py-2 pr-6 border-2 border-black focus:outline-none"
          placeholder="Search post name"
        />
        <div className="absolute inset-x-auto z-10 inset-y-56">
          <i
            className="absolute pt-4 pl-8 text-blue-400 fill-current fa fa-search inset-x-56"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="w-full ml-10">
        <input
          onChange={(e) => searchDate(e)}
          className="relative w-full px-2 py-2 pr-6 border-2 border-black focus:outline-none"
          placeholder="Search by date"
        />
        <div className="absolute inset-x-auto z-10 inset-y-56">
          <i
            className="absolute pt-4 pl-8 text-blue-400 fill-current fa fa-search inset-x-56"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Search;
