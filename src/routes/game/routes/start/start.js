import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from '../../../../components/pokemon-card/pokemonCard';
import Layout from '../../../../components/layout/layout';

import style from './start.module.css';

function StartPage() {

  const hisyory = useHistory();

  const pokemonContext = useContext(PokemonContext);
   
  console.log(pokemonContext);

    return (
      <Layout id="2" title="some title" colorBg="#00FFFF">
        <button onClick={pokemonContext.addNewCard}>Star</button>
        <div className={style.flex}>
        {
          Object.entries(pokemonContext.isPokemons).map(([key, {id, name, img, type, values, active}])=> <PokemonCard key={key} id={id} name={name} img={img} type={type} values={values} isActive={active} onClickCard={pokemonContext.handleClickCard}/>)
        } 
      </div>
     </Layout>
    );
  }
  
  export default StartPage;
  


  