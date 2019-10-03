import uuid from 'uuid/v4'
import { hri } from 'human-readable-ids'
import { MV_INIT, MV_SUBSCRIBED, MV_UNSUBSCRIBED } from './model'

export class StateTransport {
  constructor(store) {
    this.$$store = store
    this.$$subscriptions = []
    this.$$windowName = hri.random()
    this.$$store.dispatch({ type: MV_INIT })
  }

  get store() {
    return this.$$store
  }

  $$subscribe = openedWindow => () => {
    const id = uuid()
    const sub = this.$$createSubscriptionObject(id)

    this.$$subscriptions.push(sub)
    this.$$store.dispatch({ type: MV_SUBSCRIBED, payload: id })
    return sub
  }

  $$createSubscriptionObject = id => {
    return {
      id,
      store: this.$$store,
      windowName: this.$$windowName,
      unsubscribe: this.$$unsubscribe(id)
    }
  }

  $$unsubscribe = id => () => {
    this.$$subscriptions = this.$$subscriptions.filter(x => x.id !== id)
    this.$$store.dispatch({ type: MV_UNSUBSCRIBED, payload: id })
  }

  open(url) {
    const openedWindow = window.open(url, this.$$windowName)
    openedWindow.$$sub = this.$$subscribe(openedWindow)
  }
}
