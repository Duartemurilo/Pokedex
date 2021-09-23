import React from "react";
import { BrowserRouter,Switch,Route,} from 'react-router-dom'
import DetailPage from "../Pages/DetailPage";
import HomePage from "../Pages/HomePage";
import PokedexPage from "../Pages/PokedexPage";


const Router = () => {


  return(
    <BrowserRouter>
      <Switch>
        <Route exact  path ={'/'}>
            <HomePage/>
        </Route>
        <Route exact  path ={'/Pokedex'}>
          <PokedexPage/>
        </Route>
        <Route exact  path ={'/Pokemon/:id'}>
           <DetailPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router