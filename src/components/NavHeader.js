import React from "react";
import { withRouter } from "../react-router-dom";

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        onClick={() => {
          this.props.history.push("/");
        }}
      >
        {this.props.title}
      </div>
    );
  }
}

export default withRouter(NavHeader);
