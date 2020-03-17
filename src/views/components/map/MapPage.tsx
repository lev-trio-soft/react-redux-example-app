import Map from "./Map.tsx";
import React, { useEffect } from "react";
import { loadMarkers } from "../../../redux/markers/markersActions.tsx"
import { loadPolylines } from "../../../redux/polylines/polylinesActions.tsx";
import { loadPolygons } from "../../../redux/polygons/polygonsActions.tsx";
import { connect } from "react-redux";
import Spinner from "../common/Spinner.tsx";
import { IAppState } from "models/IAppState";

interface IProps {
  loadPolylines: Function;
  loadPolygons: Function;
  loadMarkers: Function;
  markers;
  polygons;
  polylines;
  loading: Boolean;
}

function MapPage({
  polylines,
  loadPolylines,
  polygons,
  loadPolygons,
  markers,
  loadMarkers,
  loading
}: IProps) {
  debugger;
  useEffect(() => {
    if (polygons.items.length + markers.items.length + polylines.items.length == 0) {
      loadMarkers().catch(error => {
        alert("Loading markers failed" + error);
      });

      loadPolylines().catch(error => {
        alert("Loading polylines failed" + error);
      });

      loadPolygons().catch(error => {
        alert("Loading polygons failed" + error);
      });
    }
  });

  return (
    <div>
      {loading || markers.length + polygons.length + polylines.length == 0 ? (
        <Spinner />
      ) : (
          <>
            <Map markers={markers} polylines={polylines} polygons={polygons} />
          </>
        )}
    </div>
  );
}

const mapStateToProps = (state: IAppState) => ({
  markers: state.markers,
  polylines: state.polylines,
  polygons: state.polygons,
  loading: state.apiCallsInProgress > 0
});

const mapDispatchToProps = {
  loadMarkers,
  loadPolylines,
  loadPolygons
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
