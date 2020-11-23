import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
