import React, { useContext } from "react";

import style from '../Finish/finish.module.css';
import PlayerBoard from "../Board/component/PlayerBoard.js/PlayerBoard";
import Layout from "../../../../components/Layout/Layout";


import { PokemonContext } from '../../../../context/pokemonContext';

const FinishPage = () => {

    const { player1, player2 } = useContext(PokemonContext);

    return (
        <Layout>
        		<div className={style.flex}>
                  <PlayerBoard card={player1} player={1}/>
        		</div>
                <button>END GAME</button>
        		<div className={style.flex}>
                  <PlayerBoard card={player2} player={2}/>
                </div>
        </Layout>

    );
};

export default FinishPage;