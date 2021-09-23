import styled from 'styled-components'

export const PokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 97%;
  height: 100vh;
  color: rgba(255, 0, 0, 0.7);
  font-family: Apple Chancery, cursive;
`

export const BodyPokedex = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  height: 85vh;
`

export const DivEmpityPokedex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    height: 40vh;
  }
  p {
    font-size: 48px;
    color: red;
  }
`
