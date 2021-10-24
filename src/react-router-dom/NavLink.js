import React from "react";
import { matchPath, __RouterContext as RouterContext } from ".";
import Link from "./Link";

function joinClassName(...classNames) {
  return classNames.filter((c) => c).join(" ");
}
function NavLink(props) {
  let context = React.useContext(RouterContext);
  let {
    location: { pathname },
  } = context;
  const {
    to: path,
    className: classNameProp = "",
    style: styleProp = {},
    activeClassName = "active",
    activeStyle = {},
    children,
    exact,
  } = props;
  let isActive = matchPath(pathname, { path, exact });
  let className = isActive
    ? joinClassName(classNameProp, activeClassName)
    : classNameProp;
  let style = isActive ? { ...styleProp, ...activeStyle } : styleProp;
  let linkProps = { className, style, to: path, children };
  return <Link {...linkProps} />;
}
export default NavLink;
