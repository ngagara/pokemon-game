import { useRouteMatch, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import { PokemonContext } from "../../context/pokemonContext";

import StartPage from './routes/Start/Start';
import BoardPage from './routes/Board/Board';
import FinishPage from './routes/Finish/Finish';
import LoosPage from './routes/Loos/Loos';

function GamePage() {

  const match = useRouteMatch();

  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [player2Cards, setPlayer2Cards] = useState({});

  const handelSelectedPokemons = (key, pokemon) => {
   
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

  const setCards = (player2) => {
    setPlayer2Cards(player2)
  };
   
  const clearContext = () => {
    setSelectedPokemons({});
  };

  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      onSelectedPokemons: handelSelectedPokemons,
      setCardsPlayer: setCards,
      clearContext: clearContext, 
      player2: player2Cards
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
        <Route path={`${match.path}/loos`} component={LoosPage} />
      </Switch>
    </PokemonContext.Provider>
  );
  }
  
  export default GamePage;
  


  