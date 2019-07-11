import reducer, { initialState } from './playersReducer'
import Actions from '../actions/playersActions'
import mockPlayers from '../selectors/mockPlayers'

describe('#playersReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle REQUESTING_PLAYERS, return requesting value to true', () => {
    const requestAction = {
      type: Actions.Types.REQUESTING_PLAYERS
    }

    const mockInitialState = Object.assign({}, initialState, { ...initialState, requesting: true })

    const reducerAfterAction = reducer({}, requestAction)
    expect(reducerAfterAction.requesting).toEqual(mockInitialState.requesting)
  })

  it('should handle SUCCESS_PLAYER, return array of players according the action response', () => {
    const successAction = {
      type: Actions.Types.SUCCESS_PLAYERS,
      players: mockPlayers
    }

    const mockInitialState = Object.assign({}, initialState, {
      ...initialState,
      players: mockPlayers,
      successful: true
    })

    const reducerAfterAction = reducer({}, successAction)

    expect(reducerAfterAction.players).toEqual(mockInitialState.players)
    expect(reducerAfterAction.successful).toEqual(mockInitialState.successful)
  })

  it('should handle ERRORS_PLAYERS, return errors value to the string: <name-of-error>', () => {
    const errorAction = {
      type: Actions.Types.ERRORS_PLAYERS,
      error: 'error example'
    }

    const mockInitialState = Object.assign({}, initialState, {
      ...initialState,
      errors: 'error example'
    })

    const reducerAfterAction = reducer({}, errorAction)
    expect(reducerAfterAction.errors).toEqual(mockInitialState.errors)
  })

  it('should handle FILTER_PLAYERS, return filterOptions according the object provided', () => {
    const filtersAction = {
      type: Actions.Types.FILTER_PLAYERS,
      filter: {
        age: 21,
        name: 'fantasy'
      }
    }

    const mockInitialState = Object.assign({}, initialState, {
      ...initialState,
      filterOptions: {
        age: 21,
        name: 'fantasy'
      }
    })

    const reducerAfterAction = reducer({}, filtersAction)
    expect(reducerAfterAction.filterOptions).toEqual(mockInitialState.filterOptions)
  })

  it('should handle CLEAN_FILTERS, return filterOptions with empty object', () => {
    const filtersAction = {
      type: Actions.Types.CLEAN_FILTERS,
    }

    const mockInitialState = Object.assign({}, initialState, {
      ...initialState,
      filterOptions: {}
    })

    const reducerAfterAction = reducer({}, filtersAction)
    expect(reducerAfterAction.filterOptions).toEqual(mockInitialState.filterOptions)
  })
})
