import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super()
    this.state = {
      MXNquantity: 0,
      USDquantity: 0,
    }
    console.log(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: { value }}) {
    this.setState({
      MXNquantity: value,
      USDquantity: value / 21.6,
    })
  }

  render() {
    const { MXNquantity, USDquantity } = this.state
    return (
      <div>
        <form>
          <input
            type="number"
            value={MXNquantity}
            onChange={this.handleChange}  />
          <input
            type="number"
            value={USDquantity.toFixed(2)}
            onChange={this.handleChange}  />
        </form>
        <p>USD: ${USDquantity.toFixed(2)}</p>
      </div>
    )
  }
}

export default Form