// Types
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// Initial state
const initialState = {
  data: 42,
};

// Action Creator
export function increment(amount) {
  return {
    type: INCREMENT_COUNTER,
    payload: amount,
  };
}
export function decrement(amount) {
  return {
    type: DECREMENT_COUNTER,
    payload: amount,
  };
}

// Reducer
export default function testReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - payload,
      };
    default:
      return state;
  }
}
