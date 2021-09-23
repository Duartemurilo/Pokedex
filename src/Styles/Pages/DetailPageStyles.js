import styled from 'styled-components'

export const DetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const BannerPokemon = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.7);
`

export const ImagePokemon = styled.img`
  height: 30vh;
  margin-top: 8vh;
  object-fit: cover;
  width: 20vw;
`
export const PokemonInfo = styled.div`
  display: flex;
  position: fixed;
  margin-bottom: 0%;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50vh;
  bottom: 0%;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  background-color: white;
`

export const Power = styled.div`
  display: flex;
  height: 100%;
  width: 20vw;
  flex-direction: column;
  color: black;
  padding: 8px;
`
export const Titulo = styled.h3`
  margin-top: 8px;
  margin-bottom: 0px;
`
