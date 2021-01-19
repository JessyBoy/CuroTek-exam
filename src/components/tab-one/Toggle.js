import React from "react";

function Toggle({ toggle, toggleHandle }) {
  return (
    <div>
      <div className="relative inline-block w-32 mr-2 align-middle select-none">
        <input
          onChange={toggleHandle}
          type="checkbox"
          name="toggle"
          id="toggle"
          className={
            toggle
              ? "focus:outline-none absolute transform transition ease-in-out duration-200 z-10 block w-10 h-10 rounded-full right-0 bg-white border-4 appearance-none cursor-pointer"
              : "focus:outline-none transform transition ease-in-out duration-200 absolute z-10 block w-10 h-10 rounded-full bg-gray-300 border-4 appearance-none cursor-pointer"
          }
        />
        <label
          htmlFor="toggle"
          className={
            toggle
              ? "block h-10 overflow-hidden transform transition ease-in-out duration-200 bg-green-400 rounded-full cursor-pointer"
              : "block h-10 overflow-hidden transform transition ease-in-out duration-200 bg-gray-300 rounded-full cursor-pointer"
          }
        ></label>
      </div>
    </div>
  );
}

export default Toggle;
