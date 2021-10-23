import React from "react";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let user = this.props.location.state;
    return (
      <div>
        <p>id：{user?.id}</p>
        <p>name：{user?.name}</p>
      </div>
    );
  }
}

export default UserDetail;
