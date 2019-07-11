import { put, call } from 'redux-saga/effects'
import playerActions from "../actions/playersActions"
import { playerService } from '../services/playersService'
import { fetchPlayers } from './playersSagas'

describe('#playersSagas', () => {
  it('should works as the workflow: Request Action -> Call Service -> Success Action', () => {
    const generator = fetchPlayers()
    const requestAction = playerActions.Creators.requestingPlayers()
    const successAction = playerActions.Creators.successPlayers()

    expect(generator.next().value).toEqual(put(requestAction))
    expect(generator.next().value).toEqual(call(playerService))
    expect(generator.next().value).toEqual(put(successAction))
  })
})
