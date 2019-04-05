import React, { Component } from 'react'

class CoordinatesButton extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  render(){
    return(
      <div>
      <button onClick={(ev) => this.props.onReceiveCoordinates([ev.clientX, ev.clientY])}></button>
      </div>
    )
  }
}
export default CoordinatesButton;
