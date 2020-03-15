import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import markers from "./markersReducer";
import polygons from "./polygonsReducer";
import polylines from "./polylinesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  markers,
  polylines,
  polygons,
  apiCallsInProgress
});

export default rootReducer;
