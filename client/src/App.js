import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Project from "./components/Project";
import Blogs from "./components/Blogs";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/projects" exact component={Project} />
        <Route path="/blogs" exact component={Blogs} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
