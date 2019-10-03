import namespaced from '../../lib/namespaced'

const NAMESPACE = '@@APP'

export const APP_FIELD_CHANGED = namespaced(NAMESPACE, 'APP_FIELD_CHANGED')

export const fieldChanged = (payload) => ({
  type: namespaced(NAMESPACE, 'APP_FIELD_CHANGED'),
  payload
})