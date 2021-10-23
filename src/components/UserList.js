import React from "react";
import { Link } from "../react-router-dom";
import { UserAPI } from "../utils";

class UserList extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    let users = UserAPI.list();
    this.setState({ users });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => {
            return (
              <li key={user.id}>
                <Link
                  to={{
                    pathname: `/user/detail/${user.id}`,
                    state: user,
                  }}
                >
                  {user.username}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
