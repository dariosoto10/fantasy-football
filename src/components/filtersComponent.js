import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledForm from '../styles/styledForm'
import inRange from '../utils/inRange'

const FiltersComponent = ({ onFilterPlayers, positions, cleanFilters }) => {
  const playerObj = {
    name: '',
    position: '',
    age: ''
  }
  const [playerForm, handlePlayerForm] = useState(playerObj)

  const [ageError, setAgeError] = useState('')
  const ageClassName = ageError.length > 0 ? 'errorInput' : ''

  const handleForm = ({ target: { value, name } }) => {
    if (name === 'name') {
      if (value.length === 0 || isNaN(value)) handlePlayerForm({ ...playerForm, [name]: value })
    } else {
      if (name === 'age' && value.length > 0 && !inRange(value, 18, 40)) {
        setAgeError('please provide an age between 18 and 40')
      } else {
        setAgeError('')
      }

      handlePlayerForm({ ...playerForm, [name]: value })
    }
  }

  const handleCleanFilters = () => {
    handlePlayerForm(playerObj)
    cleanFilters()
  }

  const handleSubmit = e => {
    onFilterPlayers(playerForm)
    e.preventDefault()
  }

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Player Name"
          value={playerForm.name}
          onChange={handleForm}
        />
        <select name="position" value={playerForm.position} onChange={handleForm}>
          <option value="">Position</option>
          {positions.map((position, index) => (
            <option key={index}>{position}</option>
          ))}
        </select>
        <div className="container-input">
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={playerForm.age}
            onChange={handleForm}
            className={ageClassName}
          />
          {ageError.length > 0 && <p className="errorTxt">{ageError}</p>}
        </div>
        <button type="submit">SEARCH</button>
        <button type="button" className="__clean-filter" onClick={handleCleanFilters}>CLEAN</button>
      </form>
    </StyledForm>
  )
}

FiltersComponent.propTypes = {
  cleanFilters: PropTypes.func,
  onFilterPlayers: PropTypes.func,
  positions: PropTypes.arrayOf(PropTypes.string)
}

export default FiltersComponent
