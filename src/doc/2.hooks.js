import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "./react-router-dom";

function Home() {
  return <div>Home</div>;
}
function Post() {
  let match = useRouteMatch({
    path: "/post/:id",
    strict: true,
    sensitive: true,
  });
  console.log("match", match);
  return <div>Post</div>;
}
function UserDetail() {
  let history = useHistory();
  let location = useLocation();
  let params = useParams();
  console.log(history, location, params);
  return <div>Home</div>;
}
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link>首页</Link>
        </li>
        <li>
          <Link
            to={{ pathname: "/user/detail/1", state: { id: 1, name: "张三" } }}
          >
            用户1的详情页
          </Link>
        </li>
        <li>
          <Link to="/post/1">帖子</Link>
        </li>
      </ul>
      <Route path="/" component={Home} />
      <Route path="/user/detail/:id" component={UserDetail} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>,
  document.getElementById("root")
);
