import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: 12vh;
  position: fixed;
  width: 100%;
  background-color: white;
  button {
    border: none;
    display: flex;
    align-items: center;
    padding: 8px;
    font-size: 20px;
    background: none;
    cursor: pointer;
    margin-left: 6vw;
    :hover {
      transform: scale(1.1);
    }
  }
`

export const HeaderMidle = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  align-items: center;
`
