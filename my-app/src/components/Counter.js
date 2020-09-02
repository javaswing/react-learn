import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <h2>{value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}