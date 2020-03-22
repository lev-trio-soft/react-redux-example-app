import { IAppState } from '../models/IAppState';

export const initialState: IAppState = {
    markers: { items: [] },
    polygons: { items: [] },
    polylines: { items: [] },
    apiCallsInProgress: 0
}