import { IMarkersState } from "../redux/markers/models/IMarkersState";
import { IPolygonsState } from "../redux/polygons/models/IPolygonsState";
import { IPolylinesState } from "../redux/polylines/models/IPolylinesState";

export interface IAppState {
    markers: IMarkersState;
    polylines: IPolylinesState;
    polygons: IPolygonsState;
    apiCallsInProgress: number
}