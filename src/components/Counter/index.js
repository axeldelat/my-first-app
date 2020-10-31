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

  // clickAddHandler() {
  //   let { counter } = this.state
  //   this.setState({
  //     counter: counter + 1
  //   })
  // }

  // clickDecreaseHandler() {
  //   let { counter } = this.state
  //   this.setState({
  //     counter: counter - 1
  //   })
  // }

  clickHandler(operator) {
    let { counter } = this.state
    if (operator === "add") {
      counter++
    } else {
      counter--
    }

    this.setState({
      counter,
    })
  }

  render() {
  console.log("Render", this.state.Counter)
  return (
    <div>
      <h1>Counter: {this.state.counter}</h1>
      <button onClick={() => this.clickHandler("add")}>Add</button>
      <button onClick={() => this.clickHandler("Decrease")}>Decrease</button>
    </div>
    )
  }
}

export default Counter