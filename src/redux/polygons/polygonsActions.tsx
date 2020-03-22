import * as types from "../actionTypes";
import * as polygonsApi from "../../domainServices/polygonsApi";
import { beginApiCall, apiCallError } from "../apiStatusActions";
import * as ActionUtility from '../../utilities/ActionUtility';

export function loadPolygonsSuccess(polygons: any) {
  return ActionUtility.createAction(types.LOAD_POLYGONS_SUCCESS, polygons);
}

export function loadPolygons() {
  return function (dispatch: (arg0: import("../../../../../../../Users/Lev/projects/New-Kando-Map/src/models/IAction").default<any>) => void) {
    dispatch(beginApiCall());
    return polygonsApi
      .getPolygons()
      .then(polygons => {
        dispatch(loadPolygonsSuccess(polygons));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

// export function createPolygonSuccess(polyline) {
//   return { type: types.CREATE_POLYGON_SUCCESS, polyline };
// }

// export function updatePolygonSuccess(polyline) {
//   return { type: types.UPDATE_POLYGON_SUCCESS, polyline };
// }

// export function deletePolygonOptimistic(polyline) {
//   return { type: types.DELETE_POLYGON_OPTIMISTIC, polyline };
// }

// export function savePolygon(polyline) {
//   //eslint-disable-next-line no-unused-vars
//   return function (dispatch, getState) {
//     dispatch(beginApiCall());
//     return polygonsApi
//       .savePolygon(polyline)
//       .then(savedPolygon => {
//         polyline.id
//           ? dispatch(updatePolygonSuccess(savedPolygon))
//           : dispatch(createPolygonSuccess(savedPolygon));
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function deletePolygon(polyline) {
//   return function (dispatch) {
//     // Doing optimistic delete, so not dispatching begin/end api call
//     // actions, or apiCallError action since we're not showing the loading status for this.
//     dispatch(deletePolygonOptimistic(polyline));
//     return polygonsApi.deletePolygon(polyline.id);
//   };
// }
