import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import { rootReducer } from "../Redux/Reducers/index";
const enhancer = compose(
  applyMiddleware(
    // sagaMiddleware,
    logger
  )
);

export const appStore = () => {
  const store = createStore(rootReducer, {}, enhancer);
  // initSagas(sagaMiddleware);
  return store;
};
