import React, { useState } from 'react' 


export const AuthContext = React.createContext([])

export const AuthProvider = (props) => {
  const [pokedex , setPokedex] = useState([])

  return(
    <AuthContext.Provider value = {{pokedex,setPokedex}}>
      {props.children}
    </AuthContext.Provider>

  )
}