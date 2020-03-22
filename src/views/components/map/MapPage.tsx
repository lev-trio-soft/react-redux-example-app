import { Map as MyLeafletMap } from "./Map";
import React, { useEffect, useState } from "react";
import { loadMarkers } from "../../../redux/markers/markersActions"
import { loadPolylines } from "../../../redux/polylines/polylinesActions";
import { loadPolygons } from "../../../redux/polygons/polygonsActions";
import Spinner from "../common/Spinner";
import { IAppState } from "../../../models/IAppState";
import { connect } from "react-redux";
import { Map as ReactLeafletMap, TileLayer, Marker } from "react-leaflet"
import { IMarker } from "../../../redux/markers/models/IMarker";
import { IPolygon } from "../../../redux/polygons/models/IPolygon";
import { IPolyline } from "../../../redux/polylines/models/IPolyline";

interface IProps {
  loadPolylines: Function;
  loadPolygons: Function;
  loadMarkers: Function;
  markers: IMarker[];
  polygons: IPolygon[];
  polylines: IPolyline[];
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

  const [markersState, setMarkers] = useState({
    markers
  });


  useEffect(() => {
    if (polygons.length + markers.length + polylines.length == 0) {
      loadMarkers().catch((error: string) => {
        alert("Loading markers failed" + error);
      });

      loadPolylines().catch((error: string) => {
        alert("Loading polylines failed" + error);
      });

      loadPolygons().catch((error: string) => {
        alert("Loading polygons failed" + error);
      });
    }
  }, []);

  function moveMarker() {
    markers[0].coordinates[0] += 0.1;
  }

  return (
    <div>
      {loading || markers.length + polygons.length + polylines.length == 0 ? (
        <Spinner />
      ) : (
          <>
            <br></br>
            <button onClick={moveMarker}>RT EVENT 1</button>
            <button onClick={moveMarker}>RT EVENT 2</button>
            <button onClick={moveMarker}>RT EVENT 3</button>
            <button onClick={moveMarker}>RT EVENT 4</button>
            <br></br>
            <MyLeafletMap markers={markers} polylines={polylines} polygons={polygons} />
            <br></br>
          </>
        )}
    </div>
  );
}

const mapStateToProps = (state: IAppState) => ({
  markers: state.markers.items,
  polylines: state.polylines.items,
  polygons: state.polygons.items,
  loading: state.apiCallsInProgress > 0
});

const mapDispatchToProps = {
  loadMarkers,
  loadPolylines,
  loadPolygons
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
