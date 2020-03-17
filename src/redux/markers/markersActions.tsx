import * as types from "./markersActionTypes.tsx";
import * as markersApi from "../../domainServices/markersApi.tsx";
import { beginApiCall, apiCallError } from "../apiStatusActions.tsx";
import { IMarker } from "./models/IMarker";
import IAction from "models/IAction";
import * as ActionUtility from '../../utilities/ActionUtility.tsx';

export function loadMarkersSuccess(markers) {
  return ActionUtility.createAction(types.LOAD_MARKERS_SUCCESS, markers);
}

export function loadMarkers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return markersApi
      .getMarkers()
      .then(markers => {
        dispatch(loadMarkersSuccess(markers));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// export function createMarkerSuccess(marker: IMarker): IAction<IMarker> {
//   return ActionUtility.createAction(types.CREATE_MARKER_SUCCESS, marker);
// }

// export function updateMarkerSuccess(marker) {
//   return { type: types.UPDATE_MARKER_SUCCESS, marker };
// }

// export function deleteMarkerOptimistic(marker) {
//   return { type: types.DELETE_MARKER_OPTIMISTIC, marker };
// }

// export function saveMarker(marker) {
//   //eslint-disable-next-line no-unused-vars
//   return function (dispatch, getState) {
//     dispatch(beginApiCall());
//     return markersApi
//       .saveMarker(marker)
//       .then(savedMarker => {
//         marker.id
//           ? dispatch(updateMarkerSuccess(savedMarker))
//           : dispatch(createMarkerSuccess(savedMarker));
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function deleteMarker(marker) {
//   return function (dispatch) {
//     // Doing optimistic delete, so not dispatching begin/end api call
//     // actions, or apiCallError action since we're not showing the loading status for this.
//     dispatch(deleteMarkerOptimistic(marker));
//     return markersApi.deleteMarker(marker.id);
//   };
// }
