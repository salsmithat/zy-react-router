import React from "react";
import { Router } from "../react-router";
import { createBrowserHistory } from "../history";

class BrowserHistory extends React.Component {
  history = createBrowserHistory();
  render() {
    return <Router history={this.history}>{this.props.children}</Router>;
  }
}

export default BrowserHistory;
