import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import Login from "./components/Login";

ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to="/" style={{ color: "green" }}>
          首页
        </Link>
      </li>
      <li>
        <Link to="/user">用户管理</Link>
      </li>
      <li>
        <Link to="/profile">个人中心</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} />
      <Protected path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
