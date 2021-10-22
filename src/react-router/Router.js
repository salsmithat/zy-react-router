import React from "react";
import RouterContext from "./RouterContext";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
  }
  render() {
    let value = {
      location: this.state.location,
      history: this.props.history,
    };
    return (
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

export default Router;
