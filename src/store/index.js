import { configureStore, createInjectReducerHoc } from '../lib/async-store'
import { mvReducer, StoreTransportWrapper } from '../lib/multi-window'
import { reducer as appReducer } from '../features/app/reducer'

const store = configureStore(
  {
    'multi-window': mvReducer,
    'counter': appReducer,
  },
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const Transport = new StoreTransportWrapper(store)

export const withAsyncReducers = createInjectReducerHoc(store)
