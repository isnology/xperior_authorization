import React, { Component, Fragment } from 'react'
import { getDecodedToken } from './api/token'
import App from './App'


export default class Store extends Component {
  state = {
    user: getDecodedToken()
  }
  
  render() {
    return (
      <App store={this} />
    )
  }
}