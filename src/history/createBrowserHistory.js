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
  function push(to, nextState) {
    const action = "PUSH";
    let pathname;
    let state;
    if (typeof to === "object") {
      state = to.state;
      pathname = to.pathname;
    } else {
      pathname = to;
      state = nextState;
    }

    globalHistory.pushState(state, null, pathname);
    let location = { state, pathname };
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
