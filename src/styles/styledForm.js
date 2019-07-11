import styled from "styled-components"

const Form = styled.div`
  form {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 100px;
  }

  input, select {
    width: 300px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: ${props => props.theme.gray};
    padding: 0px 15px;
    background-color: ${props => props.theme.white};
    border-radius: 5px;
    border: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
    border: 1px solid ${props => props.theme.grayLight};
    margin-bottom: 15px;
  }

  input {
    max-width: 350px;
  }

  button {
    font-weight: bold;
    font-size: 18px;
    background-color: ${props => props.theme.purple};
    border: 1px solid ${props => props.theme.purple};
    color: ${props => props.theme.grayLight};
    border-radius: 5px;
    width: 150px;
    height: 50px;
    cursor: pointer;
  }

  .__clean-filter {
    color: ${props => props.theme.purple};
    border: 1px solid ${props => props.theme.purple};
    background-color: ${props => props.theme.white};
  }

  @media screen and (max-width: 900px) {
    input, select, .container-input {
      width: 100%;
    }
  }
`
export default Form
