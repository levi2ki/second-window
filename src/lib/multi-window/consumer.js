import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

export class MultiWindowConsumer {
  constructor(subscribe, Component) {
    this.Component = Component
    this.$$subscription = subscribe()
  }

  render() {
    const root = document.createElement('div')
    document.body.insertBefore(root, document.body.firstChild)
    const Component = this.Component

    const ComponentToRender = () => (
      <Provider store={this.$$subscription.store}>
        <Component />
      </Provider>
    )
    ReactDOM.render(<ComponentToRender />, root)
  }
}