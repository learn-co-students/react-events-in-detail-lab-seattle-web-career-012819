import React from 'react'

class CoordinateButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onReceiveCoordinates: this.props.onReceiveCoordinates
    }
  }
  
  clickHandler = (event) => {
    let coords = [
      event.clientX,
      event.clientY
    ]
    this.state.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          Click Me
        </button>
      </div>
    )
  }
}

export default CoordinateButton