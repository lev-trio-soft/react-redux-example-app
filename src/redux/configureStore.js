import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import initialState from "./reducers/initialState";

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose; // add support for Redux dev tools

export default createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
);
