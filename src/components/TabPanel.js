import React from "react";
import { Link } from "react-router-dom";

function TabPanel() {
  return (
    <div className="flex p-8">
      <div className="w-1/2 border-2 border-r-0 border-black">
        <Link to="/">
          <button className="w-full p-5 text-2xl focus:outline-none">
            Tab 1
          </button>
        </Link>
      </div>

      <div className="w-1/2 border-2 border-black">
        <Link to="/tab-two">
          <button className="w-full p-5 text-2xl focus:outline-none">
            Tab 2
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TabPanel;
