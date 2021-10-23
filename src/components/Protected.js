import React from "react";
import { Route, Redirect } from "../react-router-dom";

const Protected = (props) => {
  let { path, component: RouteComponent } = props;
  return (
    <Route
      path={path}
      render={(routeProps) => {
        let logined = localStorage.getItem("logined");
        if (logined) {
          return <RouteComponent {...routeProps} />;
        } else {
          return (
            <Redirect to={{ pathname: "/login", state: { from: path } }} />
          );
        }
      }}
    />
  );
};
export default Protected;
