import React, { Component } from 'react'

export default class DelayedButton extends Component{

  onClickButton(event) {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return <button onClick={(event) => this.onClickButton(event)}></button>
  }
}
