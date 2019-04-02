import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (ev) => {
        this.props.onReceiveCoordinates([ev.clientX, ev.clientY])
    }
    
    render() {
        return(
            <button onClick={this.handleClick}>Click Me!</button>
        )
    }
}