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


  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
       setPokemons(pokemons);
    });
  },[]);


  const addNewCard = () => {

    const pidge = {
      "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
      ],
      "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
      },
      "type": "flying",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      "name": "pidgeotto",
      "base_experience": 122,
      "height": 11,
      "id": 17,
      "values": {
        "top": "A",
        "right": 2,
        "bottom": 7,
        "left": 5
      }
    }

   firebase.addPokemon(pidge)

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
    <PokemonContext.Provider value={{isPokemons, handleClickCard, addNewCard, useEffect}}>
       <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
  }
  
  export default GamePage;
  


  