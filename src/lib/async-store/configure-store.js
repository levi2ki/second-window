import { createStore, combineReducers } from "redux";

export function configureStore(staticReducers, initialState, enhancers) {
  function createReducer(asyncReducers) {
    return combineReducers({
      ...staticReducers,
      ...asyncReducers
    });
  }

  const store = createStore(createReducer(), initialState, enhancers);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  store.createReducer = createReducer;
  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  store.unloadReducer = key => {
    delete store.asyncReducers[key];
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Return the modified store
  return store;
}
