import { combineReducers } from "redux";
import markers from "./markers/markersReducer";
import polygons from "./polygons/polygonsReducer";
import polylines from "./polylines/polylinesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  markers,
  polylines,
  polygons,
  apiCallsInProgress
});

export default rootReducer;
