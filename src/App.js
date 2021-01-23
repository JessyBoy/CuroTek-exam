import React from "react";
import { Route, Switch } from "react-router-dom";
import AddList from "./components/AddList";
import Homepage from "./components/Homepage";

//Pages

function App() {
  return (
    <div className="m-10 mx-auto border-2 border-black shadow-xl max-w-7xl">
      <div className="px-8 py-2">
        <Switch>
          <Route path="/add" component={AddList} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
