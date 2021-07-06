import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions"

class streamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onDelete= () => {
    this.props.deleteStream(this.props.match.params.id)
  }

  actions() {
    return (
      <Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  renderContent() {
    if(!this.props.stream) {
      return "Are you sure you want to delete this stream";
    }
    return `Are you sure you want to delete the stream with the title: ${this.props.stream.title}`
  }

  render() {
    return (
      <div>
        streamDelete
        <Modal
          onDismiss={() => {
            history.push("/");
          }}
          header="Delete Stream"
          content={this.renderContent()}
          action={this.actions()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream,
  })(streamDelete);
