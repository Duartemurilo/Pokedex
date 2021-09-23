import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer, HeaderMidle } from '../Styles/Componets/HeaderStyles'

function Header({ name, button, goTo, currentBackground }) {
  const history = useHistory()

  return (
    <>
      {currentBackground ? (
        <HeaderContainer style={{ boxShadow: '0px 28px 50px -30px red' }}>
          <button onClick={() => goTo(history)}>{button}</button>

          <h1>{name}</h1>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <button onClick={() => goTo(history)}>{button}</button>
          <HeaderMidle>
            <h1>{name}</h1>
          </HeaderMidle>
        </HeaderContainer>
      )}
    </>
  )
}

export default Header
