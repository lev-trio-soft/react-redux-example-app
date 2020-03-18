import { Map as MyLeafletMap } from "./Map.tsx";
import React, { useEffect, useState } from "react";
import { loadMarkers } from "../../../redux/markers/markersActions.tsx"
import { loadPolylines } from "../../../redux/polylines/polylinesActions.tsx";
import { loadPolygons } from "../../../redux/polygons/polygonsActions.tsx";

import Spinner from "../common/Spinner.tsx";
import { IAppState } from "models/IAppState";
import { connect } from "react-redux";
import { Map as ReactLeafletMap, TileLayer, Marker, Popup } from "react-leaflet"
import { IMarker } from "redux/markers/models/IMarker";
import { IPolygon } from "redux/polygons/models/IPolygon";
import { IPolyline } from "redux/polylines/models/IPolyline";

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
            <button onClick={moveMarker}>Move Marker</button>
            <br></br>
            <MyLeafletMap markers={markers} polylines={polylines} polygons={polygons} />
            <br></br>

            <ReactLeafletMap center={[31.813657, 34.65553]} zoom={10}>
              <TileLayer
                url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGV2LXRyaW8tc29mdCIsImEiOiJjazduYjFzM3EwMThlM2xudnFrb3V6ZG9pIn0.clEH5tM5XSJI-5WTBftAlQ"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {
                markers.map(element => {
                  <Marker position={element.coordinates} />
                })
              }

            </ReactLeafletMap>
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
