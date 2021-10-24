import React from "react";
import { matchPath, __RouterContext as RouterContext } from ".";

export function useHistory() {
  let contextValue = React.useContext(RouterContext);
  return contextValue.history;
}
export function useParams() {
  let contextValue = React.useContext(RouterContext);
  return contextValue.match.params;
}
export function useLocation() {
  let contextValue = React.useContext(RouterContext);
  return contextValue.location;
}
export function useRouteMatch(path) {
  let { match, location } = React.useContext(RouterContext);
  return path ? matchPath(location.pathname, path) : match;
}
