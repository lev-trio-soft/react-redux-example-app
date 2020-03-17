import React, { useEffect, useState } from "react";
import L from "leaflet";
import markerAsset from "../../../assets/marker.png";
import { IMarkersState } from "redux/markers/models/IMarkersState";
import { IPolygonsState } from "redux/polygons/models/IPolygonsState";
import { IPolylinesState } from "redux/polylines/models/IPolylinesState";

const style = {
  width: "100%",
  height: "500px"
};

interface IProps {
  markers: IMarkersState;
  polygons: IPolygonsState;
  polylines: IPolylinesState;
}

export function Map({ markers, polygons, polylines }: IProps) {
  const [map, setMap] = useState({});

  useEffect(() => {
    // create map
    let newMap = L.map("map", {
      center: [31.813657, 34.65553], // map starting position
      zoom: 16,
      layers: [
        L.tileLayer(
          //mapbox opeLayer configured url
          "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGV2LXRyaW8tc29mdCIsImEiOiJjazduYjFzM3EwMThlM2xudnFrb3V6ZG9pIn0.clEH5tM5XSJI-5WTBftAlQ",
          {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }
        )
      ]
    });

    polygons.items.forEach(element => {
      L.polygon(
        element.coordinates,
        !element.color ? "red" : element.color
      ).addTo(newMap);
    });

    markers.items.forEach(marker => {
      L.marker(marker.coordinates, {
        icon: L.icon({
          iconUrl: markerAsset,
          iconSize: [30, 30]
        })
      }).addTo(newMap);
    });

    polylines.items.forEach(element => {
      L.polyline(element.coordinates).addTo(newMap);
    });

    setMap(newMap);
  }, []);

  // componentDidUpdate({ markerPosition }) {
  //   // check if position has changed
  //   if (this.props.markerPosition !== markerPosition) {
  //     this.marker.setLatLng(this.props.markerPosition);
  //   }
  // }

  return <div id="map" style={style} />;
}
export default Map;
