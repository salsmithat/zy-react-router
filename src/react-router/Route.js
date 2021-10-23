import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    let { history, location } = this.context;
    let { component: RouteComponent, render, computedMatch } = this.props;
    const match = computedMatch
      ? computedMatch
      : matchPath(location.pathname, this.props);
    let renderElement = null;
    let routeProps = { history, location };
    if (match) {
      routeProps.match = match;
      if (RouteComponent) {
        renderElement = <RouteComponent {...routeProps} />;
      } else if (render) {
        renderElement = render(routeProps);
      } else {
        renderElement = null;
      }
    }
    return renderElement;
  }
}

export default Route;
