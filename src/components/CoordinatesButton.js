import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  onClickButton(event){
    let array = []
    array.push(event.clientX)
    array.push(event.clientY)
    this.props.onReceiveCoordinates(array)}

  render(){
    return <button onClick={(event) => this.onClickButton(event)}></button>
  }
}
