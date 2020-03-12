import * as types from "./actionTypes";
import * as shapesApi from "../../domainServices/shapesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadShapesSuccess(shapes) {
  return { type: types.LOAD_SHAPES_SUCCESS, shapes };
}

export function loadShapes() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return shapesApi
      .getShapes()
      .then(shapes => {
        dispatch(loadShapesSuccess(shapes));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
