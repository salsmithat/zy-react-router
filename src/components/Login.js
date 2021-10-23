import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  login = () => {
    localStorage.setItem("logined", true);
    let to = "/";
    if (this.props.location.state) {
      to = this.props.location.state.from || "/";
    }
    this.props.history.push(to);
  };
  render() {
    return <button onClick={this.login}>login</button>;
  }
}

export default Login;
