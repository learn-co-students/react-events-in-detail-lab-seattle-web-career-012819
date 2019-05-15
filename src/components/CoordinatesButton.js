import React, { Component } from 'react'

class CoordinatesButton extends Component {
    constructor(props){
        super(props)
        console.log(props) 
    }

    handleClick = (event) => {
        let x = event.clientX
        let y = event.clientY
        let coordinatesArray = [x, y]
        console.log(coordinatesArray)
        this.props.onReceiveCoordinates(coordinatesArray)
    }

    render() {

        return(
            <div>
                <button onClick={this.handleClick}>Coordinates</button>
            </div>
        )
    }
}

export default CoordinatesButton
