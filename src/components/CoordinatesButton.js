import React, { Component } from 'react';

class CoordinatesButton extends Component {
    clickCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.clickCoordinates} />
        );
    }
}

export default CoordinatesButton;