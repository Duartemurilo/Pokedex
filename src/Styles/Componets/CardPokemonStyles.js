import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4vh;
  align-items: center;
  border: 1px solid red;
  border-radius: 15px;
  height: 22vw;
  width: 15vw;
  box-shadow: 1px 0px 8px 0px rgba(255, 0, 0, 0.7);
  cursor: pointer;
  margin-left: 1vw;
  margin-right: 1vw;
  transition: all ease;
  p {
    font-size: 25px;
    margin-top: 0px;
    margin-bottom: 0;
    color: black;
  }
`

export const PokemonImage = styled.img`
  height: 55%;
  width: 80%;
  object-fit: cover;
  :hover {
    transform: scale(1.05);
  }
`

export const Id = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 0%;
  background-color: rgba(255, 0, 0, 0.7);
  color: white;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-top-left-radius: 11px;
  width: 1.5vw;
  color: white;
`
export const PokeBol = styled.img`
  height: 3.25vh;
  object-fit: cover;
  width: 1.85vw;
  margin-right: 1vw;
  margin-top: 0;
  :hover {
    transform: scale(1.05);
  }
`

export const RemoveButton = styled.h2`
  margin-right: 1vw;
  margin-top: 0;
  margin-bottom: 0px;
  color: red;
  transition: all ease;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`
