import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
            </div>
        )
    }
}

export default Counter