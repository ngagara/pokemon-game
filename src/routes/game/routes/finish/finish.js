import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';

import style from '../Finish/finish.module.css';

import PokemonCard from "../../../../components/PkemonCard/PokemonCard";

import { PokemonContext } from '../../../../context/pokemonContext';
import { FireBaseContext } from "../../../../context/firebaseContext";

const FinishPage = () => {

    const pokemonContext = useContext(PokemonContext);

    const firebase = useContext(FireBaseContext);
    const history = useHistory();

    const [player2Pokemons, setPlayer2Pokemons] = useState(pokemonContext.player2)

    const [selectedPokemon, selectPokemon] = useState({})

    
    if (Object.keys(pokemonContext.player2).length === 0) {
        history.replace('/pokemon-game/game/');
    }

    const setCard = () => {
        firebase.addPokemon(selectedPokemon)
        pokemonContext.clearContext();
        history.push("/pokemon-game/game");
    };

    const handleClickCard = (key) => {

       const pokemon = {...pokemonContext.player2[key]};

       selectPokemon(pokemon)

       setPlayer2Pokemons(prevState => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected,
        }
       }))

      }

    return (
        <div className={style.wrapper}>
                <h2 className={style.title}>YOU WIN!</h2>
                <h2 className={style.subtitle}>choose one pokemon opponent</h2>
        		<div className={style.flex}>
                    {
                  Object.entries(player2Pokemons).map(([key, { name, img, id, type, values, selected }]) => (
                    <PokemonCard className={style.card} key={key} name={name} img={img} id={id} type={type} values={values} isSelected={selected} isActive 
                  onClickCard={() => {
                    handleClickCard(key);
                  }}
                  />))}
                </div>
                <button onClick={setCard} className={style.button}>END GAME</button>
        </div>

    );
};

export default FinishPage;