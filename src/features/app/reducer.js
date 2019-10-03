import { APP_FIELD_CHANGED } from './model'

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case APP_FIELD_CHANGED:
      return action.payload
    default:
      return state
  }
}
