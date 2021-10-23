import React, { useState } from "react";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // todo
    this.setState({ value: !this.state.value });
  }

  render() {
    const state = this.state;
    return <button onClick={this.handleClick}>ON</button>;
  }
}
