import React, { Component } from 'react'

class DelayedButton extends Component {
  constructor(props){
    super(props)
    console.log(this.props.onDelayedClick)
  }

  clicked = (ev) => {
    ev.persist();
    setTimeout(() => {
      this.props.onDelayedClick(ev)
    }, this.props.delay)
  }

  render(){
    return(
      <div>
      <button onClick={this.clicked}></button>
      </div>
    )
  }
}
export default DelayedButton;
