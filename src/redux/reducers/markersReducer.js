import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function markersReducer(state = initialState.markers, action) {
  switch (action.type) {
    case types.CREATE_MARKER_SUCCESS:
      return [...state, { ...action.marker }];
    case types.UPDATE_MARKER_SUCCESS:
      return state.map(marker =>
        marker.id === action.marker.id ? action.marker : marker
      );
    case types.LOAD_MARKERS_SUCCESS:
      return action.markers;
    case types.DELETE_MARKER_OPTIMISTIC:
      return state.filter(marker => marker.id !== action.marker.id);
    default:
      return state;
  }
}
