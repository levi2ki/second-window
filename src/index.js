import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Transport } from './store'
import { App as AppContent } from './features/app'

function App() {
  return (
    <Provider store={Transport.store}>
      <AppContent />
    </Provider>
  )
}
const root = document.createElement('div')
document.body.insertBefore(root, document.body.firstChild)

ReactDOM.render(<App />, root)
