import React, { Component } from 'react';

class DelayedButton extends Component {
    constructor(props){
        super(props)
        }

    separating = (ev) => {
        ev.persist()
        setTimeout(() => {this.props.onDelayedClick(ev)}, this.props.delay)
    }


    render() {
        return (
            <div>
                <button onClick={(ev) => this.separating(ev)}>fuck</button>
            </div>
        );
    }
}

export default DelayedButton;

//onDelayedClick, delay (a number)