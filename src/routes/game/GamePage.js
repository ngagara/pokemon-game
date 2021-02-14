import { useRouteMatch, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import { PokemonContext } from "../../context/pokemonContext";

import StartPage from './routes/Start/Start';
import BoardPage from './routes/Board/Board';
import FinishPage from './routes/Finish/Finish';
import NotFound from '../NotFound/NotFound';


function GamePage() {

  const match = useRouteMatch();

  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [player1Cards, setPlayer1Cards] = useState({});
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

  const setCards = (player1, player2) => {
    setPlayer1Cards(player1);
    setPlayer2Cards(player2)
  };

  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      onSelectedPokemons: handelSelectedPokemons,
      setCardsPlayer: setCards,
      player1: player1Cards,
      player2: player2Cards
    }}>
      <Switch>
      </Switch>
       <Route path="/404" component={NotFound}></Route>
       <Route>
             <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
                {/* <Route path={`${match.path}/finish`} render = {() => (
                      <Redirect to="/404"/>
                    )}/> */}
             </Switch>
       </Route>
    </PokemonContext.Provider>
  );
  }
  
  export default GamePage;
  


  