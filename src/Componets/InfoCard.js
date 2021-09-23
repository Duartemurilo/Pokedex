import React from 'react'
import { InfoCardContainer, InfoRow } from '../Styles/Componets/InfoCardStyle'

function InfoCard({ titulo, data, type }) {
  return (
    <InfoCardContainer>
      <InfoRow>
        <ul>
          <li>
            {' '}
            {type ? (
              <h3>
                {titulo}:{data}
              </h3>
            ) : (
              <h3>{titulo}</h3>
            )}
          </li>
        </ul>
      </InfoRow>
    </InfoCardContainer>
  )
}

export default InfoCard
