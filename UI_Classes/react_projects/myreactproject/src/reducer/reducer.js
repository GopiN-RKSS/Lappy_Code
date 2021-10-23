const intialState = { counter: 0 };

export const reducer = (state = intialState, action) => {
  if (action.type === "increment") {
    //console.log(state);
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    //console.log(state);
    return { counter: state.counter - 1 };
  }

  return state;
};
