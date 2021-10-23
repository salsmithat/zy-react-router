import React from "react";
import { Link } from "../react-router-dom";

class User extends React.Component {
  render() {
    return (
      <div>
        <Link to={{ pathname: "/user/detail", state: { id: 1, name: "张三" } }}>
          用户1
        </Link>
      </div>
    );
  }
}

export default User;
