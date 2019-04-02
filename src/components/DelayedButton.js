import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick = (ev) => {
        ev.persist();
        setTimeout(() => {
            this.props.onDelayedClick(ev);
        }, this.props.delay);
    }
    
    render() {
        return(
            <button onClick={this.handleClick}>Click Me!</button>
        )
    }
}