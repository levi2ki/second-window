import React from 'react'
import { connect } from 'react-redux'
import { Transport } from '../../store'
import { AppContainer, Button, Input } from '../../ui'

const enhance = connect(
  state => ({ counter: state.counter }),
)
const AppView = props => (
  <AppContainer>
    <Button
      onClick={() => {
        Transport.open('http://localhost:9000/counter')
      }}
    >
      Push me!
    </Button>
    <div>{props.counter}</div>
  </AppContainer>
)

export const App = enhance(AppView)