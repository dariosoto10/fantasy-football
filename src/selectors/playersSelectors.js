import { createSelector } from "reselect"
import testRegex from "../utils/regex"
import verifyObject from "../utils/verifyObject"

export const selectPlayers = state => state.playersReducer.players
export const selectFilters = state => state.playersReducer.filterOptions
export const selectSuccessful = state => state.playersReducer.successful
export const selectRequesting = state => state.playersReducer.requesting
export const selectErrors = state => state.playersReducer.errors

export const getStatus = createSelector(
  [selectSuccessful, selectRequesting, selectErrors],
  (successful, requesting, errors) => ({ successful, requesting, errors })
)

export const getPositions = createSelector(
  selectPlayers,
  positions => {
    const positionsArr = positions.map(position => position.position)
    const cleanPositions = positionsArr.filter((item, index) => {
      return positionsArr.indexOf(item) === index
    })
    return cleanPositions
  }
)

export const getUserIsFiltering = createSelector(
  selectFilters,
  filters => {
    return verifyObject(filters)
  }
)

export const getPlayersByFilters = createSelector(
  [selectPlayers, selectFilters],
  (players, filters) => {
    const objKeys = Object.keys(filters)
    if (objKeys.length < 1) {
      return []
    } else {
      const arrFiltered = players.filter(function(item) {
        for (var key in filters) {
          if (filters[key] !== "") {
            if (item[key] === undefined) return false
            if (
              typeof item[key] === "number"
                ? isNaN(filters[key]) ? item[key] !== filters[key] : item[key] !== parseInt(filters[key])
                : !testRegex(filters[key], item[key])
            )
              return false
          }
        }
        return true
      })

      return arrFiltered
    }
  }
)
