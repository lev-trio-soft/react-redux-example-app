import Map from "./Map.tsx";
import React, { useEffect } from "react";
import { loadMarkers } from "../../redux/actions/markersActions.tsx";
import { loadPolylines } from "../../redux/actions/polylinesActions.tsx";
import { loadPolygons } from "../../redux/actions/polygonsActions.tsx";
import { connect } from "react-redux";
import Spinner from "../common/Spinner.tsx";

interface Props {
  loadPolylines: Function;
  loadPolygons: Function;
  loadMarkers: Function;
  markers: Array<any>;
  polygons: Array<any>;
  polylines: Array<any>;
  actions: Object;
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
}: Props) {
  useEffect(() => {
    if (polygons.length + markers.length + polylines.length == 0) {
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

function mapStateToProps(state) {
  return {
    markers: state.markers,
    polylines: state.polylines,
    polygons: state.polygons,
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadMarkers,
  loadPolylines,
  loadPolygons
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
