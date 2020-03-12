import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import shapes from "./shapesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  shapes,
  apiCallsInProgress
});

export default rootReducer;
