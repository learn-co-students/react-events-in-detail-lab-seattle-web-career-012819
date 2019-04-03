import React, { Component } from 'react';

class CoordinatesButton extends Component {
    makeArray = (ev) => {
        let chompsky = []
        chompsky.push(ev.clientX, ev.clientY)
        this.props.onReceiveCoordinates(chompsky)
    }
    render() {
        return (
            <div>
                <button type="radio" onClick={(ev) => this.makeArray(ev)}>lol</button>
            </div>
        );
    }
}

export default CoordinatesButton;

