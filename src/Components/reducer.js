export const initialState = {
  user: null,
  orders: [],
};

function reducer(state, action) {
  //here the state  is referring to the initialState
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.order],
      };
    default:
      return state;
  }
}

export default reducer;
