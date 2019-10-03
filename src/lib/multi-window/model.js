import namespaced from '../namespaced'

export const NAMESPACE = '@@multi-window'

const ns = namespaced(NAMESPACE)

export const MV_INIT = ns('MV_INIT')

export const MV_SYNCED = ns('MV_SYNCED')

export const MV_SUBSCRIBED = ns('MV_SUBSCRIBED')

export const MV_UNSUBSCRIBED = ns('MV_UNSUBSCRIBED')
