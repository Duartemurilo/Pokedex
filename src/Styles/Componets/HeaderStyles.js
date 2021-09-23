import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
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
