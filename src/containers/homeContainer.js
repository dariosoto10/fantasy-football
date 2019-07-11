import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectPlayers,
  getStatus,
  getPositions,
  getPlayersByFilters,
  getUserIsFiltering
} from '../selectors/playersSelectors'
import { bindActionCreators } from 'redux'
import Actions from '../actions/playersActions'
import Home from '../components/homeComponent'

const HomeContainer = props => {
  const { status, players, positions, playersFiltered, filterPlayers, isUserFiltering, cleanFilters } = props

  useEffect(() => {
    props.fetchPlayers()
  }, [])

  const showPlayers = isUserFiltering ? playersFiltered : players

  return (
    <Home
      onFilterPlayers={filterPlayers}
      players={showPlayers}
      status={status}
      positions={positions}
      isUserFiltering={isUserFiltering}
      cleanFilters={cleanFilters}
    />
  )
}

const mapStateToProps = state => ({
  players: selectPlayers(state),
  status: getStatus(state),
  positions: getPositions(state),
  isUserFiltering: getUserIsFiltering(state),
  playersFiltered: getPlayersByFilters(state)
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...Actions.Creators
    },
    dispatch
  )
})

HomeContainer.propTypes = {
  players: PropTypes.array,
  positions: PropTypes.array,
  cleanFilters: PropTypes.func,
  fetchPlayers: PropTypes.func,
  filterPlayers: PropTypes.func,
  isUserFiltering: PropTypes.bool,
  playersFiltered: PropTypes.array,
  status: PropTypes.shape({
    requesting: PropTypes.bool,
    succesfull: PropTypes.bool,
    errors: PropTypes.string
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
