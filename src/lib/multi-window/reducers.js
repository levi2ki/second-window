import { MV_INIT, MV_SUBSCRIBED, MV_UNSUBSCRIBED } from './model'

const $initialState = {
  subscriptions: [],
  init: false
}

const subscribe = (state, action) => {
  if (action.type === MV_SUBSCRIBED) {
    return [...state, action.payload]
  }
  return state
}

const unsubscribe = (state, action) => {
  if (action.type === MV_UNSUBSCRIBED) {
    return state.filter(x => x !== action.payload)
  }
  return state
}

export const reducer = (state = $initialState, action) => {
  switch (action.type) {
    case MV_INIT:
      return {
        ...state,
        init: true
      }
    case MV_SUBSCRIBED:
      return {
        ...state,
        subscriptions: subscribe(state.subscriptions, action)
      }
    case MV_UNSUBSCRIBED:
      return {
        ...state,
        subscriptions: unsubscribe(state.subscriptions, action)
      }
    default:
      return state
  }
}
