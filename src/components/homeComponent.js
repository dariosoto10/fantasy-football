import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import StyledHeader from '../styles/styledHeader'
import StyledHome from '../styles/styledHome'
import Table from './tableComponent'
import Filters from './filtersComponent'
import Spinner from './spinnerComponent'
import Error from './errorComponent'

const homeComponent = ({
  players,
  positions,
  cleanFilters,
  onFilterPlayers,
  status: { requesting, successful, errors }
}) => {
  return (
    <StyledHome>
      <StyledHeader>FOOTBALL PLAYER FINDER</StyledHeader>
      {requesting && <Spinner />}
      {successful && (
        <Fragment>
          <Filters onFilterPlayers={onFilterPlayers} positions={positions} cleanFilters={cleanFilters} />
          <Table showPlayers={players} />
        </Fragment>
      )}
      {errors.length > 0 && <Error message="something went wrong" />}
    </StyledHome>
  )
}

homeComponent.propTypes = {
  players: PropTypes.array,
  positions: PropTypes.array,
  cleanFilters: PropTypes.func,
  onFilterPlayers: PropTypes.func,
  status: PropTypes.shape({
    requesting: PropTypes.bool,
    succesfull: PropTypes.bool,
    errors: PropTypes.string
  })
}

export default homeComponent
