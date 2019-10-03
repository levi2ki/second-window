import React from 'react'
import curryN from 'ramda/src/curryN'

const noop = () => {}

const defaultConfig = {
  removeOnUnmount: true,
  persistState: false, // todo: implement
  onMount: noop,
  onUnmount: noop
}

const injectState = (appStore, config, reducers, WrappedComponent) => {
  const conf = Object.assign(defaultConfig, config)
  if (conf.persistState === true) {
    console.warn('persistState not implemented yet')
  }

  function unmountCallback(reducers, cb) {
    Object.keys(reducers).forEach(key => appStore.unloadReducer(key))
    cb()
  }

  const InjectedState = props => {
    useEffect(() => {
      Object.keys(reducers).forEach(key => appStore.injectReducer(key, reducers[key]))
      conf.onMount()

      if (conf.removeOnUnmount) {
        return unmountCallback(conf.onUnmount)
      }
    }, [])

    return <WrappedComponent {...props} />
  }
  return memo(InjectedState)
}

export const createInjectReducerHoc = curryN(4, injectState)
