import { createActions } from "reduxsauce"

const { Types, Creators } = createActions({
  fetchPlayers: ["players"],
  requestingPlayers: ["players"],
  successPlayers: ["players"],
  errorsPlayers: ["error"],
  filterPlayers: ["filter"],
  cleanFilters: ["filter"]
})

const Actions = {
  Types,
  Creators
}

export default Actions
