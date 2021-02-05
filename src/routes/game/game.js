import {POKEMONS} from '../../constants/data';
import PokemonCard from '../../components/pokemon-card/pokemonCard';
import Layout from '../../components/layout/layout';
import React, { useState } from "react";
import style from './game.module.css';

function GamePage() {

  const [isActive, setActive] = useState(POKEMONS);

  const handleClickCard = (id) => {
    setActive((prevState) => {
      const pokemons = JSON.parse(JSON.stringify(prevState));

      return pokemons.map((card) => {
        if (card.id === id) {
          card.active = !card.active;
        }
        return card;
      });
    });
  };
  
    return (
      <Layout id="2" title="some title" desc="some description" colorBg="#00FFFF">
        <div className={style.flex}>
        {
          POKEMONS.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} type={item.type} values={item.values} isActive={item.active} onClickCard={handleClickCard}/>)
        }
      </div>
     </Layout>
    );
  }
  
  export default GamePage;
  


  