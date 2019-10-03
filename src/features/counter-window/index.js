import { MultiWindowConsumer } from '../../lib/multi-window/consumer'
import { CounterWindow } from './counter-window'

const MV = new MultiWindowConsumer(window.$$sub, CounterWindow)

MV.render()