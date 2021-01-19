import React from "react";
import { Route, Switch } from "react-router-dom";
import TabOne from "./components/TabOne";
import TabPanel from "./components/TabPanel";
import TabTwo from "./components/TabTwo";

//Pages

function App() {
  return (
    <div className="m-10 mx-auto border-2 border-black shadow-xl max-w-7xl">
      <TabPanel />
      <div className="px-8 py-2">
        <Switch>
          <Route path="/tab-two" component={TabTwo} />
          <Route path="/" component={TabOne} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
