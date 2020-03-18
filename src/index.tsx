import React from "react";
import { render } from "react-dom";
import App from "./views/App.tsx";
import "./index.css";
import "leaflet/dist/leaflet.css";

render(<App />, document.getElementById('app'));
