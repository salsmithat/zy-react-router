import React from "react";
import { Link } from "../react-router-dom";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/user/detail/1",
                state: { id: 1, name: "张三" },
              }}
            >
              张三
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/user/detail/2",
                state: { id: 2, name: "李四" },
              }}
            >
              李四
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserList;
