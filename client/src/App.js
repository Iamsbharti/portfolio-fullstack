import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
