export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";

export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";

export const LOAD_MARKERS_SUCCESS = "LOAD_MARKERS_SUCCESS";
export const CREATE_MARKER = "CREATE_MARKER";
export const CREATE_MARKER_SUCCESS = "CREATE_MARKERS_SUCCESS";
export const UPDATE_MARKER_SUCCESS = "UPDATE_MARKERS_SUCCESS";

export const LOAD_POLYLINES_SUCCESS = "LOAD_POLYLINES_SUCCESS";
export const CREATE_POLYLINE = "CREATE_POLYLINE";
export const CREATE_POLYLINE_SUCCESS = "CREATE_POLYLINE_SUCCESS";
export const UPDATE_POLYLINE_SUCCESS = "UPDATE_POLYLINE_SUCCESS";

export const LOAD_POLYGONS_SUCCESS = "LOAD_POLYGONS_SUCCESS";
export const CREATE_POLYGON = "CREATE_POLYGON";
export const CREATE_POLYGON_SUCCESS = "CREATE_POLYGON_SUCCESS";
export const UPDATE_POLYGON_SUCCESS = "UPDATE_POLYGON_SUCCESS";

export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
export const DELETE_MARKER_OPTIMISTIC = "DELETE_MARKER_OPTIMISTIC";
export const DELETE_POLYLINE_OPTIMISTIC = "DELETE_POLYLINE_OPTIMISTIC";
export const DELETE_POLYGON_OPTIMISTIC = "DELETE_POLYGON_OPTIMISTIC";
