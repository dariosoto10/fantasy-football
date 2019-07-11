import styled from 'styled-components'

const StyledTable = styled.div`
  overflow: scroll;
  height: 50vh;

  @media screen and (min-width: 900px) {
    height: 60vh;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      text-align: center;
      background-color: black;
      color: white;

      th {
        font-weight: 500;
        font-size: 20px;
        padding: 1rem;
        border: 1px solid black;
        text-transform: uppercase;
      }
    }

    tbody {
      text-align: center;

      td {
        height: 30px;
        font-size: 18px;
        padding: .5rem;
        border-top: 1px solid #cccccc;
      }
    }
  }
`
export default StyledTable
