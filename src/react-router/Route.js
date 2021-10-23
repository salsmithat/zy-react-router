import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    let { history, location } = this.context;
    let { component: RouteComponent } = this.props;
    const match = matchPath(location.pathname, this.props);
    let renderElement = null;
    let routeProps = { history, location };
    if (match) {
      routeProps.match = match;
      renderElement = <RouteComponent {...routeProps} />;
    }
    return renderElement;
  }
}

export default Route;
