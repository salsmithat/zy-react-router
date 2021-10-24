function createHashHistory() {
  let stack = [];
  let index = -1;
  let action = "POP";
  let state;
  let listeners = [];
  let currentMessage;
  function go(n) {
    action = "POP";
    index += n;
    if (index < 0) {
      index = 0;
    } else if (index >= stack.length) {
      index = stack.length - 1;
    }
    let nextLocation = stack[index];
    state = nextLocation.state;
    window.location.hash = nextLocation.pathname;
  }
  function goForward() {
    go(1);
  }
  function goBack() {
    go(-1);
  }
  let listener = () => {
    let pathname = window.location.hash.slice(1);
    Object.assign(history, { action, location: { pathname, state } });
    if (action === "PUSH") {
      stack[++index] = history.location;
    }
    listeners.forEach((listener) => listener(history.location));
  };
  window.addEventListener("hashchange", listener);
  function listen(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter((i) => i !== listener);
    };
  }
  function push(to, nextState) {
    action = "PUSH";
    let pathname;
    if (typeof to === "object") {
      state = to.state;
      pathname = to.pathname;
    } else {
      pathname = to;
      state = nextState;
    }
    if (currentMessage) {
      let message = currentMessage({ pathname });
      let allow = window.confirm(message);
      if (!allow) {
        return;
      }
    }
    window.location.hash = pathname;
  }
  function block(newMessage) {
    currentMessage = newMessage;
    return () => {
      currentMessage = null;
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
      pathname: window.location.hash.slice(1),
      state: undefined,
    },
    block,
  };
  if (window.location.hash) {
    action = "PUSH";
    listener();
  } else {
    window.location.hash = "/";
  }
  // window.location.hash = window.location.hash
  //   ? window.location.hash.slice(1)
  //   : "/";
  return history;
}

export default createHashHistory;
