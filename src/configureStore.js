import createSagaMiddleware from "redux-saga"
import { compose, createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
  store.runSaga = sagaMiddleware.run

  return store
}

export default configureStore
