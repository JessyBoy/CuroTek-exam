import React from "react";
import moment from "moment";

function TabList({ toggle, filteredList, deleteList }) {
  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell">#ID</th>
            <th className="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell">Post title</th>
            <th className="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell">Content</th>
            <th className="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell">Date Created</th>
            <th className="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((el, index) => {
            if (toggle) {
              if (el.id % 2 !== 0) {
                return null;
              }
            }
            return (
              <tr key={index} className="flex flex-row flex-wrap mb-10 bg-white lg:hover:bg-gray-100 lg:table-row lg:flex-row lg:flex-no-wrap lg:mb-0">
                <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                  {el.id}
                </td>
                <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                  {el.name}
                </td>
                <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                  {el.description}
                </td>
                <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                  {moment(el.date).format("MMMM D, YYYY, h:mm a")}</td>
                <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                  <button
                    onClick={() => { }}
                    className="p-2 focus:outline-none"
                  >
                    <i className="text-yellow-500 fill-current fa fa-eye fa-2x" aria-hidden="true"></i>
                  </button>
                  <button
                    onClick={() => { }}
                    className="p-2 focus:outline-none"
                  >
                    <i className="text-green-500 fill-current fa fa-edit fa-2x" aria-hidden="true"></i>
                  </button>
                  <button
                    onClick={() => deleteList(el.id)}
                    className="p-2 focus:outline-none"
                  >
                    <i className="text-red-500 fill-current fa fa-times fa-2x" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TabList;
