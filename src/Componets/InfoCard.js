import React from 'react'

function InfoCard({ titulo, data }) {
  return (
    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <h3 style={{ marginTop: '8px', marginBottom: '0px', fontSize: '20px' }}>{titulo}</h3>
      <p style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '10px', fontSize: '25px' }}>{data}</p>
    </div>
  )
}

export default InfoCard
