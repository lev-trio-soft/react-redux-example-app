import React, { useEffect } from "react";
import * as markersActions from "../../redux/actions/markersActions";
import * as polylinesActions from "../../redux/actions/polylinesActions";
import * as polygonsActions from "../../redux/actions/polygonsActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import WebMap from "./Map";

export function MapPage({ polylines, polygons, markers, actions, loading }) {
  useEffect(() => {
    if (polygons.length + markers.length + polylines.length == 0) {
      actions.loadMarkers().catch(error => {
        alert("Loading markers failed" + error);
      });

      actions.loadPolylines().catch(error => {
        alert("Loading polylines failed" + error);
      });

      actions.loadPolygons().catch(error => {
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
          <WebMap markers={markers} polylines={polylines} polygons={polygons} />
        </>
      )}
    </div>
  );
}

MapPage.propTypes = {
  markers: PropTypes.array.isRequired,
  polygons: PropTypes.array.isRequired,
  polylines: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    markers: state.markers,
    polylines: state.polylines,
    polygons: state.polygons,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMarkers: bindActionCreators(markersActions.loadMarkers, dispatch),
      loadPolylines: bindActionCreators(
        polylinesActions.loadPolylines,
        dispatch
      ),
      loadPolygons: bindActionCreators(polygonsActions.loadPolygons, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
