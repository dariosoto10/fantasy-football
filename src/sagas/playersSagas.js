import { takeEvery, all, fork, put, call } from "redux-saga/effects"
import { playerService } from '../services/playersService'
import playerActions from "../actions/playersActions"

const watchCounter = () =>
  function* watch() {
    yield takeEvery(playerActions.Types.FETCH_PLAYERS, fetchPlayers)
  }

export function* fetchPlayers() {
  yield put(playerActions.Creators.requestingPlayers())
  try{
    const response = yield call(playerService)
    yield put(playerActions.Creators.successPlayers(response))
  } catch (err) {
    yield put(playerActions.Creators.errorsPlayers("Something went wrong"))
  }
}

export default function* counterSagas() {
  yield all([fork(watchCounter())])
}
