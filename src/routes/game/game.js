import { useRouteMatch, Route, Switch} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

import { PokemonContext } from "../../context/pokemonContext";

import StartPage from './routes/Start/Start';
import BoardPage from './routes/Board/Board';
import FinishPage from './routes/Finish/Finish';

function GamePage() {

  const match = useRouteMatch();

  const [selectedPokemons, setSelectedPokemons] = useState({});

  
  const handelSelectedPokemons = (key, pokemon) => {
    console.log(pokemon);
   
    setSelectedPokemons(prevState => {
      if(prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];
        return copyState
      }
      return {
        ...prevState,
        [key] : pokemon
      }
     })
  };

  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      onSelectedPokemons: handelSelectedPokemons
    }}>
       <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
  }
  
  export default GamePage;
  


  