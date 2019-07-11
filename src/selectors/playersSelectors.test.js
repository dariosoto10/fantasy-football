import * as PlayersSelectors from './playersSelectors'
import mockPlayers from './mockPlayers'

const mockParameters = {
  playersReducer: {
    players: [
      {
        name: "fantasy",
        position: "keeper"
      },
      {
        name: "football",
        position: "defense"
      }
    ],
    filterOptions: {},
    successful: false,
    requesting: false,
    errors: ""
  },
}

describe('#PlayersSelectors sample selectors', () => {
  it('#selectPlayers should returns an array', () => {
    expect(Array.isArray(PlayersSelectors.selectPlayers(mockParameters))).toBe(true)
  })

  it('#selectFilters should returns an object', () => {
    expect(typeof(PlayersSelectors.selectFilters(mockParameters))).toBe('object')
  })

  it('#selectSuccessful should returns a boolean', () => {
    expect(typeof(PlayersSelectors.selectSuccessful(mockParameters))).toBe('boolean')
  })

  it('#selectRequesting should returns a boolean', () => {
    expect(typeof(PlayersSelectors.selectRequesting(mockParameters))).toBe('boolean')
  })

  it('#selectErrors should returns a boolean', () => {
    expect(typeof(PlayersSelectors.selectErrors(mockParameters))).toBe('string')
  })
})

describe('#PlayersSelectors complex selectors', () => {
  const desiredStatus = {
    requesting: false,
    successful: false,
    errors: ""
  }

  it('#selectErrors should return a object and some status by default', () => {
    expect(typeof(PlayersSelectors.getStatus(mockParameters))).toBe('object')
    expect(PlayersSelectors.getStatus(mockParameters)).toMatchObject(desiredStatus)
  })

  it('#getPositions should return an array with positions according mockParameters', () => {
    expect(Array.isArray(PlayersSelectors.getPositions(mockParameters))).toBe(true)
    expect(PlayersSelectors.getPositions(mockParameters).includes('defense')).toBe(true)
    expect(PlayersSelectors.getPositions(mockParameters).includes('keeper')).toBe(true)
    expect(PlayersSelectors.getPositions(mockParameters).includes('center')).toBe(false)
  })

  it('#getUserIsFiltering should return false if the filters values are empty otherwise return true', () => {
    const mockToFilterWithoutValue = {
      playersReducer: {
        filterOptions: {
          age: ''
        }
      }
    }
    expect(PlayersSelectors.getUserIsFiltering(mockToFilterWithoutValue)).toBe(false)

    const mockToFilterWithValue = {
      playersReducer: {
        filterOptions: {
          age: 21
        }
      }
    }

    expect(PlayersSelectors.getUserIsFiltering(mockToFilterWithValue)).toBe(true)
  })

  it('#getPlayersByFilters should return an array with players filtering by age', () => {
    const ageToTest = mockPlayers[1].age
    const arrPlayersMock = {
      playersReducer: {
        players: mockPlayers,
        filterOptions: {
          age: ageToTest
        }
      }
    }

    expect(Array.isArray(PlayersSelectors.getPlayersByFilters(arrPlayersMock))).toBe(true)
    PlayersSelectors.getPlayersByFilters(arrPlayersMock).map(player => {
      return expect(player.age).toBe(ageToTest)
    })
  })

  it('#getPlayersByFilters should return an array with players filtering by position', () => {
    const positionToTest = mockPlayers[1].position
    const arrPlayersMock = {
      playersReducer: {
        players: mockPlayers,
        filterOptions: {
          position: positionToTest
        }
      }
    }

    expect(Array.isArray(PlayersSelectors.getPlayersByFilters(arrPlayersMock))).toBe(true)
    PlayersSelectors.getPlayersByFilters(arrPlayersMock).map(player => {
      return expect(player.position).toBe(positionToTest)
    })
  })

  it('#getPlayersByFilters should return an array with players filtering by name', () => {
    const nameToTest = mockPlayers[1].name
    const arrPlayersMock = {
      playersReducer: {
        players: mockPlayers,
        filterOptions: {
          position: nameToTest
        }
      }
    }

    expect(Array.isArray(PlayersSelectors.getPlayersByFilters(arrPlayersMock))).toBe(true)
    PlayersSelectors.getPlayersByFilters(arrPlayersMock).map(player => {
      return expect(player.position).toBe(nameToTest)
    })
  })
})

