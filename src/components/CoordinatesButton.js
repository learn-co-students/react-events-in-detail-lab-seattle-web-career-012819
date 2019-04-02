import React, { Component } from 'react';

class CoordinatesButton extends Component {

  createsCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (

      <button
        onClick={this.createsCoordinates}
      >Coordinates</button>

    );
  }
}

export default CoordinatesButton;
