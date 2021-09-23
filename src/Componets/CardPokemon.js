import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRequest } from '../Hooks/UseRequest'
import { goToDetailPage } from '../Router/Path'
import { CardContainer, Id, PokeBol, PokemonImage, RemoveButton } from '../Styles/Componets/CardPokemonStyles'

function CardPokemon({ handlePokedex, name, type }) {
  const { data } = useRequest('/pokemon', name)
  const history = useHistory()

  return (
    <CardContainer>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Id style={{ marginTop: '0px', marginBottom: '0px' }}>{data?.id}</Id>
        {type ? (
          <PokeBol
            onClick={() => handlePokedex(data)}
            src="https://img.elo7.com.br/product/original/28E57D8/pokebola-eva.jpg"
            alt="pokebola"
          />
        ) : (
          <RemoveButton onClick={() => handlePokedex(data.name)}>X</RemoveButton>
        )}
      </div>
      <PokemonImage onClick={() => goToDetailPage(history, data.id)} src={data?.sprites.front_default} alt={name} />
      <p>{name}</p>
      <p style={{ fontSize: '20px' }}>{data?.types.map((poke) => poke.type.name).join(', ')}</p>
    </CardContainer>
  )
}

export default CardPokemon
