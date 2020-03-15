import React from "react";
import L from "leaflet";
import { Draw } from "leaflet-draw";
import markerAsset from "../../assets/marker.png";

const style = {
  width: "100%",
  height: "500px"
};

class WebMap extends React.Component {
  componentDidMount() {
    //get data from props
    let markers = this.props.markers;
    let polygons = this.props.polygons;
    let polylines = this.props.polylines;

    // create map
    this.map = L.map("map", {
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
    // FeatureGroup is to store editable layers
    // var drawnItems = new L.FeatureGroup();
    // this.map.addLayer(drawnItems);
    // var drawControl = new L.Control.Draw({
    //   edit: {
    //     featureGroup: drawnItems
    //   }
    // });
    // this.map.addControl(drawControl);

    //by recieved data
    this.addPolygons(polygons);
    this.addPolylines(polylines);
    this.addMarkers(markers);
  }

  addPolygons(polygons) {
    polygons.forEach(element => {
      L.polygon(
        element.coordinates,
        !element.color ? "red" : element.color
      ).addTo(this.map);
    });
  }

  addMarkers(markers) {
    markers.forEach(marker => {
      L.marker(marker.coordinates, {
        icon: L.icon({
          iconUrl: markerAsset,
          iconSize: [30, 30]
        })
      }).addTo(this.map);
    });
  }

  addPolylines(polylines) {
    polylines.forEach(element => {
      L.polyline(element.coordinates).addTo(this.map);
    });
  }

  // componentDidUpdate({ markerPosition }) {
  //   // check if position has changed
  //   if (this.props.markerPosition !== markerPosition) {
  //     this.marker.setLatLng(this.props.markerPosition);
  //   }
  // }

  render() {
    return <div id="map" style={style} />;
  }
}
export default WebMap;
