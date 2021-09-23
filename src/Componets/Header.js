import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../Styles/Componets/HeaderStyles'

function Header({ name, button, goTo }) {
  const history = useHistory()

  return (
    <>
      {name ? (
        <HeaderContainer>
          <button onClick={() => goTo(history)}>{button}</button>
          <h1>{name}</h1>
          <div></div>
        </HeaderContainer>
      ) : (
        <HeaderContainer style={{ marginTop: '4vh' }}>
          <button onClick={() => goTo(history)}>{button}</button>
          <h1>{name}</h1>
          <div></div>
        </HeaderContainer>
      )}
    </>
  )
}

export default Header
