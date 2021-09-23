import React from 'react'
import { AuthContext } from '../AuthContext'
import CardPokemon from '../Componets/CardPokemon'
import Header from '../Componets/Header'
import { goToHomePage } from '../Router/Path'
import { BodyPokedex, DivEmpityPokedex, PokedexContainer } from '../Styles/Pages/PokedexStyle'
import pokebolaImage from '../PokebolaAberta.png'

function PokedexPage() {
  const { pokedex, setPokedex } = React.useContext(AuthContext)

  const removePokemon = (pokemon) => {
    const index = pokedex.findIndex((p) => p.name === pokemon)

    const newPokedex = pokedex

    if (index > -1) {
      newPokedex.splice(index, 1)
      setPokedex([...newPokedex])
    }
  }

  const pokemonList = pokedex?.map((pokemon) => {
    return <CardPokemon key={pokemon.name} name={pokemon.name} handlePokedex={removePokemon} />
  })

  return (
    <PokedexContainer>
      <Header name="Pokedex" button="Lista" goTo={goToHomePage} />

      {pokemonList.length > 0 ? (
        <BodyPokedex>{pokemonList}</BodyPokedex>
      ) : (
        <BodyPokedex style={{ alignItems: 'center', justifyContent: 'center' }}>
          {' '}
          <DivEmpityPokedex>
            <img src={pokebolaImage} alt="pokebola" />
            <p>Pokedex vazia</p>
          </DivEmpityPokedex>
        </BodyPokedex>
      )}
    </PokedexContainer>
  )
}

export default PokedexPage
