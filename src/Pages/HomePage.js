import React from 'react'
import CardPokemon from '../Componets/CardPokemon'
import Header from '../Componets/Header'
import { useRequest } from '../Hooks/UseRequest'
import { goToPokedex } from '../Router/Path'
import { BodyHome, HomeContainer } from '../Styles/Pages/HomePageStyles'
import { AuthContext } from '../AuthContext'

function HomePage() {
  const { data } = useRequest('/pokemon/?limit=200')
  const { pokedex, setPokedex } = React.useContext(AuthContext)

  const AddPokedex = (pokemon) => {
    let newPokedex = [...pokedex, pokemon]
    setPokedex(newPokedex)
    alert(`${pokemon.name} adicionado a sua pokedex`)
  }

  const pokemonList = data?.results.map((pokemon) => {
    return <CardPokemon key={pokemon.name} name={pokemon.name} handlePokedex={AddPokedex} type="pokedex" />
  })

  return (
    <HomeContainer>
      <Header button="Pokedex" goTo={goToPokedex} />
      <BodyHome>{data && pokemonList}</BodyHome>
    </HomeContainer>
  )
}

export default HomePage
