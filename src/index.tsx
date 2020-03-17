import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./views/App.tsx";
import "./index.css";
import "leaflet/dist/leaflet.css";

render(<App />, document.getElementById('app'));
