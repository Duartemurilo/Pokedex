import React from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from '../Hooks/UseRequest'
import Header from '../Componets/Header'
import { goToHomePage } from '../Router/Path'
import { DetailLeft, DetailMidlle, DetailPageContainer, DetailRight } from '../Styles/Pages/DetailPageStyles'
import InfoCard from '../Componets/InfoCard'

function DetailPage() {
  const path = useParams()
  const { data } = useRequest('/pokemon', path.id)

  const listPowers = data?.stats.map((pokemon) => {
    return <InfoCard titulo={pokemon.stat.name} data={pokemon.base_stat} type=":" />
  })

  return (
    <DetailPageContainer>
      <Header name={data?.name} button="Lista" goTo={goToHomePage} />

      <DetailLeft>
        <h1>Principais ataques</h1>

        {data?.moves[1].move.name ? (
          <div>
            {' '}
            <InfoCard titulo={data?.moves[0].move.name} />
            <InfoCard titulo={data?.moves[1].move.name} />
            <InfoCard titulo={data?.moves[2].move.name} />
            <InfoCard titulo={data?.moves[3].move.name} />
            <InfoCard titulo={data?.moves[4].move.name} />
          </div>
        ) : (
          <div>
            <h2 style={{ color: 'rgba(255, 0, 0, 0.7)' }}>Esse Pokemon nao possui movientos nos nossos registro</h2>
          </div>
        )}
      </DetailLeft>
      <DetailMidlle>
        <img src={data?.sprites.front_default} alt={data?.name} />
      </DetailMidlle>

      <DetailRight>
        <h1>Poderes</h1>
        {data && listPowers}
      </DetailRight>
    </DetailPageContainer>
  )
}

export default DetailPage
