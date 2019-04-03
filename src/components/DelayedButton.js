import React, { Component } from 'react';

export default class DelayedButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      temp: null
    } ;
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event),this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }
}
