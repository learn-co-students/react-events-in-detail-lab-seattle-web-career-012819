// Code CoordinatesButton Component Here
import React from 'react'
import {Component} from 'react'

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
      </button>
    )
  }
}
