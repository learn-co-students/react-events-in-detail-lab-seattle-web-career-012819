import React, { Component } from 'react';

class DelayedButton extends Component {

    clickEvent = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }
    render() {
        return (
            <button onClick={this.clickEvent}></button>
        );
    }
}

export default DelayedButton;