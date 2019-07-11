import React from "react"
import PropTypes from 'prop-types'
import StyledTable from "../styles/styledTable"

const TableComponent = ({ showPlayers }) => {
  return (
    <StyledTable>
      <table className="animated fadeIn fast">
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Nationality</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {showPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.nationality}</td>
              <td>{player.age}</td>
            </tr>
          ))}
          {showPlayers.length < 1 && (
            <tr>
              <td colSpan="4" className="errorTxt">
                No players were found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </StyledTable>
  )
}

TableComponent.propTypes = {
  showPlayers: PropTypes.array
}

export default TableComponent
