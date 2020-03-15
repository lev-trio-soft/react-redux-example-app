import React from "react";
import * as markersActions from "../../redux/actions/markersActions";
import * as polylinesActions from "../../redux/actions/polylinesActions";
import * as polygonsActions from "../../redux/actions/polygonsActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import WebMap from "./Map";

class MapPage extends React.Component {
  componentDidMount() {
    const { polylines, polygons, markers, actions } = this.props;
    if (
      Object.entries(polygons).length +
        Object.entries(markers).length +
        Object.entries(polylines).length ==
      0
    ) {
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
  }

  render() {
    return (
      <div>
        {this.props.loading ||
        Object.entries(this.props.markers).length +
          Object.entries(this.props.polygons).length +
          Object.entries(this.props.polylines).length ==
          0 ? (
          <Spinner />
        ) : (
          <>
            <WebMap
              markers={this.props.markers}
              polylines={this.props.polylines}
              polygons={this.props.polygons}
            />
          </>
        )}
      </div>
    );
  }
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
