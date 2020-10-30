import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    console.log("Constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  clickHandler() {
    let { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }

  clickHandlerRemove() {
    let { counter } = this.state
    this.setState({
      counter: counter - 1
    })
  }

  render() {
  console.log("Render", this.state.Counter)
  return (
    <div>
      <h1>Counter: {this.state.counter}</h1>
      <button onClick={() => this.clickHandler()}>Add</button>
      <button onClick={() => this.clickHandlerRemove()}>Remove</button>
    </div>
    )
  }
}

export default Counter