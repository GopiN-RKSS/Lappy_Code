const intialState = { itemsList: [] };

export const reducer = (state = intialState, action) => {
  if (action.type === "addTodo") {
    return { itemsList: [...state.itemsList, action.name] };
  }

  return state;
};
