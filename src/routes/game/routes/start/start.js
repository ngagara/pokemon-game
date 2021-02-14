import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { FireBaseContext } from "../../../../context/firebaseContext"
import { PokemonContext } from "../../../../context/pokemonContext"
import PokemonCard from '../../../../components/PkemonCard/PokemonCard';
import Layout from '../../../../components/Layout/Layout';

import style from './start.module.css';

function StartPage() {

  const pokemonContext = useContext(PokemonContext);

  const firebase = useContext(FireBaseContext);

  const hisyory = useHistory();

  const [isPokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
       setPokemons(pokemons);
    });
  },[]);
  
  const handleStartGameClick = () => {
    hisyory.push('/game/board');
  }

  const handleActiveSelected = (key) => {

    const pokemon = {...isPokemons[key]};

    pokemonContext.onSelectedPokemons(key, pokemon)

    setPokemons(prevState => ({
     ...prevState,
     [key]: {
       ...prevState[key],
       selected: !prevState[key].selected,
     }
    }))

  };

    return (
      <Layout id="2" title="some title" colorBg="#00FFFF">

        <button onClick={handleStartGameClick} disabled={Object.keys(pokemonContext.pokemons).length < 5}>Star</button>
        <div className={style.grid}>
        {
          Object.entries(isPokemons).map(([key, {id, name, img, type, values, selected}])=>
          <PokemonCard className={style.card} key={key} id={id} name={name} img={img} type={type} values={values} isSelected={selected} isActive={true} 
          onClickCard={()=>{
            if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
               handleActiveSelected(key)
            }
          }}/>)
        }
      </div>
     </Layout>
    );
  }
  
  export default StartPage;
  




  