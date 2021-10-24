import React from "react";
import RouterContext from "./RouterContext";
import LifeCycle from "./LifeCycle";

function Prompt({ when, message }) {
  return (
    <RouterContext.Consumer>
      {(value) => {
        if (!when) return null;
        const block = value.history.block;
        return (
          <LifeCycle
            onMount={(self) => (self.release = block(message))}
            onUnmount={(self) => self.release()}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}
export default Prompt;
