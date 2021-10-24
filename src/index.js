import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "./react-router-dom";

let LazyHome = React.lazy(() => import("./components/Home"));
let LazyProfile = React.lazy(() => import("./components/Profile"));
function SuspenseHome() {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <LazyHome />
    </React.Suspense>
  );
}
function SuspenseProfile() {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <LazyProfile />
    </React.Suspense>
  );
}
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to={{ pathname: "/user", state: { id: 1, name: "张三" } }}>
            用户1的详情页
          </Link>
        </li>
      </ul>
      <Route path="/" exact component={SuspenseHome} />
      <Route path="/user" component={SuspenseProfile} />
    </div>
  </Router>,
  document.getElementById("root")
);
