import * as Actions from './playersActions'

describe('#playerActions', () => {
  it('actions Creators should return actions Types', () => {
    expect(Actions.default.Creators.fetchPlayers().type).toBe(Actions.default.Types.FETCH_PLAYERS)
    expect(Actions.default.Creators.successPlayers().type).toBe(Actions.default.Types.SUCCESS_PLAYERS)
    expect(Actions.default.Creators.errorsPlayers().type).toBe(Actions.default.Types.ERRORS_PLAYERS)
  })
})
