import counterSaga from "./sagas/playersSagas"

const rootSagas = store => {
  store.runSaga(counterSaga)
}

export default rootSagas
