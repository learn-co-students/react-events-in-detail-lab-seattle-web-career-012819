import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onDelayedClick: this.props.onDelayedClick,
      delay: this.props.delay
    }
  }

  handleClick = (event) => {
    window.setTimeout(() => {
      this.state.onDelayedClick(event)
    },
    this.state.delay
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click For Delay
        </button>
      </div>
    )
  }
}

export default DelayedButton