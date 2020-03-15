import * as types from "../actions/actionTypes.tsx";
import initialState from "./initialState";

export default function polygonReducer(state = initialState.polygons, action) {
  switch (action.type) {
    case types.CREATE_POLYGON_SUCCESS:
      return [...state, { ...action.polygon }];
    case types.UPDATE_POLYGON_SUCCESS:
      return state.map(polygon =>
        polygon.id === action.polygon.id ? action.polygon : polygon
      );
    case types.LOAD_POLYGONS_SUCCESS:
      return action.polygons;
    case types.DELETE_POLYGON_OPTIMISTIC:
      return state.filter(polygon => polygon.id !== action.polygon.id);
    default:
      return state;
  }
}
