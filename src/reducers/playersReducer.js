import Actions from "../actions/playersActions"
import randomNumbers from "../utils/randomNumber"

export const initialState = {
  successful: false,
  requesting: false,
  errors: "",
  players: [],
  filterOptions: {}
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case Actions.Types.SUCCESS_PLAYERS:
      action.players.map(player => (player.age = randomNumbers(40, 18)))
      return {
        ...state,
        players: action.players,
        successful: true,
        requesting: false,
        errors: ""
      }

    case Actions.Types.FILTER_PLAYERS:
      return {
        ...state,
        filterOptions: action.filter
      }

    case Actions.Types.CLEAN_FILTERS:
      return {
        ...state,
        filterOptions: {}
      }

    case Actions.Types.REQUESTING_PLAYERS:
      return {
        ...state,
        requesting: true
      }

    case Actions.Types.ERRORS_PLAYERS:
      return {
        ...state,
        errors: action.error,
        requesting: false
      }

    default:
      return state
  }
}

export default auth
