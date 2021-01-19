import React from "react";

function Search({ searchFilter }) {
  return (
    <div className="w-1/4">
      <input
        onChange={(e) => searchFilter(e)}
        className="relative w-full px-2 py-2 pr-6 border-2 border-black focus:outline-none"
        placeholder="Search"
      />
      <div className="absolute inset-x-auto z-10 inset-y-56">
        <i
          className="absolute pt-5 pl-6 text-blue-400 fill-current fa fa-search inset-x-64"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
}

export default Search;
