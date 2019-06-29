import React from 'react';
import { connect } from 'react-redux';

class MainRedux extends React.Component {
  state = {
    name: '',
  };

  handleOnChangeName = e => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="container text-center mt-4 pb-4 border border-success rounded">
        <h1 className="lead display-4">Main Redux</h1>
        <div className="d-flex justify-content-around">
          <div className="lead mt-4 form-control padding mr-4">
            <h6>Name: {this.state.name}</h6>
          </div>
          <div className="lead mt-4 form-control">
            <h6>Age: {this.props.age}</h6>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <div className="">
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleOnChangeName} // Decided to use state
              value={this.state.name}
            />
          </div>
          <div>
            <button
              onClick={this.props.handleAgeUp}
              className="btn btn-success"
            >
              Age Up
            </button>
          </div>
          <div>
            <button
              onClick={this.props.handleAgeDown}
              className="btn btn-success"
            >
              Age Down
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    name: state.name,
  };
};

const mapDispatchToProps = dispach => {
  return {
    handleAgeUp: () => dispach({ type: 'AGE_UP' }),
    handleAgeDown: () => dispach({ type: 'AGE_DOWN' }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainRedux);
