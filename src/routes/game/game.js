import React, { useState, useEffect } from "react";

import database from "../../service/service";

import PokemonCard from '../../components/pokemon-card/pokemonCard';
import Layout from '../../components/layout/layout';

import style from './game.module.css';

function GamePage() {

  const [isPokemons, setPokemons] = useState({});

  useEffect(() => {

    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    })

  },[])

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

  const addNewCard = () => {
    const newKey = database.ref().child('pokemons').push().key;
    
    database.ref("pokemons/" + newKey).set(pidge);

    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    })
   };

  const handleClickCard = (id) => {
    setPokemons((prevState) => {

      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
            pokemon.active = !pokemon.active;
            database.ref('pokemons/'+ item[0]).set(pokemon);
        };
        acc[item[0]] = pokemon;
        
        return acc;
    }, {});
    
    });
  };
  

    return (
      <Layout id="2" title="some title" desc="some description" colorBg="#00FFFF">
        <button onClick={addNewCard}>Add New Pokemon</button>
        <div className={style.flex}>
        {
          Object.entries(isPokemons).map(([key, {id, name, img, type, values, active}])=> <PokemonCard key={key} id={id} name={name} img={img} type={type} values={values} isPokemons={active} onClickCard={handleClickCard}/>)
        }
      </div>
     </Layout>
    );
  }
  
  export default GamePage;
  


  