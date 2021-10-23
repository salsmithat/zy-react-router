function createBrowserHistory() {
  let listeners = [];
  let globalHistory = window.history;
  function go(n) {
    globalHistory.go(n);
  }
  function goForward() {
    globalHistory.goForward();
  }
  function goBack() {
    globalHistory.goBack();
  }
  function push(path, state) {
    const action = "PUSH";
    globalHistory.pushState(state, null, path);
    let location = { state, pathname: path };
    setState({ action, location });
  }
  window.addEventListener("popstate", (event) => {
    setState({
      action: "POP",
      location: { state: event.state, pathname: window.location.pathname },
    });
  });
  function setState(newState) {
    Object.assign(history, newState);
    history.length = globalHistory.length;
    listeners.forEach((listener) => listener(history.location));
  }
  function listen(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter((i) => i !== listener);
    };
  }
  const history = {
    action: "POP",
    push,
    go,
    goBack,
    goForward,
    listen,
    location: {
      pathname: window.location.pathname,
      state: globalHistory.state,
    },
  };
  return history;
}

export default createBrowserHistory;
