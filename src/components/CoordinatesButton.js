import React from 'react'

class CoordinatesButton extends React.Component {
  handleClick = (ev) => {
    this.props.onReceiveCoordinates([ev.clientX, ev.clientY])
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick} >I'm a button</button>
      </div>
    )
  }
}

export default CoordinatesButton;
