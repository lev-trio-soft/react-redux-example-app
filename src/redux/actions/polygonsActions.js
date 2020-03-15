import * as types from "./actionTypes";
import * as polygonesApi from "../../domainServices/polygonesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPolygonsSuccess(polygones) {
  return { type: types.LOAD_POLYGONS_SUCCESS, polygones };
}

export function createPolygonSuccess(polyline) {
  return { type: types.CREATE_POLYGON_SUCCESS, polyline };
}

export function updatePolygonSuccess(polyline) {
  return { type: types.UPDATE_POLYGON_SUCCESS, polyline };
}

export function deletePolygonOptimistic(polyline) {
  return { type: types.DELETE_POLYGON_OPTIMISTIC, polyline };
}

export function loadPolygons() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return polygonesApi
      .getPolygons()
      .then(polygones => {
        dispatch(loadPolygonsSuccess(polygones));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function savePolygon(polyline) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return polygonesApi
      .savePolygon(polyline)
      .then(savedPolygon => {
        polyline.id
          ? dispatch(updatePolygonSuccess(savedPolygon))
          : dispatch(createPolygonSuccess(savedPolygon));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deletePolygon(polyline) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deletePolygonOptimistic(polyline));
    return polygonesApi.deletePolygon(polyline.id);
  };
}
