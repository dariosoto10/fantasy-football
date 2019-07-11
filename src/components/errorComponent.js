import React from 'react'
import PropTypes from 'prop-types'
import StyledError from '../styles/styledError'

const ErrorComponent = ({ message }) => {
  return (
    <StyledError>
      <p className="errorTxt uppercase">{message}</p>
    </StyledError>
  )
}

ErrorComponent.propTypes = {
  message: PropTypes.string
}

export default ErrorComponent
