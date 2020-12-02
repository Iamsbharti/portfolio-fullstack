import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import IntroSection from "./components/profile/IntroSection";
import Project from "./components/Project";
import Blogs from "./components/Blogs";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import MainConsole from "./components/Management/MainConsole";
import ManageProjects from "./components/Management/ManageProjects";
import ManageBlogs from "./components/Management/ManageBlogs";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={IntroSection} />
        <Route path="/projects" exact component={Project} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/login" exact component={Login} />
        <Route path="/manage" exact component={MainConsole} />
        <Route path="/manage/projects" exact component={ManageProjects} />
        <Route path="/manage/blogs" exact component={ManageBlogs} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
