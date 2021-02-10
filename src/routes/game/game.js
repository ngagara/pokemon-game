import React, { useState, useEffect, useContext } from "react";
import { useRouteMatch, Route, Switch} from "react-router-dom";

import { FireBaseContext } from "../../context/firebaseContext";
import { PokemonContext } from "../../context/pokemonContext";

import StartPage from './routes/start/start';
import BoardPage from './routes/board/board';
import FinishPage from './routes/finish/finish';


function GamePage() {

  const match = useRouteMatch();

  const firebase = useContext(FireBaseContext);

  const [isPokemons, setPokemons] = useState({});
  const [selectPokemons, setselectPokemons] = useState([]);


  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
       setPokemons(pokemons);
    });
  },[]);

  
  const addCard = () => {
    

   
   firebase.addPokemon()

  };

  const handleClickCard = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
            pokemon.active = !pokemon.active;
        };
        acc[item[0]] = pokemon;
         
        firebase.postPokemon(item[0], pokemon)
        
        return acc;
    }, {});
    
    });
  };
  
  return (
    <PokemonContext.Provider value={{selectPokemons, addCard}}>
       <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
  }
  
  export default GamePage;
  


  