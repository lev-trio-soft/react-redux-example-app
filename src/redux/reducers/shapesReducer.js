import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function shapesReducer(state = initialState.shapes, action) {
  switch (action.type) {
    case types.LOAD_SHAPES_SUCCESS:
      return action.shapes;
    default:
      return state;
  }
}
