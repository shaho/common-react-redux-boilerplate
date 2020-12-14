import { combineReducers } from "redux";

import testReducer from "../sandbox/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
