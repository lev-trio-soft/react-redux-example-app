import * as types from "../actionTypes.tsx";
import { initialState } from "../initialState.tsx";

export default function polylineReducer(
  state = initialState.polylines,
  action
) {
  switch (action.type) {
    // case types.CREATE_POLYLINE_SUCCESS:
    //   return [...state, { ...action.polyline }];
    // case types.UPDATE_POLYLINE_SUCCESS:
    //   return state.map(polyline =>
    //     polyline.id === action.polyline.id ? action.polyline : polyline
    //   );
    case types.LOAD_POLYLINES_SUCCESS:
      return { items: action.payload };
    // case types.DELETE_POLYLINE_OPTIMISTIC:
    //   return state.filter(polyline => polyline.id !== action.polyline.id);
    default:
      return state;
  }
}
