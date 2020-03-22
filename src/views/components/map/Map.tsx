import React, { useEffect, useRef } from "react";

import L from "leaflet";
import 'leaflet-draw';
//import 'leaflet-editable';  @types //overwrites standart leaflet functions of editing, polyline to path etc..
//import 'leaflet-editable-polyline';

import "leaflet/dist/leaflet.css";
import 'leaflet-draw/dist/leaflet.draw.css';

//import 'leaflet.markercluster/dist/MarkerCluster.css';
//import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
//import 'leaflet.markercluster/dist/leaflet.markercluster';


import markerError from "../../../assets/markerError.png";
import markerOk from "../../../assets/markerOk.png";
import markerWarning from "../../../assets/markerWarning.png";

import { IMarker } from "../../../redux/markers/models/IMarker";
import { IPolygon } from "../../../redux/polygons/models/IPolygon";
import { IPolyline } from "../../../redux/polylines/models/IPolyline";

const style = {
  width: "100%",
  height: "500px"
};

interface IProps {
  markers: IMarker[];
  polygons: IPolygon[];
  polylines: IPolyline[];
}

export function Map({ markers, polygons, polylines }: IProps) {

  let map: L.Map;
  let OkMarkers = new L.FeatureGroup();
  let editableLayer = new L.FeatureGroup();

  let drawOptions: L.Control.DrawConstructorOptions = {
    draw: {
      polyline: false,
      polygon: false,
      circle: false,
      marker: false,
      rectangle: false,
      circlemarker: false
    },
    edit: {
      featureGroup: editableLayer, //REQUIRED!!
      remove: false
    }
  };

  useEffect(() => {
    // create map
    map = L.map("map", {
      center: [31.813657, 34.65553], // map starting position
      zoom: 10,
      maxZoom: 17,
      minZoom: 8,
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


    map.addLayer(editableLayer);

    let drawControl = new L.Control.Draw(drawOptions);
    map.addControl(drawControl);

    //filter by zoom level
    map.on('zoomend', function () {
      if (map.getZoom() < 12) {
        map.removeLayer(OkMarkers);
      }
      else {
        map.addLayer(OkMarkers);
      }
    });

    let ZoomViewer = L.Control.extend({
      onAdd: function () {
        var container = L.DomUtil.create('div');
        var gauge = L.DomUtil.create('div');
        container.style.width = '100px';
        container.style.background = 'rgba(255,255,255,0.5)';
        container.style.textAlign = 'left';
        map.on('zoomstart zoom zoomend', function (ev) {
          gauge.innerHTML = 'Zoom level: ' + map.getZoom();
        })
        container.appendChild(gauge);

        return container;
      }
    });
    (new ZoomViewer).addTo(map);

  }, []);


  //addMarkers
  useEffect(() => {
    markers.map(marker => {
      switch (marker.status) {
        case 0:
          let ok = L.marker(marker.coordinates, {
            icon: L.icon({
              iconUrl: markerOk,
              iconSize: [30, 30]
            })
          }).addTo(map);
          OkMarkers.addLayer(ok)
          break;
        case 1:
          L.marker(marker.coordinates, {
            icon: L.icon({
              iconUrl: markerWarning,
              iconSize: [30, 30]
            })
          }).addTo(map);
          break;
        case 2:
          L.marker(marker.coordinates
            , {
              icon: L.icon({
                iconUrl: markerError,
                iconSize: [30, 30]
              }
              )
            }
          ).addTo(map);
          break;
      }
    });
  }, [markers])

  useEffect(() => {
    polygons.forEach(element => {
      L.polygon(
        element.coordinates,
      ).addTo(map);
    });
  }, [polygons]);

  useEffect(() => {
    polylines.forEach(element => {
      //  = L.Polyline.PolylineEditor(element.coordinates).addTo(map);
      let pl: L.Polyline = L.polyline(element.coordinates).addTo(map);

      // let coords: L.LatLng[] | L.LatLng[][] | L.LatLng[][][] = pl.getLatLngs();
      // let disabled = [coords[0], coords[coords.length - 1]];

      // disabled.forEach(latlng => {
      //   // let vertex = L.marker(latlng);
      //   // vertex.dragging.disable();
      //   // vertex.setIcon(goalpost);
      // });

      editableLayer.addLayer(pl);
    });
  }, []);


  return (
    <>
      <div id="map" style={style} />
    </>);
}
export default Map;
