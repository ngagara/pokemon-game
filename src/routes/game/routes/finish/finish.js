import React, { useContext } from "react";

import style from '../Finish/finish.module.css';
import PlayerBoard from "../Board/component/PlayerBoard.js/PlayerBoard";

import { PokemonContext } from '../../../../context/pokemonContext';

const FinishPage = () => {

    const { player1, player2 } = useContext(PokemonContext);

    return (
            <div className={style.root}>
        		<div className={style.playerOne}>
                  <PlayerBoard card={player1} player={1}/>
        		</div>
                <button></button>
        		<div className={style.playerTwo}>
                  <PlayerBoard card={player2} player={2}/>
                </div>
            </div>
    );
};

export default FinishPage;