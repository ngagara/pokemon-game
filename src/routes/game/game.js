import {data} from '../../constants/data';
import PokemonCard from '../../components/pokemon-card/pokemonCard';
import Layout from '../../components/layout/layout';
import React, { useState } from "react";
import style from './game.module.css';

function GamePage() {

  const [isPokemons, setPokemons] = useState(data);

  const handleClickCard = (id) => {
    setPokemons((prevState) => {

      return prevState.map((card) => {
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
          isPokemons.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} type={item.type} values={item.values} isPokemons={item.active} onClickCard={handleClickCard}/>)
        }
      </div>
     </Layout>
    );
  }
  
  export default GamePage;
  


  