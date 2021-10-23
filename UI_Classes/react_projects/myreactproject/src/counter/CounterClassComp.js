import React, { Component } from "react";
import { connect } from "react-redux";

class CounterClassComp extends Component {
  incrementHandler = () => {
    this.props.increment();
  };
  decrementHandler = () => {
    this.props.decrement();
  };

  render() {
    return (
      <>
        <div className="text-center mt-5">
          <div>{this.props.counter}</div>
          <div>
            <button onClick={this.incrementHandler}>Increment</button>
            <button onClick={this.decrementHandler}>Decrement</button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassComp);
