import React, { Component } from 'react';

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleString()}</h1>
      </div>
    );
  }
}
