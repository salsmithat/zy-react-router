import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
