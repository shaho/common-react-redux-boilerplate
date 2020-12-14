import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [];
process.env.NODE_ENV === "development" && middlewares.push(logger);

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), devToolsEnhancer())
);

export default store;
