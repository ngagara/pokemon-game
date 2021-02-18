import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';

import style from '../Loos/loos.module.css';

import { PokemonContext } from '../../../../context/pokemonContext';

const LoosPage = () => {

    const pokemonContext = useContext(PokemonContext);

    const history = useHistory();
    
    if (Object.keys(pokemonContext.player2).length === 0) {
        history.replace('/pokemon-game/game/');
    }

    const goStart = () => {
        pokemonContext.clearContext();
        history.push("/pokemon-game/game");
    };

    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>YOU LOOSER!</h2>
            <h2 className={style.subtitle}>maybe next time</h2>
            <button onClick={goStart} className={style.button}>END GAME</button>
        </div>
    );
};

export default LoosPage;