import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  getMouseCoords = (e) => {
    const x = e.clientX
    const y = e.clientY

    this.props.onReceiveCoordinates([x, y])
  }

  render() {
    return (
      <button onClick={this.getMouseCoords}>Log Mouse Coords</button>
    )
  }
}