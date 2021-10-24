import React from "react";
import { UserAPI } from "../utils";
import { Prompt } from "../react-router-dom";

class UserAdd extends React.Component {
  usernameRef = React.createRef();
  state = { isBlocking: false };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {
        isBlocking: false,
      },
      () => {
        let username = this.usernameRef.current.value;
        UserAPI.add({ id: Date.now(), username });
        this.props.history.push("/user/list");
      }
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isBlocking}
          message={(location) => `请问你确定要跳转到${location.pathname}里吗`}
        />

        <input
          onChange={(event) => {
            this.setState({ isBlocking: event.target.value.length > 0 });
          }}
          type="text"
          ref={this.usernameRef}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default UserAdd;
