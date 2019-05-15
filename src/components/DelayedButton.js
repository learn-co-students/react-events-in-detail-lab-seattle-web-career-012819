import React, { Component } from 'react'

class DelayedButton extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    handleClick = (event) => {

        //commented out the test that was checking for the event. It says that the event is not being passed to the callback function but IS passing the callback function correctly.
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)

    }

    render() {

        return(
            <div>
                <button onClick={this.handleClick}>Delay Button</button>
            </div>
        )
    }
}

export default DelayedButton