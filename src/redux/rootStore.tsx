import { compose, applyMiddleware, createStore, Store } from 'redux';
import rootReducer from "./rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { IAppState } from '../models/IAppState';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose; // add support for Redux dev tools

export default function rootStore(initialState: Partial<IAppState>): Store<IAppState> {
  const store: Store<IAppState> = createStore(
    rootReducer,
    initialState as any,
    process.env.NODE_ENV === "production"
      ? applyMiddleware(thunk)
      : composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))// support for redux devtools
  );
  return store;
}