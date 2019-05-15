import React, { Component } from 'react'

class DelayedButton extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    handleClick = (event) => {
        event.persist()
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