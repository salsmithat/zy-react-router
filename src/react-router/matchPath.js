let pathToRegexp = require("path-to-regexp");

function compilePath(path, options) {
  const keys = [];
  const regexp = pathToRegexp(path, keys, options);
  return { keys, regexp };
}
function matchPath(pathname, options = {}) {
  let {
    path = "/",
    exact = false,
    strict = false,
    sensitive = false,
  } = options;
  let { keys, regexp } = compilePath(path, { end: exact, strict, sensitive });
  let match = regexp.exec(pathname);
  if (!match) {
    return null;
  }
  const [url, ...groups] = match;
  const isExact = pathname === url;
  // if (exact && !isExact) {
  //   return null;
  // }
  return {
    path,
    url,
    isExact,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = groups[index];
      return memo;
    }, {}),
  };
}
export default matchPath;
