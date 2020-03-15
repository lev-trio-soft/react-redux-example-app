import * as types from "./actionTypes";
import * as polylinesApi from "../../domainServices/polylinesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPolylinesSuccess(polylines) {
  return { type: types.LOAD_POLYLINES_SUCCESS, polylines };
}

export function createPolylineSuccess(polyline) {
  return { type: types.CREATE_POLYLINE_SUCCESS, polyline };
}

export function updatePolylineSuccess(polyline) {
  return { type: types.UPDATE_POLYLINE_SUCCESS, polyline };
}

export function deletePolylineOptimistic(polyline) {
  return { type: types.DELETE_POLYLINE_OPTIMISTIC, polyline };
}

export function loadPolylines() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return polylinesApi
      .getPolylines()
      .then(polylines => {
        dispatch(loadPolylinesSuccess(polylines));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function savePolyline(polyline) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return polylinesApi
      .savePolyline(polyline)
      .then(savedPolyline => {
        polyline.id
          ? dispatch(updatePolylineSuccess(savedPolyline))
          : dispatch(createPolylineSuccess(savedPolyline));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deletePolyline(polyline) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deletePolylineOptimistic(polyline));
    return polylinesApi.deletePolyline(polyline.id);
  };
}
