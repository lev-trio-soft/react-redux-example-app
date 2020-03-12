import React from "react";
import * as shapesActions from "../../redux/actions/shapesActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import WebMap from "./Map";

class MapPage extends React.Component {
  componentDidMount() {
    const { shapes, actions } = this.props;
    if (Object.entries(shapes).length == 0) {
      actions.loadShapes().catch(error => {
        alert("Loading shapes failed" + error);
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.loading || Object.entries(this.props.shapes).length == 0 ? (
          <Spinner />
        ) : (
          <>
            <WebMap shapes={this.props.shapes} />
          </>
        )}
      </div>
    );
  }
}

MapPage.propTypes = {
  shapes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    shapes: state.shapes,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadShapes: bindActionCreators(shapesActions.loadShapes, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
