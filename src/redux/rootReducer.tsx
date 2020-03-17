import { combineReducers } from "redux";
import markers from "./markers/markersReducer.tsx";
import polygons from "./polygons/polygonsReducer.tsx";
import polylines from "./polylines/polylinesReducer.tsx";
import apiCallsInProgress from "./apiStatusReducer.tsx";

const rootReducer = combineReducers({
  markers,
  polylines,
  polygons,
  apiCallsInProgress
});

export default rootReducer;
