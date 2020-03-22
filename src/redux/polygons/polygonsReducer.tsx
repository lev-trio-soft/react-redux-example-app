import * as types from "../actionTypes";
import { initialState } from "../initialState";
import IAction from "../../models/IAction";
import { IPolygonsState } from "./models/IPolygonsState";

export default function polygonReducer(state = initialState.polygons, action: IAction<any>): IPolygonsState {
  switch (action.type) {
    // case types.CREATE_POLYGON_SUCCESS:
    //   return [...state, { ...action.polygon }];
    // case types.UPDATE_POLYGON_SUCCESS:
    //   return state.map(polygon =>
    //     polygon.id === action.polygon.id ? action.polygon : polygon
    //   );
    case types.LOAD_POLYGONS_SUCCESS:
      return { items: action.payload };
    // case types.DELETE_POLYGON_OPTIMISTIC:
    //   return state.filter(polygon => polygon.id !== action.polygon.id);
    default:
      return state;
  }
}
