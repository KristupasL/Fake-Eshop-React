const INITIAL_STATE = {
  products: []
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    default:
      return state;
  }
}

export default reducer;
