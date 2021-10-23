import React from "react";

export class HomeComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    console.log(this.state.counter);
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <button onClick={this.handlerClick}>Increment</button>
        <div>Counter value is {counter}</div>
      </>
    );
  }
}
