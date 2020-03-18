import * as types from "./markersActionTypes.tsx";
import { initialState } from "../initialState.tsx";
import IAction from "models/IAction";
import { IMarkersState } from "./models/IMarkersState";

export default function markersReducer(state = initialState.markers, action: IAction<any>): IMarkersState {
  switch (action.type) {
    // case types.CREATE_MARKER_SUCCESS:
    //   return [...state, { ...action.marker }];
    // case types.UPDATE_MARKER_SUCCESS:
    //   return state.map(marker =>
    //     marker.id === action.marker.id ? action.marker : marker
    //   );
    case types.LOAD_MARKERS_SUCCESS:
      return { items: action.payload };
    // case types.DELETE_MARKER_OPTIMISTIC:
    //   return state.filter(marker => marker.id !== action.marker.id);
    default:
      return state;
  }
}
