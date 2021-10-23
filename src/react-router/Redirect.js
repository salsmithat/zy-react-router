import React from "react";
import RouterContext from "./RouterContext";

class Redirect extends React.Component {
  static contextType = RouterContext;
  render() {
    let { history } = this.context;
    history.push(this.props.to);
    return null;
  }
}
export default Redirect;
