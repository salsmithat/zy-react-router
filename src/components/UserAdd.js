import React from "react";
import { UserAPI } from "../utils";

class UserAdd extends React.Component {
  usernameRef = React.createRef();
  handleSubmit = (event) => {
    let username = this.usernameRef.current.value;
    UserAPI.add({ id: Date.now(), username });
    this.props.history.push("/user/list");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.usernameRef} />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default UserAdd;
