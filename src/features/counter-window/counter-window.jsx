import React from 'react'
import { connect } from 'react-redux'
import { Input } from '../../ui'
import { fieldChanged } from '../app/model'

const enhance = connect(
  state => ({ counter: state.counter }),
  { fieldChanged }
)

class CounterWindowView extends React.PureComponent {
  render() {
    return (
      <div>
        <div>Welcome second window</div>
        <div>
          <Input
           name="counter" 
           value={this.props.counter}
           onChange={(e) => {

             this.props.fieldChanged(e.target.value)
           }}
            />
        </div>
      </div>
    )
  }
}

export const CounterWindow = enhance(CounterWindowView)
